/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", 
    './node_modules/flowbite/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#62060F",
        secondary: "#DBD8C8",
        tertiary: "#87000d",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
  ],
};
