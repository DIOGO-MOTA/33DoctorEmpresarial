import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#5dbcab',
          300: '#00B37E',
          900: '#015F43',
          700: '#058300',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#D6110F',
        },
        gray: {
          100: '#fafafa',
          200: '#DADADA',
          300: '#8D8D99',
          500: '#383838',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
    fontFamily: {
      heading: "Montserrat",
      body: "Montserrat",
    },


    svg: {
      color: '#000',
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1680px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}
export default config
