<script lang="ts">
	import settings from '$lib/settings';
	const leftMenuItems = settings.mainMenuLinks;
	const rightMenuItems = settings.serviceAreas;
	const social = settings.socialMediaLinks;

	import { onMount } from 'svelte';

	// Function to close the left drawer
	function closeLeftDrawer() {
		const leftDrawer = document.getElementById('left-drawer') as HTMLInputElement;
		if (leftDrawer) {
			leftDrawer.checked = false;
		}
	}

	// Function to close the right drawer
	function closeRightDrawer() {
		const rightDrawer = document.getElementById('right-drawer') as HTMLInputElement;
		if (rightDrawer) {
			rightDrawer.checked = false;
		}
	}

	// Close the drawers when a link is clicked
	function closeDrawerOnLinkClick() {
		const leftDrawerLinks = document.querySelectorAll('.left-drawer-link');
		const rightDrawerLinks = document.querySelectorAll('.right-drawer-link');

		console.log('Left drawer links:', leftDrawerLinks);
		console.log('Right drawer links:', rightDrawerLinks);

		leftDrawerLinks.forEach((link) => {
			link.addEventListener('click', closeLeftDrawer);
		});

		rightDrawerLinks.forEach((link) => {
			link.addEventListener('click', closeRightDrawer);
		});
	}

	onMount(() => {
		closeDrawerOnLinkClick();
	});
</script>

<div class="navbar sticky top-0 z-50 bg-base-100 shadow">
	<div class="drawer-content">
		<!-- Page content here -->
	</div>
	<div class="flex-none">
		<label for="left-drawer" class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-5 w-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path></svg
			>
		</label>
	</div>
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">{settings.businessName}</a>
	</div>

	<div class="flex-none">
		<label for="right-drawer" class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-5 w-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path></svg
			>
		</label>
	</div>
</div>

<div class="drawer">
	<input id="left-drawer" type="checkbox" class="drawer-toggle" hidden />
	<div class="drawer-content">
		<!-- Page content here -->
	</div>
	<div class="drawer-side z-50">
		<label for="left-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-60 bg-base-200 p-4 text-base-content">
			<!-- Sidebar content here -->
			<h1 class="text-xl underline">Menu</h1>
			{#each leftMenuItems as item}
				<li class="">
					<a
						class="left-drawer-link uppercase hover:bg-transparent"
						href={item.href}
						on:click={() => closeLeftDrawer()}>{item.label}</a
					>
				</li>
			{/each}
			<!-- Sidebar content here -->
			<h1 class="text-xl underline">Social Media</h1>
			{#each social as item}
				<li class="">
					<a
						target="_blank"
						class="left-drawer-link uppercase hover:bg-transparent"
						href={item.href}
						on:click={() => closeLeftDrawer()}>{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<div class="drawer drawer-end z-50">
	<input id="right-drawer" type="checkbox" class="drawer-toggle" hidden />

	<div class="drawer-side">
		<label for="right-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-60 bg-base-200 p-4 text-base-content">
			<!-- Sidebar content here -->
			<h1 class="text-xl underline">Service Areas</h1>
			{#each rightMenuItems as item}
				<li class="">
					<a
						class="right-drawer-link uppercase hover:bg-transparent"
						href={item.href}
						on:click={() => closeRightDrawer()}>{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
