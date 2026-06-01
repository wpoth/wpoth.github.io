import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: 'rgb(255 248 240 / <alpha-value>)',
          100: 'rgb(255 232 214 / <alpha-value>)',
          200: 'rgb(255 217 184 / <alpha-value>)',
          300: 'rgb(255 200 153 / <alpha-value>)',
          400: 'rgb(255 179 102 / <alpha-value>)',
          500: 'rgb(255 153 51 / <alpha-value>)',
          600: 'rgb(255 140 26 / <alpha-value>)',
          700: 'rgb(230 126 0 / <alpha-value>)',
          800: 'rgb(204 102 0 / <alpha-value>)',
          900: 'rgb(153 77 0 / <alpha-value>)',
        },
        amber: {
          50: 'rgb(255 248 240 / <alpha-value>)',
          100: 'rgb(255 232 214 / <alpha-value>)',
          200: 'rgb(255 217 184 / <alpha-value>)',
          300: 'rgb(255 200 153 / <alpha-value>)',
          400: 'rgb(255 179 102 / <alpha-value>)',
          500: 'rgb(255 153 51 / <alpha-value>)',
          600: 'rgb(255 140 26 / <alpha-value>)',
          700: 'rgb(230 126 0 / <alpha-value>)',
          800: 'rgb(204 102 0 / <alpha-value>)',
          900: 'rgb(153 77 0 / <alpha-value>)',
        },
        'warm-gray': {
          50: 'rgb(245 245 240 / <alpha-value>)',
          100: 'rgb(239 239 235 / <alpha-value>)',
          200: 'rgb(232 232 227 / <alpha-value>)',
          300: 'rgb(224 224 218 / <alpha-value>)',
          400: 'rgb(212 212 206 / <alpha-value>)',
          500: 'rgb(169 169 163 / <alpha-value>)',
          600: 'rgb(143 143 137 / <alpha-value>)',
          700: 'rgb(110 110 104 / <alpha-value>)',
          800: 'rgb(82 82 76 / <alpha-value>)',
          900: 'rgb(58 58 53 / <alpha-value>)',
        },
      },
      keyframes: {
        'scale-down': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.95)' },
        },
        'move-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'scale-down': 'scale-down 150ms ease-out',
        'move-up': 'move-up 300ms ease-out',
        'fade-in-up': 'fade-in-up 500ms ease-out',
        'fade-in': 'fade-in 400ms ease-in-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
