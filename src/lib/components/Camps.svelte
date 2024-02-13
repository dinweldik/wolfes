<script>
	export let events;
	export let isForm = false;
	export let initialSelected;
	let selectedEvents = initialSelected ? [initialSelected] : [];

	const handleSelect = (event) => {
		if (selectedEvents.includes(event)) {
			selectedEvents = selectedEvents.filter((e) => e !== event);
		} else {
			selectedEvents = [...selectedEvents, event];
		}
	};

	let formattedCamps = events.map((camp) => {
		return {
			...camp,
			date: `${new Date(camp.from).toLocaleString('de-DE', {
				month: 'long',
				day: 'numeric'
			})} - ${new Date(camp.to).toLocaleString('de-DE', {
				month: 'long',
				day: 'numeric'
			})}`
		};
	});
	if (isForm) {
		formattedCamps = formattedCamps.filter((camp) => {
			return camp.href === '';
		});
	}
</script>

<div class="event-cards">
	{#each formattedCamps as event}
		{#if event.href}
			<svelte:element this={'a'} href={event.href} target="_blank" role={'link'}>
				<div class="card-box">
					<span class="date">{event.date}</span>
					<span class="card-table-divider" />
					<span class="description">
						<a href={event.href}>{event.desc}</a>
					</span>
					<span class="card-table-divider" />
				</div>
			</svelte:element>
		{:else}
			<svelte:element
				this={isForm ? 'div' : 'a'}
				href={'/anmeldung?preselected=' + event.id}
				on:click={isForm ? () => handleSelect(event.id) : () => {}}
				role={isForm ? 'button' : 'link'}
			>
				{#if isForm}
					<div class={selectedEvents.includes(event.id) ? 'card-box' : 'card-box greyed-out'}>
						<span class="date">{event.date}</span>
						<span class="card-table-divider" />
						<span class="price">260€</span>
						<span class="card-table-divider" />
						<span class="description"
							>{selectedEvents.includes(event.id) ? '✅ Ausgewählt' : '❌ Nicht ausgewählt'}</span
						>
						<span class="card-table-divider" />
					</div>
				{:else}
					<div class="card-box">
						<span class="date">{event.date}</span>
						<span class="card-table-divider" />
						<span class="description"> ⚽️ Jetzt Anmelden </span>
						<span class="card-table-divider" />
					</div>
				{/if}
			</svelte:element>
		{/if}
	{/each}
</div>
<div class="center">
	{#if isForm}
		<input type="hidden" name="selectedCamps" value={JSON.stringify(selectedEvents)} />
		<p>Gesamtkosten: {selectedEvents.length * 260} €</p>
	{/if}
</div>

<style>
	.center {
		margin-top: var(--size-5);
	}
	.event-cards {
		margin-block: var(--size-3);
		padding-right: var(--size-3);
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--size-5);

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr 1fr;
			font: var(--text-xs);
		}
	}
	a,
	div {
		text-decoration: none;
	}

	.description {
		padding-inline: var(--size-3);
		font: var(--text-xs);
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 3em;
	}
	.date,
	.card-box {
		-webkit-transition: all ease-out 0.2s;
		transition: all ease-out 0.2s;
		text-align: center;
	}
	.date {
		background: var(--color-primary);
		color: #fff;
		font-weight: var(--weight-bold);
		padding: 20px 10px;
		display: block;
		height: 6em;
	}
	.card-box:nth-child(2),
	.card-box:nth-child(3) {
		background: var(--color-primary);
	}

	.btn {
		background: var(--color-primary);
		border: 1px solid;
		font-weight: var(--weight-bold);
		-webkit-transition: all ease-out 0.2s;
		transition: all ease-out 0.2s;
		border-radius: 30px;
		padding: var(--size-1) var(--size-4);
		display: inline-block;
		margin-top: 20px;
		font: var(--text-sm);
		@media screen and (max-width: 768px) {
			font: var(--text-xs);
			padding-inline: var(--size-3);
		}
	}
	.card-table-divider {
		display: block;
		height: 1px;
		max-width: 80%;
		margin: 20px auto 0;
	}

	.card-box {
		overflow: hidden;
		border-radius: 10px;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.13);
		border: 2px solid var(--color-primary); /* default state */
	}
	.card-box:hover {
		-webkit-transform: scale(1.01);
		transform: scale(1.01);
	}

	.card-box.greyed-out {
		opacity: 0.5;
	}
</style>
