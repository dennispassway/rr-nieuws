<script>
	import Embed from '../../../components/Embed.svelte';
	import FloatingRick from '../../../components/FloatingRick.svelte';
	import Hero from '../../../components/Hero.svelte';
	import Modal from '../../../components/Modal.svelte';
	import rick from '../../../assets/rick.gif';
	import rickAvatar from '../../../assets/rick-avatar.webp';
	import rickHero from '../../../assets/rick-hero.gif';
	import CallToAction from '../../../components/CallToAction.svelte';
	import nggyu from '../../../assets/nggyu.mp3';

	const avatar =
		'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80';

	const image =
		'https://images.unsplash.com/photo-1569242840838-2a6bdd402fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pbGl0YXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=860&h=483&q=60';
	const title = 'Ook Russisch onderzoeksteam bevestigt dood Wagner-leider Prigozjin';
	const intro =
		'Een Russisch onderzoeksteam heeft bevestigd dat Wagner-leider Prigozjin om het leven is gekomen bij de vliegtuigcrash van afgelopen woensdag. Volgens de onderzoekers is de identiteit van alle inzittenden van het vliegtuig vastgesteld op basis van genetische testen.';
	const date = 'Vandaag, 12:51';

	let letItRick = false;
	let modalVisible = true;

	$: modalVisible, onModalVisibleChange();

	function onModalClose() {
		modalVisible = false;
		letItRick = true;
	}

	function onModalVisibleChange() {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = modalVisible ? 'hidden' : 'auto';
	}
</script>

<svelte:head>
	<link rel="preload" as="image" href={rickAvatar} />
	<link rel="preload" as="image" href={rickHero} />
	<link rel="preload" as="image" href={rick} />
	<link rel="preload" as="audio" href={nggyu} />

	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={intro} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={intro} />
	<meta property="og:image" content={image} />
	<meta property="og:type" content="website" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:creator" content="@dennispassway" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={intro} />
	<meta property="twitter:image" content={image} />
</svelte:head>

{#if modalVisible}
	<Modal onClose={onModalClose} />
{/if}

<audio src={nggyu} autoplay={letItRick ? true : false} />

<section>
	<Hero
		avatar={letItRick ? rickAvatar : avatar}
		{date}
		{title}
		src={letItRick ? rickHero : image}
	/>

	<div class="content">
		<p>
			{intro}
		</p>

		<p>
			Deze tweede alinea bevat tekst die eigenlijk nergens over gaat. Het is een tekst om de pagina
			te vullen om jou te laten denken dat dit echt een interessant nieuwsartikel is. Je komt er
			snel genoeg achter dat het dat niet is.
		</p>

		<h2>Onverwachte wending</h2>
		<p>
			Plots heeft dit artikel een onverwachte wending genomen. Je had waarschijnlijk niet verwacht
			dat je deze video nu ging kijken, en ook nog deze prachtige songteksten mee kunt lezen. Nou,
			dat kan dus wel. Veel plezier ermee!
		</p>

		<div class="embed">
			<Embed src={image} {letItRick} />
		</div>
	</div>

	{#if letItRick}
		<FloatingRick left={true} />
		<FloatingRick left={false} />
	{/if}
</section>

{#if letItRick}
	<section class="lyrics">
		<p>
			We're no strangers to love<br />
			You know the rules and so do I (Do I)<br />
			A full commitment's what I'm thinking of<br />
			You wouldn't get this from any other guy
		</p>

		<p>
			I just wanna tell you how I'm feeling<br />
			Gotta make you understand
		</p>

		<p>
			Never gonna give you up<br />
			Never gonna let you down<br />
			Never gonna run around and desert you<br />
			Never gonna make you cry<br />
			Never gonna say goodbye<br />
			Never gonna tell a lie and hurt you
		</p>

		<p>
			We've known each other for so long<br />
			Your heart's been aching, but you're too shy to say it (To say it)<br />
			Inside, we both know what's been going on (Going on)<br />
			We know the game, and we're gonna play it
		</p>

		<p>
			And if you ask me how I'm feeling<br />
			Don't tell me you're too blind to see
		</p>

		<p>
			Never gonna give you up<br />
			Never gonna let you down<br />
			Never gonna run around and desert you<br />
			Never gonna make you cry<br />
			Never gonna say goodbye<br />
			Never gonna tell a lie and hurt you<br />
			Never gonna give you up<br />
			Never gonna let you down<br />
			Never gonna run around and desert you<br />
			Never gonna make you cry<br />
			Never gonna say goodbye<br />
			Never gonna tell a lie and hurt you
		</p>

		<p>
			Ooh (Give you up)<br />
			Ooh-ooh (Give you up)<br />
			Ooh-ooh<br />
			Never gonna give, never gonna give (Give you up)<br />
			Ooh-ooh<br />
			Never gonna give, never gonna give (Give you up)
		</p>

		<p>
			We've known each other for so long<br />
			Your heart's been aching, but you're too shy to say it (To say it)<br />
			Inside, we both know what's been going on (Going on)<br />
			We know the game, and we're gonna play it
		</p>

		<p>
			I just wanna tell you how I'm feeling<br />
			Gotta make you understand
		</p>

		<p>
			Never gonna give you up<br />
			Never gonna let you down<br />
			Never gonna run around and desert you<br />
			Never gonna make you cry<br />
			Never gonna say goodbye<br />
			Never gonna tell a lie and hurt you<br />
			Never gonna give you up<br />
			Never gonna let you down<br />
			Never gonna run around and desert you<br />
			Never gonna make you cry<br />
			Never gonna say goodbye<br />
			Never gonna tell a lie and hurt you<br />
			Never gonna give you up<br />
			Never gonna let you down<br />
			Never gonna run around and desert you<br />
			Never gonna make you cry<br />
			Never gonna say goodbye<br />
			Never gonna tell a lie and hurt you
		</p>
	</section>

	<CallToAction />
{/if}

<style>
	audio {
		opacity: 0;
		height: 0;
	}
	.content,
	.lyrics {
		max-width: 640px;
		margin: 30px auto;
		width: 100%;
	}

	.lyrics {
		position: relative;
	}

	.lyrics::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
	}

	.embed {
		margin: 20px 0;
	}

	@media (min-width: 768px) {
		.content,
		.lyrics {
			margin: 40px auto;
		}

		.embed {
			margin: 40px 0;
		}
	}
</style>
