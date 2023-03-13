/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bodyColor: "#FAE5D0",
                appaBackground: "#AEA093",
                aangPink: "#F17A76",
                woodColor: "#C57A6B",
                borderColor: "#CEB383",
                textColor: "#1A1918"
            },
            screens: {
                xs2:"250px",
                xs: "320px",
                s: "768px",
                md: "1200px",
            },
            fontFamily: {
                caveat:["Caveat", "sans-serif"],
                bellota: ["Bellota", "sans-serif"]
            },
            keyframes: {
                levitate: {
                  '0%, 100%': {  paddingTop: '0px',transform: 'rotate(3deg)' },
                  '50%': {paddingTop: '15%' , transform: 'rotate(0deg)' },
                }
            },
            animation: {
                'levitate': 'levitate 5s ease-in-out infinite'
            },
            backgroundImage: {
                'pinkClip': "url('/src/assets/images/pinkClip.png')",
            }
        },
    },
    plugins: [
    ],
};
