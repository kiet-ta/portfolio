/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Orbitron', 'monospace'],
        sans: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        cyan: {
          400: '#06b6d4',
          500: '#0ea5e9',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
