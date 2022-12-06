/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/layout.js'],
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        'background-1': '#faf3dd',
        'background-2': '#dde5b6',
        'background-3': '#fff6f0',
        'accent-olive': '#95A253',
        'accent-light-blue': '#68b0ab',
        'accent-forest': '#0a3200',
        'accent-brown': '#98742d',
        'text': '#232023'
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
      },
      spacing: {
        xs: '0.4rem',
        sm: '0.8rem',
        'sm+': '1.2rem',
        md: '1.6rem',
        'md+': '2.4rem',
        lg: '3.2rem',
        'lg+': '4rem',
        xl: '4.8rem',
        'xl+': '5.6rem',
        '2xl': '6.4rem',
        '2xl+': '7.2rem',
        '3xl': '8rem',
        '4xl': '9.6rem',
        '5xl': '11.2rem',
        '6xl': '12.8rem',
      },
    },
  },
  plugins: [],
};
