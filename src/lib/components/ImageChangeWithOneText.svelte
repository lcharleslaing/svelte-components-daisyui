<script lang="ts">
	// Import onMount from Svelte to execute code when the component is mounted
	import { onMount } from 'svelte';

	// Define the array of image URLs
	const images = [
		'windows.png',
		'roofing.png',
		'decks.png',
		'siding.png'
		// Add more image URLs as needed
	];

	// Function to change the image source every 30 seconds
	function changeImage() {
		let index = 0; // Initialize index for the first image

		// Function to set the image source
		function setImage() {
			const img = document.querySelector('.image img') as HTMLImageElement;
			if (img) {
				img.src = images[index];
			}
		}

		// Set interval to change image every 30 seconds
		const interval = setInterval(() => {
			// Increment index for the next image, and loop back to the beginning if reaching the end
			index = (index + 1) % images.length;
			// Update the src attribute of the img element with the next image URL
			setImage();
		}, 5000); // 5 seconds interval (5,000 milliseconds)

		// Return a cleanup function to clear the interval when the component is destroyed
		return () => clearInterval(interval);
	}

	// Execute the changeImage function when the component is mounted
	onMount(changeImage);
</script>

<div class="z-0 flex justify-center">
	<div class="">
		<!-- add image -->
		<div class="image m-2 flex flex-col justify-center">
			<img src="windows.png" alt="Windows" class="rounded-xl shadow-md" />

			<!-- add overlay -->
			<div class="image-overlay my-4 text-center">
				<div class="image-overlay-content">
					<h1 class="text-2xl font-bold">Our Services</h1>
					<p class="text-justify text-opacity-80">
						Welcome to TG & Y Construction. We specialize in windows, roofing, decks, siding,
						Gutters and Insulation. Contact us and let us help you with your home improvement needs.
					</p>

					<button class="btn btn-primary my-2">Read More</button>
				</div>
			</div>
		</div>
	</div>
</div>
