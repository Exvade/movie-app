/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue"],
      },
      colors: {
        red: "#FF4C4C",
        purple: "#9747FF",
      },
      backgroundImage: {
        banner: "url('./src/assets/images/banner.png')",
      },
    },
  },
  plugins: [],
};
