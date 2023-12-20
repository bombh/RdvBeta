module.exports = {
   plugins: {
     tailwindcss: {},
     autoprefixer: {},
   [require("tailwindcss"), [require("nativewind/postcss")]],
   }
 }