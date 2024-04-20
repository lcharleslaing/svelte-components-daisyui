<script lang="ts">
	import HomePageBanner from '$lib/components/HomePageBanner.svelte';
	import HomePageServiceCard from '$lib/components/HomePageServiceCard.svelte';
	import ImageChangeWithOneText from '$lib/components/ImageChangeWithOneText.svelte';
	import InspectionCard from '$lib/components/InspectionCard.svelte';
	import RequestQuoteCard from '$lib/components/icons_components/ServiceIcons.svelte';
	import TgyLogo from '$lib/components/TgyLogo.svelte';
	import { selectedTheme } from '$lib/theme';
	import content_settings from '$lib/settings/content_settings';

	// Define the keys of the services object
	const serviceKeys = Object.keys(content_settings.services) as Array<
		keyof typeof content_settings.services
	>;

	// Define an interface for the service details
	interface ServiceDetails {
		title: string;
		description: string;
		image: string;
		buttonText: string;
		url: string;
	}
</script>

<div class="">
	<TgyLogo />
	<HomePageBanner />
	<!-- <RequestQuoteCard /> -->

	<!-- Iterate over all services and render HomePageServiceCard for each service -->
	{#each serviceKeys as service}
		<HomePageServiceCard {service} />
	{/each}

	<InspectionCard />
</div>
