tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#e7b923",
                "primary-dark": "#c99e1c",
                "background-light": "rgb(176, 236, 181)",
                "background-dark": "rgb(176, 236, 181)",
                "surface-light": "#f3f0e7",
                "surface-dark": "#2a261c",
                "text-light": "#1b180e",
                "text-dark": "#f3f0e7",
                "border-light": "#e5e7eb",
                "border-dark": "#374151"
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "2xl": "2rem",
                "full": "9999px"
            },
            boxShadow: {
                'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.08)',
                'soft-xl': '0 12px 40px rgba(0, 0, 0, 0.1)'
            }
        },
    },
}
