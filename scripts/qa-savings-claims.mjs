/**
 * Lists the savings claim rendered on each bundle card in the built output, so
 * an advertised discount can be checked against scripts/qa-bundle-math.mjs.
 * Usage: node scripts/qa-savings-claims.mjs
 */
import { readFileSync } from "node:fs";

const NAMES = [
  "Move-In Ready Bundle",
  "Rental Turnover Bundle",
  "Honey-Do Blitz",
  "Property Manager Pack",
];

const CLAIM = /Save about \$\d+/;

for (const page of ["dist/services/index.html", "dist/pricing/index.html"]) {
  let html;
  try {
    html = readFileSync(page, "utf8");
  } catch {
    console.log(`${page}: not built`);
    continue;
  }
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  console.log(`\n${page}`);
  for (const name of NAMES) {
    const start = text.indexOf(name);
    if (start < 0) {
      console.log(`  ${name.padEnd(24)} not on page`);
      continue;
    }
    // Bound the card at whichever other bundle name appears next.
    const rest = text.slice(start + name.length);
    const nextIdx = NAMES.map((n) => rest.indexOf(n)).filter((i) => i > 0);
    const card = rest.slice(0, nextIdx.length ? Math.min(...nextIdx) : 400);
    const m = card.match(CLAIM);
    console.log(`  ${name.padEnd(24)} ${m ? m[0] : "(no savings claim)"}`);
  }
}
