/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    ".components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        default: "#E0E0E0",
        "default-hover": "#AEAEAE",
      },
    },
  },
  plugins: [],
};
