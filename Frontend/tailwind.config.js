/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hed: "#866528",
        pri: "#6D6D6D",
      },
      fontFamily: {
        "our-font": ["SourceSansPro", "system-ui"],
      },

      backgroundImage: {
        login: "url('public/loginbg.avif')",
        signin: "url('public/singin.avif')",
        sellerloginimg: "url('public/loginimg/sellerlogin.avif')",
        dashboardimg: "url('public/dashboard-img.webp')",
      },
    },
  },
  plugins: [],
};
