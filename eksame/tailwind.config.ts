import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#5E2E53",
                secondary: "#E1A1E9",
                primaryWhite: "#EAEAEA",
                primaryBlack: "#000000",
            },
            fontSize: {
                sm: "18px",
                md: "24px",
                lg: "36px",
            },
        },
    },
    plugins: [],
} satisfies Config;
