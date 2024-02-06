<script>
	export let events;
</script>

<div class="event-cards">
	{#each events as event}
		<a class="" href="/anmeldung">
			<div class="pricing-box">
				<span class="price">{event.date}</span>
				<span class="pricing-table-divider" />
				<span class="description">⚽️ Jetzt Anmelden</span>
				<span class="pricing-table-divider" />
			</div>
		</a>
	{/each}
</div>

<style>
	.event-cards {
		margin-top: var(--size-5);
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--size-5);

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr 1fr;
			font: var(--text-sm);
			overflow-x: auto;
		}
	}
	a {
		text-decoration: none;
	}

	.description {
		padding-inline: var(--size-3);
		font: var(--text-sm);
	}
	.price,
	.pricing-box {
		-webkit-transition: all ease-out 0.2s;
		transition: all ease-out 0.2s;
		text-align: center;
	}
	.price {
		background: var(--color-primary);
		color: #fff;
		font-weight: var(--weight-bold);
		padding: 20px 10px;
		display: block;
		height: 6em;
	}
	.pricing-box:nth-child(2) .price {
		background: var(--color-primary);
	}
	.pricing-box:nth-child(3) .price {
		background: var(--color-primary);
	}
	.pricing-box:hover .price {
		box-shadow: inset 0 0 100px 0 rgba(0, 0, 0, 0.3);
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
	.pricing-table-divider {
		display: block;
		height: 1px;
		max-width: 80%;
		margin: 20px auto 0;
	}

	.pricing-box {
		overflow: hidden;
		border-radius: 10px;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.13);
		border: 2px solid var(--color-primary);
	}
	.pricing-box:hover {
		-webkit-transform: scale(1.01);
		transform: scale(1.01);
	}
</style>
