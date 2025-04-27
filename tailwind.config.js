/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Hind Siliguri', 'Noto Sans Bengali', 'sans-serif'],
          title: ['Noto Sans Bengali', 'Hind Siliguri', 'sans-serif'],
          arabic: ['Amiri', 'serif'],
          'arabic-title': ['Aref Ruqaa', 'serif'],
        },
        colors: {
          islamic: {
            green: {
              50: 'var(--islamic-green-50)',
              100: 'var(--islamic-green-100)',
              200: 'var(--islamic-green-200)',
              300: 'var(--islamic-green-300)',
              400: 'var(--islamic-green-400)',
              500: 'var(--islamic-green-500)',
              600: 'var(--islamic-green-600)',
              700: 'var(--islamic-green-700)',
              800: 'var(--islamic-green-800)',
              900: 'var(--islamic-green-900)',
            },
            blue: {
              50: 'var(--islamic-blue-50)',
              100: 'var(--islamic-blue-100)',
              200: 'var(--islamic-blue-200)',
              300: 'var(--islamic-blue-300)',
              400: 'var(--islamic-blue-400)',
              500: 'var(--islamic-blue-500)',
              600: 'var(--islamic-blue-600)',
              700: 'var(--islamic-blue-700)',
              800: 'var(--islamic-blue-800)',
              900: 'var(--islamic-blue-900)',
            },
            gold: {
              50: 'var(--islamic-gold-50)',
              100: 'var(--islamic-gold-100)',
              200: 'var(--islamic-gold-200)',
              300: 'var(--islamic-gold-300)',
              400: 'var(--islamic-gold-400)',
              500: 'var(--islamic-gold-500)',
              600: 'var(--islamic-gold-600)',
              700: 'var(--islamic-gold-700)',
              800: 'var(--islamic-gold-800)',
              900: 'var(--islamic-gold-900)',
            },
            teal: {
              50: 'var(--islamic-teal-50)',
              100: 'var(--islamic-teal-100)',
              200: 'var(--islamic-teal-200)',
              300: 'var(--islamic-teal-300)',
              400: 'var(--islamic-teal-400)',
              500: 'var(--islamic-teal-500)',
              600: 'var(--islamic-teal-600)',
              700: 'var(--islamic-teal-700)',
              800: 'var(--islamic-teal-800)',
              900: 'var(--islamic-teal-900)',
            },
          },
        },
        backgroundImage: {
          'islamic-pattern': "url('/images/islamic-pattern.svg')",
          'geometric-light': "url('/images/geometric-light.svg')",
        },
        animation: {
          'spin-slow': 'spin 30s linear infinite',
          'spin-slow-reverse': 'spin 40s linear infinite reverse',
        }
      },
    },
    plugins: [],
  }
  
  