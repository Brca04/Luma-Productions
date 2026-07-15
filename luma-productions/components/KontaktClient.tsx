"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const INFO = [
  {
    label: "Email",
    value: "info@luma-productions.net",
    href: "mailto:info@luma-productions.net",
  },
  {
    label: "Telefon",
    value: "+385 97 6172 191",
    href: "tel:+385976172191",
  },
  {
    label: "Lokacija",
    value: "Zagreb, Hrvatska",
    href: null,
  },
];

// Glavni paketi ovisno o odabranoj usluzi.
const PACKAGES: Record<string, string[]> = {
  vjencanje: ["Luma #1", "Luma #2", "Luma #3", "Luma #4"],
  maturalna: ["Foto #1", "Foto #2", "Mix #1", "Mix #2"],
  krstenje: ["Basic", "Standard", "Premium"],
  "sveto-krstenje": ["Osnovni", "Standard", "Premium"],
};

// Dodatci (moguć višestruki odabir) ovisno o usluzi.
const ADDONS: Record<string, string[]> = {
  vjencanje: ["Photobooth", "Zahvalnice", "Dron"],
  maturalna: ["Photobooth", "Photobook"],
};

const SERVICE_LABELS: Record<string, string> = {
  vjencanje: "Vjenčanje",
  maturalna: "Maturalna večer",
  krstenje: "Krštenje / Photobooth",
  "sveto-krstenje": "Sveto krštenje",
  ostalo: "Ostalo",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

// Motion disabled (reduced-motion): render final state instantly, no transform.
const noMotion = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export default function KontaktClient() {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [service, setService] = useState("");
  const [paket, setPaket] = useState("");
  const [addons, setAddons] = useState<string[]>([]);

  const packageOptions = PACKAGES[service] ?? [];
  const addonOptions = ADDONS[service] ?? [];

  function toggleAddon(a: string) {
    setAddons((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const lastname = (form.elements.namedItem("lastname") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const serviceLabel = SERVICE_LABELS[service] ?? service;

    const payload = {
      name: `${name} ${lastname}`,
      email,
      phone: phone || "—",
      usluga: serviceLabel || "—",
      paket: paket || "—",
      dodatci: addons.length ? addons.join(", ") : "—",
      poruka: message,
    };

    // Submissions go to a Supabase Edge Function ("contact"), which stores the
    // row in the database and forwards it by email (via Resend) to the studio.
    // Both values are safe to expose publicly (the publishable key only lets the
    // browser invoke the function; it cannot read the submissions table), so we
    // hardcode them as defaults and allow an env var to override if ever needed.
    const SUPABASE_URL =
      process.env.NEXT_PUBLIC_SUPABASE_URL ??
      "https://yhnludxvwkfwdhlsntjo.supabase.co";
    const SUPABASE_ANON_KEY =
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
      "sb_publishable_e9j0I1jXLtL_feh3q1IK-Q_sFa45VXY";

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
      setService("");
      setPaket("");
      setAddons([]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* ── Contact Section ── */}
      <section className="min-h-screen bg-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full px-6 pt-36 pb-24">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >

          {/* Info cards */}
          <motion.div
            className="hidden lg:flex lg:col-span-1 flex-col gap-6"
            variants={shouldReduceMotion ? noMotion : stagger}
          >
            {INFO.map((item) => (
              <motion.div
                key={item.label}
                variants={shouldReduceMotion ? noMotion : fadeInUp}
                className="group bg-white border-2 border-gray-100 hover:border-gray-300 transition-all duration-300 p-6 rounded-2xl"
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#BE9E5C" }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-black transition-colors text-sm leading-relaxed font-medium break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-700 text-sm leading-relaxed font-medium whitespace-pre-line">
                    {item.value}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-2"
            variants={shouldReduceMotion ? noMotion : fadeInUp}
          >
            <motion.div
              layout={!shouldReduceMotion}
              transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
              className="bg-white border-2 border-gray-100 p-8 rounded-2xl"
            >
              <motion.h3 layout="position" className="text-2xl font-bold mb-2">Kontaktirajte nas</motion.h3>
              <motion.p layout="position" className="text-gray-500 text-sm mb-8">Javit ćemo vam se u najkraćem mogućem roku.</motion.p>

              <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
                  className="py-12 text-center"
                >
                  <p className="text-lg font-semibold text-gray-900 mb-2">Poruka je poslana!</p>
                  <p className="text-sm text-gray-500">Javit ćemo vam se uskoro.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm underline text-gray-500 hover:text-black transition-colors"
                  >
                    Pošalji još jednu poruku
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField id="name" label="Ime *" type="text" placeholder="Vaše ime" />
                    <FormField id="lastname" label="Prezime *" type="text" placeholder="Vaše prezime" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField id="email" label="Email *" type="email" placeholder="vas@email.com" />
                    <FormField id="phone" label="Telefon" type="tel" placeholder="+385 XX XXX XXXX" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                        Vrsta usluge *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value);
                          setPaket("");
                          setAddons([]);
                        }}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-all text-gray-700 text-sm rounded-lg"
                      >
                        <option value="">Odaberite...</option>
                        <option value="vjencanje">Vjenčanje</option>
                        <option value="maturalna">Maturalna večer</option>
                        <option value="krstenje">Krštenje / Photobooth</option>
                        <option value="sveto-krstenje">Sveto krštenje</option>
                        <option value="ostalo">Ostalo</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="paket" className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                        Paket
                      </label>
                      <select
                        id="paket"
                        name="paket"
                        value={paket}
                        disabled={packageOptions.length === 0}
                        onChange={(e) => setPaket(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-all text-gray-700 text-sm rounded-lg disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
                      >
                        <option value="">
                          {packageOptions.length === 0 ? "Prvo odaberite uslugu" : "Odaberite paket..."}
                        </option>
                        {packageOptions.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {addonOptions.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: "1.5rem" }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                          Dodatci
                        </label>
                        <motion.div
                          key={service}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        >
                          {addonOptions.map((a) => {
                            const checked = addons.includes(a);
                            return (
                              <button
                                type="button"
                                key={a}
                                onClick={() => toggleAddon(a)}
                                aria-pressed={checked}
                                className={`flex items-center gap-3 px-4 py-3 border-2 rounded-lg text-sm text-left transition-colors duration-200 ${
                                  checked
                                    ? "border-[#BE9E5C] bg-[#BE9E5C]/[0.06] text-gray-900 font-medium"
                                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                                }`}
                              >
                                <span
                                  className={`flex items-center justify-center w-5 h-5 rounded border-2 shrink-0 transition-colors duration-200 ${
                                    checked ? "border-[#BE9E5C] bg-[#BE9E5C]" : "border-gray-300"
                                  }`}
                                >
                                  {checked && (
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                      <path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  )}
                                </span>
                                {a}
                              </button>
                            );
                          })}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                      Poruka *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Opišite svoj projekt..."
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-all resize-none text-gray-700 text-sm rounded-lg"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">Došlo je do greške. Pokušajte ponovo ili nas kontaktirajte direktno.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#BE9E5C] text-[#111] font-bold uppercase text-xs tracking-[0.14em] shadow-[0_8px_24px_-6px_rgba(190,158,92,0.55)] hover:bg-[#a9884a] hover:shadow-[0_12px_30px_-6px_rgba(190,158,92,0.65)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Slanje..." : "Pošalji poruku"}
                    {status !== "sending" && (
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    )}
                  </button>
                </motion.form>
              )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
      </section>
    </div>
  );
}

function FormField({ id, label, type, placeholder }: { id: string; label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={label.includes("*")}
        placeholder={placeholder}
        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-all text-gray-700 text-sm rounded-lg"
      />
    </div>
  );
}
