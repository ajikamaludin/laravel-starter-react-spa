const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/views/**/*.blade.php",
        "./resources/views/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
