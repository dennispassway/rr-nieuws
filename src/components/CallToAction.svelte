<script>
	import ConfettiButton from './ConfettiButton.svelte';
	import avatar from '../assets/rick-avatar.webp';

	function onButtonClick() {
		window.location.href = '/aanmaken';
	}
</script>

<div>
	<img alt="Rick" src={avatar} />
	<h2>Ook iemand voor de gek houden?</h2>
	<p>
		Maak dan ook gratis een Rick Roll nieuwsartikel aan! In 2 minuten gemaakt, en uren plezier van!
	</p>
	<ConfettiButton {onButtonClick}>Artikel aanmaken</ConfettiButton>
</div>

<style>
	div {
		margin: 0 auto;
		max-width: 480px;
		padding: 40px 0;
		text-align: center;
		width: 100%;
	}

	img {
		border-radius: 50%;
		height: 40px;
		margin-bottom: 8px;
		width: 40px;
	}

	@media (min-width: 768px) {
		div {
			padding: 80px 0;
		}
	}
</style>
