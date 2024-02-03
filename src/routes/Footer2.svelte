<script>
	import { getRandomEmoji } from '$lib/utils/random_emoji';
</script>

<footer>
	<nav>
		<ul>
			<li><a href="/privacy">Datenschutz</a></li>
			<li><a href="/legal">Impressum</a></li>
			<li><a href="mailto:verein@feuerwölfe.at">Kontakt</a></li>
		</ul>
	</nav>
</footer>

<style lang="postcss">
	footer {
		text-align: center;
		padding: var(--size-content-py, 20px) var(--size-content-px, 20px);
		border-top: 1px solid var(--color-border, #dee2e6); /* Top border for visual separation */
	}

	nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		gap: var(--size-4, 16px);
	}

	nav li {
		padding: var(--size-2, 8px);
	}

	nav a {
		font-size: var(--scale-2, 1em);
		color: var(--color-primary-500);
		font-weight: var(--weight-bold, bold);
		text-decoration: none;
		transition: color 0.3s ease; /* Smooth transition for hover effect */

		&:hover {
			color: var(--color-warning-500); /* Change color on hover */
			text-decoration: underline; /* Underline on hover */
		}
	}

	small {
		display: block;
		margin-top: var(--size-8, 16px);
		text-align: center;
		font-size: var(--scale-1, 0.9em);
	}
</style>
