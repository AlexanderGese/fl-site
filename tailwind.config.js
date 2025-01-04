/** @type {import('tailwindcss').Config} */
import settings from './src/config/settings.json';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: settings.theme.colors.background,
        primary: settings.theme.colors.primary,
        secondary: settings.theme.colors.secondary,
        accent: settings.theme.colors.accent,
        text: settings.theme.colors.text,
      },
      fontFamily: {
        display: [settings.theme.fonts.heading, 'sans-serif'], // Montserrat
        body: [settings.theme.fonts.body, 'sans-serif'],       // Roboto
        caption: [settings.theme.fonts.caption, 'sans-serif'], // Lato
      },
    },
  },
  plugins: [],
};
