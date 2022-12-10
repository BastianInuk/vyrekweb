/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite-react/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'gray-primary': '#2F2F32'
			}
		}
	},
	plugins: [require('flowbite/plugin')]
}

