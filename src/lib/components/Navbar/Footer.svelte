<script>
	import settings from '$lib/settings/settings';
	import CallNowButton from '../CallNowButton.svelte';
	import TgyLogo from '../TgyLogo.svelte';
</script>

<footer class="footer footer-center sticky rounded p-20 text-base-content">
	<nav class="mx-auto flex flex-wrap justify-center">
		{#each settings.mainMenuLinks as link}
			<a href={link.href} class="link-hover link">{link.label}</a>
		{/each}
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			{#each settings.socialMediaLinks as link}
				<a target="_blank" href={link.href}>
					<img width="50px" src={link.icon} alt={link.label} />
				</a>
			{/each}
		</div>
	</nav>
	<aside>
		<!-- Copyright -->
		<CallNowButton />
		<p>{settings.copyRight}</p>
		<TgyLogo width="40" />
		<h1 class="text-center text-2xl font-bold">A Tradition of Excellence</h1>
	</aside>
</footer>
