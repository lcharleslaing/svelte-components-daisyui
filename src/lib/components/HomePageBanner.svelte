<script>
	import content_settings from '$lib/settings/content_settings';
</script>

<div class="relative m-1">
	<!-- Image container -->
	<div class="overflow-hidden">
		<img
			src={content_settings.homePageBannerText.image || 'banner_image.jpeg'}
			alt="Banner"
			class="min-h-60 w-full object-cover"
			style="width: 120%; max-width: none; margin-left: -10%;"
		/>
	</div>
	<!-- Overlay container -->
	<div class="absolute inset-0 flex items-center justify-center">
		<div class="w-3/4 bg-black bg-opacity-40 p-4 text-white shadow-md lg:w-1/3">
			<h2 class="text-center text-2xl font-bold lg:text-6xl">
				{content_settings.homePageBannerText.title}
			</h2>
			<div class="divider divider-neutral"></div>
			<p class="text-sm">{content_settings.homePageBannerText.description}</p>
		</div>
	</div>
</div>
