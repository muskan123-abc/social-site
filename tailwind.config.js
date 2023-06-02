/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: "#25D366",
        dark: "#202C33",
        light_black: "#2A3942",
      },
      backgroundImage: {
        "whatshap-background": "url('./assets/img/jpg/wallpaper.jpg')",
      },
    },
  },
  plugins: [],
};
