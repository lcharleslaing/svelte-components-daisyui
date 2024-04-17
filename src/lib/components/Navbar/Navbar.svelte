<script>
	import settings from '$lib/settings';
	import { onMount } from 'svelte';

	onMount(() => {
		const anchors = document.querySelectorAll('.navbar a');
		anchors.forEach((anchor) => {
			anchor.setAttribute('href', anchor.getAttribute('href') || '#');
		});
	});

	const menuItems = settings.mainMenuLinks;
</script>

<div class="navbar sticky" data-theme={settings.theme}>
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each menuItems as item}
					<li>
						{#if item.submenu}
							<details>
								<summary>{item.label}</summary>
								<ul class="p-2">
									{#each item.submenu as subitem}
										<li><a href={subitem.href}>{subitem.label}</a></li>
									{/each}
								</ul>
							</details>
						{:else}
							<li><a href={item.href}>{item.label}</a></li>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl">{settings.businessName}</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 items-center">
			{#each menuItems as item}
				<li>
					{#if item.submenu}
						<details>
							<summary>{item.label}</summary>
							<ul class="p-2">
								{#each item.submenu as subitem}
									<li><a href={subitem.href}>{subitem.label}</a></li>
								{/each}
							</ul>
						</details>
					{:else}
						<li><a href={item.href}>{item.label}</a></li>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/" class="btn btn-primary">{settings.navbarButton.label}</a>
	</div>
</div>
