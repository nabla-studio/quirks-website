import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        marquee: "marquee 5s linear infinite",
        "marquee-reverse": "marquee 5s linear infinite reverse",
        "marquee-sm": "marquee-sm 5s linear infinite",
        "marquee-sm-reverse": "marquee-sm 5s linear infinite reverse",
      },
      colors: {
        primary: "#0029FF",
        secondary: "#121212",
        "connect-wallet-b": "#0d199a",
        "mobile-support-inactive": "#262626",
        "discuss-card": "#1c1c1c",
      },
      borderRadius: {
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
      spacing: {
        "page-elements": "445px",
        "chain-icon": "82px",
        "framework-icon": "167px",
        4.5: "18px",
        6.5: "26px",
        8.75: "35px",
        13: "52px",
        18.5: "74px",
        21.5: "86px",
        26.25: "105px",
        30: "120px",
        33: "132px",
        43: "172px",
        43.75: "175px",
        88: "352px",
      },
      maxWidth: {
        "wide-element": "1336px",
        "regular-element": "1030px",
      },
      minHeight: {
        13.75: "55px",
      },
      lineHeight: {
        "12": "48px",
      },
    },
  },
  plugins: [],
};
export default config;
