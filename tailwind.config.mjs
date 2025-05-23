/** @type {import('tailwindcss').Config} */

console.log("✅ Tailwind config loaded!");

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F',
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
                ovo: ["Ovo", "serif"]
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        }
    },
    plugins: [],
};