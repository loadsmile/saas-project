/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#019863',
        secondary: '#1C160C',
        tertiary: '#A18249',
        background: '#FFFFFF',
        border: '#E9DFCE',
        button: '#F4EFE6',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
