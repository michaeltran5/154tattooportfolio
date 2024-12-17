/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data.json',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F2EA',     // Base cream color (for background)
        'primary-light': '#E5E2DA',  // Slightly darker
        'primary-dark': '#D5D2CA',   // Darker
        'primary-darker': '#C5C2BA',  // Even darker
        secondary: '#565449',
        text: '#11120D',
        background: '#F5F2EA',  // Same as primary for the background

      },

      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};