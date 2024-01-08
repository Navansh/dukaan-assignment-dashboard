module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_a2: "#ffffffa2" },
        colors: "#ffffff19",
        gray: {
          50: "#f9f9f9",
          100: "#f2f2f2",
          300: "#e6e6e6",
          500: "#999999",
          600: "#7f7f7f",
          800: "#4c4c4c",
          900: "#1a181e",
          "900_0a": "#1a181e0a",
        },
        blue_gray: { 100: "#d9d9d9", 900: "#1e2640" },
        blue: { 800: "#146eb4" },
      },
      fontFamily: { inter: "Inter", galanogrotesque: "Galano Grotesque" },
      boxShadow: { bs: "0px 2px  6px 0px #1a181e0a" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
