import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core brand — deep/dark blue
        night: "#050B14",
        navy: {
          DEFAULT: "#0A1729",
          800: "#0E2138",
          700: "#15304F",
          600: "#1E4166",
        },
        mist: "#9DBEE8", // subtle light-blue accent, used sparingly
        // Neutrals — photography stays the main source of color
        bone: "#F3F1EC",
        sand: "#E5E1D8",
        ash: "#6B7280",
        steel: "#93A1B5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        accent: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest: "0.35em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
