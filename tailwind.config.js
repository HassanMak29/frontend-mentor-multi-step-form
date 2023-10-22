/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        MarineBlue: "hsl(213, 96%, 18%)",
        MarineBlueLight: "hsl(213, 96%, 28%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
        PurplishBlueLight: "hsl(243, 100%, 72%)",
        PastelBlue: "hsl(228, 100%, 84%)",
        LightBlue: "hsl(206, 94%, 87%)",
        StrawberryRed: "hsl(354, 84%, 57%)",
        CoolGray: "hsl(231, 11%, 63%)",
        LightGray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
      },
      fontFamily: {
        ubunto: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
