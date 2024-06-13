/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "Hanken Grotesk":["Hanken+Grotesk","sans-serif"]
      },

      colors:{
        "Light-red": "hsl(0, 100%, 67%)",
        "Light-red-alpha": "hsla(0, 100%, 67%,0.1)",
        "Orangey-yellow": "hsl(39, 100%, 56%)",
        "Orangey-yellow-alpha": "hsla(39, 100%, 56%,0.2)",
        "Green-teal": "hsl(166, 100%, 37%)",
        "Green-teal-alpha": "hsla(166, 100%, 37%, 0.2)",
        "Cobalt-blue": "hsl(234, 85%, 45%)",
        "Cobalt-blue-alpha": "hsla(234, 85%, 45%,0.2)",

        "Light-slate-blue-(background)":"hsl(252, 100%, 67%)",
        "Light-slate-blue-(background)-alpha":"hsla(252, 100%, 67%,0.2)",
        "Light-royal-blue-(background)": "hsl(241, 81%, 54%)",
        "Light-royal-blue-(background)-aplha": "hsla(241, 81%, 54%,0.2)",

        "Violet-blue-(circle)": "hsla(256, 72%, 46%, 1)",
        "Persian-blue-(circle)": "hsla(241, 72%, 46%, 0)",

        "White-pro": "hsl(0, 0%, 100%)",
        "White-pro-alpha": "hsla(0, 0%, 100%,0.5)",
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Pale-blue-alpha": "hsl(221, 100%, 96%,0.2)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Light-lavender-alpha": "hsla(241, 100%, 89%,0.5)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)",
        "Dark-gray-blue-alpha": "hsla(224, 30%, 27%,0.5)"

      }

    },
  },
  plugins: [],
}

