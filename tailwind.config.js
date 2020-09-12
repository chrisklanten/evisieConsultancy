module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        evisie: {
          yellow: "#F8BC4C",
          black: "#202A35",
          gray: "#C2D2D7",
          "yellow-100": "#f6aa1b",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
