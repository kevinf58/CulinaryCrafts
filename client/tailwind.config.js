/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    borderWidth: {
      default: "2px",
    },
    extend: {
      fontFamily: {
        header: ["Roboto-condensed", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#E0707A",
        secondary1: "#FEC006",
        secondary2: "#FF9A2A",

        button: "#CE5E68",

        white: "#F5F5F5",
        lightgrey: "#ECECEC",
        grey: "#D9D9D9",
        darkgrey: "#939393",
        black: "#282828",

        success: "#42E226",
        warning: "#FEC006",
        error: "#FB3A3A",
      },
    },
  },
  plugins: [],
};
