<script>
	import CallNowButton from './../lib/components/CallNowButton.svelte';
	// import settings from '$lib/settings';
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Footer from '$lib/components/Navbar/Footer.svelte';
	import { selectedTheme } from '$lib/theme';
	import BottomNavbar from '$lib/components/BottomNavbar.svelte';
	import NavbarLeftRightDrawers from '$lib/components/NavbarLeftRightDrawers.svelte';
</script>

<div class="z-index" data-theme={$selectedTheme}>
	<!-- <Navbar /> -->
	<NavbarLeftRightDrawers />
	<div class="z-index min-h-screen">
		<slot class="bg-black" />
	</div>
	<Footer />
	<BottomNavbar />
</div>

<style>
	/* Set z-index for dropdown menus */
	.z-index {
		z-index: 900; /* Adjust the value as needed */
	}
</style>
