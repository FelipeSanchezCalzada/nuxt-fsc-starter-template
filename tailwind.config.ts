import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,vue,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} satisfies Config
