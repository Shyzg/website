module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {},
        fontFamily: {},
        spacing: {}
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
}