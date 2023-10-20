<script>
	import Logo from './Logo.svelte';
</script>

<header>
	<div class="content">
		<a href="/">
			<Logo />
		</a>

		<a class="menuButton" href="/" aria-label="Menu knop die naar home gaat">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</a>
	</div>
</header>

<style>
	header {
		border-bottom: 1px solid #eaeaea;
		box-shadow: 0 0px 10px rgba(0, 0, 0, 0.05);
		margin-left: -20px;
		padding: 16px 20px;
		width: calc(100% + 40px);
	}

	.content {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1140px;
		width: 100%;
	}

	header a {
		text-decoration: none;
	}

	.menuButton {
		align-items: center;
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 8px;
		color: var(--color-text);
		display: flex;
		font-size: 14px;
		gap: 8px;
		line-height: 1;
		padding: 12px 16px;
		text-decoration: none;
		font-weight: 600;
		text-transform: uppercase;
	}

	.menuButton svg {
		display: block;
		width: 24px;
		height: 24px;
	}

	@media (min-width: 768px) {
		header {
			padding: 24px 20px;
		}
	}
</style>
