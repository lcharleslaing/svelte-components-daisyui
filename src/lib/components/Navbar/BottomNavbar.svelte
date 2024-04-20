<script>
	import settings from '$lib/settings/settings';
	import { page } from '$app/stores'; // Import the page store to get the current route

	/**
	 * @type {string}
	 */

	$: currentRoute = $page.url.pathname;
</script>

<div class="btm-nav">
	<a href="/" class={currentRoute === '/' ? 'active' : ''}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
			/></svg
		>
		<span class="btm-nav-label text-sm">Home</span>
	</a>
	<a href="/about" class={currentRoute === '/about' ? 'active' : ''}>
		<svg
			class="h-5 w-5"
			viewBox="0 0 512 512"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<title>about</title>
			<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g id="about-white" fill="currentColor" transform="translate(42.666667, 42.666667)">
					<path
						d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
						id="Shape"
					>
					</path>
				</g>
			</g>
		</svg>
		<span class="btm-nav-label text-sm">Why US</span>
	</a>
	<a href="/promotions" class={currentRoute === '/promotions' ? 'active' : ''}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
			/></svg
		>
		<span class="btm-nav-label text-sm">Promo's</span>
	</a>
	<a href="/services" class={currentRoute === '/services' ? 'active' : ''}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span class="btm-nav-label text-sm">Services</span>
	</a>
	<a href="/contact" class={currentRoute === '/contact' ? 'active' : ''}>
		<svg
			class="h-5 w-5"
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 512 512"
			xml:space="preserve"
		>
			<g>
				<g>
					<path
						style="fill:currentColor;"
						d="M423.795,31.763H88.205C39.363,31.763,0,71.571,0,119.966v192.679
			c0,48.711,39.699,88.205,88.205,88.205h54.841v18.531c0,10.656,8.638,19.292,19.292,19.292h84.429v22.253
			c0,17.109,20.595,25.661,32.752,13.821l83.601-81.417c7.765-7.561,7.783-20.063,0-27.643l-83.601-81.416
			c-12.196-11.883-32.752-3.204-32.752,13.821v22.251h-84.429c-10.656,0-19.292,8.638-19.292,19.292v18.533H88.205
			c-11.198,0-21.458-4.072-29.396-10.802l140.826-129.077c58.265,38.135,67.367,29.69,112.731,0l140.826,129.077
			c-7.938,6.73-18.198,10.802-29.396,10.802h-8.808c-11.785,0-21.339,9.554-21.339,21.339s9.554,21.34,21.339,21.34h8.808
			C472.247,400.85,512,361.406,512,312.645V119.966C512,71.476,472.549,31.763,423.795,31.763z M42.679,304.258V119.966
			c0-1.44,0.075-2.862,0.206-4.268l119.899,78.474L42.679,304.258z M266.284,197.444c-6.247,4.089-14.32,4.089-20.567-0.001
			L66.347,80.046c6.491-3.568,13.94-5.604,21.857-5.604c364.554,0,343.118-2.273,357.449,5.604L266.284,197.444z M469.321,304.258
			L349.215,194.174l119.9-78.475c0.131,1.406,0.206,2.828,0.206,4.268V304.258z"
					/>
				</g>
			</g>
		</svg>
		<span class="btm-nav-label text-sm">Contact</span>
	</a>
	<a href="tel:{settings.businessPhone}" class="">
		<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				style="stroke: currentColor"
			/>
		</svg>
		<span class="btm-nav-label text-sm">Call</span>
	</a>
</div>
