<script>
	import settings from '$lib/settings';

	import '../app.pcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Footer from '$lib/components/Navbar/Footer.svelte';
</script>

<Navbar></Navbar>
<div class="min-h-screen" data-theme={settings.theme}>
	<slot></slot>
</div>
<Footer />
