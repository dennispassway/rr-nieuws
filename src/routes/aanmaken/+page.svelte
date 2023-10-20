<script lang="ts">
	import { enhance } from '$app/forms';
	import UnsplashInput from '../../components/UnsplashInput.svelte';
	export let form;

	const pageTitle = "Artikel aanmaken - RR Nieuws"
	const pageDescription = "Maak een artikel aan om samen met Rick je vrienden te Rollen."
	const pageImage = "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd"
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
	<h1>Een nieuwsbericht toevoegen</h1>
	<p>
		Het is gemakkelijk- en gratis om een nieuwsbericht toe te voegen. Verzin een pakkende titel en
		intro waarvan je zeker weet dat de ontvangers er op zullen klikken. Nadat zij het nieuwsbericht
		hebben geopend zullen zij worden verrast door Rick Ashley en zijn grootste hit! Bekijk hier <a
			href="/n/voorbeeld-artikel">een voorbeeld artikel</a
		>.
	</p>

	<form
		method="POST"
		use:enhance={() => {
			return async ({ result, update }) => {
				if (result.type === 'success' && result.data?.redirect) {
					window.location.replace(result.data?.redirect);
				} else {
					update();
				}
			};
		}}
	>
		<div>
			<label for="title">Titel van het artikel</label>
			<span>Maak dit een pakkende nieuwstitel. Deze is zichtbaar wanneer je het artikel deelt.</span
			>
			<input type="text" name="title" id="title" min="20" max="75" required />
			{#if form?.error && form?.field === 'title'}<p class="error">Dit veld is verplicht</p>{/if}
		</div>
		<div>
			<label for="createdBy">Naam van de 'verslaggever'</label>
			<span
				>Gebruik je eigen naam, of een fictieve naam. Deze is zichtbaar bij het artikel als
				'verslaggever'.</span
			>
			<input type="text" name="createdBy" id="createdBy" min="2" max="20" required />
			{#if form?.error && form?.field === 'createdBy'}<p class="error">
					Dit veld is verplicht
				</p>{/if}
		</div>
		<div>
			<label for="intro">Introductie van het artikel</label>
			<span
				>Schrijf hier de eerste zinnen van het artikel zodat het echt lijkt. Deze zijn zichtbaar bij
				het delen. Gebruik ongeveer 140 tekens zodat de pagina goed gevuld is.</span
			>
			<textarea name="intro" id="intro" rows="5" minlength="120" maxlength="300" required />
			{#if form?.error && form?.field === 'intro'}<p class="error">Dit veld is verplicht</p>{/if}
		</div>
		<div>
			<label for="title">Kies een passende afbeelding</label>
			<span
				>Kies een afbeelding die past bij het artikel. Deze is zichtbaar wanneer je het artikel
				deelt en moet ervoor zorgen dat de persoon klikt.</span
			>
			<!-- <input type="text" name="title" id="title" min="20" max="75" required /> -->
			<UnsplashInput />
			{#if form?.error && form?.field === 'image'}<p class="error">Dit veld is verplicht</p>{/if}
		</div>
		<button>Aanmaken</button>
	</form>
</section>

<style>
	section {
		margin: 0 auto;
		max-width: 640px;
		padding: 40px 0;
		width: 100%;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-top: 40px;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	label {
		font-weight: 600;
		font-size: 14px;
	}

	span {
		color: var(--color-text-light);
		font-size: 12px;
		line-height: 1.3;
	}

	input,
	textarea {
		background-color: transparent;
		border-radius: 0.375rem;
		border: 1px solid #cbd5e0;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 1px 3px 1px rgba(0, 0, 0, 0.02);
		color: #1a202c;
		line-height: 1.5;
		padding: 12px;
		width: 100%;
		resize: none;
	}

	input:focus,
	textarea:focus {
		border-color: #fdca40;
		outline: none;
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

	.error {
		color: red;
		font-size: 14px;
	}

	@media (min-width: 768px) {
		label {
			font-size: 16px;
		}

		span {
			font-size: 14px;
		}

		.error {
			font-size: 16px;
		}
	}
</style>
