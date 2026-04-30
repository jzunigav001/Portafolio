import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f2f1ec",
        soft: "#fbfaf6",
        mist: "#e5e3dd",
        ink: "#111111",
        charcoal: "#2a2926",
        muted: "#6d6962",
        line: "#d4d0c8",
        carbon: "#111111",
        frost: "#f7f6f2"
      },
      boxShadow: {
        "paper-soft": "0 24px 70px rgba(20, 20, 20, 0.08)"
      },
      fontFamily: {
        display: [
          "Helvetica Neue",
          "Inter",
          "Arial",
          "sans-serif"
        ],
        body: ["Helvetica Neue", "Arial", "Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
