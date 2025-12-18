/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f8faf7',
          100: '#eff4ed',
          200: '#dfe9db',
          300: '#c2d5bf',
          400: '#9db999',
          500: '#7c9e78',
          600: '#62825e',
          700: '#4e674b',
          800: '#40533e',
          900: '#374536',
          950: '#1c251b',
        },
        neutral: {
          50: '#f9faf9',
          100: '#f1f3f2',
          200: '#e4e7e5',
          300: '#d1d6d3',
          400: '#a9b2ad',
          500: '#7f8c86',
          600: '#637067',
          700: '#505a52',
          800: '#414943',
          900: '#373d38',
          950: '#222724',
        },
        clay: {
          100: '#f5e9e0',
          200: '#e8d2c1',
          300: '#d9b69e',
          400: '#c8957a',
          500: '#b87a5c',
        }
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(124, 158, 120, 0.08)',
        'medium': '0 15px 40px rgba(62, 85, 60, 0.12)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};