/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    gridTemplateColumns: {
      productsGrid: "repeat(auto-fit, minmax(260px, 1fr));",
    },
    boxShadow: {
      mainShadow: "1px 1px 6px #d0d0d0  ,-1px -1px 6px #f0f0f0",
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("children", "&>*");
    }),
  ],
};
