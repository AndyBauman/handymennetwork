import { menuCategories, bundles, type MenuItem } from "@/data/menu";

/**
 * Date the published menu was last reviewed. This is a factual claim shown to users
 * and to AI crawlers, so it is set by hand rather than derived from the build date —
 * but it must be bumped whenever prices in `src/data/menu.ts` change.
 */
export const MENU_REVIEWED_ON = "2026-08-01";

const MENU_REVIEWED_LABEL = new Date(`${MENU_REVIEWED_ON}T00:00:00Z`).toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** First-party pricing facts for GEO-citable cost pages (derived from live menu). */
export function getMenuPricingStats() {
  const items = menuCategories.flatMap((c) => c.items);
  const prices = items.map((i) => i.price);

  return {
    itemCount: items.length,
    categoryCount: menuCategories.length,
    bundleCount: bundles.length,
    minPrice: prices.length ? Math.min(...prices) : 0,
    maxPrice: prices.length ? Math.max(...prices) : 0,
    avgPrice: prices.length
      ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
      : 0,
    under100Count: items.filter((i) => i.price < 100).length,
    under150Count: items.filter((i) => i.price <= 150).length,
    asOfLabel: MENU_REVIEWED_LABEL,
    reviewedOn: MENU_REVIEWED_ON,
  };
}

export function getFeaturedPriceExamples(): {
  id: string;
  name: string;
  price: number;
  time: string;
  category: string;
  slug: string;
}[] {
  const picks = [
    "drywall-small-hole",
    "door-alignment",
    "knob-deadbolt",
    "tv-mount",
    "faucet-drip",
    "gutter-clean",
  ];
  const byId = new Map<string, { name: string; price: number; time: string; category: string; slug: string }>();
  for (const cat of menuCategories) {
    for (const item of cat.items) {
      byId.set(item.id, {
        name: item.name,
        price: item.price,
        time: item.time,
        category: cat.title,
        slug: cat.slug,
      });
    }
  }
  return picks
    .map((id) => {
      const row = byId.get(id);
      return row ? { id, ...row } : null;
    })
    .filter(Boolean) as {
    id: string;
    name: string;
    price: number;
    time: string;
    category: string;
    slug: string;
  }[];
}

export function getCategoryOffersJsonLd(catSlug: string, pageUrl: string) {
  const cat = menuCategories.find((c) => c.slug === catSlug);
  if (!cat) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${cat.title} — fixed-price menu`,
    url: pageUrl,
    numberOfItems: cat.items.length,
    itemListElement: cat.items.map((item: MenuItem, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.name,
        description: item.included,
        provider: { "@id": "https://www.handymennetwork.com/#organization" },
        areaServed: { "@type": "Country", name: "United States" },
        offers: {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
      },
    })),
  };
}
