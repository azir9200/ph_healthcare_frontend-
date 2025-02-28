
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ This ensures Tailwind scans all files in `src/`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
