/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      "body-color": "#959CB1",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      xl_p1: "1201px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1519px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        'nav-mobile': "url('/images/menu/map_menu.jpg')",
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -100%, 0)'
          },
          to: {
            opacity: '1',
            transform: 'translateZ(0)'
          }
        },
        flipInY: {
          '0%': {
            transform: 'perspective(400px) rotateY(90deg)',
            opacity: '0'
          },
      
          '40%': {
              transform: 'perspective(400px) rotateY(-20deg)',
          },
      
          '60%': {
              transform: 'perspective(400px) rotateY(10deg)',
              opacity: '1'
          },
      
          '80%': {
              transform: 'perspective(400px) rotateY(-5deg)'
          },
      
          '100%': {
              transform: 'perspective(400px)'
          }
        },
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateY(100%)' },
          '45%': { transform: 'translateY(-5%)' },
          '75%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(-60%)' },
        }
      },
      animation: {
        fadeInDown: 'fadeInDown 1s ease-in-out infinite',
        flipInY: 'flipInY 1s ease-in',
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 60s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
