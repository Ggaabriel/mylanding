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
                textColor: "#1A1918",
                iceColor: "#518AC1"
            },
            screens: {
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
                  '0%, 100%': {transform: 'rotate(2deg) translate(0,0)'  },
                  '50%': {transform: 'rotate(0deg) translate(0,15%)' },
                },
                like: {
                    'from': { backgroundPosition: '0px' },
                    'to' :  { backgroundPosition: '-2400px' },
                  }
            },
            animation: {
                'levitate': 'levitate 5s ease-in-out infinite',
                'likeAnim' : 'like 1s steps(24) forwards;'
            },
            backgroundImage: {
                'pinkClip': "url('/src/assets/images/pinkClip.png')",
                'caveBg': "url('/src/assets/images/caveBg.png')",
                'effects': "url('/src/assets/images/advantages/effects.png')",
                'quality': "url('/src/assets/images/advantages/quality.png')",
                'experience': "url('/src/assets/images/advantages/experience.png')",
                'like' : "url('/src/assets/images/likeAnim.png')",

            }
        },
    },
    plugins: [
    ],
};
