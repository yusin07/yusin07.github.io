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
        "2xl": { max: "1535px" },
        xl: { max: "1296px" },
        lg: { max: "992px" },
        md: { max: "768px" },
        sm: { max: "360px" },
      },
    },
  },
  plugins: [],
};
