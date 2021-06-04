module.exports = {
  purge: ['./public/**/*.html', './views/**/*.hbs'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'ui-monospace']
      },
      colors: {
        'puce': '#cc8899',
        'bg-dark': '#22242a',
        'bg-light': '#f5efee',
        'primary-blue-light': '#007aff',
        'primary-blue-dark': '#0a84ff',
        'font-light': '#262626',
        'font-dark': '#e5e5e5'
      },
      height: {
        board: '350px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
