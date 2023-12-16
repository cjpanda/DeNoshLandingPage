/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
      colors: {
        primary: {
          DEFAULT: "#14532d",
          hover: "#166534",
        },
        secondary: "#6eb535",
        background: "#dcfce7",
      },
      backgroundImage: {
        "hero-bg": "url('/blob.png')",
      },
    },
  },
  plugins: [],
};
