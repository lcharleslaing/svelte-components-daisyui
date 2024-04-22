<script>
	import { selectedTheme, themes } from '$lib/theme';

	/**
	 * @param {Event} event
	 */
	function setTheme(event) {
		if (event.target) {
			// @ts-ignore
			selectedTheme.set(event.target.value);
		}
	}
</script>

<div class="mx-4 flex flex-col items-center justify-between">
	<h1 class="mb-4 text-center text-2xl font-bold uppercase underline">Theme</h1>
	<div class="mx-6 flex w-3/4 flex-row flex-wrap justify-between lg:w-1/2">
		{#each themes as themeItem}
			<div class="form-control">
				<label class="label cursor-pointer gap-4">
					<span class="label-text">{themeItem.toUpperCase()}</span>
					<input
						type="radio"
						name="theme-radios"
						class="theme-controller radio"
						value={themeItem}
						on:change={setTheme}
					/>
				</label>
			</div>
		{/each}
	</div>
</div>
