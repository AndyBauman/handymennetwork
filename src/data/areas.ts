import { NATIONWIDE_STATES } from "@/data/nationwide-cities";

export type ServiceArea = {
  slug: string;
  name: string;
  state: string;
  stateName: string;
  blurb: string;
};

export type AreasByState = {
  abbr: string;
  name: string;
  areas: { slug: string; name: string }[];
};

/** URL-safe slug segment for city + state (e.g. st-paul-mn). */
export function slugifyCityName(city: string): string {
  return city
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function areaSlug(city: string, stateAbbr: string): string {
  return `${slugifyCityName(city)}-${stateAbbr.toLowerCase()}`;
}

/** All metro landing pages — nationwide (50 states). */
export const serviceAreas: ServiceArea[] = NATIONWIDE_STATES.flatMap((s) =>
  s.cities.map((city) => ({
    slug: areaSlug(city, s.abbr),
    name: city,
    state: s.abbr,
    stateName: s.name,
    blurb: `Fixed-price handyman repairs in ${city} and the greater ${s.name} metro — menu pricing, vetted pros, and live job tracking.`,
  })),
);

export const areasByState: AreasByState[] = NATIONWIDE_STATES.map((s) => ({
  abbr: s.abbr,
  name: s.name,
  areas: s.cities.map((city) => ({
    name: city,
    slug: areaSlug(city, s.abbr),
  })),
}));

export function getArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
