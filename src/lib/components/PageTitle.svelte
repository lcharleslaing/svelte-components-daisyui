<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { selectedTheme } from '$lib/theme';
	import settings from '$lib/settings/settings';

	// Extract the devmode value from the import.meta.env object
	const devmode: boolean = import.meta.env.VITE_DEV === 'true';

	let pageTitle: string = '';
	let currentTheme: string = '';
	export let customTitle: string = '';

	onMount(() => {
		// Check if pathname matches any href in mainMenu and update pageTitle accordingly
		const menuEntry = Object.entries(settings.mainMenu).find(
			([_, value]) => value.href === $page.url.pathname
		);
		pageTitle = menuEntry ? menuEntry[1].title : settings.businessName;

		selectedTheme.subscribe((value: string) => {
			currentTheme = value;
			// Update document title with the selected theme
			document.title = `${pageTitle}`;
		});
	});
</script>

<div class="mt-6 flex justify-center">
	<div class="mb-3 bg-base-300 px-6 py-2 shadow-sm">
		<h1 class="pb-1.5 text-4xl font-extrabold">{pageTitle ? customTitle : 'Custom'}</h1>
	</div>
</div>
