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
        default: "#E0E0E0",
        "default-hover": "#AEAEAE",
        primary: "#2962FF",
        "primary-hover": "#0039CB",
        secondary: "#455A64",
        "secondary-hover": "#1C313A",
        danger: "#D32F2F",
        "danger-hover": "#9A0007",
        "custom-blue": "#3D5AFE",
      },
    },
  },
  plugins: [],
};
