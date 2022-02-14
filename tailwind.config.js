module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'light-down': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent)',
        'dark-down': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
