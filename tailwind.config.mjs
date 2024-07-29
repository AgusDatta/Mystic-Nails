/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-gray' : '#',
				'custom-green': '#96AC60'
			  }
		},
	},
	plugins: [],
}
