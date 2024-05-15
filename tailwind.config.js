/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'primary-color': '#23394A',
				'input-color': '#445867',
				'logo-color': '#007bff',
				'input-placeholder-color': '#DEDBDB'
			},
			fontFamily: {
				sans: ['Lato', 'sans-serif']
			},
			backgroundImage: {
				image: 'url(bg.jpg)'
			}
		}
	},
	plugins: []
};
