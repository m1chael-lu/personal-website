/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "about-gray": "#F0F0F0",
        "experience-blue": "#474d5a",
        "webpage-color": "#eee7e1",
        "cool-blue-color": "#536878",
        "hero-text": "#141c3a",
        "main-color": "#EEEEEE",
        "card-color": "#DEDEDE",
      },
    },
  },
  plugins: [],
};
