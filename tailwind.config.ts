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
        dark: {
          bg: "#17212C",
          text: "#E5E7EB",
          primary: "#17212C",
          secondary: "text-gray-200", //
          tertiary: "#EF4444", // red
        },

        light: {
          bg: "#f5f5f4", //E6E6E6
          text: "#171717",
          primary: "#f5f5f4", //E5E7Eb
          secondary: "#EE1B1B",
          tertiary: "#354065"
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
