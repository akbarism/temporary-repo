/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {
        250: 2.5,
        300: 6,
      },
      colors: {
        "himpsi-purple": "#8F47AA",
        "himpsi-tosca": "#00BCA6",
        "himpsi-title": "#3F013F",
        "himpsi-title-2": "#660066",
        "himpsi-main": "#F0F2F5",
      },
    },
  },
  plugins: [],
};
