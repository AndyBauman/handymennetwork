export type MenuItem = {
  id: string;
  name: string;
  price: number;
  time: string;
  included: string;
  materials: "basic" | "customer";
};

export type MenuBundle = {
  id: string;
  name: string;
  price: number;
  savings?: string;
  included: string;
};

export type MenuCategory = {
  slug: string;
  title: string;
  emoji: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "drywall-patching",
    title: "Drywall & Patching",
    emoji: "🔨",
    items: [
      {
        id: "drywall-small-hole",
        name: "Small hole patch (up to 4 inches)",
        price: 85,
        time: "About 30 minutes",
        included: "Patch, sand, prime. Paint-ready finish.",
        materials: "basic",
      },
      {
        id: "drywall-medium",
        name: "Medium drywall repair (4–12 inches)",
        price: 150,
        time: "About 1 hour",
        included: "Cut, patch, tape, mud, sand, prime.",
        materials: "basic",
      },
      {
        id: "drywall-large",
        name: "Large drywall section (12–24 inches)",
        price: 250,
        time: "About 1.5 hours",
        included: "Full section repair with smooth finish.",
        materials: "basic",
      },
      {
        id: "nail-pop",
        name: "Nail pop repair (up to 10 pops)",
        price: 95,
        time: "About 45 minutes",
        included: "Fill, sand, prime all nail pops.",
        materials: "basic",
      },
    ],
  },
  {
    slug: "doors",
    title: "Doors",
    emoji: "🚪",
    items: [
      {
        id: "door-alignment",
        name: "Door won't close / alignment fix",
        price: 95,
        time: "About 30 minutes",
        included: "Adjust hinges, strike plate, latch.",
        materials: "basic",
      },
      {
        id: "interior-door-install",
        name: "Interior door install (you provide the door)",
        price: 175,
        time: "About 1.5 hours",
        included: "Hang door, adjust, install hardware.",
        materials: "customer",
      },
      {
        id: "weatherstrip",
        name: "Exterior door weatherstrip replace",
        price: 120,
        time: "About 45 minutes",
        included: "Remove old, install new weatherstripping.",
        materials: "basic",
      },
      {
        id: "knob-deadbolt",
        name: "Door knob / deadbolt swap",
        price: 65,
        time: "About 20 minutes",
        included: "Remove old, install new hardware.",
        materials: "customer",
      },
    ],
  },
  {
    slug: "trim-carpentry",
    title: "Trim & Carpentry",
    emoji: "🪚",
    items: [
      {
        id: "baseboard-8ft",
        name: "Baseboard repair / replace (per 8 ft)",
        price: 95,
        time: "About 30 minutes",
        included: "Remove, replace, nail, caulk, prime.",
        materials: "basic",
      },
      {
        id: "crown-8ft",
        name: "Crown molding install (per 8 ft)",
        price: 120,
        time: "About 45 minutes",
        included: "Cut, install, caulk, prime.",
        materials: "basic",
      },
      {
        id: "window-trim",
        name: "Window trim repair",
        price: 110,
        time: "About 40 minutes",
        included: "Repair or replace damaged window casing.",
        materials: "basic",
      },
      {
        id: "floating-shelf",
        name: "Shelf install (floating shelf)",
        price: 85,
        time: "About 30 minutes",
        included: "Mount shelf with proper anchors.",
        materials: "customer",
      },
    ],
  },
  {
    slug: "general-repairs",
    title: "General Repairs",
    emoji: "🔧",
    items: [
      {
        id: "faucet-drip",
        name: "Leaky faucet fix",
        price: 95,
        time: "About 30 minutes",
        included: "Diagnose and fix drip. Parts extra if needed.",
        materials: "basic",
      },
      {
        id: "toilet-running",
        name: "Toilet running / won't stop",
        price: 85,
        time: "About 30 minutes",
        included: "Replace flapper, fill valve, or handle as needed.",
        materials: "basic",
      },
      {
        id: "outlet-plates",
        name: "Outlet / switch plate replace",
        price: 45,
        time: "About 15 minutes",
        included: "Swap cover plates (no wiring).",
        materials: "customer",
      },
      {
        id: "caulk-bath",
        name: "Caulk bathroom (tub + shower)",
        price: 95,
        time: "About 45 minutes",
        included: "Remove old caulk, clean, re-caulk.",
        materials: "basic",
      },
      {
        id: "disposal",
        name: "Garbage disposal reset / fix",
        price: 75,
        time: "About 20 minutes",
        included: "Diagnose, reset, clear jam.",
        materials: "basic",
      },
    ],
  },
  {
    slug: "furniture-assembly",
    title: "Furniture & Assembly",
    emoji: "🏠",
    items: [
      {
        id: "furniture-small",
        name: "Furniture assembly (small, under 1 hour)",
        price: 85,
        time: "Up to 1 hour",
        included: "Assemble one piece of furniture.",
        materials: "customer",
      },
      {
        id: "furniture-large",
        name: "Furniture assembly (large, 1–2 hours)",
        price: 150,
        time: "Up to 2 hours",
        included: "Assemble complex piece (bed frame, desk, etc.).",
        materials: "customer",
      },
      {
        id: "tv-mount",
        name: "TV wall mount (up to 65 inches)",
        price: 120,
        time: "About 45 minutes",
        included: "Mount TV, hide cables if possible.",
        materials: "customer",
      },
      {
        id: "picture-hang",
        name: "Picture / mirror hanging (up to 5)",
        price: 75,
        time: "About 30 minutes",
        included: "Proper anchors, level, secure.",
        materials: "basic",
      },
    ],
  },
  {
    slug: "exterior",
    title: "Exterior",
    emoji: "🏡",
    items: [
      {
        id: "deck-board",
        name: "Deck board replacement (per board)",
        price: 95,
        time: "About 30 minutes",
        included: "Remove damaged board, install new.",
        materials: "customer",
      },
      {
        id: "fence-boards",
        name: "Fence board repair (up to 5 boards)",
        price: 150,
        time: "About 1 hour",
        included: "Replace damaged fence boards.",
        materials: "customer",
      },
      {
        id: "gutter-clean",
        name: "Gutter cleaning (single story)",
        price: 120,
        time: "About 1 hour",
        included: "Clean all gutters, flush downspouts.",
        materials: "basic",
      },
      {
        id: "power-wash",
        name: "Power washing (small area, ~200 sq ft)",
        price: 150,
        time: "About 1 hour",
        included: "Pressure wash deck, patio, or walkway.",
        materials: "basic",
      },
    ],
  },
];

export const bundles: MenuBundle[] = [
  {
    id: "move-in-ready",
    name: "Move-In Ready Bundle",
    price: 350,
    savings: "Save about $95",
    included:
      "5 picture hangs + 1 shelf + 1 door fix + caulk bathroom (as listed on menu).",
  },
  {
    id: "rental-turnover",
    name: "Rental Turnover Bundle",
    price: 450,
    savings: "Save about $120",
    included:
      "Drywall patches (3 small) + door alignment + caulk bathroom + 5 outlet plates.",
  },
  {
    id: "honey-do-blitz",
    name: "Honey-Do Blitz (2 hour block)",
    price: 175,
    included: "2 hours of handyman time for mixed small tasks from the menu.",
  },
  {
    id: "property-manager-pack",
    name: "Property Manager Pack (4 hour block)",
    price: 320,
    savings: "Save about $40",
    included: "4 hours for punch list / multi-unit small repairs.",
  },
];

export function getCategory(slug: string): MenuCategory | undefined {
  return menuCategories.find((c) => c.slug === slug);
}

const popularIds = [
  "faucet-drip",
  "door-alignment",
  "drywall-small-hole",
  "tv-mount",
  "caulk-bath",
  "picture-hang",
  "toilet-running",
  "gutter-clean",
];

export function getPopularItems(): MenuItem[] {
  const byId = new Map<string, MenuItem>();
  for (const c of menuCategories) {
    for (const i of c.items) byId.set(i.id, i);
  }
  return popularIds.map((id) => byId.get(id)).filter(Boolean) as MenuItem[];
}
