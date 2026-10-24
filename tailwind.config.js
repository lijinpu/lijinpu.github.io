/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'black': '#000',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            // 全站统一强调色：blue-700（深色模式 blue-400）
            a: {
              color: theme('colors.blue.700'),
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.blue.900')
              },
              code: { color: theme('colors.blue.700') }
            },
            code: {
              color: theme('colors.pink.600'),
            },
            // 标题统一用 bold (700)，不再用 extrabold (800)
            h1: {
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.2xl'),
              marginBottom: 0
            },
            h2: {
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.xl'),
            },
            h3: {
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.lg'),
            },
            hr: {
              marginTop: '2rem',
              marginBottom: '2rem'
            },
            p: {
              color: theme('colors.gray.800'),
            },
            img: {
              marginTop: 0,
              marginBottom: 0
            },
            ul: {
              marginTop: 0,
            },
            blockquote: {
              p: {
                color: theme('colors.gray.600')
              }
            },
            pre: {
              position: 'relative',
              code: {
                overflow: 'hidden',
                whiteSpace: 'pre-wrap !important',
              },
              button: {
                position: 'absolute',
                right: '0.5rem',
                top: '0.5rem',
                display: 'none',
              },
              '&:hover': {
                button: {
                  display: 'block',
                }
              }
            }
          }
        },
        invert: {
          css: {
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300')
              },
              code: { color: theme('colors.blue.400') }
            },
            code: { color: theme('colors.pink.400') },
            p: {
              color: theme('colors.gray.200'),
            },
            blockquote: {
              p: {
                color: theme('colors.gray.400')
              }
            },
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
}
