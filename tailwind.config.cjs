const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'serif': ['"Crimson Pro"', ...defaultTheme.fontFamily.serif],
        'monospace': ['"Fira Code"', ...defaultTheme.fontFamily.mono]
      },
    },
  },
  plugins: [],
}

