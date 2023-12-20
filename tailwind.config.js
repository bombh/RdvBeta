/** @type {import('tailwindcss').Config} */

const nativewind = require("nativewind/tailwind/css")

module.exports = {
  content: [ "./index.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {},
  },
//   plugins: [nativewind()],
}

