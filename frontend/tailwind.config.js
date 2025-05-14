/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Make sure this points to your index file (if applicable)
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
      },
      gridTemplateColumns: {
        auto: "repaet(auto-fill,minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
