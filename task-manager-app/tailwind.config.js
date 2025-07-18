module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite'
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width'
      }
    },
  },
  plugins: [],
}