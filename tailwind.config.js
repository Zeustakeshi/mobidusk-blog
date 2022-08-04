/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Montserrat", "Poppins", "sans-serif "],
            },
            colors: {
                primary: "#2EBAC1",
                secondary: "#23BB86",
                black: "#292D32",
                gray6B: "#6B6B6B",
            },
            boxShadow: {
                ["style-1"]: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                ["style-2"]: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                ["style-3"]: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                ["style-4"]: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                ["style-5"]: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                ["style-6"]: "10px 10px 20px rgba(218, 213, 213, 0.25)",
            },
        },
    },
    plugins: [],
};
