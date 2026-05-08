# JSON-LD examples (drop-in patterns)

## Local business (site-wide)

Already emitted in `BaseLayout.astro` as `HomeAndConstructionBusiness` with `url` (no public `telephone` on the marketing site).

## FAQ page

Homepage passes 16 FAQs; `/faq` passes all 72 as `FAQPage` `mainEntity`.

## Service menu as ItemList (optional enhancement)

Add next to `/services` when you want rich results for the whole menu:

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Small hole patch (up to 4 inches)",
        "description": "Patch, sand, prime. Paint-ready finish.",
        "provider": { "@type": "Organization", "name": "Handymen Network" },
        "offers": {
          "@type": "Offer",
          "price": "85",
          "priceCurrency": "USD"
        }
      }
    }
  ]
}
```

## Per repair page

If you later generate one URL per SKU (e.g. `/services/drywall-patching/small-hole-patch`), add `Service` + `Offer` on that page with `areaServed` matching city.
