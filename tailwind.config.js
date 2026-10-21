/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          DEFAULT: '#732C33',
          dark: '#582126',
          light: '#8E3841',
        },
        cyanBrand: {
          DEFAULT: '#4BAAC8',
          dark: '#388CA7',
          light: '#6DC0DB',
        },
        goldBrand: {
          DEFAULT: '#B59948',
          light: '#CEB260',
          dark: '#937B34',
        },
        skyCard: {
          DEFAULT: '#95C1D5',
          light: '#A6CFE1',
          dark: '#7FAEC3',
        },
        paperWarm: '#F8F6F0',
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'organic': '38px 24px 34px 28px',
        'organic-alt': '28px 38px 24px 34px',
      },
      boxShadow: {
        'paper': '0 4px 20px -2px rgba(115, 44, 51, 0.08)',
        'float': '0 15px 35px -5px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
