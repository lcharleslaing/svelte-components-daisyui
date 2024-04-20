<script lang="ts">
	import content_settings from '$lib/settings/content_settings';
	import settings from '$lib/settings/settings';
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

<div class="my-1 gap-2 sm:flex sm:flex-col lg:flex-row lg:justify-center">
	<!-- Image container -->
	<div id="image-container" class="relative mx-1 w-full">
		<img id="image" src={selectedServiceDetails.image} alt="" class="w-full object-cover lg:h-80" />
		<!-- Text overlay -->
		<div class="absolute inset-0 flex flex-col items-center justify-center">
			<div class="bg-base-300 bg-opacity-50 p-8 text-base-content">
				<h1 class="mb-4 text-center text-4xl font-black opacity-70">
					{selectedServiceDetails.title}
				</h1>
				<div class="flex justify-center">
					<a href={selectedServiceDetails.url || '#'} class="btn-xl btn btn-accent">
						See Details
					</a>
					<a href={settings.mainMenu.Services.href} class="btn-xl btn btn-secondary ml-4">
						All Services
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
