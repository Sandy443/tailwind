const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'cta': 'var(--cta)',
        'textColor': 'var(--text)',
        'textLight': 'var(--textLight)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent': 'var(--accent)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'cta-hover': 'var(--cta-hover)',
      },
      margin: {
        'xxs': '8px',
        'xs': '20px',
        'sm': '30px',
        'md': '35px',
        'lg': '75px',
      }, 
      gridTemplateRows: {
        'galleryMobile': '5%, 1fr, 5%, 1fr, 1fr, 1fr',
      } 
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};