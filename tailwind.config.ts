import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  separator: '_',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    counterIncrement: {
      none: 'none',
      page: 'page',
    },
    breakBefore: {
      auto: 'auto',
      avoid: 'avoid',
      always: 'always',
      all: 'all',
      avoidPage: 'avoid-page',
      page: 'page',
      left: 'left',
      right: 'right',
      recto: 'recto',
      verso: 'verso',
      avoidColumn: 'avoid-column',
      column: 'column',
      avoidRegion: 'avoid-region',
      region: 'region',
    },
    extend: {},
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          ci: (value) => ({
            counterIncrement: value
          }),
          "target-counter": (value) => ({
            content: `leader(".") target-counter(attr(href),${value})`
          }),
          "counter": (value) => ({
            content: `counter(${value})`
          }),
        },
        { values: theme('counterIncrement') }
      )
      matchUtilities(
        {
          "break-bf": (value) => ({
            breakBefore: value
          }),
        },
        { values: theme('breakBefore') }
      )
    }),
  ],
}
