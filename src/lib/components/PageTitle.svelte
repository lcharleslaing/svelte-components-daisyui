<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { selectedTheme } from '$lib/theme';
	import TgyLogo from './TgyLogo.svelte';
	import settings from '$lib/settings/settings';

	// Extract the devmode value from the import.meta.env object
	const devmode = import.meta.env.VITE_DEV === 'true';

	let pageTitle = '';
	let currentTheme = '';

	onMount(() => {
		const pageName = $page.url.pathname.split('/').pop();
		pageTitle = pageName
			? pageName.charAt(0).toUpperCase() + pageName.slice(1)
			: settings.businessName;

		selectedTheme.subscribe((value) => {
			currentTheme = value;
			// Update document title with the selected theme
			document.title = `${pageTitle} - ${currentTheme}`;
		});
	});
</script>

<div class="mt-6 flex justify-center">
	<div class="bg-base-300 px-6 py-2 shadow-sm">
		<h1 class="pb-2 text-4xl font-extrabold">{pageTitle}</h1>
	</div>
</div>

{#if devmode}
	<p class="text-center text-sm font-semibold text-green-600">{currentTheme.toUpperCase()}</p>
	<p
		class="font-white absolute left-2 top-20 rounded-full bg-green-600 p-2 text-center text-xs font-black text-white shadow-lg"
	>
		DEV
	</p>
{/if}
