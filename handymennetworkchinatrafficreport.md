# handymennetwork.com — China Traffic Forensics & Remediation

**Analyzed:** 407 Statcounter sessions, 17 Jul 2026 → 20 Aug 2026 (all 9 pages of Visitor Activity)
**Verdict:** Not an attack. Not a vulnerability. It is **two commercial scraper operations** harvesting your programmatic SEO content. No credential exposure found on the site.

**Repo + WAF status (20 Aug 2026):** `public/robots.txt`, `scripts/firewall.mjs`, and `SECURITY.md` are in the tree. Vercel WAF is **live** (config version 5): Block CN, Block AWS China, Block Bytespider, Rate limit all. robots.txt is not live until the next production deploy.

**Update (27 Aug 2026):** `src/middleware.ts` has been deleted. It was dead code — Astro short-circuits middleware on prerendered routes, and the Vercel adapter ignores `edgeMiddleware` unless `output` is `"server"`, so it never ran in production. The WAF was already carrying the block and remains the only enforcement point. Re-apply with `npm run firewall`. See `SECURITY.md`.

---

## 1. What the data actually shows

| Segment | Sessions | % of all traffic | Who it really is |
|---|---|---|---|
| AS55960 "Beijing Guanghuan Xinwang Digital" | 234 | 57% | **AWS China (Beijing) region**, operated by Sinnet. A rented cloud scraper farm. |
| China Unicom (AS4837) `110.249.x` | 58 | 14% | **ByteDance Bytespider** (rDNS: `bytespider-*.crawl.bytedance.com`) |
| China Telecom (AS4134) `111.225.x` | 34 | 8% | **ByteDance Bytespider** (same rDNS pattern) |
| China Mobile | 7 | 2% | Misc. Chinese residential/proxy |
| **Total China** | **333** | **82%** | |
| Rest of world (real humans + Google) | 74 | 18% | |

271 unique Chinese IPs. Rotation is deliberate — ~1 session per IP.

### The AWS China cluster is a headless browser farm — proof

| Signal | Observation | Why it's conclusive |
|---|---|---|
| Screen resolution | **375x812 on 100% of 234 sessions** | That is Puppeteer's built-in `iPhone X` device descriptor |
| Claimed device | Samsung Galaxy S5 (67), Pixel 2 (58), iPhone (55), Nexus 5 (52) | Real Galaxy S5 = 360x640. Pixel 2 = 411x731. Nexus 5 = 360x640. **All four report 375x812** → the UA string is rotating, the viewport is hardcoded. Spoofed. |
| Referrer | **"(No referring link)" on 100%** | No human arrives at 20 different city pages with zero referrer |
| Sessions | 1 page view, 1 session, then gone | Crawl pattern, not browse pattern |
| Source network | AWS China Beijing — a datacenter | Nobody browses handyman services from an EC2 instance |

**Announced ranges for AS55960 (AWS China / Sinnet):** `52.80.0.0/16`, `52.81.0.0/16`, `54.222.128.0/17`, `54.223.64.0/18`, `54.223.128.0/17`, `43.196.0.0/16`, `140.179.0.0/16`

---

## 2. Why THIS site and not your others

Four structural reasons — all of them are things you did on purpose for SEO:

1. **Programmatic city pages.** `/areas/{city}-{state}` is an enumerable, high-page-count content grid. That is the single most attractive target shape for a competitor cloning a national directory. Pages hit: `/`, `/services`, `/faq`, `/how-it-works`, `/pricing`, `/areas/houston-tx`, `/areas/los-angeles-ca`, `/areas/phoenix-az`, `/areas/atlanta-ga`, `/areas/chicago-il`... they are walking your sitemap alphabetically-ish.
2. **`sitemap-index.xml` is live and `robots.txt` has ZERO `Disallow` lines.** You published a machine-readable map of every URL and told every bot on earth it's fair game.
3. **`robots.txt` explicitly welcomes AI crawlers** (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, Amazonbot, Applebot, Google-Extended) — good GEO strategy, but it advertises the site as an AI-training-friendly corpus, and **Bytespider is not on your list**, so it crawls unthrottled.
4. **Statcounter only counts JavaScript-executing clients.** Your other sites are almost certainly scraped too — you just don't *see* it, because those scrapers use plain HTTP and never fire the counter. This site attracts a *headless-Chrome* scraper (which does fire it). So part of the "targeted more" is a measurement artifact.

Bottom line: your national handyman directory looks like a free, clean, structured dataset. Someone in Beijing is building a competing directory or feeding an AI product with it.

---

## 3. Security audit — is anything compromised?

### Site attack surface: effectively zero

| Check | Result |
|---|---|
| Exploit probing in 407 sessions (`/wp-admin`, `/.env`, `/api/*`, `xmlrpc`, `/admin`, SQLi, traversal) | **0 hits.** Every single request was a legitimate content URL. |
| `/api/` and `/api/health` | 404 — no serverless functions on this project |
| `/wp-admin/` | 403 — not WordPress |
| Forms with `action=` | None |
| Secret patterns in HTML + all `/_astro/*.js` bundles (`service_role`, `sk_live_`, `sk_test_`, `AKIA`, `AIza`, `re_`, `sb_secret_`) | **0 matches** |
| Supabase key in `/_astro/supabase.*.js` | JWT decoded → `"role": "anon"`, ref `kplbhqybbqmxxgclrkky`, exp 2035. **Correct — anon key is public by design.** No service_role leaked. |
| Third-party scripts loaded | Statcounter + Google Fonts only |
| Hosting | Static Astro v5.18.1 on Vercel — nothing to exploit |

**The scrapers are reading, not attacking.** There is no vulnerability being exercised.

### ⚠️ Caveat you must close: RLS
The anon key being public is only safe if **Row Level Security is enabled on every table** in Supabase project `kplbhqybbqmxxgclrkky`. If any table with customer bookings/addresses/emails lacks an RLS policy, that public anon key reads the whole table. **Verify this — it's the only real data-exposure path on this stack.**

---

## 4. 🔴 Two unrelated findings that cost you more money than the bots

### A. Your booking backend is OFFLINE — you are losing every lead
Supabase project **"Handymen Network" (`kplbhqybbqmxxgclrkky`) status = `INACTIVE` (paused).**
Direct request to `https://kplbhqybbqmxxgclrkky.supabase.co/rest/v1/` → **network error, no response.**

`/book` renders a live cart ("Medium drywall repair $150", "Interior door install $875", **Total $1,025**), a "Sign in" control, and a "continue to payment" flow — all wired to a database that isn't running. Every visitor who tries to book right now fails silently.

**This is your #1 priority, not China.** 333 bot visits cost you $0. One broken $1,025 checkout costs you $1,025.

### B. A removed Chrome extension is exfiltrating every URL you visit
While loading your own site I captured beacons that fire on **every page you visit** (confirmed — they fire identically on `example.com`):

| Destination | Method | Payload |
|---|---|---|
| `nutrifunc.com/re.php` | GET | `mk=doublestat&t=<PAGE TITLE>&d=<DOMAIN>&u=f8691762-e31c-474e-8296-315430d8c79c&e=hinkijopmipplcccjeiblmiipdpagdbl` |
| `singleview.site/c` | POST | — |
| `motramby.com/c` | POST | — |
| `tstats.online/gfx` | POST | — |

- `e=hinkijopmipplcccjeiblmiipdpagdbl` is a **Chrome extension ID. Its Chrome Web Store listing is gone** (redirects to the store homepage) — i.e. it was **delisted/removed**.
- `u=f8691762-…` is a persistent tracking ID pinned to your browser.
- Separately, `hoklmmgfnpapgjgcpechhaamimifchmp` = **Similarweb** extension (legitimate, but it also transmits your full browsing history by design).

**You are logged into Vercel, Supabase, Stripe, Gmail and Statcounter in this browser.** An extension with page-read permissions is a far bigger credential risk than anything on your site.

**Do this now:** open `chrome://extensions`, enable Developer mode, find ID `hinkijopmipplcccjeiblmiipdpagdbl`, **remove it**. Decide whether you want Similarweb's data collection. Then rotate: Vercel tokens, Supabase service_role keys, Stripe API keys.

---

## 5. The fix — 3 layers, ~20 minutes

### Layer 1 — Vercel WAF (blocks at the edge, before bandwidth is spent) ✅ do this first

```bash
npm i -g vercel && vercel login
vercel link --project handymennetwork.com --scope balcodesign-gmailcoms-projects

# 1. Block China outright — you serve US metros only, zero SEO cost
vercel firewall rules add "Block CN" \
  --condition '{"type":"geo_country","op":"eq","value":"CN"}' \
  --action deny \
  --description "82% of traffic was Chinese scrapers" -y

# 2. Belt-and-braces: AWS China Beijing CIDRs (in case geo-IP misses one)
vercel firewall rules add "Block AWS China Beijing" \
  --condition '{"type":"ip_address","op":"inc","value":"52.80.0.0/16"}' --or \
  --condition '{"type":"ip_address","op":"inc","value":"52.81.0.0/16"}' --or \
  --condition '{"type":"ip_address","op":"inc","value":"54.222.128.0/17"}' --or \
  --condition '{"type":"ip_address","op":"inc","value":"54.223.64.0/18"}' --or \
  --condition '{"type":"ip_address","op":"inc","value":"54.223.128.0/17"}' --or \
  --condition '{"type":"ip_address","op":"inc","value":"43.196.0.0/16"}' --or \
  --condition '{"type":"ip_address","op":"inc","value":"140.179.0.0/16"}' \
  --action deny --description "AS55960 Sinnet / AWS China" -y

# 3. Kill Bytespider by UA (it rotates across many CN networks)
vercel firewall rules add "Block Bytespider" \
  --condition '{"type":"user_agent","op":"sub","value":"Bytespider"}' \
  --action deny -y

# 4. Rate-limit everything else so the next farm gets throttled automatically
vercel firewall rules add "Global rate limit" \
  --condition '{"type":"path","op":"pre","value":"/"}' \
  --action rate_limit --rate-limit-window 60 --rate-limit-requests 60 \
  --rate-limit-keys ip --rate-limit-algo token_bucket --rate-limit-action deny -y

vercel firewall publish
vercel firewall rules list --expand   # verify
```

**Easiest path if you don't want to fight CLI syntax** — Vercel generates the rule from plain English, or use the dashboard:

```bash
vercel firewall rules add --ai "Block all requests originating from China"
vercel firewall rules add --ai "Block any request whose user agent contains Bytespider"
vercel firewall rules add --ai "Rate limit every path to 60 requests per minute per IP, deny over that"
vercel firewall publish
```
Dashboard equivalent: **Vercel → handymennetwork.com → Firewall → Custom Rules → New Rule → If `Country` `equals` `China` → Deny**.

> Condition type/operator names occasionally shift between CLI versions — run `vercel firewall rules add --help` to confirm, or just use `--ai` above.
> If your plan caps custom rules, keep #1, #3, #4 and drop #2.
> **Do NOT** block by continent, and do not leave Attack Challenge Mode on permanently — it challenges real mobile users.

### Layer 2 — robots.txt (free, stops the polite half)
Bytespider honors robots.txt. Add explicit denies while keeping your AI-visibility crawlers.

### Layer 3 — clean your analytics
Even after blocking, Statcounter's history stays polluted. Add an IP-range filter in Statcounter (**Add Filter → IP Address**) for `52.80.*`, `52.81.*`, `54.222.*`, `54.223.*`, `110.249.*`, `111.225.*`, or move to Vercel Web Analytics, which sits behind the same firewall and never records blocked requests.

---

## 6. Copy-paste Cursor prompt

Paste this into Cursor with the `handymennetwork.com` repo open:

```
CONTEXT
This is a static Astro v5 site deployed on Vercel (project handymennetwork.com,
team balcodesign-gmailcoms-projects, prj_OlfXaXLexd2Gh6vdH5bfzP5ZXpYT).
Forensics on 407 Statcounter sessions (17 Jul – 20 Aug 2026) found 82% of all
traffic is Chinese content scrapers:
  - 234 sessions from AS55960 (AWS China Beijing / Sinnet) — a headless-Chrome
    farm with rotating fake mobile user agents but an identical hardcoded
    375x812 viewport and zero referrer.
  - 92 sessions from ByteDance Bytespider (110.249.x, 111.225.x).
Zero exploit probing was observed. This is scraping of our programmatic
/areas/{city}-{state} SEO pages, not an intrusion.

GOAL
Block Chinese datacenter scrapers and Bytespider at the edge, keep every
Western search engine and AI crawler we WANT, and make the config
version-controlled and reproducible. Do not change site content or routing.

TASKS

1. Rewrite public/robots.txt. Requirements:
   - Keep the existing "Allow: /" for User-agent: * and the Sitemap: line
     pointing at https://www.handymennetwork.com/sitemap-index.xml
   - Keep explicitly ALLOWED (these drive our AI/GEO visibility):
     GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai,
     PerplexityBot, Amazonbot, Applebot, Google-Extended, Googlebot, Bingbot
   - Add explicit "Disallow: /" blocks for these scrapers/low-value crawlers:
     Bytespider, PetalBot, Baiduspider, Sogou web spider, Sogou inst spider,
     YisouSpider, 360Spider, HaoSouSpider, MJ12bot, AhrefsBot, SemrushBot,
     DotBot, DataForSeoBot, Barkrowler, ImagesiftBot, Scrapy, python-requests,
     node-fetch, Go-http-client, HeadlessChrome
   - Add "Crawl-delay: 10" under User-agent: *
   - Group them with clear comments so it stays maintainable.

2. Create scripts/firewall.sh — an idempotent, committed shell script that
   configures the Vercel WAF via the Vercel CLI. It must:
   - set -euo pipefail, and shellcheck-clean
   - Require VERCEL_TOKEN in the environment; fail with a clear message if unset
   - Define a CIDR array for AWS China Beijing (AS55960):
     52.80.0.0/16 52.81.0.0/16 54.222.128.0/17 54.223.64.0/18
     54.223.128.0/17 43.196.0.0/16 140.179.0.0/16
   - Create/refresh these rules with `vercel firewall rules add`
     (delete-then-add so re-running is safe):
       a) "Block CN"        → condition {"type":"geo_country","op":"eq","value":"CN"} → deny
       b) "Block AWS China" → one OR-group of ip_address `inc` conditions from the CIDR array → deny
       c) "Block Bytespider"→ {"type":"user_agent","op":"sub","value":"Bytespider"} → deny
       d) "Rate limit all"  → {"type":"path","op":"pre","value":"/"} →
          rate_limit, window 60s, 60 requests, key ip, algo token_bucket, action deny
   - Finish with `vercel firewall publish` and
     `vercel firewall rules list --expand`
   - Echo a summary of what was applied

3. Add to package.json scripts:
     "firewall": "bash scripts/firewall.sh"
     "firewall:status": "vercel firewall rules list --expand"

4. Create SECURITY.md at the repo root documenting:
   - The findings above (traffic table, the 375x812 fingerprint, the ASNs)
   - Why we block CN (US-metros-only service; no Baidu/Bytespider revenue)
   - Why we deliberately allow GPTBot/ClaudeBot/PerplexityBot (GEO strategy)
   - How to add or remove a rule (edit scripts/firewall.sh, run npm run firewall)
   - A note that the Supabase anon key in the client bundle is public by design
     and that ALL security depends on Row Level Security being enabled

5. Add a repo TODO comment (do not implement) in SECURITY.md:
   "Verify RLS is enabled on every table in Supabase project
    kplbhqybbqmxxgclrkky before re-activating it."

CONSTRAINTS
- Do NOT add middleware or switch the Astro output mode away from static.
- Do NOT block Googlebot, Bingbot, or Applebot.
- Do NOT put any secret in a committed file; VERCEL_TOKEN comes from env only.
- Do not touch any page under src/pages/.

When done, print the new robots.txt and scripts/firewall.sh in full.
```

---

## 7. Priority order

| # | Action | Time | Why |
|---|---|---|---|
| 1 | Remove Chrome extension `hinkijopmipplcccjeiblmiipdpagdbl`, rotate Vercel/Supabase/Stripe keys | 10 min | Active exfiltration of your browsing from an admin machine |
| 2 | Un-pause Supabase `kplbhqybbqmxxgclrkky` — booking is dead | 5 min | Every `/book` checkout is failing right now |
| 3 | Verify RLS on every table in that project | 20 min | Only real data-exposure path; anon key is public |
| 4 | Run the Vercel WAF commands (§5 Layer 1) | 10 min | Removes 82% of junk traffic at the edge |
| 5 | Run the Cursor prompt (§6) | 15 min | Version-controls the block; fixes robots.txt |
| 6 | Add Statcounter IP filters | 5 min | Makes your analytics trustworthy again |

**Expected result:** traffic drops ~82% and conversion rate appears to jump ~5x — because the denominator was fake all along. Your real baseline is ~74 sessions over 5 weeks, which is the number you should actually be running SEO against.
