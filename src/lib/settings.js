// settings.js
// Site settings
// const devmode = import.meta.env.VITE_DEV;

export default {
	// Site title
	businessName: 'TG & Y Construction',
	businessAddress: '123 Main St.\nSpringfield, IL 62701',
	businessPhone: '217-555-5555',
	businessEmail: 'email@tgyconstruction.com',
	businessHours: 'Mon-Fri 8am-5pm',
	businessWebsite: 'http://localhost:5173',
	businessLogo: 'LOGO_SVG.svg',
	copyRight: '© 2021-2024 TG & Y Construction. All rights reserved.',
	discountCodes: [
		{ code20: 'LUCKY20', discount20: 20 },
		{ code10: 'LUCKY10', discount10: 10 },
		{ code5: 'LUCKY5', discount5: 5 }
	],
	mainMenuLinks: [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Blog', href: '/blog' },
		{ label: "Promo's", href: '/promotions' },
		{ label: 'Free Inspection', href: '/inspections' },
		{ label: 'Roofing', href: '/services/roofing' },
		{ label: 'Siding', href: '/services/siding' },
		{ label: 'Windows', href: '/services/windows' },
		{ label: 'Decks', href: '/services/decks' },
		{ label: 'Gutters', href: '/services/gutters' },
		{ label: 'Masonry', href: '/services/masonry' },
		{ label: 'Insulation', href: '/services/insulation' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Theme Settings', href: '/settings' }
	],
	serviceAreas: [
		{ label: 'Bellevue', href: '/service-areas/bellevue' },
		{ label: 'Charlotte', href: '/service-areas/charlotte' },
		{ label: 'Eagle', href: '/service-areas/eagle' },
		{ label: 'Eaton Rapids', href: '/service-areas/eaton-rapids' },
		{ label: 'Grand Ledge', href: '/service-areas/grand-ledge' },
		{ label: 'Grand Rapids', href: '/service-areas/grand-rapids' },
		{ label: 'Hastings', href: '/service-areas/hastings' },
		{ label: 'Holt', href: '/service-areas/holt' },
		{ label: 'Lake Odessa', href: '/service-areas/lake-odessa' },
		{ label: 'Lansing', href: '/service-areas/lansing' },
		{ label: 'Mason', href: '/service-areas/mason' },
		{ label: 'Mulliken', href: '/service-areas/mulliken' },
		{ label: 'Nashville', href: '/service-areas/nashville' },
		{ label: 'Olivet', href: '/service-areas/olivet' },
		{ label: 'Portland', href: '/service-areas/portland' },
		{ label: 'Potterville', href: '/service-areas/potterville' },
		{ label: 'Sunfield', href: '/service-areas/sunfield' },
		{ label: 'Vermontville', href: '/service-areas/vermontville' },
		{ label: 'Waverly', href: '/service-areas/waverly' },
		{ label: 'Woodland', href: '/service-areas/woodland' }
	],

	socialMediaLinks: [
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/tgyconstruction',
			icon: 'facebook-round.png'
		},
		{
			label: 'Twitter',
			href: 'https://www.twitter.com/tgyconstruction',
			icon: 'twitter.png'
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/tgyconstruction',
			icon: 'instagram-round.png'
		}
	],
	// Navbar Right Button
	navbarButton: { label: 'Contact', href: '/contact' },
	// Site colors
	colors: {},
	// Site themes
	themes: [
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
};
