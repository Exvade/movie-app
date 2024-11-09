/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF4C4C",
        purple: "#9747FF",
      },
    },
  },
  plugins: [],
};
