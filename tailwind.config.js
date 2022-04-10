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
    },
  },
  plugins: [],
};
