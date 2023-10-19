/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/data/userData.js",
    "./src/components/Login.jsx",
    "./src/components/Messages.jsx",
    "./src/components/SingleMessage.jsx",
    "./src/components/NewMessage.jsx",
    "./src/components/ErrorPage.jsx",
  ],
  theme: {
    extend: {
      width: { deneme: "35rem" },
    },
  },
  plugins: [],
};
