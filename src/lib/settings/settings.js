// settings.js
// Site settings
// const devmode = import.meta.env.VITE_DEV;

export default {
	businessName: 'TG & Y Construction',
	businessAddress: '123 Main St.\nSpringfield, IL 62701',
	businessPhone: '5175888248',
	businessEmail: 'email@tgyconstruction.com',
	businessHours: 'Mon-Fri 8am-5pm',
	businessWebsite: 'http://localhost:5173',
	businessLogo: 'LOGO_SVG.svg',
	copyRight: '© 2021-2024 TG & Y Construction. All rights reserved.',
	discountCodes: {
		code20: {
			name: 'LUCKY20',
			value: 20
		},
		code10: {
			name: 'LUCKY10',
			value: 10
		},
		code5: {
			name: 'LUCKY5',
			value: 5
		}
	},
	mainMenu: {
		Home: { href: '/', title: 'Home' },
		about: { href: '/about', title: 'About US' },
		Services: { href: '/services', title: 'Our Services' },
		Products: { href: '/products', title: 'Our Products' },
		Blog: { href: '/blog', title: 'Blog Space' },
		Promotions: { href: '/promotions', title: "Promo's" },
		Inspection: { href: '/inspections', title: 'Inspection Request' },
		Roofing: { href: '/services/roofing', title: 'Roofing' },
		Siding: { href: '/services/siding', title: 'Siding' },
		Windows: { href: '/services/windows', title: 'Windows' },
		Decks: { href: '/services/decks', title: 'Decking' },
		Gutters: { href: '/services/gutters', title: 'Gutters' },
		Masonry: { href: '/services/masonry', title: 'Masonry' },
		Insulation: { href: '/services/insulation', title: 'Wall/Ceiling Insulation' },
		Contact: { href: '/contact', title: 'Contact US' },
		ThemeSettings: { href: '/settings', title: 'Theme Settings' }
	},

	mainMenuLinks: [
		{ label: 'Home', href: '/', title: 'Home' },
		{ label: 'about', href: '/about', title: 'About US' },
		{ label: 'Services', href: '/services', title: 'Our Services' },
		{ label: 'Service Areas', href: '/service-areas', title: 'Our Service Areas' },
		{ label: 'Products', href: '/products', title: 'Our Products' },
		{ label: 'Blog', href: '/blog', title: 'Blog' },
		{ label: 'Promotions', href: '/promotions', title: "Promo's" },
		{ label: 'Free Inspection', href: '/inspections', title: 'Inspection Request' },
		{ label: 'Roofing', href: '/services/roofing', title: 'Roofing' },
		{ label: 'Siding', href: '/services/siding', title: 'Siding' },
		{ label: 'Windows', href: '/services/windows', title: 'Windows' },
		{ label: 'Decks', href: '/services/decks', title: 'Decking' },
		{ label: 'Gutters', href: '/services/gutters', title: 'Gutters' },
		{ label: 'Masonry', href: '/services/masonry', title: 'Masonry' },
		{ label: 'Insulation', href: '/services/insulation', title: 'Wall/Ceiling Insulation' },
		{ label: 'Contact', href: '/contact', title: 'Contact US' },
		{ label: 'Theme Settings', href: '/settings', title: 'Theme Settings' }
	],
	// city images
	serviceAreas: [
		{
			label: 'Bellevue',
			href: '/service-areas/bellevue',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Downtown_Bellevue_MI.jpg/800px-Downtown_Bellevue_MI.jpg'
		},
		{
			label: 'Charlotte',
			href: '/service-areas/charlotte',
			image:
				'https://www.lansingstatejournal.com/gcdn/-mm-/8e730f04beb458b4a4e7706381c11bcbcc1e64f3/c=82-0-1852-1000/local/-/media/2017/04/12/MIGroup/Lansing/636275807015399286-charlotte3-MG-0713.jpg'
		},
		{
			label: 'Eagle',
			href: '/service-areas/eagle',
			image: 'https://img.bestplaces.net/images/states/michigan.jpg'
		},
		{
			label: 'Eaton Rapids',
			href: '/service-areas/eaton-rapids',
			image: 'https://live.staticflickr.com/7190/6923280627_603193663a_b.jpg'
		},
		{
			label: 'Grand Ledge',
			href: '/service-areas/grand-ledge',
			image: 'https://www.cityofgrandledge.com/ImageRepository/Document?documentID=514'
		},
		{
			label: 'Grand Rapids',
			href: '/service-areas/grand-rapids',
			image:
				'https://www.rightplace.org/imager/rightplace_nyc3_cdn_digitaloceanspaces_com/production/uploads/images/Grand-Rapids-Skyline-at-Sunset_4e57d52f89dc62001fa3deff5aab68af.jpg'
		},
		{
			label: 'Hastings',
			href: '/service-areas/hastings',
			image: 'https://downtownhastings.com/wp-content/uploads/2015/04/downtown3.jpg'
		},
		{
			label: 'Holt',
			href: '/service-areas/holt',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/a/a8/Delhi_Charter_Township_Holt_Michigan_Pole_Banner_2.jpg'
		},
		{
			label: 'Lake Odessa',
			href: '/service-areas/lake-odessa',
			image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Lake_Odessa.jpg'
		},
		{
			label: 'Lansing',
			href: '/service-areas/lansing',
			image: 'https://www.worldatlas.com/r/w768/upload/d4/a7/81/shutterstock-1848295390.jpg'
		},
		{
			label: 'Mason',
			href: '/service-areas/mason',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/b/b2/Downtown_Buildings_%E2%80%94_Mason%2C_Michigan.jpg'
		},
		{
			label: 'Mulliken',
			href: '/service-areas/mulliken',
			image:
				'https://www.lansingstatejournal.com/gcdn/presto/2020/08/06/PLSJ/8780c108-2f13-4cd2-90c1-a0d81419de79-MD7_9333.jpg'
		},
		{
			label: 'Nashville',
			href: '/service-areas/nashville',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Nashville_%281%29.jpg/640px-Nashville_%281%29.jpg'
		},
		{
			label: 'Olivet',
			href: '/service-areas/olivet',
			image: 'https://live.staticflickr.com/4104/5011323935_f31d733430_h.jpg'
		},
		{
			label: 'Portland',
			href: '/service-areas/portland',
			image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/PortlandMIHDA.jpg'
		},
		{
			label: 'Potterville',
			href: '/service-areas/potterville',
			image:
				'https://townsquare.media/site/691/files/2022/03/attachment-1959-same-scene-2000s.jpg?w=780&q=75'
		},
		{
			label: 'Sunfield',
			href: '/service-areas/sunfield',
			image: 'https://live.staticflickr.com/8025/7209328702_821152a024_b.jpg'
		},
		{
			label: 'Vermontville',
			href: '/service-areas/vermontville',
			image:
				'https://townsquare.media/site/691/files/2021/05/B-1940s-SAME-SCENE-2000s.jpg?w=780&q=75'
		},
		{
			label: 'Waverly',
			href: '/service-areas/waverly',
			image: 'https://www.waverlyia.com/webres/Image/downtown%20river.png'
		},
		{
			label: 'Woodland',
			href: '/service-areas/woodland',
			image:
				'https://townsquare.media/site/691/files/2018/05/DOWNTOWN-WOODLAND-LOOKING-SOUTH.png?w=1200&h=0&zc=1&s=0&a=t&q=89'
		}
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
	colors: {}
	// Site themes
};
