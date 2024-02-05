<script lang="ts">
	// Supports weights 300-900
	import '@fontsource-variable/recursive';
	import { navigating } from '$app/stores';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import '$lib/style/app.css';
	import Spinner from '$lib/components/Spinner.svelte';
	import { setAuthContext } from '$lib/auth-context';
	export let data;
	setAuthContext(data.user);
</script>

<main>
	<img src="https://fussballwoelfe.goatcounter.com/count?p=/test" />
	<Header />
	{#if $navigating}
		<div class="spinner">
			<Spinner />
		</div>
	{:else}
		<slot />
	{/if}
	<Footer />
</main>

<style lang="postcss">
	img {
		display: none;
	}
	main {
		margin: 0;
	}
	.spinner {
		margin-top: var(--size-8);
		display: grid;
		place-items: center;
	}
</style>
