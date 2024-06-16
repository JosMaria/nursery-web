const withOpacity = (variableName) => {
  return ({ opacityValue }) =>
    opacityValue ? `rgba(var(${variableName}), ${opacityValue})` : `rgb(var(${variableName}))`;
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        nursery: {
          light: withOpacity('--color-light'),
          medium: withOpacity('--color-medium'), 
          dark: withOpacity('--color-dark'),
          'dark-hover': withOpacity('--color-dark-hover'),
        },
      },
      textColor: {
        nursery: {
          light: withOpacity('--color-light'),
        },
      },
      borderColor: {
        nursery: {
          light: withOpacity('--color-light'),
          dark: withOpacity('--color-dark'),
        },
      },
    },
  },
  plugins: [],
}

