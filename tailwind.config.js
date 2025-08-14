/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#f7f9f2",
        secondary: "#e8c5e5",
        thirdColor: "#f19ed2",
        forthColor: "#91ddcf",
        text: "#817C7C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-calsans)", "system-ui", "sans-serif"],
      },

      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "75%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "fade-left": {
          "0%": { transform: "translateX(100%)", opacity: "0%" },
          "30%": { transform: "translateX(0%)", opacity: "100%" },
          "100%": { transform: "translateX(0%)", opacity: "0%" },
        },
        "fade-right": {
          "0%": { transform: "translateX(-100%)", opacity: "0%" },
          "30%": { transform: "translateX(0%)", opacity: "100%" },
          "100%": { transform: "translateX(0%)", opacity: "0%" },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": { "line-height": "0%", opacity: "0%" },
          "80%": { opacity: "100%" },
          "100%": { "line-height": "100%", opacity: "100%" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
};

export default config;
