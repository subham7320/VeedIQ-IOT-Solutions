/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
    },
  },
  plugins: [],
};
