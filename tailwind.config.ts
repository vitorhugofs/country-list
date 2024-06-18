import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    colors: {
      'blue': 'hsl(209, 23%, 22%)',
      'dark-blue': 'hsl(207, 26%, 17%)',
      'very-dark-blue': 'hsl(200, 15%, 8%)',
      'gray': 'hsl(0, 0%, 52%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
    },  
    backgroundImage: {
      sun: 'url("/assets/sun.svg")',
      moon:  'url("/assets/moon.svg")',
      search: 'url("/assets/search.svg")',
      'search-dark': 'url("/assets/search-dark.svg")',
      back: 'url("/assets/back.svg")',
      'back-dark': 'url("/assets/back-dark.svg")',
    },
    fontFamily: {
      sans: ['"Nunito Sans"', 'sans-serif'],
      serif: ['"Nunito Sans"', 'sans-serif'],
    },
    borderRadius: {
      DEFAULT: '0.25rem',
    },
  },
  plugins: [],
};
export default config;
