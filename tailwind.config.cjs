/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				customTheme: {
					primary: 'white',
					secondary: '#f6d860',
					accent: '#37cdbe',
					neutral: '#3d4451',
					textPrimary: 'black'
				}
			},
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter',
			'dim',
			'nord',
			'sunset'
		]
	},
	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('daisyui')]
};

module.exports = config;
