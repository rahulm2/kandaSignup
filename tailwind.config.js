module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: '#fff',
            secondary: '#F9F9F9',
            inputBorder: '#E5E5E5',
            header: '#00206A',
            accent: '#005AEC',
            error: 'red'
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem'
        },
        screens: {
            md: '575px'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
