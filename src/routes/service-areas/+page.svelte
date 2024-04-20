<script>
	import settings from '$lib/settings/settings';
	import PageTitle from '$lib/components/PageTitle.svelte';

	const areas = settings.serviceAreas;
</script>

<PageTitle customTitle="Service Areas" />

<a href="/" class="">
	<div class="mx-auto flex flex-col items-center">
		{#each Object.entries(areas) as [key, value]}
			<div class="relative w-full overflow-hidden">
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="rounded-md bg-base-300 bg-opacity-75 p-4 text-base-content">
						<h1 class="text-4xl font-semibold">{value.label}</h1>
					</div>
				</div>
				<div class="p-6 text-center">
					<img src={value.image} alt="city" class="h-96 w-full object-cover" />
				</div>
			</div>
		{/each}
	</div>
</a>
