<script>
	import settings from '$lib/settings/settings';
	import { selectedTheme } from '$lib/theme';
	import PageTitle from '$lib/components/PageTitle.svelte';

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

<PageTitle />

<div class="mx-auto w-1/4 lg:w-1/12">
	<p class="text-center font-bold uppercase underline">Theme</p>
	{#each settings.themes as themeItem}
		<div class="form-control">
			<label class="label cursor-pointer gap-4">
				<span class="label-text">{themeItem}</span>
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
