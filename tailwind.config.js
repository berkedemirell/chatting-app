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
    "./src/components/AddFriend.jsx",
  ],
  theme: {
    extend: {
      width: { deneme: "35rem" },
      screens: {
        'llg': {'max': '1100px'},
        'mmd': {'max': '850px'},
        'mdx': {'max': '700px'},
        'sms': {'max': '560px'},
        'ssm': {'max': '460px'},
        'xss': {'max': '400px'},
      }
    },
  },
  plugins: [],
};
