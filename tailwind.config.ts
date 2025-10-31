import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'hdz-blue': '#295ba5',
        'croatia-red': '#FF0000',
        'croatia-white': '#FFFFFF',
        'text-dark': '#1F2937',
        'bg-light': '#F9FAFB',
      },
      backgroundImage: {
        'checkerboard': "url('/images/checkerboard-pattern.svg')",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
