/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'white-muted': '#dedede',
        blue: '#003349',
        'blue-muted': '#9bb4bf',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        gradient:
          'linear-gradient(rgba(148,173,199,0.1), rgba(117,153,198,0.2))',
      },
    },
  },
  plugins: [],
};
