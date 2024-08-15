import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E2E8F0",
        primaryLight: "#F8FAFC",
        primaryHalfWhite: "#f1f5f9",
        secondary: "#C2410C",
        dark: "#0f172a",
        darkLight: "#475569",
      },
    },
  },
  plugins: [],
};
export default config;
