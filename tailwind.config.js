/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // adjust based on your file structure
    ],
    theme: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1320px', // ✅ custom max width
        },
      },
      extend: {},
    },
    plugins: [],
  }
  