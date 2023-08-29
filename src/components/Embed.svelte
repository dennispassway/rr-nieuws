<script lang="ts">
	export let letItRick: boolean;
	export let src: string;
</script>

<div>
	<iframe
		src={`https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=ltLkKp0Rn8DP6v0t&amp;controls=0&showinfo=0`}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
	{#if !letItRick}
		<img alt="Youtube preview" {src} />
	{/if}
</div>

<style>
	div {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
	}

	iframe,
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
