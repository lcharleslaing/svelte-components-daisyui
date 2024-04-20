<script>
	import { page } from '$app/stores';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import content_settings from '$lib/settings/content_settings';
	import { onMount } from 'svelte';

	// Extract services from content settings
	const services = content_settings.services;

	onMount(() => {});
</script>

<PageTitle />

{#each Object.values(services) as service}
	<div class="m-1 flex flex-col bg-base-300 lg:flex-row">
		<!-- Image container -->
		<div id="image-container" class="text-center lg:w-1/3">
			<img id="image" src={service.image} alt="" class="h-full w-full object-cover" />
		</div>
		<!-- Text container -->
		<div id="text-container" class="text-center lg:w-2/3">
			<div class="flex flex-col items-center justify-center">
				<h1 class="mt-4 text-2xl font-bold lg:text-4xl">
					{service.title}
				</h1>
				<p class="p-4 text-justify lg:text-2xl">
					{service.description}
				</p>
				<div class="mb-4 mr-4">
					<a href={service.url} class="btn btn-primary"> See Details </a>
				</div>
			</div>
		</div>
	</div>
{/each}
