import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070908",
          900: "#0d1210",
          800: "#141b18",
          700: "#1d2824",
        },
        mint: "#72e6c8",
        honey: "#f2c86b",
        coral: "#ff8c7a",
        frost: "#eff8f3",
      },
      boxShadow: {
        glow: "0 20px 70px rgba(114, 230, 200, 0.14)",
        soft: "0 20px 80px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
