<script>
	export let events;
</script>

{#each events as event}
	<div class="pricing-box">
		<span class="price">{event.date}</span>
		<a class="btn" href="/anmeldung">⚽️ Zur Anmeldung</a>
		<span class="pricing-table-divider" />
	</div>
{/each}

<style>
	a {
		text-decoration: none;
	}

	.pricing-table h2 {
		padding: 35px 10px;
		margin: 0;
	}
	.description {
		margin-top: 20px;
		font-size: 0.85em;
		padding: 0 40px;
		font-style: italic;
	}

	.description {
		margin-top: 20px;
		font-size: 0.85em;
		padding: 0 40px;
		font-style: italic;
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
		font-size: 1em;
		font-weight: 600;
		position: relative;
		padding: 20px 10px;
		display: block;
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
		color: #000;
		-webkit-transition: all ease-out 0.2s;
		transition: all ease-out 0.2s;
		border-radius: 30px;
		padding: 7px 40px;
		display: inline-block;
		margin-top: 20px;
		font: var(--text-sm);
	}
	.pricing-table-divider {
		display: block;
		height: 1px;
		background: rgba(0, 0, 0, 0.08);
		max-width: 80%;
		margin: 20px auto 0;
	}
	.pricing-table {
		border-radius: 3px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		text-align: center;
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
	.pricing-table ul li {
		padding: 3px 0;
	}
	.pricing-table ul {
		padding: 15px 60px;
		text-align: left;
	}
	@media (max-width: 750px) {
		.pricing-table {
			grid-template-columns: 1fr;
		}
		.pricing-table > div:nth-child(3) {
			grid-row-start: 1;
		}
		.pricing-table > div:nth-child(2) {
			grid-row-start: 2;
		}
		.pricing-table > div {
			align-self: top;
		}
	}
</style>
