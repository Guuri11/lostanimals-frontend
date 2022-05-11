const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        yellow: '#edb506',
        dark: '#2d2e2a',
        red: '#ff6b6b',
        green: '#68b96b',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
