<script lang="ts">
	import './styles.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import posthog from 'posthog-js';

	import type { LayoutData } from './$types';

	export let data: LayoutData;

	if (browser) {
		posthog.init('phc_5FCW77TEP0801A65z8okAellY87oXuQr0V3vQJjEzYE', {
			api_host: 'https://app.posthog.com',
			persistence: 'memory'
		});
	}
	$: $page.url.pathname, browser && posthog.capture('$pageview');
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer latestArticles={data.latestArticles} />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
