<script context="module">
	import settings from '$lib/settings';
	// import { page } from '$app/stores';
	import { selectedTheme } from '$lib/theme.js';
</script>

<script lang="ts">
</script>

<div class="" data-theme={selectedTheme}>
	<div class="flex items-center justify-center">
		<img src="favicon.png" alt="" class="xs:w-full sm:w-full md:w-1/2 lg:w-1/2" />
	</div>

	<div class="mx-6 flex items-center justify-center">
		<div class="flex flex-col items-center justify-center">
			<!-- <p class="my-6 text-xl">
			{$page.status}: {$page.error?.message}
		</p> -->
			<h1 class="mt-6 text-left text-2xl text-orange-600">
				Hi There. If you are seeing this page, it's because we are currently working on it to make
				it a better viewing experience for you or we are repairing something that has been reported
				as an issue to our staff.
			</h1>
			<h1 class="mt-6 text-left text-2xl text-green-600">
				It's your Lucky Day!!! You now qualify for a 10% discount on your next Roof, Siding, Window
				or Gutter project. Just mention this page when you call us.
			</h1>

			<a
				class="btn-green btn btn-lg my-6 bg-green-500 text-slate-900"
				href="tel:{settings.businessPhone}">Call us!</a
			>
		</div>
	</div>
</div>
