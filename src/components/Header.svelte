<script>
	import Logo from "./Logo.svelte";
</script>

<header>
	<a href="/">
		<Logo />
	</a>

	<a class="menuButton" href="/">
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
</header>

<style>
	header {
		align-items: center;
		border-bottom: 1px solid #eaeaea;
		display: flex;
		justify-content: space-between;
		padding: 16px 0;
	}

	header a {
		text-decoration: none;
	}

	.menuButton {
		align-items: center;
		background-color: rgba(0,0,0,0.05);
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
			padding: 24px 0;
		}
	}
</style>
