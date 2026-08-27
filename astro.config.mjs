import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://www.handymennetwork.com",
  output: "static",
  // NOTE: `edgeMiddleware` is ignored when output is "static" — the adapter hardcodes
  // it to false unless buildOutput === "server". Country/bot blocking therefore lives
  // in the Vercel WAF instead; see scripts/firewall.mjs and `npm run firewall`.
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "") || "/";
        // Keep in sync with the pages that pass `noindex` to BaseLayout.
        return !["/signin", "/signup", "/account"].includes(path);
      },
    }),
  ],
  compressHTML: true,
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
});
