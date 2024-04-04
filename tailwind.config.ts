import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0059ff",

          secondary: "#00a7ff",

          accent: "#0070ff",

          neutral: "#1b1b1b",

          "base-100": "#fcfcfc",

          info: "#0093d8",

          success: "#abd400",

          warning: "#ffbc00",

          error: "#e81958",

          body: { "background-color": "#eee" },
        },
      },
    ],
  },
};
export default config;
