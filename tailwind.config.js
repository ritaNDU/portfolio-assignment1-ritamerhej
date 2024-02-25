/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "shaded-gray": "#00000022",
      },
      screens: {
        sm: "300px",
      },
    },
  },
  plugins: [],
};
