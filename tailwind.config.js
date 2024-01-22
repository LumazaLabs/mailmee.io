const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["century-gothic", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "mm-purple": "#C44D9D",
        "mm-grey": "#F7F7F7",
      },
      spacing: {
        section: "218px",
      },
    },
  },
  plugins: [],
};
