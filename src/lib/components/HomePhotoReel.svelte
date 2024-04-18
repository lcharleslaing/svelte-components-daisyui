<script>
	import PhotoCard from './PhotoCard.svelte';

	window.addEventListener('DOMContentLoaded', () => {
		const reelContainer = document.querySelector('.photo-reel-container');
		const scrollSpeed = 1; // Adjust scroll speed as needed
		/**
		 * @type {number | undefined}
		 */
		let scrollInterval;

		/* Start autoscroll when the page loads */
		if (reelContainer) startAutoscroll(reelContainer);

		/* // Function to continuously scroll the photo reel */
		/**
		 * @param {Element | undefined} [reelContainer]
		 */
		function startAutoscroll(reelContainer) {
			if (!reelContainer) return;
			scrollInterval = setInterval(() => {
				reelContainer.scrollLeft += scrollSpeed; // Scroll horizontally
			}, 10); // Adjust scroll speed as needed
		}

		/* Stop autoscroll when the mouse hovers over the photo reel */
		if (reelContainer)
			reelContainer.addEventListener('mouseenter', () => {
				clearInterval(scrollInterval);
			});

		/* Resume autoscroll when the mouse leaves the photo reel */
		if (reelContainer)
			reelContainer.addEventListener('mouseleave', () => startAutoscroll(reelContainer));
	});
</script>

<div class="mt-6 px-4">
	<div class="grid w-full justify-center">
		<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			<PhotoCard
				title="Decks"
				desc="Description"
				src="Charlotte-MI-Decks-and-Patio-Companies-390x260.png"
			/>
			<PhotoCard
				title="Roofing"
				desc="Description"
				src="Roofing-Company-Charlotte-MI-390x260.png"
			/>
			<PhotoCard
				title="Siding"
				desc="Description"
				src="Siding-Installation-Companies-Charlotte-MI-390x260.png"
			/>
			<PhotoCard
				title="Windows"
				desc="Description"
				src="Window-Companies-Charlotte-MI-390x260.png"
			/>
			<PhotoCard
				title="Gutters"
				desc="Description"
				src="Window-Companies-Charlotte-MI-390x260.png"
			/>
			<PhotoCard
				title="Insulation"
				desc="Description"
				src="Window-Companies-Charlotte-MI-390x260.png"
			/>
		</div>
	</div>
</div>

<style>
</style>
