// Supabase Edge Function: "contact"
//
// Flow: browser form  ->  this function  ->  (1) store in DB  (2) email the studio.
//
// The browser invokes this with the public anon key. The function runs on
// Supabase's servers with the SERVICE ROLE key, so it can write to the
// locked-down `contact_submissions` table and hold the Resend API key without
// ever exposing either to the client.
//
// Required function secrets (set via `supabase secrets set` or the dashboard):
//   SUPABASE_URL                - auto-provided in the Edge runtime
//   SUPABASE_SERVICE_ROLE_KEY   - auto-provided in the Edge runtime
//   RESEND_API_KEY              - from resend.com
//   CONTACT_TO_EMAIL            - e.g. info@luma-productions.net
//   CONTACT_FROM_EMAIL          - e.g. "Luma Web <web@luma-productions.net>"

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://luma-productions.net",
  "https://www.luma-productions.net",
  "http://localhost:3000",
];

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.includes(origin)
    ? origin
    : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "authorization, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

Deno.serve(async (req) => {
  const cors = corsHeaders(req.headers.get("origin"));

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: cors });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const usluga = String(body.usluga ?? "").trim();
    const paket = String(body.paket ?? "").trim();
    const dodatci = String(body.dodatci ?? "").trim();
    const poruka = String(body.poruka ?? "").trim();

    // Validation
    if (!name || !email || !poruka) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
    // Basic length guard against abuse
    if (poruka.length > 5000 || name.length > 200) {
      return new Response(JSON.stringify({ error: "Input too long" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    // 1) Store the submission (service role bypasses RLS).
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({ name, email, phone, usluga, paket, dodatci, poruka });
    if (dbError) {
      console.error("DB insert error:", dbError.message);
      // Don't fail the request on a DB hiccup — the email is what matters most.
    }

    // 2) Email the studio via Resend.
    const resendKey = Deno.env.get("RESEND_API_KEY");
    const toEmail = Deno.env.get("CONTACT_TO_EMAIL") ?? "info@luma-productions.net";
    const fromEmail = Deno.env.get("CONTACT_FROM_EMAIL") ??
      "Luma Web <onboarding@resend.dev>";

    if (!resendKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(JSON.stringify({ error: "Email not configured" }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const html = `
      <div style="font-family:system-ui,Arial,sans-serif;color:#111">
        <h2 style="margin:0 0 12px">Nova upita s web stranice</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
          <tr><td><b>Ime</b></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><b>Telefon</b></td><td>${escapeHtml(phone || "—")}</td></tr>
          <tr><td><b>Usluga</b></td><td>${escapeHtml(usluga || "—")}</td></tr>
          <tr><td><b>Paket</b></td><td>${escapeHtml(paket || "—")}</td></tr>
          <tr><td><b>Dodatci</b></td><td>${escapeHtml(dodatci || "—")}</td></tr>
          <tr><td valign="top"><b>Poruka</b></td><td>${
      escapeHtml(poruka).replace(/\n/g, "<br>")
    }</td></tr>
        </table>
      </div>`;

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Nova upita – ${usluga || "Kontakt"}`,
        html,
      }),
    });

    if (!emailRes.ok) {
      const detail = await emailRes.text();
      console.error("Resend error:", emailRes.status, detail);
      return new Response(JSON.stringify({ error: "Email failed" }), {
        status: 502,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unhandled error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
