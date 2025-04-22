/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}', // Root files
    './src/**/*.{js,jsx,ts,tsx}', // All files in the 'src' folder and its subfolders
  ],
  presets: [require('nativewind/preset')], // NativeWind preset to work with React Native
  theme: {
    extend: {
      // Extend the default Tailwind theme if necessary
    },
  },
  plugins: [], // Add any additional plugins if necessary
};
