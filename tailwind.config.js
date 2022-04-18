module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      gridTemplateRows: {
        11: "repeat(11, minmax(0, 1fr))",
      },
      screens: {
        "2xl": { min: "1297px", max: "1535px" },
        xl: { min: "993px", max: "1296px" },
        lg: { min: "769px", max: "992px" },
        md: { min: "360px", max: "768px" },
        sm: { max: "360px" },
      },
    },
  },
  plugins: [],
};
