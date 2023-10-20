<script lang="ts">
	export let avatar: string;
	export let date: string;
	export let src: string;
	export let title: string;
	export let createdBy: string;
</script>

<header>
	<div class="hero-container">
		<img alt="Ook Russisch onderzoeksteam bevestigt dood Wagner-leider Prigozjin" {src} />
	</div>
	<div class="meta">RR Nieuws • {date}</div>
	<h1>{title}</h1>

	<div class="author">
		<img alt="Rick" src={avatar} />
		<div>
			<strong>{createdBy}</strong>
			<span>Verslaggever</span>
		</div>
	</div>
</header>

<style>
	header {
		max-width: 860px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		header {
			margin-top: 40px;
		}
	}

	.hero-container {
		aspect-ratio: 16/9;
		border-radius: 2px;
		margin-bottom: 40px;
		margin: 0 -20px 30px;
		overflow: hidden;
	}

	@media (min-width: 768px) {
		.hero-container {
			margin: 0 0 40px;
		}
	}

	img {
		aspect-ratio: 16/9;
		display: block;
		height: auto;
		width: 100%;
	}

	.meta {
		font-size: 12px;
		line-height: 1;
		font-weight: 500;
		color: var(--color-text);
	}

	h1 {
		margin: 0.25em 0 0.5em;
	}

	.author {
		align-items: center;
		display: flex;
		font-size: 14px;
		gap: 12px;
		line-height: 1.2;
	}

	.author img {
		border-radius: 50%;
		height: 40px;
		width: 40px;
	}

	.author strong {
		display: block;
	}

	@media (min-width: 768px) {
		.meta {
			font-size: 16px;
		}

		.author {
			font-size: 16px;
			gap: 20px;
		}
	}
</style>
