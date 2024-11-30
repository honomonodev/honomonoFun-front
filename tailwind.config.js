// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        accent: "#657786",
        background: "#E1E8ED",
        surface: "#F5F8FA",
      },
      boxShadow: {
        "inner-purple": "inset 0 2px 4px rgba(128, 0, 128, 0.6)",
      },
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
