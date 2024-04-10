/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
    colors: {
      'neutral1' : '#FFF5E3',
      'neutral2' : '#3a1e01',
      'primer' : '#84451a',
      'sekunder' : '#ce9663',
      'tersier' : '#f6ddb0',
      'white' : '#fff'
    }
  },
  plugins: [],
};
