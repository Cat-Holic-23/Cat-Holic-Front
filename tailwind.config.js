/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-5px) rotate(0.5deg)" },
        },
      },
      animation: {
        float1: "float1 3s ease-in-out infinite",
        float2: "float2 4s ease-in-out infinite",
      },

      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
