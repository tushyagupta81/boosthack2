/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#CAF0F8",
          200: "#ADE8F4",
          300: "#90E0EF",
          400: "#48CAE4",
          500: "#00B4D8",
          600: "#0096C7",
          700: "#0077B6",
          800: "#023E8A",
          900: "#03045E",
        },
      },
    },
  },
  plugins: [],
};
