<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ProductList from '$lib/components/products/ProductList.svelte';
	import product from '$lib/settings/products';

	// Pass the products object to the ProductList component
	let startingPoint = product.product;
</script>

<PageTitle />
<ProductList {startingPoint} />
