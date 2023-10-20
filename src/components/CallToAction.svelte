<script>
	import ConfettiButton from './ConfettiButton.svelte';
	import avatar from '../assets/rick-avatar.webp';

	function onButtonClick() {
		window.location.href = '/aanmaken';
	}
</script>

<div class="container">
	<div class="imageContainer">
		<img alt="Rick" src={avatar} />
	</div>
	<h2>Ook iemand voor de gek houden?</h2>
	<p>
		Maak dan ook gratis een Rick Roll nieuwsartikel aan! In 2 minuten gemaakt, en uren plezier van!
	</p>
	<ConfettiButton {onButtonClick}>Artikel aanmaken</ConfettiButton>
</div>

<style>
	.container {
		margin: 0 auto;
		max-width: 480px;
		padding: 40px 0;
		text-align: center;
		width: 100%;
	}

	.imageContainer {
		aspect-ratio: 1;
		border-radius: 50%;
		height: 40px;
		margin-bottom: 8px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
		width: 40px;
	}

	img {
		height: 100%;
		left: 0;
		object-fit: cover;
		position: absolute;
		top: 0;
		width: 100%;
	}

	@media (min-width: 768px) {
		.container {
			padding: 80px 0;
		}
	}
</style>
