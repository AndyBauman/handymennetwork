# Handymen Network — Infrastructure & Operations
> Last updated: 2026-08-13 · Owner: Andy Bauman · Status: Live

## 1. Snapshot
| Field | Value |
|---|---|
| Purpose | US marketplace marketing site for fixed-price residential handyman work: menu-priced repairs, platform matching of vetted pros, in-app help (no public phone). |
| Primary domain | handymennetwork.com |
| Additional domains / redirects | www.handymennetwork.com (CNAME to Vercel). Vercel aliases: `handymennetworkcom.vercel.app`, `handymennetworkcom-balcodesign-gmailcoms-projects.vercel.app` |
| Live URL | https://www.handymennetwork.com |
| Staging URL | ⚠️ UNKNOWN — TODO (no dedicated staging project found; Vercel preview URLs exist per deployment) |
| Stack | Astro 5 (static) + React 19 islands + Tailwind 3 + `@astrojs/vercel` edge middleware. Supabase JS client for auth (DB currently paused). |
| Repo URL | https://github.com/AndyBauman/handymennetwork |
| Default branch | main |
| Criticality | ⚠️ UNKNOWN — TODO |

## 2. Domains & Registrar
| Domain | Registrar | Account | Auto-renew | Expires | Annual cost | Privacy |
|---|---|---|---|---|---|---|
| handymennetwork.com | GoDaddy (nameservers `ns55`/`ns56.domaincontrol.com`) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
- Transfer lock: ⚠️ UNKNOWN — TODO
- Auth/EPP code location: ⚠️ UNKNOWN — TODO
- Nameservers: `ns55.domaincontrol.com`, `ns56.domaincontrol.com`

## 3. DNS
DNS is managed at: GoDaddy DNS (Domain Control) — login at https://dcc.godaddy.com / GoDaddy → Domain → DNS

| Type | Host/Name | Value | TTL | Proxied | Purpose |
|---|---|---|---|---|---|
| A | @ | 76.76.21.21 | ⚠️ UNKNOWN — TODO (SOA default 600s) | No (Vercel, not Cloudflare) | Apex → Vercel |
| CNAME | www | cname.vercel-dns.com | ⚠️ UNKNOWN — TODO | No | www → Vercel |
| A | mail | 198.12.239.229 | ⚠️ UNKNOWN — TODO | No | Mail host for MX |
| MX | @ | mail.handymennetwork.com (priority 0) | ⚠️ UNKNOWN — TODO | No | Inbound mail |
| TXT | @ | `v=spf1 a mx ptr include:secureserver.net ~all` | ⚠️ UNKNOWN — TODO | No | SPF (GoDaddy / secureserver) |
| TXT | _dmarc | *(no record)* | — | — | DMARC — missing |
| TXT | {selector}._domainkey | *(no google/default/selector1 records found)* | — | — | DKIM — missing |
| TXT | @ | *(no extra verification TXT found)* | — | — | Domain verification |

- Email deliverability status (SPF/DKIM/DMARC valid?): SPF present (`~all`, includes deprecated `ptr`). DKIM not found. DMARC not found. **Not fully valid.**
- SSL: Vercel-managed (auto-issued, auto-renew). Expiry: ⚠️ UNKNOWN — TODO (not independently verified)
- CDN / WAF: Vercel CDN. Custom geo-block at Vercel Edge via `src/middleware.ts` (default block `CN,HK`; fail-open if country header missing). No Cloudflare.

## 4. Hosting & Deployment
| Field | Value |
|---|---|
| Host | Vercel |
| Account / team | `balcodesign-gmailcom's projects` (`team_K718LQ4ow7ZHfsLc2zOuollB`) · login `balcodesign@gmail.com` · project `handymennetwork.com` (`prj_OlfXaXLexd2Gh6vdH5bfzP5ZXpYT`) |
| Plan & monthly cost | ⚠️ UNKNOWN — TODO |
| Region | ⚠️ UNKNOWN — TODO (Vercel). Supabase project region is `us-west-1` |
| Build command | `npm run build` (`astro build`) |
| Output directory | `dist/` (Vercel adapter `@astrojs/vercel/static` publishes; `edgeMiddleware: true`) |
| Install command | `npm ci` (CI) / `npm install` (local) |
| Node/runtime version | Vercel project: **24.x**. GitHub Actions CI: **22**. `package.json` has no `engines` field. |
| Deploy trigger | Push / merge to `main` on GitHub (`AndyBauman/handymennetwork`). GitHub Actions workflow `.github/workflows/ci.yml` is **build-only** (does not deploy). |
| Rollback method | Vercel Dashboard → Project → Deployments → ⋮ on a previous READY production deploy → Promote / Instant Rollback. Latest rollback candidate: `dpl_AuT8DqThjqDM4K8ktF4o2ib3xJbN` (commit `fcd03c3`). |

**Dashboard:** https://vercel.com/balcodesign-gmailcoms-projects/handymennetwork.com

**Deploy manually:**
```bash
cd c:\Websites\handymennetwork.com
npm ci
npm run build
npx vercel --prod --yes
```

Or: `git push origin main` (Vercel Git integration deploys production).

## 5. Environment Variables
🔒 Values live in: Vercel → Project `handymennetwork.com` → Settings → Environment Variables (and local `.env`, gitignored). Never stored in this file or in git.

| Variable | Scope | Purpose | Where the value comes from |
|---|---|---|---|
| PUBLIC_SUPABASE_URL | prod/preview/local | Supabase API URL for browser auth client | Supabase Dashboard → Project Settings → API (`https://kplbhqybbqmxxgclrkky.supabase.co`) |
| PUBLIC_SUPABASE_ANON_KEY | prod/preview/local | Public anon / publishable key (safe in client) | Supabase Dashboard → Project Settings → API |
| PUBLIC_SITE_URL | listed in `.env.example` | Intended canonical site URL. **Not read by current code** (`astro.config.mjs` `site` + `SITE_ORIGIN` are used instead) | Set to `https://www.handymennetwork.com` if you start using it |
| BLOCKED_COUNTRIES | prod (edge middleware) | Comma-separated ISO 3166-1 alpha-2 codes to 403. Default in code: `CN,HK` | Vercel env, or omit to use code default |
| ALLOWED_IPS | prod (edge middleware) | IPs that bypass geo-block. `.env.example` documents `69.129.158.104` | Vercel env |
| DISABLE_GEO_BLOCK | prod/preview/local | Set to `1` to turn off all geo-blocking | Vercel env / local `.env` |
| STRIPE_SECRET_KEY | not in code | Planned (see `docs/DEPLOYMENT.md` phase 2) | ⚠️ UNKNOWN — TODO — Stripe Dashboard if/when wired |
| STRIPE_WEBHOOK_SECRET | not in code | Planned | ⚠️ UNKNOWN — TODO |
| TWILIO_* | not in code | Planned SMS | ⚠️ UNKNOWN — TODO |

- `.env.example` present: yes
- Local setup: `copy .env.example .env` then fill Supabase URL + anon key

## 6. Database & Storage
| Field | Value |
|---|---|
| Engine | PostgreSQL 15 (Supabase). Project status: **INACTIVE / paused** as of 2026-08-13 |
| Provider / project | Supabase · org `mlfjnjyjbgplvbvdwkuy` · project **Handymen Network** · ref `kplbhqybbqmxxgclrkky` · region `us-west-1` |
| Dashboard URL | https://supabase.com/dashboard/project/kplbhqybbqmxxgclrkky |
| Connection string location | Supabase Dashboard → Project Settings → Database. Also Vercel env for the public URL/anon key only. |
| Schema location | **No `supabase/`, Prisma, or SQL migrations in this repo.** App expects a `profiles` table (`src/components/AccountView.tsx`). Planned tables are documented in `docs/DISPATCH.md`. |
| Migration command | ⚠️ UNKNOWN — TODO — none in repo. After restore: create schema in Supabase SQL editor or add a `supabase/` folder. |
| Row-level security enabled | ⚠️ UNKNOWN — TODO (planned in `docs/DISPATCH.md`; cannot query paused project) |
| File/object storage | None in use. No uploads on the marketing site. |

**Key tables:** `profiles` (app reads `full_name`, `role`, `phone` by user id). Planned (not in repo): `jobs`, `handymen`, `familiar_pros`, `orders` — see `docs/DISPATCH.md`.

## 7. Backups & Recovery
| What | Method | Frequency | Retention | Location | Last verified |
|---|---|---|---|---|---|
| Code | Git | On every commit | GitHub history | https://github.com/AndyBauman/handymennetwork | ⚠️ UNKNOWN — TODO |
| Database | Supabase automatic (when project is active) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO (paused Free-tier projects typically have no PITR) | Supabase project `kplbhqybbqmxxgclrkky` | ⚠️ UNKNOWN — TODO — project is paused; SQL query timed out |
| Uploads/media | N/A — static assets in git (`public/`, content markdown) | — | — | Repo | — |
| Env vars | Vercel project settings (not in git) | Manual | ⚠️ UNKNOWN — TODO | Vercel → Settings → Environment Variables | ⚠️ UNKNOWN — TODO |
| DNS records | GoDaddy DNS only (no export in repo) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | GoDaddy DNS UI | ⚠️ UNKNOWN — TODO |

**Restore the database:**
```bash
# 1. Unpause the project in the dashboard (API restore may also work):
#    https://supabase.com/dashboard/project/kplbhqybbqmxxgclrkky
# 2. If a dump exists (⚠️ UNKNOWN — TODO — none in this repo):
# psql "postgresql://postgres.[ref]:[PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres" < backup.sql
```

There is **no dump, migration, or schema file in git**. If the paused project has no backup, the schema must be rebuilt from `AccountView` (`profiles`) plus `docs/DISPATCH.md`.

**Full rebuild from zero — ordered steps:**
1. Clone `https://github.com/AndyBauman/handymennetwork.git`, install Node 22 or 24, run `npm ci`.
2. Restore or recreate the Supabase project; set `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`; recreate `profiles` (+ RLS) and auth.
3. Create a Vercel project, attach GitHub repo, set env vars, add domains `handymennetwork.com` and `www.handymennetwork.com`.
4. Point GoDaddy DNS: apex A `76.76.21.21`, www CNAME `cname.vercel-dns.com`. Keep MX/`mail` if email still uses GoDaddy.
5. `npm run build` locally to verify, then push `main` (or `npx vercel --prod`).
6. Confirm SSL, StatCounter, `/signin` against live Supabase, sitemap `https://www.handymennetwork.com/sitemap-index.xml`.

⚠️ Estimated recovery time: ⚠️ UNKNOWN — TODO (marketing static site: hours; auth/DB depends on whether the paused Supabase project still has data)
⚠️ Known single points of failure: Andy-only GitHub + Vercel (`balcodesign@gmail.com`) + GoDaddy DNS; paused Supabase with no in-repo schema; email on a single GoDaddy mail host (`198.12.239.229`); no uptime monitor.

## 8. Third-Party Services & Integrations
| Service | Purpose | Plan / cost | Account | Dashboard | API keys stored in | Cancel impact |
|---|---|---|---|---|---|---|
| Vercel | Hosting, SSL, CDN, Git deploys, edge geo-block | ⚠️ UNKNOWN — TODO | `balcodesign@gmail.com` | https://vercel.com/balcodesign-gmailcoms-projects/handymennetwork.com | N/A (platform) | Site goes down |
| GitHub | Source of truth + CI build | ⚠️ UNKNOWN — TODO | `AndyBauman` / commit email `andybauman7@gmail.com` | https://github.com/AndyBauman/handymennetwork | N/A | No deploys / no CI |
| GoDaddy | Registrar + DNS + inbound mail (MX/SPF) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | https://www.godaddy.com | N/A | Domain/DNS/email |
| Supabase | Auth + Postgres (`profiles`). Project **paused** | ⚠️ UNKNOWN — TODO | org `mlfjnjyjbgplvbvdwkuy` | https://supabase.com/dashboard/project/kplbhqybbqmxxgclrkky | Vercel env + local `.env` | Sign-in / account / future dispatch |
| StatCounter | Traffic analytics | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | https://statcounter.com (project `13215644`) | IDs hardcoded in `src/layouts/BaseLayout.astro` | Lose traffic stats |
| Google Fonts | Source Sans 3 / Source Serif 4 | Free | N/A | fonts.googleapis.com | N/A | Fallback fonts |
| Stripe | Named in privacy/terms and `docs/DEPLOYMENT.md`. **Not in `package.json` or checkout code.** Cart shows “Payment integration coming soon.” | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | None today (not wired) |
| Twilio | Mentioned only in `docs/DEPLOYMENT.md`. **Not in code.** | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | None today |

## 9. Email
| Field | Value |
|---|---|
| Inbox provider | GoDaddy / secureserver (MX `mail.handymennetwork.com` → `198.12.239.229`, SPF `include:secureserver.net`) |
| Sending / transactional provider | None in code (no Resend/SendGrid/Postmark). Supabase Auth would send confirmation email when the project is unpaused. |
| From addresses | Support listed as `hello@handymennetwork.com` (`src/data/constants.ts`). Contact page is mailto only. |
| Forwarding rules | ⚠️ UNKNOWN — TODO |
| Marketing/CRM tool | ⚠️ UNKNOWN — TODO (none in code) |

## 10. Analytics, SEO & Tracking
| Tool | ID / property | Installed where | Login |
|---|---|---|---|
| Google Analytics 4 | *(not in code)* | — | ⚠️ UNKNOWN — TODO |
| Google Search Console | ⚠️ UNKNOWN — TODO | — | ⚠️ UNKNOWN — TODO |
| Google Business Profile | ⚠️ UNKNOWN — TODO | — | ⚠️ UNKNOWN — TODO |
| Google Tag Manager | *(not in code)* | — | ⚠️ UNKNOWN — TODO |
| Meta Pixel | *(not in code)* | — | ⚠️ UNKNOWN — TODO |
| Call tracking | None — site policy is no public phone | — | — |
| Rank tracking | ⚠️ UNKNOWN — TODO | — | ⚠️ UNKNOWN — TODO |
| StatCounter | project `13215644`, security `fc6e50e2` | `src/layouts/BaseLayout.astro` (all pages) | ⚠️ UNKNOWN — TODO |

- Sitemap URL: https://www.handymennetwork.com/sitemap-index.xml (`@astrojs/sitemap`; `/signin` and `/account` filtered out)
- robots.txt notes: allow all, including major AI crawlers; sitemap pointed at www
- Schema markup in use: `HomeAndConstructionBusiness`, `WebSite`, `FAQPage`, `BreadcrumbList`, `WebPage`, `CollectionPage`, `Service`, `Offer` / `AggregateOffer`, `ItemList`, `City`/`State` via `src/components/JsonLd.astro`

## 11. Payments & Forms
| Field | Value |
|---|---|
| Processor | **Not live.** Privacy/terms say Stripe. `CartView` alerts “Payment integration coming soon.” Cart is `localStorage` key `hn-cart`. |
| Account | ⚠️ UNKNOWN — TODO |
| Live vs test mode | N/A until Stripe is wired |
| Webhook endpoints | None in this repo (no `src/pages/api/`) |
| Webhook secret location | ⚠️ UNKNOWN — TODO |
| Products / price IDs | Menu prices are content/data in-repo, not Stripe Price IDs |
| Form handler | Contact: `mailto:hello@handymennetwork.com`. Auth: Supabase `signUp` / `signInWithPassword` in `src/components/AuthForm.tsx` |
| Lead notification goes to | `hello@handymennetwork.com` (manual email; no form webhook) |

## 12. Scheduled Jobs & Automations
| Job | Schedule | Trigger | Code location | Failure alert |
|---|---|---|---|---|
| *(none in this repo)* | — | — | Future dispatch / `pg_cron` described in `docs/DISPATCH.md` only | — |
| GitHub Actions CI | On push/PR to `main` | GitHub | `.github/workflows/ci.yml` (`npm ci` + `npm run build`) | GitHub Actions email to repo owner |
| Vercel production deploy | On push to `main` | Vercel Git integration | Vercel project | Vercel dashboard / email on `balcodesign@gmail.com` |

## 13. Monitoring & Alerts
| Check | Tool | Alerts to | Threshold |
|---|---|---|---|
| Uptime | ⚠️ UNKNOWN — TODO — none in repo | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Error tracking | None (no Sentry). Geo-block logs `console.log` on Vercel | ⚠️ UNKNOWN — TODO | — |
| SSL expiry | Vercel auto-renew | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Domain expiry | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| CI build | GitHub Actions | GitHub / `andybauman7@gmail.com` | Failed `npm run build` |

## 14. Cost Summary
| Item | Vendor | Cost | Billing cycle | Renews | Card on file |
|---|---|---|---|---|---|
| Domain | GoDaddy | ⚠️ UNKNOWN — TODO | yearly (typical) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Hosting | Vercel | ⚠️ UNKNOWN — TODO | monthly | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Database | Supabase (paused) | ⚠️ UNKNOWN — TODO | monthly | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Analytics | StatCounter | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Email | GoDaddy / secureserver | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| **TOTAL** | | **⚠️ UNKNOWN — TODO** | | | |

## 15. Access & Accounts
🔒 Credentials live in: ⚠️ UNKNOWN — TODO (password manager). This table lists WHERE, never WHAT.

| System | Login email | 2FA method | Recovery codes stored | Who else has access |
|---|---|---|---|---|
| GitHub | `andybauman7@gmail.com` (commit author) / user `AndyBauman` | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Vercel | `balcodesign@gmail.com` (`balcodesign-6403`) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| GoDaddy | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Supabase | ⚠️ UNKNOWN — TODO (org `mlfjnjyjbgplvbvdwkuy`) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| StatCounter | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Email (`hello@`) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |

## 16. Local Development
```bash
git clone https://github.com/AndyBauman/handymennetwork.git
cd handymennetwork
# Node 22 matches CI; Vercel production is 24.x
copy .env.example .env
# Edit .env: PUBLIC_SUPABASE_URL + PUBLIC_SUPABASE_ANON_KEY
npm ci
npm run dev
# http://localhost:4321/
npm run build
npm run preview
```
- Required local tools: Node.js 22 or 24, npm, Git. Optional: Vercel CLI (`npx vercel`).
- Common gotchas:
  - Supabase project is **paused** — `/signin` and `/account` will fail until it is restored.
  - `PUBLIC_SITE_URL` in `.env` is unused; canonicals come from `astro.config.mjs` `site` (`https://www.handymennetwork.com`).
  - Geo-block is skipped in `astro dev` (`import.meta.env.DEV`). To test: `curl -I -H "x-vercel-ip-country: CN" http://localhost:4321/` after a production-like preview.
  - Middleware skips prerendered pages; `/api/health` is exempted but **no health route exists**.
  - Cart lives in browser `localStorage` (`hn-cart`); checkout is a stub.
  - No README in the repo; see `docs/DEPLOYMENT.md`, `docs/DISPATCH.md`, `docs/SITEMAP.md`.

## 17. Known Issues & Tech Debt
| Issue | Impact | Priority | Notes |
|---|---|---|---|
| Supabase project paused (`kplbhqybbqmxxgclrkky`) | Auth/account broken in production | High | Unpause or recreate before relying on sign-in |
| No schema/migrations in git | Cannot rebuild DB from repo | High | Only `profiles` usage in code + planned tables in `docs/DISPATCH.md` |
| Stripe not implemented | Cannot take payment | High | Legal copy already names Stripe |
| No DMARC / no DKIM | Spoofing + poor deliverability for `hello@` | High | SPF only, `~all` + deprecated `ptr` |
| No uptime / error monitoring | Outages unnoticed | Medium | Vercel + GitHub CI only |
| Node 22 (CI) vs 24.x (Vercel) | Drift / “works on Vercel, fails in CI” | Medium | Pin `engines.node` in `package.json` |
| `PUBLIC_SITE_URL` unused; `.env.example` uses apex not www | Wrong canonical if someone starts reading it | Low | Code uses www |
| `/api/health` exempted but missing | Geo-block bypass for a route that 404s | Low | `src/middleware.ts` |
| Handyman hub / dispatch / Twilio are docs-only | Product incomplete | Medium | `src/pages/handyman/index.astro` is a Phase 2 placeholder |
| `docs/DEPLOYMENT.md` still says “Vercel or Netlify” | Misleading runbook | Low | This site is Vercel-only |

## 18. Change Log
| Date | Change | By |
|---|---|---|
| 2026-08-13 | Initial documentation | Andy |
