<script lang="ts">
	import AuthButtons from '$lib/components/AuthButtons.svelte';
	import Dinput from '$lib/components/Dinput.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let form;
</script>

<section class="content center">
	<h2>Access Admin Dashboard</h2>
	<form method="POST" action="?/login">
		<div class="form">
			<Dinput type="email" name="email" placeholder="email" />
			<Dinput type="password" name="password" placeholder="password" />
		</div>
		<button>submit</button>
	</form>
	{#if form?.error}
		<p><strong>Login failed: </strong> {form?.message}</p>
	{/if}
	<AuthButtons providers={data.authProviders} />
</section>

<style lang="postcss">
	strong {
		color: var(--color-red);
	}
	.form {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
	}
	button {
		height: 60%;
		float: right;
		margin: var(--size-4);
	}
</style>
