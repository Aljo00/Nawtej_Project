/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        charcoal: '#1F2937',
        'light-gray': '#F9FAFB',
      },
    },
  },
  plugins: [],
};
