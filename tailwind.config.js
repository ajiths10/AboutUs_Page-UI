/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sample-one": "url('../src/assets/block_one_croped.png')",
        "sample-two": "url('../src/assets/block_two_croped.png')",
        "sample-three": "url('../src/assets/block_three.png')",
      },
    },
  },
  plugins: [],
};
