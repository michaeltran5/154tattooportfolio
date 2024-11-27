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
        primary: '#D8CFBC',
        'primary-light': '#E5DED0',    // Lighter shade of primary
        'primary-lighter': '#F2EDE3',  // Even lighter
        'primary-dark': '#CBC1AC',     // Darker shade of primary
        'primary-darker': '#BEB39C',   // Even darker
        secondary: '#565449',
        text: '#11120D',
        background: '#11120D',
      },

      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};