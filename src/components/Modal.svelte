<script lang="ts">
	import ConfettiButton from './ConfettiButton.svelte';
	export let onClose: () => void;
</script>

<div class="container">
	<section class="content">
		<h2>Vernieuwde website</h2>
		<p>
			RR Nieuws is onlangs vernieuwd! Op onze nieuwe website kunnen we u nog beter van dienst zijn
			en blijft u op de hoogte van al het laatste nieuws.
		</p>
		<p>
			Indien u eerder een account of abonnement had op ons nieuwsblad en u niet meer kunt inloggen,
			neem dan contact op met ons.
		</p>

		<ConfettiButton onButtonClick={onClose}>Ik begrijp het</ConfettiButton>
	</section>
</div>

<style>
	.container {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		padding: 20px;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999999999;
	}

	.container::after {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.8);
		top: 0;
		left: 0;
	}

	.content {
		background-color: var(--color-white);
		border-radius: 8px;
		margin: 0 auto;
		max-height: 80vh;
		max-width: 640px;
		overflow: scroll;
		padding: 30px 20px;
		position: relative;
		width: 100%;
		z-index: 2;
		border: solid 1px var(--color-text);
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}
    
	.content::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	@media (min-width: 768px) {
		.content {
			padding: 40px;
		}
	}
</style>
