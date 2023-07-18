/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
      colors: {
        d4: "#0F044C",
        d3: "#141E61",
        d2: "#787A91",
        d1: "#EEEEEE",
        l4: "#6096B4",
        l3: "#93BFCF",
        l2: "#BDCDD6",
        l1: "#EEE9DA",
        c1: "#000814",
        c2: "#001d3d",
        c3: "#003566",
        c4: "#ffc300",
        c5: "#ffd60a",
      },
      width: {
        sml: "85%",
        mid: "60%",
        lrg: "30%",
      },
    },
  },
  plugins: [],
};
