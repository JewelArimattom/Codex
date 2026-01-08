/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: '#FAFAF9',
        surface: '#FFFFFF',
        primary: '#1A1A1A',
        secondary: '#6B6B6B',
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
        border: '#E5E5E5',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
