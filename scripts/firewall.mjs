#!/usr/bin/env node
/**
 * Idempotent Vercel WAF apply for handymennetwork.com.
 * Uses `vercel api` so it works with the logged-in CLI (v50+), no VERCEL_TOKEN required.
 */
import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const PROJECT_ID = "prj_OlfXaXLexd2Gh6vdH5bfzP5ZXpYT";
const TEAM_ID = "team_K718LQ4ow7ZHfsLc2zOuollB";
const CONFIG_PATH = `/v1/security/firewall/config?projectId=${PROJECT_ID}&teamId=${TEAM_ID}`;

const AWS_CHINA_CIDRS = [
  "52.80.0.0/16",
  "52.81.0.0/16",
  "54.222.128.0/17",
  "54.223.64.0/18",
  "54.223.128.0/17",
  "43.196.0.0/16",
  "140.179.0.0/16",
];

const RULES = [
  {
    name: "Block CN",
    description: "US-metros-only site; Chinese scrapers were 82% of Statcounter sessions",
    active: true,
    conditionGroup: [{ conditions: [{ type: "geo_country", op: "eq", value: "CN" }] }],
    action: { mitigate: { action: "deny", rateLimit: null, redirect: null, actionDuration: null } },
  },
  {
    name: "Block AWS China",
    description: "AS55960 Sinnet / AWS China Beijing CIDRs",
    active: true,
    conditionGroup: [
      { conditions: [{ type: "ip_address", op: "inc", value: AWS_CHINA_CIDRS }] },
    ],
    action: { mitigate: { action: "deny", rateLimit: null, redirect: null, actionDuration: null } },
  },
  {
    name: "Block Bytespider",
    description: "ByteDance Bytespider (honors robots.txt; WAF catches the rest)",
    active: true,
    conditionGroup: [{ conditions: [{ type: "user_agent", op: "sub", value: "Bytespider" }] }],
    action: { mitigate: { action: "deny", rateLimit: null, redirect: null, actionDuration: null } },
  },
  {
    name: "Rate limit all",
    description: "60 req/min per IP; next scrape farm that does not rotate IPs",
    active: true,
    conditionGroup: [{ conditions: [{ type: "path", op: "pre", value: "/" }] }],
    action: {
      mitigate: {
        action: "rate_limit",
        rateLimit: { algo: "fixed_window", window: 60, limit: 60, keys: ["ip"], action: "deny" },
        redirect: null,
        actionDuration: null,
      },
    },
  },
];

function vercelApi(method, path, body) {
  const args = ["api", path, "-X", method];
  if (body !== undefined) {
    const dir = mkdtempSync(join(tmpdir(), "hn-waf-"));
    const file = join(dir, "body.json");
    writeFileSync(file, JSON.stringify(body));
    args.push("--input", file, "-H", "Content-Type: application/json");
  }
  const result = spawnSync("vercel", args, { encoding: "utf8", shell: true });
  if (result.status !== 0) {
    const err = (result.stderr || result.stdout || "").trim();
    throw new Error(`vercel api ${method} ${path} failed:\n${err}`);
  }
  const out = (result.stdout || "").trim();
  if (!out) return {};
  try {
    return JSON.parse(out);
  } catch {
    return { raw: out };
  }
}

function getConfig() {
  return vercelApi("GET", CONFIG_PATH);
}

function liveRules(config) {
  return config.active?.rules ?? [];
}

function upsertRule(existing, rule) {
  const current = existing.find((r) => r.name === rule.name);
  if (current) {
    console.log(`Updating ${rule.name} (${current.id})`);
    vercelApi("PATCH", CONFIG_PATH, { action: "rules.update", id: current.id, value: rule });
    return;
  }
  console.log(`Inserting ${rule.name}`);
  vercelApi("PATCH", CONFIG_PATH, { action: "rules.insert", id: null, value: rule });
}

const who = spawnSync("vercel", ["whoami"], { encoding: "utf8", shell: true });
if (who.status !== 0 || /logged out/i.test(who.stdout || "")) {
  console.error("error: not logged in to Vercel. Run: vercel login");
  console.error("Or export VERCEL_TOKEN from https://vercel.com/account/tokens");
  process.exit(1);
}
console.log(`Using Vercel CLI login: ${(who.stdout || "").split(/\r?\n/).find((l) => l.trim() && !l.includes("Update available") && !l.includes("─") && !l.includes("Changelog") && !l.includes("npm i -g")) || "ok"}`);

let config = getConfig();
if (!config.active?.firewallEnabled) {
  console.log("Enabling firewall...");
  vercelApi("PATCH", CONFIG_PATH, { action: "firewallEnabled", value: true });
  config = getConfig();
}

for (const rule of RULES) {
  config = getConfig();
  upsertRule(liveRules(config), rule);
}

config = getConfig();
const names = liveRules(config).map((r) => `${r.name} [${r.id}] ${r.action?.mitigate?.action}`);
console.log("\nActive rules:");
for (const line of names) console.log(`  - ${line}`);
console.log("\nDashboard: https://vercel.com/balcodesign-gmailcoms-projects/handymennetwork.com/firewall");
