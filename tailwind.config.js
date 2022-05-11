const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        blue: colors.blue,
        black: colors.black,
        yellow: colors.yellow,
        dark: '#2d2e2a',
        red: '#ff6b6b',
        green: colors.green,
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
