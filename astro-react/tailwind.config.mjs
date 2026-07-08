/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b3c82',
        'primary-light': '#0d4799',
        'primary-lighter': '#e8eef8',
        secondary: '#5ac8fa',
        accent: '#ff3b30',
        success: '#34c759',
        warning: '#ffcc00',
        danger: '#ff453a',
        dark: '#1d1d1f',
        light: '#ffffff',
        gray: {
          50: '#f5f5f7',
          100: '#f2f2f7',
          200: '#e5e5ea',
          300: '#d1d1d6',
          400: '#c7c7cc',
          500: '#aeaeb2',
          600: '#8e8e93',
          700: '#636366',
          800: '#48484a',
          900: '#3a3a3c',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'apple': '12px',
        'apple-lg': '18px',
      },
    },
  },
  plugins: [],
}
