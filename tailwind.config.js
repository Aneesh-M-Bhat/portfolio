/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        d4: "#0F044C",
        d3: "#141E61",
        d2: "#787A91",
        d1: "#EEEEEE",
        l4: "#6096B4",
        l3: "#93BFCF",
        l2: "#BDCDD6",
        l1: "#EEE9DA",
      },
      width: {
        sml: "90%",
        mid: "60%",
        lrg: "30%",
      },
    },
  },
  plugins: [],
};
