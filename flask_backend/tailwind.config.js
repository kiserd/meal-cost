const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
        ...defaultTheme.screens,
      },
      colors: {
        'custom-cool-extraDark': '#001219',
        'custom-cool-dark': '#005f73',
        'custom-cool-med': '#0a9396',
        'custom-cool-light': '#94d2bd',
        'custom-cool-extraLight': '#e9d8a6',
        'custom-warm-extraLight': '#ee9b00',
        'custom-warm-light': '#ca6702',
        'custom-warm-med': '#bb3e03',
        'custom-warm-dark': '#ae2012',
        'custom-warm-extraDark': '#9b2226',
        'custom-background': '#18191A',
        'custom-card': '#242526',
        'custom-hover': '#3A3B3C',
        'custom-text-primary': '#E4E6EB',
        'custom-text-secondary': '#B0B3B8'
      },
      width: {
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
