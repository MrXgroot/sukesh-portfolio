/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07080d",
        night: "#0d1018",
        cloud: "#f7f3ea",
        mist: "#a9b1c7",
        line: "rgba(255,255,255,0.12)",
        coral: "#ff7a6b",
        mint: "#8cf2c6",
        iris: "#8ab4ff",
        amber: "#ffd166"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Satoshi", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(140, 242, 198, 0.22)",
        soft: "0 24px 90px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at 14% 18%, rgba(255, 122, 107, 0.22), transparent 26%), radial-gradient(circle at 76% 8%, rgba(138, 180, 255, 0.24), transparent 30%), radial-gradient(circle at 58% 86%, rgba(140, 242, 198, 0.18), transparent 26%)"
      }
    }
  },
  plugins: []
};
