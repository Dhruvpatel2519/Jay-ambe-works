/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07111f",
          900: "#0b172a",
          800: "#10213a",
          700: "#17365f",
        },
        gold: "#d8b45d",
      },
      boxShadow: {
        premium: "0 24px 70px rgba(7, 17, 31, 0.14)",
        glow: "0 18px 60px rgba(216, 180, 93, 0.24)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        rise: "rise 800ms ease-out both",
      },
    },
  },
  plugins: [],
};
