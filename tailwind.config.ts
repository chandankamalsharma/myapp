import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      screens: {
        "2xl": "1440px",
      },
      colors: {
        dark: "#2D294C",
        haze: {
          50: "#F7F8FB",
          100: "#EFEFF8",
          200: "#E2E3F2",
          300: "#C8C9E7",
          400: "#ACACD9",
          500: "#8E89C9",
          600: "#786EB9",
          700: "#665CA5",
          800: "#564D8A",
          900: "#484072",
          950: "#2D294C",
        },
        have: {
          50: "#F0F5FE",
          100: "#DDE9FC",
          200: "#C2D9FB",
          300: "#98C1F8",
          400: "#67A0F3",
          500: "#5287EF",
          600: "#2E5EE2",
          700: "#254BD0",
          800: "#243DA9",
          900: "#233885",
          950: "#1A2451",
        },
        sail: {
          50: "#F1F9FE",
          100: "#E1F2FD",
          200: "#AFDFF9",
          300: "#83D0F6",
          400: "#40B9F0",
          500: "#189FDF",
          600: "#0B80BE",
          700: "#0A669A",
          800: "#0D567F",
          900: "#10486A",
          950: "#0B2E46",
        },
      },
      backgroundImage: {
        page: "linear-gradient(90deg, #DFDDF7 0%, #B1ACE9 100%)",
        "page-xl": "linear-gradient(90deg, #E3E4F2 0.25%, #F6F6FB 99.79%)",
        healthCareFreedom:
          "linear-gradient(90deg, rgba(223, 221, 247, 0.8) 0%, #AEA9E7 100%)",
        features: "linear-gradient(90deg, #DFDDF7 0%, #AEA9E7 100%)",
        choose: "linear-gradient(90deg, #DFDDF7 0%, #AEA9E7 100%)",
        rest: "linear-gradient(90deg, #DFDDF7 0%, #B0ABE9 94.25%)",
        fix: "linear-gradient(180deg, #e8e9f5 0%, transparent 100%)",
        "purple-text": "linear-gradient(90deg, #6C82D2 0.01%, #4DAADC 62.28%)",
        "blue-text": "linear-gradient(90deg, #8E89C9 0.01%, #6F63B9 56.98%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
