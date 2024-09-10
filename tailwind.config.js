/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontSize: {
        '7.5xl': '5rem'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgb(0, 113, 227)",
        darkGray: '#000029',
        textGray: '#86868b',
      },
      spacing: {
        "3.5": "0.85rem",
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-img.png')",
      }
    },
  },
  plugins: [],
};
