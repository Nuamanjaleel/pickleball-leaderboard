/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                cream: '#F0F7FF',
                forest: '#0A1A2F',
                rust: '#0B4F8C',
                sea: '#1A7AC5',
                neon: '#C5FF00',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                sans: ['"DM Sans"', 'Arial', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 10px 30px rgba(10, 79, 140, 0.08)',
            },
        },
    },
    plugins: [],
};