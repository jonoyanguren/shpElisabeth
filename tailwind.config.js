/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef4444', // Using red-500 as default, change this to match your brand color
      },
    },
  },
  plugins: [],
}

