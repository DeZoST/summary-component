/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    colors: {
      'light-red': 'hsl(0, 100%, 67%)',
      'orangey-yellow': 'hsl(39, 100%, 56%)',
      'green-teal': 'hsl(166, 100%, 37%)',
      'cobalt-blue': 'hsl(234, 85%, 45%)',
      'light-slate-blue': 'hsl(252, 100%, 67%)',
      'light-royale-blue': 'hsl(241, 81%, 54%)',
      'violet-blue': 'hsla(256, 72%, 46%, 1)',
      'persian-blue': 'hsla(241, 72%, 46%, 0)',
      'light-lavender': 'hsl(241, 100%, 89%)',
      'dark-gray-blue': 'hsl(224, 30%, 27%)',
      'pale-blue': 'hsl(221, 100%, 96%)',

      'light-red-bg': 'hsla(0, 100%, 67%, 0.1)',
      'orangey-yellow-bg': 'hsla(39, 100%, 56%, 0.1)',
      'green-teal-bg': 'hsla(166, 100%, 37%, 0.1)',
      'cobalt-blue-bg': 'hsla(234, 85%, 45%, 0.1)',
    }
  },
}; 
export const plugins = [];

