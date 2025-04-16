// configure tailwind to use the specified css variable for its font stacks

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      sans: ["var(--font-noto-sans)"],
      serif: ["var(--font-noto-sans)"],
      mono: ["var(--font-noto-sans)"],
    },
  },
  plugins: [],
};
