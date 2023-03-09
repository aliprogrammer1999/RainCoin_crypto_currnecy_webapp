/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  theme: {
    screens: {
      lg: "900px",
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-main": "#1a1a1a",
        "color-primery": "#2f82fd",
        "color-main": "#ffffff",
        "color-dark": "#2424242",
      },
    },
  },
  plugins: [],
};
