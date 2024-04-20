<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import content_settings from '$lib/settings/content_settings';
</script>

<PageTitle />
<div class="mx-6 flex flex-row justify-center gap-4">
	<a href="tel:517-588-8248" class="btn btn-primary">Call US</a>
	<a href="/contact" class="btn btn-primary">Email US</a>
</div>
<div class="">
	{#each Object.entries(content_settings.whyUs) as [key, value]}
		<div class=" p-6">
			<h1 class="mb-4 text-3xl font-semibold">{value.title}</h1>
			<p class="text-lg">{value.content}</p>
		</div>
	{/each}
</div>
