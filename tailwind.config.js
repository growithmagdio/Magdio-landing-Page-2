/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A0F1F', // Main dark background
          900: '#111831', // Surface background
          800: '#151D3B', // Card background
          700: '#1C274E', // Elevated cards / borders
        },
        primary: {
          blue: '#2F6BFF',
          dark: '#1E4FD8',
          light: '#5488FF',
        },
        gold: {
          DEFAULT: '#F5B82E',
          light: '#FFD166',
          dark: '#D99B1C',
        },
        text: {
          main: '#FFFFFF',
          muted: '#A7B0C8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(245, 184, 46, 0.25)',
        'blue-glow': '0 0 35px rgba(47, 107, 255, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
