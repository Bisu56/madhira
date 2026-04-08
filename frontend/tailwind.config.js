/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b5161e",
        "primary-container": "#ff766d",
        secondary: "#7b5400",
        "secondary-container": "#ffc96f",
        tertiary: "#00675c",
        "tertiary-container": "#8df5e4",
        background: "#fff4f2",
        surface: "#fff4f2",
        "surface-container": "#ffe2db",
        "surface-container-high": "#ffdad2",
        "surface-container-highest": "#ffd3c9",
        "surface-container-low": "#ffede9",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#fec8bc",
        "on-surface": "#412923",
        "on-surface-variant": "#72544e",
        outline: "#906f68",
        "outline-variant": "#caa59c",
        error: "#b31b25",
      },
      fontFamily: {
        headline: ["Epilogue", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        label: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}