module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fotnSize: {
      'sm': '14px',
      'md': '18px',
      'lg': '19px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '32px',
    },
    extend: {
      colors: {
        'orange': '#F6AF7B',
        'green': '#00FFFF94',
        'purple': '#CC00FF80',
        'blue': '#0F96F994',
      },

      height: {
        '4xl': '600px'
      },

      width: {
        '4xl': '600px'
      },

      blur: {
        '4xl': '300px',
      }
    },
  },
  plugins: [],
};
