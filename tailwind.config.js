/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: { 
        extraLight: 200, 
        light: 300, 
        normal: 400, 
        medium: 500, 
        semiBold: 600, 
        bold: 700, 
        extraBold: 800, 
        black: 900, 
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '320': '80rem',
      },
      colors: {
        'primary': '#000000',
        'secondary': '#ffffff',
        'gold': '#9c8922',
        'darkGold': '#7a6f2a',
      }, 
      padding: {
        '433px': '433px',
      },
      fontFamily:{
        'Hubot': ['serif', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans'],
      }
    },
  },
  plugins: [],
}

