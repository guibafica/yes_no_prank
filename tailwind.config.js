/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-red": "#F2575F",
        "waves-bg": "#d8e0f3",
      },
    },
  },
  plugins: [],
};
