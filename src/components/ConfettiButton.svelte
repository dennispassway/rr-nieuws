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
		background-color: #fdca40;
		border-radius: 8px;
		border: 0;
		color: var(--color-text);
		cursor: pointer;
		font-size: 18px;
		font-weight: 600;
		line-height: 1.2;
		padding: 12px 20px;
		width: 100%;
	}
</style>
