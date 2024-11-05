const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      serif: ['Crimson Text', 'serif']
    },
    extend: {
      colors: {
        paper: '#f6eee3',
      }
    }
  },
  plugins: []
};
