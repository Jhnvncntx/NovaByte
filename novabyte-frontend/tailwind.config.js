/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "#0a0a0f",
        "card-background": "#1c1c27",
        "color-border": "#2A2A3A",
        "purple-accent": "#7C3AED",
        "purple-accent-light": "#A78BFA",
        "secondary-background": "#13131A",
      },
    },
  },
  plugins: [],
};
