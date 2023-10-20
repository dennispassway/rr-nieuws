<script lang="ts">
	import type { Article } from '../firebase/client';
	export let latestArticles: Article[] = [];
</script>

<footer>
	<div class="grid">
		<div>
			<h2>Laatste nieuws</h2>
			<ul>
				{#each latestArticles.slice(0, 5) as { title, slug }}
					<li><a href={`/n/${slug}`}>{title}</a></li>
				{/each}
			</ul>
		</div>

		<div>
			<h2>Over RR</h2>
			<ul>
				<li><a href="/">Over ons</a></li>
				<li><a href="/">Werken bij</a></li>
				<li><a href="/">Journalistieke verantwoording</a></li>
				<li><a href="/">Over Rick</a></li>
			</ul>
		</div>

		<div>
			<h2>Overig</h2>
			<ul>
				<li><a href="/">Disclaimer</a></li>
				<li><a href="/">Privacy</a></li>
				<li><a href="/">Werken bij</a></li>
			</ul>
		</div>

		<div>
			<h2>Tips</h2>
			<ul>
				<li><a href="/aanmaken">Eigen artikel aanmaken</a></li>
				<li><a href="/">Tip inzenden</a></li>
			</ul>
		</div>
	</div>

	<div class="realFooter">
		<div>
			&copy; {new Date().getFullYear()} - RR Nieuws is een grapje van
			<a href="https://twitter.com/dennispassway">@dennispassway</a>
		</div>
	</div>
</footer>

<style>
	footer {
		margin: 0 auto;
		border-top: 1px solid #eaeaea;
		font-size: 16px;
		padding: 40px 0 240px;
		width: 100%;
	}

	.grid {
		display: grid;
		gap: 24px;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		grid-template-rows: auto;
		margin: 0 auto;
		max-width: 1140px;
		width: 100%;
	}

	h2:not(:last-child) {
		font-size: 18px;
		color: var(--color-primary);
		margin: 0 0 0.5em;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li:not(:last-child) {
		margin-bottom: 0.5em;
	}

	.realFooter {
		font-size: 12px;
		line-height: 1.5;
		margin-top: 40px;
		text-align: center;
	}

	a {
		color: var(--color-text);
		text-decoration: none;
	}

	a:hover,
	a:focus {
		color: var(--color-primary);
	}

	@media (min-width: 768px) {
		footer {
			padding: 40px 0;
		}

		.grid {
			gap: 40px;
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		h2:not(:last-child) {
			margin: 0 0 1em;
		}
	}
</style>
