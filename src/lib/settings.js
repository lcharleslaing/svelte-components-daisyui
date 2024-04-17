// settings.js
// Site settings

export default {
	// Site title
	businessName: 'TG & Y Construction',
	businessAddress: '123 Main St.\nSpringfield, IL 62701',
	businessPhone: '217-555-5555',
	businessEmail: 'email@tgyconstruction.com',
	businessHours: 'Mon-Fri 8am-5pm',
	copyRight: '© 2021-2024 TG & Y Construction. All rights reserved.',

	mainMenuLinks: [
		// Home link
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		// Dropdown Example
		{
			label: 'Services',
			submenu: [
				{ label: 'Service 1', href: '/service1' },
				{ label: 'Service 2', href: '/service2' }
			]
		},
		// Contact link
		{ label: 'Contact', href: '/contact' },
		// Blog link
		{ label: 'Blog', href: '/blog' }
	],
	// Navbar Right Button
	navbarButton: { label: 'Contact', href: '/' },
	// Site colors
	colors: {},
	// Site fonts
	themes: [
		'customTheme',
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
	],
	// Default theme
	theme: 'dark'
};
