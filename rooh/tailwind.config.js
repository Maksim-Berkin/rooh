/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#E31E24',
                    dark: '#C41A1F',
                    light: '#FF3339',
                },
                dark: {
                    DEFAULT: '#1A1A1A',
                    light: '#2D2D2D',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}