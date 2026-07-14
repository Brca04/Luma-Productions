# Deploying Luma Productions to Cloudflare Pages

This site is a **fully static** Next.js app (every route is pre-rendered with
`generateStaticParams`; there are no server routes or server actions). It deploys
to **Cloudflare Pages** as a static export — the simplest and cheapest option.

---

## How it's configured

- **`next.config.js`** — `output: 'export'` produces a static `out/` directory on
  `next build`. `images.unoptimized: true` is required for export (images are
  already pre-optimized, so no on-demand optimizer is needed).
- **`public/_redirects`** — the `/sveto-krstenje` → `/krstenja` 301 redirects.
  Next's `redirects()` does **not** work with static export, so they live here and
  Cloudflare Pages applies them at the edge.
- **Metadata routes** — `app/sitemap.ts`, `app/manifest.ts`, and `public/robots.txt`
  are emitted as static files (`sitemap.xml`, `manifest.webmanifest`, `robots.txt`).
- The old Workers/OpenNext files (`wrangler.jsonc`, `open-next.config.ts`) and the
  `cf:*` scripts / `@opennextjs/cloudflare` + `wrangler` deps have been removed.

---

## Build

```bash
npm install
npm run build      # outputs the static site to ./out
```

`out/` is what Cloudflare Pages serves.

---

## Deploy from Git (recommended — auto-deploys on every commit)

In the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**,
select this repo and set:

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`

**Yes — once connected, Cloudflare Pages rebuilds and redeploys on every push to the
production branch automatically.** Pushes to other branches get their own preview URL.
You can change the production branch or turn off automatic deploys in
**Pages project → Settings → Builds & deployments**.

## Or: deploy manually with Wrangler

```bash
npm run build
npx wrangler pages deploy out --project-name luma-productions
```

The first deploy creates a `luma-productions.pages.dev` URL to test before pointing
your real domain at it.

---

## Pointing your domain (www.luma-productions.net)

1. Add the domain to Cloudflare (if not already) and let it manage DNS.
2. In the Pages project → **Custom domains → Set up a custom domain**, add
   `www.luma-productions.net` (and the apex `luma-productions.net` if you use it).
3. Confirm HTTPS is active (Cloudflare provisions the cert automatically) **before**
   cutting DNS over from the old host.

---

## SEO checklist (verify after deploy)

- [ ] **301 redirects** — `https://www.luma-productions.net/sveto-krstenje` 301s to
      `/krstenja` (and `/sveto-krstenje/<slug>` → `/krstenja/<slug>`).
- [ ] **Sitemap** — `/sitemap.xml` returns all pages.
- [ ] **robots** — `/robots.txt` looks correct.
- [ ] **Google verification** — `public/google30e943138d5f73ae.html` is preserved.
- [ ] URLs unchanged (they are — no routes were touched).
- [ ] After cutover, re-submit the sitemap in Google Search Console and watch the
      Coverage report for ~1 week.

---

## Notes

- **Analytics:** enable free **Cloudflare Web Analytics** in the dashboard (add the
  beacon snippet) — no code dependency needed.
- **Contact form:** a static export has no server. When you build the form, post to
  a **Cloudflare Pages Function** (`functions/` directory) or an HTTP email API such
  as **Resend** / **SendGrid**. Do not reintroduce `nodemailer` (raw SMTP won't run).
