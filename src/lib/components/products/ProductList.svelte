<!-- NestedObject.svelte -->
<script lang="ts">
	/**
	 * Recursively iterates over a JavaScript object and returns an array of key-value pairs.
	 * @param {Object} obj - The JavaScript object to iterate over.
	 * @returns {Array} - An array of key-value pairs.
	 */
	function iterateObject(obj: object): Array<any> {
		return Object.entries(obj).map(([key, value]) => {
			// If the value is an object, recursively call iterateObject
			if (typeof value === 'object') {
				return {
					key,
					value: iterateObject(value)
				};
			} else {
				// If the value is not an object, return the key-value pair
				return {
					key,
					value
				};
			}
		});
	}

	// Props
	export let obj = {}; // The JavaScript object to iterate over
</script>

<!-- Render the nested object -->
<div class="nested-object">
	{#each iterateObject(obj) as { key, value }}
		{#if typeof value === 'object'}
			<!-- If the value is an object, recursively render it -->
			<div class="nested-item">
				<h3>{key}</h3>
				<div class="nested-content">
					{#each value as { key: innerKey, value: innerValue }}
						<div class="leaf-item">
							<h4>{innerKey}</h4>
							<p>{innerValue}</p>
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<!-- If the value is not an object, render the key-value pair -->
			<div class="leaf-item">
				<h4>{key}</h4>
				<p>{value}</p>
			</div>
		{/if}
	{/each}
</div>

<style>
	/* Add your styling here */
</style>
