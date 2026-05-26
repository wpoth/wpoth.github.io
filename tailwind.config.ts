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
          50: '#FFF5F4',
          100: '#FFE8E5',
          200: '#FFD1CB',
          300: '#FFB8B0',
          400: '#FF9B89',
          500: '#FF6B6B',
          600: '#FF5555',
          700: '#E83E3E',
          800: '#C83232',
          900: '#A82828',
        },
        amber: {
          50: '#FFFBF0',
          100: '#FFF7E6',
          200: '#FFEBD0',
          300: '#FFD9A8',
          400: '#FFC880',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        'warm-gray': {
          50: '#FAFAF9',
          100: '#F5F5F3',
          200: '#EFEFEB',
          300: '#E7E5E0',
          400: '#D6D3CC',
          500: '#A39E93',
          600: '#8B8680',
          700: '#6B6560',
          800: '#4B4540',
          900: '#2B2520',
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
