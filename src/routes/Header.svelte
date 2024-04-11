<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { getAuthContext } from '$lib/auth-context';
	import Hero from '$lib/components/Hero.svelte';
	import { getContext } from 'svelte';
	const user = getAuthContext();
</script>

<header>
	<div class="external-apps">
		{#if user}
			<form action="/logout" method="POST">
				<button class="btn">🚪 Logout</button>
			</form>
		{:else}
			<a class="btn" href="/anmeldung">⚽️ Hier Anmelden</a>
		{/if}
	</div>
	<Hero />
	<nav>
		<ul>
			<li><a href="/">Startseite</a></li>
			<li><a href="/verein">Verein</a></li>
			<!-- 			<li><a href="/fotos">Fotos</a></li> -->
			<!-- <li><a href="/team">Team</a></li> -->
		</ul>
	</nav>
</header>

<style lang="postcss">
	.btn {
		background: var(--color-primary);
		border: 1px solid;
		-webkit-transition: all ease-out 0.2s;
		transition: all ease-out 0.2s;
		border-radius: 30px;
		padding: var(--size-1) var(--size-4);
		display: inline-block;
	}
	.btn:hover {
		-webkit-transform: scale(1.01);
		transform: scale(1.01);
	}
	.external-apps {
		padding: var(--size-2) var(--size-content-px);
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		gap: var(--size-8);
		background: var(--color-primary);
		& p,
		& a {
			color: var(--color-black);
			font-weight: bold;
			text-decoration: none;
		}
	}
	.logo {
		position: relative;
		margin-block: var(--size-4);
		& img {
			height: var(--size-16);
			width: var(--size-16);
			@media screen and (min-width: 768px) {
				height: var(--size-32);
				width: var(--size-32);
			}
		}
	}
	.centered {
		color: var(--color-white);
		font-weight: bold;
		//animation: flicker 1.5s infinite alternate;
		position: absolute;
		font-size: 2rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@keyframes flicker {
		0%,
		18%,
		22%,
		25%,
		53%,
		57%,
		100% {
			text-shadow:
				0 0 4px #fff,
				0 0 11px #fff,
				0 0 19px #fff,
				0 0 40px #0fa,
				0 0 80px #0fa,
				0 0 90px #0fa,
				0 0 100px #0fa,
				0 0 150px #0fa;
		}

		20%,
		24%,
		55% {
			text-shadow: none;
		}
	}

	.external-apps {
		padding: var(--size-2);
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		gap: var(--size-8);
		background: none;
	}
	.alpha {
		text-transform: uppercase;
		animation: flicker 1.5s infinite alternate;
	}
	.search {
		padding: var(--size-4) var(--size-content-px);
	}

	h2 {
		color: var(--color-primary-500);
	}
	h2:hover {
		color: var(--color-warning-500);
	}

	nav {
		padding: var(--size-4) var(--size-content-px);
		background: #f9f9f9; /* Example background color */
		border: 1px solid #ddd; /* Example border */
		border-radius: var(--size-2);
		& ul {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--size-8);
			& a {
				font-size: var(--scale-1);
				color: var(--color-primary-500);
				font-weight: var(--weight-bold);
				text-decoration: none;
			}
		}
	}
</style>
