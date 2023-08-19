/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customBlack: "#2B2B2B",
      },
      textColor: {
        customGray: "#A4A4A4",
      },
      borderColor: {
        customGray: "#A4A4A4",
      },
    },
  },
  plugins: [],
};
