/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dosis", "sans-serif"],
      },
      colors: {
        "main-red": "#F2575F",
        "main-text": "#1E304B",
        "waves-bg": "#D8E0F3",
      },
    },
  },
  plugins: [],
};
