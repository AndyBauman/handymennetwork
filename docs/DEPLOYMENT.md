# Deploying Handymen Network (handymennetwork.com)

## Stack

- **Astro** static + server islands as needed
- **Vercel** or **Netlify** for hosting and serverless
- **Supabase** for auth, Postgres, and Realtime
- **Stripe** for payments
- **Twilio** (or similar) for SMS

## DNS (GoDaddy → Vercel example)

Your current root **A** record points at a third-party IP. For Vercel:

1. In Vercel, add project and attach domain `handymennetwork.com` and `www.handymennetwork.com`.
2. Follow Vercel’s records (often **A** `76.76.21.21` for apex, **CNAME** `cname.vercel-dns.com` for `www`).
3. In GoDaddy DNS, **replace** the conflicting apex **A** record with Vercel’s values.
4. Keep **mail** / **admin** records if you still need them; do not delete unrelated rows without checking email.

Lower TTL an hour before cutover for faster rollback.

## Build

```bash
npm install
npm run build
```

Output: `dist/`. Preview locally with `npm run preview`.

## Environment variables (phase 2)

- `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- `TWILIO_*` for SMS
- `PUBLIC_SITE_URL` for canonicals if different from `astro.config.mjs` `site`

## Sitemap

`@astrojs/sitemap` emits `sitemap-index.xml` from built routes. Ensure `site` in `astro.config.mjs` matches production URL.

## Performance checklist

- Images: WebP/AVIF, `loading="lazy"`, explicit width/height.
- Keep React islands small (`client:load` only where needed).
- No heavy animation libraries on marketing pages.
