module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
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
