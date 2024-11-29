/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1320px",
      },

    },
    fontFamily: {
      godzilla: ['godzilla', 'sans-serif'],
      oswald : ['oswald', 'sans-serif'],
      Righteous : ['Righteous', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-bg':"url('./assets/images/webp/hero-background.webp')",
        'crew-bg':"url('./assets/images/webp/crew-classes-background.webp')",
         'traits-bg':"url('./assets/images/webp/traits-background.webp')",
          'faq-bg':"url('./assets/images/webp/faq-background.webp')"
      }
    },
  },
  plugins: [
     ],
     
} 