/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1A2E22",      // Deep Forest Green - Professional
          primary: "#5A7A58",   // Muted Sage - Calming
          secondary: "#D4B483", // Earthy Gold - Accent
          light: "#F3F6F4",     // Cool White
          cream: "#FAFAF9",     // Warm White
          surface: "#FFFFFF",
        },
        accent: {
          sage: "#E2E8E0",
          stone: "#E7E5E4",
          soft: "#F5F5F4",
          rose: "#F43F5E",
          sun: "#F59E0B",
          lavender: "#A78BFA",
          sky: "#38BDF8",
        },
      },
      fontFamily: {
        display: ["'DM Serif Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        '3xl': "1.5rem",
        '4xl': "2rem",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 10px 30px -10px rgba(0,0,0,0.02)',
        'floating': '0 20px 40px -5px rgba(26, 46, 34, 0.1)',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'bounce-soft': 'bounceSoft 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
