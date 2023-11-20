/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  content: [
    '*.{html,js}'
  ],
  // ...
  theme: {
    extend: {
      boxShadow: {
        'custom': 'O 4px 6px rgba(0, 0, 0, 0.1)',
      },
      // ... d'autres extensions
      colors: {
        primary: '#FF6347',
        secondary: '#6B7280'
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
  },
  // ... d'autres personnalisations de thème
},
  },
  // ...
};
