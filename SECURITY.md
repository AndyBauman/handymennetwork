# Security — handymennetwork.com

US-only marketing site. Blocking happens at the Vercel WAF, not in Astro, because this project is `output: "static"` and edge middleware does not run on prerendered HTML.

## Findings (Statcounter, 17 Jul 2026 – 20 Aug 2026)

407 sessions. 82% were Chinese content scrapers walking programmatic `/areas/{city}-{state}` pages. Zero exploit probes (`/wp-admin`, `/.env`, `/api/*`, SQLi, traversal). They are reading, not attacking.

| Segment | Sessions | Share | Identity |
|---|---|---|---|
| AS55960 “Beijing Guanghuan Xinwang Digital” | 234 | 57% | AWS China (Beijing) / Sinnet — rented headless-Chrome farm |
| China Unicom AS4837 `110.249.x` | 58 | 14% | ByteDance Bytespider (`bytespider-*.crawl.bytedance.com`) |
| China Telecom AS4134 `111.225.x` | 34 | 8% | ByteDance Bytespider |
| China Mobile | 7 | 2% | Misc. residential/proxy |
| **Total China** | **333** | **82%** | |
| Rest of world | 74 | 18% | Real humans + Google |

271 unique Chinese IPs; ~1 session per IP.

### AWS China fingerprint (conclusive)

| Signal | Observation |
|---|---|
| Viewport | **375×812 on 100% of 234 AS55960 sessions** — Puppeteer’s stock iPhone X descriptor |
| Claimed device | Galaxy S5 / Pixel 2 / iPhone / Nexus 5 UAs, all reporting 375×812 (real devices do not) |
| Referrer | “(No referring link)” on 100% |
| Shape | 1 page view, 1 session, gone |
| Network | AWS China Beijing datacenter |

**AS55960 CIDRs:** `52.80.0.0/16`, `52.81.0.0/16`, `54.222.128.0/17`, `54.223.64.0/18`, `54.223.128.0/17`, `43.196.0.0/16`, `140.179.0.0/16`

`src/middleware.ts` already defaults `BLOCKED_COUNTRIES=CN,HK`, but it returns immediately when `context.isPrerendered` is true. Every public page is prerendered, so that middleware never 403s a scraper. The 19–20 Aug 2026 Statcounter rows (Beijing, 375×812, no referrer) are what that skip looks like in production. Do not “fix” this by flipping the site to SSR. Use the WAF.

## Why we block CN

This business only serves US metros. There is no Baidu, Bytespider, or China-region customer funnel. Blocking `CN` at the edge removes ~82% of recorded traffic with no SEO cost among the engines we care about.

## Why we allow GPTBot / ClaudeBot / PerplexityBot

GEO: we want answer engines to cite the directory. `public/robots.txt` explicitly allows GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Amazonbot, Applebot, Google-Extended, Googlebot, and Bingbot. Do not add those names to a WAF deny rule.

## Managing WAF rules

Edit `scripts/firewall.mjs`, then apply:

```bash
# Logged-in CLI session is enough (`vercel whoami`). Optional: VERCEL_TOKEN.
npm run firewall          # insert/update the four rules via `vercel api`
npm run firewall:status   # dump live WAF JSON
```

Applied 20 Aug 2026 (config version 5, live, no draft):

| Rule | ID | Match | Action |
|---|---|---|---|
| Block CN | `rule_block_cn_fylkMn` | `geo_country` equals `CN` | deny |
| Block AWS China | `rule_block_aws_china_0J7gCH` | IP in AS55960 CIDRs above | deny |
| Block Bytespider | `rule_block_bytespider_bVTUat` | User-Agent contains `Bytespider` | deny |
| Rate limit all | `rule_rate_limit_all_oRZV3l` | path starts with `/` | 60/min/IP, deny over limit |

Team plan is Pro. The apply script uses `vercel api` (works with CLI v50). `token_bucket` is Enterprise-only; the live rule uses `fixed_window` at 60 requests / 60 seconds / IP.

To drop a rule: remove it from the `RULES` array in `scripts/firewall.mjs` and delete it in the dashboard, or PATCH `rules.remove` with the rule id.

If Google crawl volume looks throttled, disable **Rate limit all** in the dashboard first. The AWS China farm already rotates IPs (~1 hit each), so that rule is for the next farm, not the current one.

Dashboard: https://vercel.com/balcodesign-gmailcoms-projects/handymennetwork.com/firewall

## Supabase

The anon key in the client bundle (`PUBLIC_SUPABASE_ANON_KEY`) is **public by design**. It is not a leak. All data protection depends on Row Level Security.

Project: **Handymen Network** (`kplbhqybbqmxxgclrkky`), region `us-west-1`. Status as of the Jul–Aug 2026 review: **paused / INACTIVE**. `/book` and auth cannot work until it is restored.

TODO: Verify RLS is enabled on every table in Supabase project kplbhqybbqmxxgclrkky before re-activating it.
