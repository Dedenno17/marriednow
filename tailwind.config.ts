import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkBlue: '#7286D3',
        skyBlue: '#8EA7E9',
        grayBlue: '#3E5E0FF',
        primaryCream: '#FFF2F2',
        primaryBlack: '#333B47',
        silver: '#C0C0C0',
        Gold: '#FFD700',
        platinum: '##E5E4E2',
        simpleMinimalist: {
          gray: '#9e9f9e',
          black: '383b42',
          white: '#e4e3df',
          red: '#e4a99f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
