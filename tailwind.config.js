/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'body-regular': ['Space Mono Regular', 'sans-serif'],
        'body-bold': ['Space Mono Bold', 'sans-serif']
      },
      colors: {
        'blue1': '#0079ff',
        'blue1-hover': '#60abff',
        'blue2': '#4b6a9b',
        'blue2-hover': '#222731',
        'blue3': '#697c9a',
        'blue4': '#2b3442',
        'blue5': '#1e2a47',
        'blue6': '#141d2f',
        'white1': '#fefefe',
        'white-1-hover': '#90a4d4',
        'white2': '#f6f8ff'
      }
    },
  },
  plugins: [],
}

