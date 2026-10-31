/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14171f',
        paper: '#f1f3f6',
        muted: '#5b6270',
      },
    },
  },
  plugins: [],
};
