import tailwindTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.625rem',
        '3xs': '.5rem',
        '4xs': '.375rem',
      },
    },
  },
  plugins: [tailwindTypography],
};
