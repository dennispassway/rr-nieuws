<script lang="ts">
	export let data: PageData;
	import type { PageData } from './$types';

	import { browser } from '$app/environment';
	import CallToAction from '../../../components/CallToAction.svelte';
	import FloatingRick from '../../../components/FloatingRick.svelte';
	import Hero from '../../../components/Hero.svelte';
	import Modal from '../../../components/Modal.svelte';
	import nggyu from '../../../assets/nggyu.mp3';
	import posthog from 'posthog-js';
	import rick from '../../../assets/rick.webp';
	import rickAvatar from '../../../assets/rick-avatar.webp';
	import rickHero from '../../../assets/rick-hero.webp';

	const avatar =
		'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=80&h=80&q=80';

	const date = data.createdAt.toLocaleDateString('nl-NL', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	let audioPlayer: Audio;
	let letItRick = false;
	let modalVisible = true;

	$: modalVisible, onModalVisibleChange();
	$: letItRick, onLetItRickChange();

	function onModalClose() {
		if (browser) {
			posthog.capture('modalClose');
		}

		modalVisible = false;
		letItRick = true;
	}

	function onModalVisibleChange() {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = modalVisible ? 'hidden' : 'auto';
	}

	function onLetItRickChange() {
		if (letItRick) {
			audioPlayer.play();
		}
	}
</script>

<svelte:head>
	<link rel="preload" as="image" href={rickAvatar} />
	<link rel="preload" as="image" href={rickHero} />
	<link rel="preload" as="image" href={rick} />
	<link rel="preload" as="audio" href={nggyu} />

	<title>{data.title}</title>
	<meta name="title" content={data.title} />
	<meta name="description" content={data.intro} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.intro} />
	<meta property="og:image" content={`${data.image}?w=1200&h=630&fit=crop&auto=format&q=80`} />
	<meta property="og:type" content="website" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:creator" content="@dennispassway" />
	<meta property="twitter:title" content={data.title} />
	<meta property="twitter:description" content={data.intro} />
	<meta property="twitter:image" content={`${data.image}?w=1200&h=630&fit=crop&auto=format&q=80`} />
</svelte:head>

{#if modalVisible}
	<Modal onClose={onModalClose} />
{/if}

<audio bind:this={audioPlayer} src={nggyu} />

<section>
	<Hero
		avatar={letItRick ? rickAvatar : avatar}
		createdBy={data.createdBy}
		{date}
		title={data.title}
		src={letItRick ? rickHero : `${data.image}?w=860&h=${(860 / 16) * 9}&fit=crop&auto=format&q=80`}
	/>

	<div class="content">
		<p>
			{data.intro}
		</p>

		<p>
			Deze tweede alinea bevat tekst die eigenlijk nergens over gaat. Het is een tekst om de pagina
			te vullen om jou te laten denken dat dit echt een interessant nieuwsartikel is. Je komt er
			snel genoeg achter dat het dat niet is.
		</p>

		<h2>Onverwachte wending</h2>
		<p>
			Plots heeft dit artikel een onverwachte wending genomen. Je had waarschijnlijk niet verwacht
			dat je dit nu ging luisteren, en ook nog deze prachtige songteksten mee kunt lezen. Nou, dat
			kan dus wel. Veel plezier ermee!
		</p>
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

	@media (min-width: 768px) {
		.content,
		.lyrics {
			margin: 40px auto;
		}
	}
</style>
