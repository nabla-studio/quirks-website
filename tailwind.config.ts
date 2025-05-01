import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "410px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateZ(0)" },
          "100%": {
            transform:
              "translate3d(calc((82px * 4 + 20px * 3) * -1 - 20px),0,0)",
          },
        },
        "marquee-sm": {
          "0%": { transform: "translateZ(0)" },
          "100%": {
            transform:
              "translate3d(calc((74px * 4 + 20px * 3) * -1 - 20px),0,0)",
          },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee 20s linear infinite reverse",
        "marquee-sm": "marquee-sm 20s linear infinite",
        "marquee-sm-reverse": "marquee-sm 20s linear infinite reverse",
      },
      colors: {
        primary: "#0029FF",
        secondary: "#121212",
        dark: "#1B1B1B",
        "dark-2": "#0E0E0E",
        "connect-wallet-b": "#0d199a",
        "mobile-support-inactive": "#262626",
        "discuss-card": "#1c1c1c",
      },
      borderRadius: {
        "2.5xl": "20px",
        std: "50px",
        10: "40px",
      },
      fontSize: {
        "1.1xl": "1.3125rem",
        "3.5xl": "2rem",
        "bento-h": "27px",
        "perc-big": "180px",
        "perc-half": "90px",
        "perc-unit": "80px",
      },
      lineHeight: {
        "12": "48px",
      },
    },
  },
  plugins: [],
};
export default config;
