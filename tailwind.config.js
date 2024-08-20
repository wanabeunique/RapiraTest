/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {

        colors: {
            'gray': {
                100: '#f9f9f9',
                200: '#f1f1f2',
                300: '#e1e3ea',
                400: '#d8d8e5',
                500: '#a1a5b7',
                600: '#7e8299',
                700: '#7e8299',
                800: '#3f4254',
                900: '#181c32',
            },
            'background': '#ffffff',
            'foreground': '#000000',
            'primary': '#3e97ff',
            'primary-active': '#2884ef',
            'primary-light': '#eef6ff',
        },
        extend: {
            borderRadius: {
                DEFAULT: '12px',
                l: '20px',
            },
            container: {
                center: true,
                padding: '10px',
                screens: {
                    sm: '100%',
                    md: '100%',
                    lg: '1024px',
                    xl: '1300px',
                },
            },
        },
    },
    plugins: [],
}

