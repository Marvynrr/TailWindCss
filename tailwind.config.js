/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  purge: {
    enabled: ProcessingInstruction.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.js',
      // ... aurtres fichiers sources à analyser
    ],
  },
  content: [],
  // ...
  plugins: [
    require('@tailwindcss/forms'), //Exemple de plugin pour personnaliser les éléments de formulaire
    // ... d'autres plugins
  ],
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
