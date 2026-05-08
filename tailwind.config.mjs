/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1E293B",
          cream: "#FEFCF3",
          amber: "#E8A317",
          charcoal: "#2D2D2D",
          teal: "#2EC4B6",
          stone: "#F5F3EF",
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', "Georgia", "serif"],
        sans: [
          '"Source Sans 3"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        body: ["1.125rem", { lineHeight: "1.65" }],
        "menu-title": ["1.5rem", { lineHeight: "1.3" }],
      },
      minHeight: {
        tap: "3rem",
        "tap-lg": "3.5rem",
      },
      minWidth: {
        tap: "3rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
