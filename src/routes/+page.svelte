<script lang="ts">
	import CallToAction from '../components/CallToAction.svelte';
	import ConfettiButton from '../components/ConfettiButton.svelte';
	import type { LayoutData } from './$types';
	import rickHero from '../assets/rick-hero.webp';

	const pageTitle = "RR Nieuws - De leukste manier om je vrienden te 'Rick Rollen'"
	const pageDescription = "Roll samen met Rick Ashley je vrienden door een verzonnen nieuwsbericht aan te maken."
	const pageImage = "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd"

	export let data: LayoutData;

	function onButtonClick() {
		window.location.href = '/aanmaken';
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="title" content={pageTitle} />
	<meta name="description" content={pageDescription} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={`${pageImage}?w=1200&h=630&fit=crop&auto=format&q=80`} />
	<meta property="og:type" content="website" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:creator" content="@dennispassway" />
	<meta property="twitter:title" content={pageTitle} />
	<meta property="twitter:description" content={pageDescription} />
	<meta property="twitter:image" content={`${pageImage}?w=1200&h=630&fit=crop&auto=format&q=80`} />
</svelte:head>

<section>
	<div class="hero">
		<div>
			<span class="preheader">Gebruik een nieuwsartikel</span>
			<h1>De leukste manier om je vrienden te 'Rick Rollen'</h1>
			<p>
				Bij ons maak je gratis en snel een verzonnen nieuwsbericht aan. Het artikel ziet er uit als
				een echt nieuwsbericht wanneer je het doorstuurt. Maaaaaaar; wanneer na het openen van het
				artikel wordt de lezer direct ge-rick-roll'd!
			</p>
			<ConfettiButton {onButtonClick}>Een artikel aanmaken</ConfettiButton>
		</div>
		<div class="imageContainer">
			<img src={rickHero} alt="Rick Astley" />
		</div>
	</div>	
</section>

<section class="explainer">
	<div>
		<span class="preheader">1.</span>
		<h2>Maak in 1 minuut een artikel aan</h2>
		<p>
			Het aanmaken is gratis, en vraagt alleen om een titel en een korte introductie. Het
			onderwerp mag je zelf verzinnen, als je slachtoffer(s) er maar in trappen.
		</p>
	</div>
	<div>
		<span class="preheader">2.</span>
		<h2>Deel de link met je slachtoffer(s)</h2>
		<p>
			Deel de link waar je wil; via Whatsapp, SMS of andere social media. Wij zorgen ervoor dat
			het eruit ziet als een écht nieuws artikel.
		</p>
	</div>
	<div>
		<span class="preheader">3.</span>
		<h2>Laat ze genieten van de hit van Rick 😂</h2>
		<p>
			Verwacht direct een bericht terug waarbij ze erkennen dat ze er zijn ingetrapt. Bij het
			openen van het artikel worden ze direct verrast door Rick!
		</p>
	</div>
</section>

<section>
	<div class="newsgridheader">
		<span class="preheader">Eerst een voorbeeld zien?</span>
		<h2>De laatst gemaakte artikelen</h2>
		<p>Zie wat anderen hebben gemaakt. Bereid je wel voor op een fantastisch nummer natuurlijk.</p>
	</div>
	<ul class="newsgrid">
		{#each data.latestArticles as { title, slug, image, intro }}
			<li>
				<a class="item" href={`/n/${slug}`}>
					<img src={`${image}?w=360&h=${(360 / 16) * 9}&fit=crop&auto=format&q=80`} alt={title} loading="lazy" />
					<h3>{title}</h3>
					<p>{intro.slice(0,100)}&hellip;</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<CallToAction />

<style>
	section {
		margin: 0 auto;
		max-width: 1140px;
		padding: 32px 0;
		width: 100%;
	}

	.hero {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.hero .imageContainer {
		aspect-ratio: 16 / 9;
		border-radius: 8px;
		overflow: hidden;
		position: relative;
	}

	.hero .imageContainer img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.explainer {
		display: grid;
		gap: 32px;
	}

	.preheader {
		color: var(--color-primary);
		display: block;
		font-size: 18px;
		font-weight: 500;
		line-height: 1.2;
		margin-bottom: 0.75em;
	}

	.newsgridheader {
		margin: 0 auto 32px;
		max-width: 640px;
		text-align: center;
		width: 100%;
	}

	.newsgrid {
		display: grid;
		gap: 24px;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.item {
		color: var(--color-text);
		display: flex;
		flex-direction: column;
		text-decoration: none;
	}

	.item img {
		margin-bottom: 16px;
		aspect-ratio: 16 / 9;
	}

	.item:hover h3,
	.item:focus h3 {
		text-decoration: underline;
	}

	@media (min-width: 768px) {
		section {
			padding: 64px 0;
		}
		.hero {
			align-items: center;
			gap: 80px;
			flex-direction: row;
		}

		.hero > * {
			width: 50%;
		}

		.hero .imageContainer {
			aspect-ratio: 1;
		}

		.explainer {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.newsgrid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 32px;
		}
	}
</style>
