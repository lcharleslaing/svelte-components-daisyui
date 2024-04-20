<script>
	import RoofingIcon from './RoofingIcon.svelte';
	import GutterIcon from './GutterIcon.svelte';
	import InsulationIcon from './InsulationIcon.svelte';
	import MasonryIcon from './MasonryIcon.svelte';
	import WindowsIcon from './WindowsIcon.svelte';
	import content_settings from '$lib/settings/content_settings';
	import SidingIcon from './SidingIcon.svelte';
</script>

<div class="m-1">
	<div class="relative h-auto bg-base-300 p-4">
		<h1 class="mb-2 text-center text-2xl font-bold">Services</h1>
		<div class="flex flex-row items-center justify-evenly">
			<a href="/services/roofing">
				<RoofingIcon width="16" />
				<p class="text-center">Roofing</p>
			</a>
			<a href="/services/siding">
				<SidingIcon width="16" />
				<p class="text-center">Siding</p>
			</a>
			<a href="/services/windows">
				<WindowsIcon width="16" />
				<p class="text-center">Windows</p>
			</a>
			<a href="/services/insulation">
				<InsulationIcon width="16" />
				<p class="text-center">Insulation</p>
			</a>
			<a href="/services/gutters">
				<GutterIcon width="16" />
				<p class="text-center">Gutters</p>
			</a>
			<a href="/services/masonry">
				<MasonryIcon width="16" />
				<p class="text-center">Masonry</p>
			</a>
		</div>
	</div>
</div>
