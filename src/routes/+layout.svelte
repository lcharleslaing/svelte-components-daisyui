<script>
	// import settings from '$lib/settings';
	import '../app.pcss';
	import Footer from '$lib/components/Navbar/Footer.svelte';
	import { selectedTheme } from '$lib/theme';
	import BottomNavbar from '$lib/components/Navbar/BottomNavbar.svelte';
	import NavbarLeftRightDrawers from '$lib/components/Navbar/NavbarLeftRightDrawers.svelte';
</script>

<html lang="en" data-theme={$selectedTheme}>
	<body>
		<div class="z-index">
			<!-- <Navbar /> -->
			<NavbarLeftRightDrawers />
			<div class="z-index min-h-screen">
				<slot />
			</div>
			<Footer />
			<BottomNavbar />
		</div>
	</body>
</html>

<style>
	/* Set z-index for dropdown menus */
	.z-index {
		z-index: 900; /* Adjust the value as needed */
	}
</style>
