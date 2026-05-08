import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const menuItems = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/menu-items" }),
  schema: z.object({
    id: z.string(),
    category: z.string(),
    name: z.string(),
    price: z.number(),
    timeMinutes: z.number(),
    materialsNote: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
  }),
});

export const collections = { menuItems, services };
