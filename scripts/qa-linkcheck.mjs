/**
 * Internal link + asset audit over the built `dist/` output.
 * Usage: node scripts/qa-linkcheck.mjs
 */
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const DIST = path.resolve("dist");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const exists = async (p) => {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
};

async function routeExists(pathname) {
  const clean = pathname.split("#")[0].split("?")[0];
  const rel = clean.replace(/^\//, "").replace(/\/$/, "");
  if (rel === "") return exists(path.join(DIST, "index.html"));
  return (
    (await exists(path.join(DIST, rel, "index.html"))) ||
    (await exists(path.join(DIST, `${rel}.html`))) ||
    (await exists(path.join(DIST, rel)))
  );
}

const files = (await walk(DIST)).filter((f) => f.endsWith(".html"));

const broken = new Map();
const idIssues = [];
const a11y = [];
const seo = [];

for (const file of files) {
  const html = await readFile(file, "utf8");
  const page = "/" + path.relative(DIST, file).replace(/\\/g, "/").replace(/index\.html$/, "");

  // --- internal links ---
  for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const target = m[1];
    if (target.startsWith("//")) continue;
    if (!(await routeExists(target))) {
      if (!broken.has(target)) broken.set(target, new Set());
      broken.get(target).add(page);
    }
  }

  // --- duplicate element ids ---
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) idIssues.push(`${page} duplicate id(s): ${[...new Set(dupes)].join(", ")}`);

  // --- aria-labelledby targets that don't exist ---
  for (const m of html.matchAll(/aria-labelledby="([^"]+)"/g)) {
    for (const ref of m[1].split(/\s+/)) {
      if (!ids.includes(ref)) a11y.push(`${page} aria-labelledby="${ref}" has no matching id`);
    }
  }

  // --- headings ---
  const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
  if (h1s !== 1) a11y.push(`${page} has ${h1s} <h1> elements`);

  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) {
      a11y.push(`${page} heading jump h${levels[i - 1]} -> h${levels[i]}`);
      break;
    }
  }

  // --- images without alt ---
  for (const m of html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)) {
    a11y.push(`${page} <img> without alt: ${m[0].slice(0, 90)}`);
  }

  // --- SEO basics ---
  const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  if (!title) seo.push(`${page} MISSING <title>`);
  else if (title.length > 65) seo.push(`${page} title ${title.length} chars: "${title}"`);
  if (!desc) seo.push(`${page} MISSING meta description`);
  else if (desc.length > 165) seo.push(`${page} description ${desc.length} chars`);
  if (!html.includes('rel="canonical"')) seo.push(`${page} MISSING canonical`);
  if (!/property="og:image"/.test(html)) seo.push(`${page} no og:image`);

  // --- JSON-LD validity ---
  for (const m of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      seo.push(`${page} INVALID JSON-LD: ${e.message}`);
    }
  }
}

const report = (label, rows) => {
  console.log(`\n=== ${label} (${rows.length}) ===`);
  rows.slice(0, 40).forEach((r) => console.log("  " + r));
  if (rows.length > 40) console.log(`  ...and ${rows.length - 40} more`);
};

console.log(`Scanned ${files.length} HTML pages in dist/`);

console.log(`\n=== BROKEN INTERNAL LINKS (${broken.size} unique targets) ===`);
for (const [target, pages] of broken) {
  console.log(`  ${target}  <- ${pages.size} page(s), e.g. ${[...pages][0]}`);
}

report("DUPLICATE IDs", idIssues);
report("A11Y", [...new Set(a11y)]);
report("SEO", [...new Set(seo)].filter((s) => !s.endsWith("no og:image")));
console.log(
  `\n  og:image missing on ${[...new Set(seo)].filter((s) => s.endsWith("no og:image")).length} page(s)`,
);
