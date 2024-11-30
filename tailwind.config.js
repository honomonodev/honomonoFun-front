module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        lineAnimation: {
          "0%": { strokeDasharray: "0, 2000" },
          "100%": { strokeDasharray: "2000, 0" },
        },
        pointAnimation: {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
      },
      animation: {
        lineAnimation: "lineAnimation 4s linear infinite",
        pointAnimation: "pointAnimation 4s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
