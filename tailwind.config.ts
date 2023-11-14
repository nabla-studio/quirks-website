import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0029FF",
        secondary: "#121212",
        "connect-wallet-b": "#0d199a",
      },
      borderRadius: {
        std: "50px",
      },
      fontSize: {
        "1.1xl": "1.3125rem",
        "3.5xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
