# Contact form → Supabase → email setup

The contact form no longer uses FormSubmit. It now posts to a **Supabase Edge
Function** (`contact`) that:

1. Stores each submission in a private `contact_submissions` table, and
2. Emails the details to `info@luma-productions.net` via **Resend**.

Follow these steps once. Total time ~15–20 min.

---

## 1. Create the Supabase project

1. Go to https://supabase.com → **New project**.
2. Pick a name (e.g. `luma-productions`), a strong database password, and the
   region closest to Croatia (**EU – Frankfurt**).
3. Wait for it to finish provisioning.

## 2. Create the database table

Dashboard → **SQL Editor** → **New query** → paste the contents of
`supabase/migrations/0001_contact_submissions.sql` → **Run**.

This creates the table with Row Level Security on and no policies, so
submissions are private — only the Edge Function can write to it.

## 3. Get your API keys

Dashboard → **Settings → API**. You need three values:

| Value | Where it's used |
|-------|-----------------|
| **Project URL** (`https://xxxx.supabase.co`) | site env var `NEXT_PUBLIC_SUPABASE_URL` |
| **anon public** key | site env var `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| **service_role** key | used automatically by the Edge Function (do NOT put in the site) |

## 4. Set up Resend (email sending)

1. Sign up at https://resend.com (free tier: ~3,000 emails/month).
2. **Add a domain** → `luma-productions.net`. Resend shows a few DNS records
   (SPF/DKIM). Add them in **Cloudflare → DNS → Records** for the zone, then
   click **Verify** in Resend.
   - This lets you send *from* `web@luma-productions.net`. Your existing Titan
     MX records are untouched — Resend only adds sending (TXT/CNAME) records.
   - Shortcut for testing before verifying: you can send from
     `onboarding@resend.dev`, but verify the domain for real use so mail
     doesn't land in spam.
3. **API Keys → Create API Key** → copy it (starts with `re_`).

## 5. Deploy the Edge Function

Install the Supabase CLI (`npm i -g supabase`), then from the project folder:

```bash
supabase login
supabase link --project-ref YOUR-PROJECT-REF     # ref is in the dashboard URL

# Set the function's secrets
supabase secrets set RESEND_API_KEY=re_xxxxxxxx
supabase secrets set CONTACT_TO_EMAIL=info@luma-productions.net
supabase secrets set CONTACT_FROM_EMAIL="Luma Web <web@luma-productions.net>"

# Deploy
supabase functions deploy contact
```

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are injected automatically — you
don't set those.

> No CLI? You can also create the function in the dashboard under
> **Edge Functions → Create a function**, paste `supabase/functions/contact/index.ts`,
> and add the same three secrets under the function's **Secrets** tab.

## 6. Set the site's build env vars

The two `NEXT_PUBLIC_*` values are baked in at build time, so they must exist
wherever the site is built.

**Local build (`next build` then `wrangler deploy`):** copy `.env.local.example`
to `.env.local` and fill in the two values.

**Cloudflare Pages Git builds:** Pages project → **Settings → Environment
variables** → add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
for **Production** (and Preview), then redeploy.

## 7. Test

Rebuild/redeploy, open the contact page, and submit a test message. You should:

- get an email at `info@luma-productions.net`, and
- see a new row in Supabase → **Table Editor → contact_submissions**.

If it fails, open the browser DevTools **Network** tab, click the `contact`
request, and check the response — and Supabase → **Edge Functions → contact →
Logs** for the server-side error.

---

### Files added / changed

- `components/KontaktClient.tsx` — posts to the Edge Function instead of FormSubmit.
- `supabase/functions/contact/index.ts` — the function (store + email).
- `supabase/migrations/0001_contact_submissions.sql` — the table + RLS.
- `.env.local.example` — template for the two public env vars.
