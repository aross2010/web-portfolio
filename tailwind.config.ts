import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#E09303',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      screens: {
        xl: '1250px',
        lg: '950px',
        md: '700px',
        sm: '500px',
      },
    },
  },
  plugins: [],
}
export default config
