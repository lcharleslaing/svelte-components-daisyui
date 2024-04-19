<script lang="ts">
	import content_settings from '$lib/settings/content_settings';
	import { onMount } from 'svelte';

	export let service;

	// Define the selected service
	let selectedService: keyof typeof content_settings.services = service;

	// Get the details of the selected service
	const selectedServiceDetails = content_settings.services[selectedService];

	// Define an interface for the service details
	interface ServiceDetails {
		title: string;
		description: string;
		image: string;
		buttonText: string;
		url?: string; // Make url optional
	}
</script>

<div class="m-1 flex flex-col bg-base-300 lg:flex-row">
	<!-- Image container -->
	<div id="image-container" class="text-center lg:w-1/3">
		<img id="image" src={selectedServiceDetails.image} alt="" class="h-full w-full object-cover" />
	</div>
	<!-- Text container -->
	<div id="text-container" class="text-center lg:w-2/3">
		<div class="flex flex-col items-center justify-center">
			<h1 class="mt-4 text-2xl font-bold lg:text-4xl">
				{selectedServiceDetails.title}
			</h1>
			<p class="p-4 text-justify lg:text-2xl">
				{selectedServiceDetails.description}
			</p>
			<div class="mb-4 mr-4">
				<a href={selectedServiceDetails.url} class="btn btn-primary">
					{selectedServiceDetails.buttonText}
				</a>
			</div>
		</div>
	</div>
</div>
