/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'default-shadow': '0 2px 10px 0 #195dc212',
      },
      transition: {
        transitionDuration: {
          DEFAULT: '300ms',
        },
        transitionTimingFunction: {
          DEFAULT: 'ease-in-out',
        },
        transitionProperty: {
          DEFAULT: 'all',
        },
      }
    },
  },
  plugins: []
}
