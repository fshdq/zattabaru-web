const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandGreen: {
          normal: "#0E6153",
          dark: "#094137",
          soft: "#CFDFDD",
        },
        brandYellow: {
          normal: "#F0BD07",
          dark: "#785F04",
          soft: "#FAE9AC",
        }
        //add your own color
        //https://tailwindcss.com/docs/customizing-colors
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
