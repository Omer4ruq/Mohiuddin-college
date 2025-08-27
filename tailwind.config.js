/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        white: "#ffffff",
        textColor: 'var(--text-color)',
        primarylight: 'var(--primary-light)',
        menuColor: 'var(--menu-color)',
         primaryNavText: '#333333', // Dark text for main nav items
        primaryNavHoverText: '#A30000', // Reddish text on hover for main nav
        primaryNavHoverBorder: '#A30000', // Reddish border on hover for main nav
        dropdownItemText: '#333333', // Text for dropdown items
        dropdownItemHoverBg: '#f8f8f8', // Light grey background on hover for dropdown items
        mobileMenuBg: '#ffffff', // Background for mobile side menu
        mobileMenuHeaderBg: '#f0f0f0', // Slightly darker header for mobile menu
        mobileMenuHoverBg: '#e0e0e0', // Hover background for mobile items
      },
      fontFamily: {
        ador: [
          '"AdorModernv1", "AdorModernv2", "AdorModernv", "Ador", "Adorv1", "Adorv2"',
        ],
        adorSemi: ["AdorSemiBold"],
        liAdorNoirrit: ["Li Ador Noirrit", "sans-serif"],
        adorBold: ["AdorBold"],
        poppins: ['"poppins"', "sans-serif"],
        inter: ['"Inter", sans-serif'],
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
     screens: {
        'customxl': '1280px', // Example custom breakpoint if you have one
        'custom2xl': '1536px', // Example custom breakpoint if you have one
      }
};
