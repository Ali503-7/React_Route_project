/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "24px",
      xl: "32px",
    },
    extend: {
      colors: {
        BG: "#FFF7ED",
        header: "#4D4D4D",
        btn: "#FF8C38",
        footer: "#252525",
        footer_text: "#AAAAAA",
        Headers: "#161616",
      },
    },
  },
  plugins: [],
};
