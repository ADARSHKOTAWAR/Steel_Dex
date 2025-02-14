/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B365D', // Navy Blue
          hover: '#2C4B7C',
        },
        secondary: {
          DEFAULT: '#D97706', // Amber
          hover: '#B45309',
        },
        accent: {
          DEFAULT: '#64748B', // Metallic Silver
          hover: '#475569',
        },
        background: '#F8FAFC', // Light Gray
      },
    },
  },
  plugins: [],
};