import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkforestgreen: "var(--darkforestgreen)",
        forestgreen: "var(--forestgreen)",
        cream: "var(--cream)",
        eggshell: "var(--eggshell)",
      },
      fonts: {
        atkinsonhyperlegible: "var(--fonts-atkinson-hyperlegible)",
        atkinsonmonolegible: "var(--fonts-atkinson-monolegible)",
      }
    },
  },
  plugins: [],
} satisfies Config;
