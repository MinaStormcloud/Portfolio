module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage:{
          'bili': 'url(../public/deborah-rainford-unsplash.jpg)'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }