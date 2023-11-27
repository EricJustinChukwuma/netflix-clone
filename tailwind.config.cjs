/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Helvetica",
      nunito: "nunito"
    },
    container: {
      padding: {
        DEFAULT: "15px"
      }
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1440px"
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#b809c3",
        lucy: "#ff2625",
        red: "#df0404c0",
        gray: { 100: "#808080", 200: "#323232", 300: "#212121"},
        green: "#25da72",
        cyan: "#14ffec"
      },
      backgroundImage: {
        site: "url('./assets/arcade.jpg')",
        about: "url('.assets/about.png')",
        services: "url('.asssts/services.png')",
        profileImage: "url('./assets/chess.jpg')",
        gamerImage: "url('./assets/gamer.jpg')",
        KeyboardImage: "url('./assets/keyboard.jpg')",
        workImage: "url('./assets/WorkSpace.jpg')",
        netflix: "url('./assets/netflix_image8.png')",
        netflix_loginBG: "url('./assets/netflix_login_image.png')",
        netflix_loginBG2: "url('./assets/Netflix-background_image.jpg')"
      },
      fontSize: {
        sm: "14px",
        md: "18px",
        lg: "24px",
        xl: "32px",
        xxl: "46px",
        base: "16px"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
