/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#009B4D",
          light: "#00B85C",
          dark: "#007A3D",
        },
        darkgreen: {
          DEFAULT: "#006B3C",
          light: "#008049",
          dark: "#004F2C",
        },
        navy: {
          DEFAULT: "#142D4E",
          light: "#1E3F6F",
          dark: "#0D1F37",
        },
        greenlight: "#F0F9F3",
        graybg: "#F5F7F6",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.7s ease-out",
        "slide-in-right": "slideInRight 0.7s ease-out",
        "float": "float 4s ease-in-out infinite",
        "float-delay": "float 4s ease-in-out 1.5s infinite",
        "ping-slow": "ping 2s cubic-bezier(0,0,0.2,1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        card: "0 2px 16px rgba(0, 0, 0, 0.07)",
        "card-hover": "0 12px 40px rgba(0, 155, 77, 0.15)",
        green: "0 6px 20px rgba(0, 155, 77, 0.35)",
        "green-sm": "0 3px 12px rgba(0, 155, 77, 0.25)",
        navy: "0 6px 20px rgba(20, 45, 78, 0.3)",
        xl2: "0 20px 60px rgba(0,0,0,0.12)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
