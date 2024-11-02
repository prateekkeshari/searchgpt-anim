/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}