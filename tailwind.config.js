const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['Open_Sans', ...defaultTheme.fontFamily.sans]
        }
    },
    extend: {},
    plugins: [],
}