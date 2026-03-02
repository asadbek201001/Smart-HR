/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          fadeUp: {
            "0%": { opacity: "0", transform: "translateY(40px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          scaleIn: {
            "0%": { opacity: "0", transform: "scale(0.7)" },
            "100%": { opacity: "1", transform: "scale(1)" },
          },
          rotateIn: {
            "0%": { opacity: "0", transform: "rotate(-180deg)" },
            "100%": { opacity: "1", transform: "rotate(0deg)" },
          },
        },
        animation: {
          fadeUp: "fadeUp 0.8s ease forwards",
          scaleIn: "scaleIn 0.8s ease forwards",
          rotateIn: "rotateIn 1s ease forwards",
        },
      },
    },
    plugins: [],
  };