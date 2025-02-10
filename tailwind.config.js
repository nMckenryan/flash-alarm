/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#60c3d8",
        secondary: "#88efa8",
        accent: "#f9f871",
        neutral: "#3D4451",
        base: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
