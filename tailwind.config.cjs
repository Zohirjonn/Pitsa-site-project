/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1340px": "1340px",
        "820px": "820px",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      boxShadow: {
        tt: " 0px 2px 4px rgba(0, 0, 0, 0.04)",
      },
      padding: {
        "14px": "14px",
        "22px": "22px",
        "30px": "30px",
        "40px": "40px",
      },
      margin: {
        "40px": "40px",
        "35px": "35px",
        "30px": "30px",
      },
      width: {
        "22px": "22px",
      },
      height: {
        "22px": "22px",
      },
    },
    colors: {
      "white-1": "#FFFFFF",
      "white-2": "#F9F9F9",
      "white-3": "#B6B6B6",
      "white-4": "#F6F6F6",
      "white-5": "#F3F3F3",
      "black-1": "#000000",
      "black-2": "#282828",
      "black-3": "#364F6B",
      "orange-1": "#EB5A1E",
      "orange-2": "#EB5A1E",
    },
    borderRadius: {
      large: "30px",
      "10px": "10px",
      "5px": "5px",
      "50%": "50%",
    },
  },
  plugins: [],
};
