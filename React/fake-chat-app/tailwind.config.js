/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "chatarea-background":
          "url('https://e0.pxfuel.com/wallpapers/722/149/desktop-wallpaper-message-background-whatsapp-message-background-thumbnail.jpg')",
      },
    },
  },
  plugins: [],
};
