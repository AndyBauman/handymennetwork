import type { MiddlewareHandler } from "astro";

/**
 * Block requests by country at the Vercel Edge (before static HTML is served).
 * - Proxied Cloudflare: https://developers.cloudflare.com/fundamentals/reference/http-headers/#cf-ipcountry
 * - Direct Vercel: https://vercel.com/docs/headers/request-headers#x-vercel-ip-country
 *
 * Server env DISABLE_GEO_BLOCK=1 turns this off (set in Vercel project settings).
 *
 * Edit BLOCKED_COUNTRIES as needed. Empty set disables blocking.
 */
const BLOCKED_COUNTRIES = new Set<string>([
  "CN", // China
]);

function resolveCountry(request: Request): string {
  const cf = request.headers.get("cf-ipcountry")?.toUpperCase()?.trim();
  if (cf && cf !== "XX") {
    return cf;
  }
  return request.headers.get("x-vercel-ip-country")?.toUpperCase()?.trim() ?? "";
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  // Static generation has no real request headers — skip before touching them (avoids prerender warnings).
  if (context.isPrerendered) {
    return next();
  }

  const geoDisabled =
    typeof process !== "undefined" &&
    typeof process.env !== "undefined" &&
    process.env.DISABLE_GEO_BLOCK === "1";

  if (BLOCKED_COUNTRIES.size === 0 || import.meta.env.DEV || geoDisabled) {
    return next();
  }

  const country = resolveCountry(context.request);

  if (country && BLOCKED_COUNTRIES.has(country)) {
    return new Response("Service not available in your region.", {
      status: 403,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "private, no-store",
      },
    });
  }

  return next();
};
