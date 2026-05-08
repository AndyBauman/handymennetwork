/** Localized FAQ blocks for city landing pages (SEO + FAQPage schema). */

export type AreaFaq = { q: string; a: string };

export function faqsForCity(city: string, stateAbbr: string, stateName: string): AreaFaq[] {
  const metro = `${city} metro`;
  return [
    {
      q: `Does Handymen Network offer handyman services in ${city}, ${stateAbbr}?`,
      a: `Yes. Homeowners and property managers in ${city} and the surrounding ${stateName} region can book fixed-price repairs from our menu. Enter your address at checkout to confirm coverage for your neighborhood and see accurate pricing.`,
    },
    {
      q: `What ${city} neighborhoods and nearby suburbs do you cover?`,
      a: `We aim to cover the full ${metro} area, including close-in suburbs and common commuter towns. Coverage is determined by pro availability and drive time, so the booking flow will confirm serviceability for your exact address before you pay.`,
    },
    {
      q: `How quickly can a handyman arrive in ${city}?`,
      a: `When pros are active nearby, many jobs are picked up quickly—sometimes same day. ${city} is a busy market, so booking earlier in the day improves your odds. If no one is free immediately, you can schedule a later window in the app.`,
    },
    {
      q: `Are menu prices the same in ${city} as in other cities?`,
      a: `Prices follow local market rates, so ${city} may differ slightly from other metros. The total you see in the cart is always the price for the described scope in your area—before you confirm the booking.`,
    },
    {
      q: `Are handymen serving ${city} background checked and insured?`,
      a: `Pros on the platform pass background checks and must carry general liability insurance (and bonding where required) before receiving offers. We re-check credentials periodically; if coverage lapses, they stop receiving jobs until it is restored.`,
    },
    {
      q: `Can I get same-day handyman help in ${city}, ${stateAbbr}?`,
      a: `Often, when enough vetted pros are Active and not on another job. Same-day availability depends on demand in ${city} that day, the repair type, and your address. The app will show scheduling options if instant matching is not available.`,
    },
    {
      q: `What kinds of repairs are most common for ${city} homeowners?`,
      a: `Typical requests mirror national trends—drywall patches, door adjustments, TV mounting, furniture assembly, minor plumbing and electrical tasks, caulking, and seasonal exterior items. Browse the repair menu to see fixed prices and what each line includes.`,
    },
    {
      q: `Do you serve suburbs outside ${city} proper?`,
      a: `Yes, when your address is within a reasonable service radius of available pros. Rural or distant addresses may route to schedule-later options. Your checkout screen is the source of truth for whether we can reach you on the date you need.`,
    },
    {
      q: `Is there a trip or dispatch fee for appointments in ${city}?`,
      a: `Many orders $75 and up ship without a separate trip fee in supported markets, but fees can vary by address and job mix. Review your cart at checkout in the app—any trip or dispatch line items are shown before you pay.`,
    },
    {
      q: `I live just outside ${city}. Can I still book?`,
      a: `Enter your full address during booking. If you are within range of Active pros, you are good to go. If you are slightly outside the zone, we may offer a future time slot or suggest the closest covered area.`,
    },
    {
      q: `Do ${stateName} licensing rules affect what a handyman can do?`,
      a: `Handyman scope depends on local and state regulations. Our menu focuses on common residential tasks; work that requires a specialty license may be limited or referred. If you are unsure, note details in your booking so the assigned pro can confirm before starting.`,
    },
    {
      q: `Can landlords and property managers in ${city} book for rentals?`,
      a: `Yes. Add the property address, access instructions, and contact on-site if needed. For multiple units or recurring turns, email via Get help for portfolio options like time blocks and bundles.`,
    },
    {
      q: `Can I book TV mounting and furniture assembly in ${city}?`,
      a: `Those are standard menu categories. Choose the line that matches your wall type or assembly size so the price reflects the scope. Mention brand, size, or wall material in the notes to reduce surprises on site.`,
    },
    {
      q: `What if no pros are available in ${city} today?`,
      a: `You will get a quick notification with alternatives: pick another time, adjust the repair list, or reach support through Help in the app / Get help on the site. We only dispatch vetted pros who are actually available—not random call lists.`,
    },
    {
      q: `How does job tracking work for ${city} customers?`,
      a: `After a pro accepts, you see plain-English statuses such as on the way, arrived, working, and done, plus SMS-style updates where enabled. You do not browse a public directory of handymen; matching stays automated for safety and speed.`,
    },
  ];
}
