<script>
	import SuccessAnmeldung from '$lib/components/SuccessAnmeldung.svelte';

	export let data;
</script>

<section class="content">
	<!-- 	<SuccessAnmeldung data={data.record} /> -->
	<div class="center">
		<h1>Vielen Dank für Ihre Anmeldung.</h1>

		<h3>Wir haben Ihre Anmeldung erhalten und werden uns bei Ihnen melden.</h3>
		<div class="container">
			<p>Mit freundlichen Grüßen,</p>
			<p>Ihr SV Fußballwölfe Team</p>
		</div>
	</div>
</section>

<style>
	h1,
	h3 {
		text-align: center;
	}
	.container {
		margin: var(--size-6);
	}
</style>
