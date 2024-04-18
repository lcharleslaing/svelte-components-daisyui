<!-- src/lib/components/SettingsIcon.svelte -->
<script>
	import { selectedTheme } from '$lib/theme';
	import { onDestroy } from 'svelte';

	let themeColor = '';

	// Update the themeColor when the selectedTheme changes
	const unsubscribe = selectedTheme.subscribe((value) => {
		themeColor = value === 'light' ? 'black' : 'white';
	});

	// Unsubscribe from the selectedTheme store when the component is destroyed
	onDestroy(() => {
		unsubscribe();
	});
</script>

<div>
	<svg
		class="h-6 w-6 text-current"
		fill="currentColor"
		version="1.1"
		id="Filled_Icons"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="0 0 24 24"
		enable-background="new 0 0 24 24"
		xml:space="preserve"
	>
		<g id="Contact-Us-Filled">
			<path d="M1,1v17h4v4l8.5-4H22V1H1z M8,11H5V8h3V11z M13,11h-3V8h3V11z M18,11h-3V8h3V11z" />
		</g>
	</svg>
</div>

<style>
	:global(svg) {
		transition: fill 0.3s ease;
	}
</style>
