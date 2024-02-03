<script>
	export let address = 'Waldgasse 1, 3001 Mauerbach'; // Default address

	$: googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
</script>

<div class="map-container">
	<iframe frameborder="0" style="border:0" src={googleMapsUrl} allowfullscreen />
</div>

<style>
	.map-container {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%; /* Aspect ratio of 16:9 */
		height: 0;
	}
	.map-container iframe {
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
