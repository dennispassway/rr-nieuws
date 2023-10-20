<script lang="ts">
	import { UNSPLASH_OPTIONS } from '../unsplashOptions';

	let inputValue = UNSPLASH_OPTIONS[0].link;
</script>

<div>
	<input type="hidden" name="image" id="image" min="2" max="20" required bind:value={inputValue} />
	<div class="grid">
		{#each UNSPLASH_OPTIONS as { link, photographer, unsplash }}
			<button
				class:active={inputValue === link}
				type="button"
				on:click={() => {
					inputValue = link;
				}}
			>
				<img
					src={`${link}?auto=format&fit=crop&q=60&w=200&h=${(200 / 16) * 9}`}
					alt={`Image by ${photographer} on Unsplash`}
				/>
				<span
					>Foto door <a href={unsplash} target="_blank" rel="noopener noreferrer">{photographer}</a
					></span
				>
			</button>
		{/each}
	</div>
	<p>
		Alle foto's zijn gratis te gebruiken en worden geleverd door <a
			href="https://unsplash.com/"
			target="_blank"
			rel="noopener noreferrer">Unsplash</a
		>.
	</p>
</div>

<style>
	.grid {
		display: grid;
		gap: 12px;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		margin-bottom: 8px;
	}

	@media (min-width: 400px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 768px) {
		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	p {
		font-size: 14px;
	}

	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		font-size: 10px;
		gap: 2px;
		line-height: 1.2;
		margin: 0;
		padding: 0;
		position: relative;
		text-align: left;
		transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	button.active::before {
		content: '';
		box-sizing: border-box;
		border: solid 5px #fdca40;
		height: 100%;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 3;
	}
</style>
