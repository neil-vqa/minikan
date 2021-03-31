module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'base': ['Montserrat','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
