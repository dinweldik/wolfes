<script>
	let events = [
		{ name: 'Camp', date: '1. – 5. Juli' },
		{ name: 'Camp (Mauerbach)', date: '8. - 12.Juli' },
		{ name: 'Camp', date: '29. Juli – 2. August' },
		{ name: 'Camp', date: '5. August – 9. August' }
		// ... other events
	];
</script>

<section class="content">
	<div class="event-card center">
		<h1>Aktuelle Camps</h1>
		{#each events as event}
			<div class="event">
				<strong>{event.name}:</strong>
				{event.date}
			</div>
		{/each}
	</div>
</section>

<style>
	.event-card {
		border: 2px solid var(--color-success-700);
		padding: var(--size-5);
		max-width: 600px;
		margin: auto;
	}

	h1 {
		color: var(--color-error-700);
	}

	.event {
		margin-block: var(--size-5);
	}
</style>
