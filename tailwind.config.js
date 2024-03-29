module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#cfd4dc", 500: "#667084", 700: "#475466", 800: "#344053", 900: "#112d4e" },
        gray: { 300: "#e0e0e0", 900: "#0f1728", "900_02": "#101828", "900_01": "#1e212e" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { xs: "0px 1px  2px 0px #1018280c", sm: "0px 4px  4px 0px #0000003f" },
      fontFamily: { inter: "Inter" },
      backgroundImage: { gradient: "linear-gradient(347deg, #ffffff,#3f72af)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
