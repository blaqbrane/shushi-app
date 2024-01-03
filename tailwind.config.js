/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", //add the component folder to the path.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

