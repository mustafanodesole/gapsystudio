
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custompink': '#fe6f61',
        'lightgray45': '#1f1f1f',
      },
      fontFamily: {

        'rockSalt': ["Rock Salt"],
        'formula' : ["PP Formula Condensed"] 

      }
    },
  },
  plugins: [],
};
