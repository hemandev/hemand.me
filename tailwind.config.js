module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'layout-home': 'min-content min-content 1fr min-content min-content',
      },
      gridTemplateColumns: {
        'layout-home': 'minmax(2rem, 1fr) minmax(40ch, 85ch) minmax(10ch, 20ch) minmax(2rem, 1fr)'
      },
      colors: {
        primary: '#2EB872',
        'primary-light': '#A3DE83',
        secondary: '#FA4659',
        tertiary: '#564A4A',
		body: '#EDF0C7'
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      'sans-condensed': ['Roboto Condensed', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
	  cursive: ['Pacifico', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
