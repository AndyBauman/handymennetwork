/**
 * Reconciles each bundle's advertised savings against the sum of its component
 * menu line items. Run after changing prices in src/data/menu.ts.
 * Usage: node scripts/qa-bundle-math.mjs
 */
import { readFileSync } from "node:fs";

const src = readFileSync("src/data/menu.ts", "utf8");

/** Pull `id: "x"` / `price: N` pairs straight out of the data file. */
const price = {};
for (const m of src.matchAll(/id:\s*"([^"]+)"[\s\S]{0,200}?price:\s*(\d+)/g)) {
  price[m[1]] = Number(m[2]);
}

const bundles = [
  {
    name: "Move-In Ready Bundle",
    id: "move-in-ready",
    parts: [
      ["picture-hang", 1, "5 picture hangs (menu line covers up to 5)"],
      ["floating-shelf", 1, "1 shelf"],
      ["door-alignment", 1, "1 door fix"],
      ["caulk-bath", 1, "caulk bathroom"],
    ],
  },
  {
    name: "Rental Turnover Bundle (outlets billed as one line)",
    id: "rental-turnover",
    parts: [
      ["drywall-small-hole", 3, "3 small drywall patches"],
      ["door-alignment", 1, "door alignment"],
      ["caulk-bath", 1, "caulk bathroom"],
      ["outlet-plates", 1, "5 outlet plates"],
    ],
  },
  {
    name: "Rental Turnover Bundle (outlets billed per plate)",
    id: "rental-turnover",
    parts: [
      ["drywall-small-hole", 3, "3 small drywall patches"],
      ["door-alignment", 1, "door alignment"],
      ["caulk-bath", 1, "caulk bathroom"],
      ["outlet-plates", 5, "5 outlet plates"],
    ],
  },
];

const bundlePrice = {};
const claimed = {};
for (const m of src.matchAll(
  /id:\s*"([^"]+)",\s*\n\s*name:\s*"([^"]+)",\s*\n\s*price:\s*(\d+),(?:\s*\n\s*savings:\s*"Save about \$(\d+)",)?/g,
)) {
  bundlePrice[m[1]] = Number(m[3]);
  if (m[4]) claimed[m[1]] = Number(m[4]);
}

console.log("Bundle savings reconciliation\n" + "=".repeat(78));
for (const b of bundles) {
  const sum = b.parts.reduce((s, [id, qty]) => s + price[id] * qty, 0);
  const bp = bundlePrice[b.id];
  const actual = sum - bp;
  const claim = claimed[b.id];
  const verdict = claim === undefined ? "no claim" : actual === claim ? "OK" : "MISMATCH";
  console.log(`\n${b.name}`);
  for (const [id, qty, label] of b.parts) {
    console.log(`   ${qty} x ${id.padEnd(20)} $${String(price[id] * qty).padStart(4)}   ${label}`);
  }
  console.log(`   ${"components".padEnd(25)} $${String(sum).padStart(4)}`);
  console.log(`   ${"bundle price".padEnd(25)} $${String(bp).padStart(4)}`);
  console.log(
    `   => actual savings $${actual}; advertised $${claim ?? "-"}  [${verdict}]`,
  );
}

// Time blocks are priced per hour, so compare against the cheapest hourly rate.
const blitz = bundlePrice["honey-do-blitz"];
const hourly = blitz / 2;
const pmPack = bundlePrice["property-manager-pack"];
const pmAtRate = hourly * 4;
console.log(`\nProperty Manager Pack (4h) vs Honey-Do Blitz rate`);
console.log(`   Honey-Do Blitz            $${blitz} / 2h = $${hourly}/h`);
console.log(`   4h at that rate           $${pmAtRate}`);
console.log(`   bundle price              $${pmPack}`);
console.log(
  `   => actual savings $${pmAtRate - pmPack}; advertised $${claimed["property-manager-pack"] ?? "-"}`,
);
