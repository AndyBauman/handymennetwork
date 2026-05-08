# Handymen Network dispatch logic

## Goals

- Only **active** handymen receive offers.
- Only handymen **not on an open job** receive offers.
- Only pros within **service radius** of the customer address receive offers.
- Only pros **vetted** and **skill-tagged** for the menu line items in the order.
- Minimize customer wait while protecting pro experience.
- **No customer-facing “pick your pro” on the marketing site** — matching is algorithmic (reviews, skills, reliability, distance).

## Vetting gate

Pros must pass onboarding before `can_receive_offers = true`:

- Background check cleared
- Insurance on file (and licenses where required by category/region)
- Skill tags aligned to menu categories they may accept
- Optional: orientation / quiz for quality standards

## Familiar pro preference

When a customer gives a handyman a **4- or 5-star review**, the system records that pair in a `familiar_pros` relationship. On future orders:

- The familiar pro receives a **large ranking boost** in candidate scoring.
- If the familiar pro is **active, in range, and not on a job**, they are offered the job first (exclusive window ~45 s before the pool opens).
- If the familiar pro is **currently on another job**, the customer can opt into a **hold window of up to 2 hours** at checkout. The system monitors the pro's current job status and sends them the offer as soon as they complete it, provided they are still in range.
- If the hold window expires or the pro declines, normal dispatch resumes automatically so the customer is never left hanging.

**Database**: `familiar_pros` table with `customer_id`, `handyman_id`, `avg_rating`, `jobs_together`, `last_job_at`. Updated by a trigger after each review insert.

**Checkout flag**: `orders.prefer_familiar_pro` (boolean, default false) + `orders.familiar_hold_minutes` (int, nullable, max 120).

## Offer flow

1. Customer pays (Stripe) > create `jobs` row: `status = searching`, `lat/lng` geocoded from address.
2. **Familiar pro check** (if `prefer_familiar_pro = true`):
   - Look up `familiar_pros` for this customer, ordered by `avg_rating` desc.
   - If top familiar pro is active + in range + not on a job: send exclusive offer (45 s TTL).
   - If top familiar pro is on a job + `familiar_hold_minutes > 0`: set job status to `waiting_for_familiar`, start hold timer. Monitor the pro's current job for completion. When they finish, send exclusive offer.
   - If hold expires or no familiar pro qualifies: fall through to step 3.
3. Query candidates:
   - `handymen.active = true`
   - `handymen.vetting_status = approved`
   - Menu items in pro's `allowed_skills`
   - No row in `jobs` where `handyman_id = me` and `status` in (`accepted`, `en_route`, `arrived`, `in_progress`)
   - `ST_DWithin(pro.location, job.location, radius_m)` start tight (e.g. 5 km), expand every 60 s.
4. **Rank** candidates (example weights, tune in product):
   - Weighted score: `rating`, `completion_rate`, `familiar_pro_boost`, distance, fit for SKU complexity
   - Familiar pros who did not get the exclusive window still get a ranking boost in the general pool
   - Higher performers get **earlier offers** (not exclusive forever, fairness + SLA)
5. Push offers sequentially or small batch (e.g. top 3) with **30-45 s** TTL; next batch if none accept.
6. First `accept` wins: job `handyman_id` set, others notified `filled`.
7. If no acceptance in **5 minutes**: customer message: schedule later / expand radius / **Help in app** (no public phone on website).

## Status machine (customer-facing copy)

| Internal        | Customer sees                                      |
|----------------|-----------------------------------------------------|
| `waiting_for_familiar` | Holding for your preferred handyman (up to 2 hours) |
| `searching`    | Finding a vetted pro near you…                      |
| `matched`      | A pro is assigned — chosen for fit and availability |
| `en_route`     | On the way — about [ETA] minutes                    |
| `arrived`      | They have arrived                                   |
| `in_progress`  | Work is underway                                    |
| `completed`    | All done — how did we do?                           |
| `cancelled`    | Cancelled — refund per policy                       |

> In-app, show **minimal identity** needed for a safe visit (policy/law-dependent). Do **not** maintain a public “meet our handymen” gallery on the marketing site.

## Supabase outline

- Realtime channel per `job_id` for customer + assigned handyman.
- Edge Function or database webhook on payment success to enqueue dispatch worker (or pg_cron + queue table).
- Row Level Security: customers read own jobs; pros read assigned + open offers intended for them.

## Telemetry

- Time to first offer, time to accept, accept rate by radius band, cancel reasons, post-job ratings by vetting cohort.
