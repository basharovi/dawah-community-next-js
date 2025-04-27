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
        },
        colors: {
          islamic: {
            green: {
              50: '#f0fdf4',
              100: '#dcfce7',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
            },
            blue: {
              50: '#eff6ff',
              100: '#dbeafe',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
            },
            gold: {
              100: '#fef9c3',
              200: '#fef08a',
              300: '#fde047',
              400: '#facc15',
              500: '#eab308',
            }
          },
        },
        backgroundImage: {
          'islamic-pattern': "url('/images/islamic-pattern.svg')",
          'geometric-light': "url('/images/geometric-light.svg')",
        }
      },
    },
    plugins: [],
  }
  
  