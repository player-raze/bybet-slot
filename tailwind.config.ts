import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"PingFang SC"',
          'PingFang',
          'Manrope',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', ['[data-theme="light"] &', '&[data-theme="light"]'])
    }),
  ],
} satisfies Config
