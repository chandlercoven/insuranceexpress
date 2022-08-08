/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Orenge':'#DB0909',
        'Black-100':'#101010',
        'gry':'#000105AD',
        'light-gry':'#00010587',
        'title': '#525355',
        'yellow': '#f0bc5e',
        'subTitle': "#646778",
      },
      fontFamily: {
        'lato':'Lato',
        'merriweather':'Merriweather',
        'roboto':'Roboto',
      },
    },
  },
  plugins: [],
}
