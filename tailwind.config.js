/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "pastel-blue": "#fb6f92",
        "light-pastel-blue": "#ffc2d1",
        "pastel-pink": "#fce1e4",
        "greenish-white": "#F6F7D4",
      },
    },
  },
  plugins: [],
};
