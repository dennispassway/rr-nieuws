<script lang="ts">
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import './styles.css';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
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
