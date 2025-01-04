/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // For older pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // For reusable components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
