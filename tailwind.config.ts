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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "360px", // Extra small devices (mobile)
        sm: "640px", // Small devices (smaller tablets)
        md: "768px", // Medium devices (larger tablets)
        lg: "1024px", // Large devices (small laptops)
        xl: "1280px", // Extra large devices (desktops)
        "2xl": "1536px", // Extra extra large devices (large desktops)
        "3xl": "1920px", // Ultra-wide screens
      },
    },
  },
  plugins: [],
};

export default config;
