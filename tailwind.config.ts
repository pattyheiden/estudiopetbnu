import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown100: "#F1EEEB",
        brown200: "#A18E73",
        brown300: "#866E4B",
        brown400: "#795E38",
      },
      spacing: {
        "30": "30px",
        "155":"154px",
      },
      rotate: {
        '38': '35deg',
      },
      translate: {
        '18': '1.125rem',
      },
      width: {
        '364': '22.75rem',
      }
    },
  },
  plugins: [],
}
export default config
