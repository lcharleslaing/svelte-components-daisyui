<script>
	/**
	 * @type {any}
	 */
	export let src;
	export let title = 'Photo Card';
	export let desc = 'Photo card component with description overlay.';
</script>

<div class="relative">
	<img {src} alt="" class="rounded-2xl" />
	<div
		class="absolute bottom-0 left-0 right-0 m-2 rounded-2xl bg-black bg-opacity-60 p-1 text-white"
	>
		<!-- Description card content goes here -->
		<h3 class="mb-2 text-center text-lg font-bold uppercase">{title}</h3>
		<p class="px-4 text-sm">{desc}</p>
	</div>
</div>
