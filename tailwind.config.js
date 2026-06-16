/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1D4FA3',
          green: '#69BC45',
          bg: '#F5F7FA',
          dark: '#111827',
          light: '#6B7280',
          white: '#FFFFFF',
        }
      },
      borderRadius: {
        '32': '32px',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(29, 79, 163, 0.08)',
        'premium-hover': '0 20px 40px -15px rgba(29, 79, 163, 0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [],
}
