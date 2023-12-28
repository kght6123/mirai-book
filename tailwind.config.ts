import plugin from 'tailwindcss/plugin';
const flattenColorPalette = require('tailwindcss/src/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  separator: '_',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,mdoc,svelte,ts,tsx,vue}'],
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
    plugin(function({ matchUtilities, matchVariant, theme }) {
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
      matchVariant("acl", (value) => `& > .astro-code > code > .line:nth-child(${value})`, {
        values: {
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
        },
      })
      matchUtilities(
        {
          hl: (value) => ({
            "background-color": value,
            "padding-right": '1rem',
            "width": '515px',
            "display": 'inline-block',
          }),
        },
        { values: flattenColorPalette(theme('colors', {})), type: 'color' }
      )
    }),
  ],
}
