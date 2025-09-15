/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        night: '#080F0F',
        blackbean: '#3D0C02',
        coffee: '#6F4E37',
        khaki: '#C3B091',
        racinggreen: '#004225',
        ivory: '#FFFFF0'
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
