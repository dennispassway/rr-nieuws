<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';

	export let onButtonClick: () => void;
	let showConfetti = false;

	function onClick() {
		showConfetti = true;
		setTimeout(onButtonClick, 800);
	}
</script>

<div class="container">
	<div class="confetti">
		{#if showConfetti}
			<div use:confetti />
		{/if}
	</div>
	<button on:click={onClick}><slot /></button>
</div>

<style>
	.container {
		position: relative;
	}

	.confetti {
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	button {
		border-radius: 8px;
		width: 100%;
		font-size: 18px;
		line-height: 1.2;
		border: 0;
		background-color: #fdca40;
		color: var(--color-text);
		font-weight: 600;
		padding: 12px 20px;
		cursor: pointer;
	}
</style>
