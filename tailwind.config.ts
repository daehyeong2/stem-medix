import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: {
          light: "rgb(56 189 248)",
          DEFAULT: "rgb(14 165 233)",
          dark: "rgb(2 132 199)",
        },
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-60": "60% 60%",
      },
      screens: {
        tall: { raw: "(min-height: 700px)" },
        "lg-xl": { raw: "(min-width: 1150px)" },
      },
    },
  },
  plugins: [],
};
export default config;
