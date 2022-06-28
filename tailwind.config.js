/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          "white-lightest": "rgb(250,250,250)",
          gray: "#EFEFEF",
          "gray-font": "#6F6F6F",
          "gray-light-font": "rgb(142, 142, 142)",
          "gray-border": "rgb(205,205,205)",
          blue: "rgb(0, 149, 246)",
          "black-light": "rgb(38, 38, 38)",
        },
      },
      borderWidth: {
        "0px": "0px",
        "1px": "1px",
      },
      spacing: {
        "0px": "0px",
        "8px": "8px",
        "10px": "10px",
        "12px": "12px",
        "16px": "16px",
        "20px": "20px",
        "25%": "25%",
        "33%": "33%",
        "50%": "50%",
      },
      fontSize: {
        "12px": "12px",
        "14px": "14px",
      },
      borderRadius: {
        "5px": "5px",
        "10px": "10px",
      },
      flexBasis: {
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
      },
    },
    container: {
      screens: {
        sm: "975px",
        md: "975px",
        lg: "975px",
        xl: "975px",
        "2xl": "975px",
      },
    },
  },
  plugins: [],
};
