<script>
	import PhoneIcon from './PhoneIcon.svelte';
	import settings from '$lib/settings';
	import { onMount } from 'svelte';
	import SettingsIcon from './SettingsIcon.svelte';
	import ContactIcon from './ContactIcon.svelte';
	import TgyLogo from '../TgyLogo.svelte';

	onMount(() => {
		const anchors = document.querySelectorAll('.navbar a');
		anchors.forEach((anchor) => {
			anchor.setAttribute('href', anchor.getAttribute('href') || '#');
		});
	});

	const menuItems = settings.mainMenuLinks;
</script>

<div class="navbar shadow">
	<div class="navbar-start">
		<!-- Menu on Small Screens -->
		<div class="dropdown lg:hidden">
			<button class="btn btn-square btn-ghost">
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
			</button>

			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="menu dropdown-content menu-sm mt-3 w-52">
				{#each menuItems as item}
					<li class="bg-base-100 text-left">
						{#if item.submenu}
							<details>
								<summary class="mx-5 uppercase">{item.label}</summary>
								<ul class="">
									{#each item.submenu as subitem}
										<li class="">
											<a class="uppercase hover:bg-transparent" href={subitem.href}
												>{subitem.label}</a
											>
										</li>
									{/each}
								</ul>
							</details>
						{:else}
							<li class="  m-2">
								<a class="uppercase hover:bg-transparent" href={item.href}>{item.label}</a>
							</li>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl"><TgyLogo height="24" /></a>
	</div>
	<!-- Menu on Large Screens -->
	<div class="navbar-center hidden lg:flex">
		<ul class="menu dropdown-content menu-horizontal z-50 items-center px-1">
			{#each menuItems as item}
				<li class="bg-base-100 text-left">
					{#if item.submenu}
						<details>
							<summary class="mx-5 uppercase">{item.label}</summary>
							<ul class="">
								{#each item.submenu as subitem}
									<li class="">
										<a class="uppercase hover:bg-transparent" href={subitem.href}>{subitem.label}</a
										>
									</li>
								{/each}
							</ul>
						</details>
					{:else}
						<li class="m-2">
							<a class="uppercase" href={item.href}>{item.label}</a>
						</li>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<a href="tel:{settings.businessPhone}" class="mr-4">
			<PhoneIcon />
		</a>
		<a href="/contact" class="mr-4">
			<ContactIcon />
		</a>
		<a href="/settings" class="mr-4">
			<SettingsIcon />
		</a>
	</div>
</div>

<style>
	/* Set z-index for dropdown menus */
	.dropdown-content {
		z-index: 1000; /* Adjust the value as needed */
	}
</style>
