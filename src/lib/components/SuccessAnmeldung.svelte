<script>
	export let data;
</script>

<div class="data-container">
	{#each Object.entries(data) as [key, value]}
		<div class="data-row">
			<div class="data-label">{key.replace(/_/g, ' ')}:</div>
			<div class="data-value {typeof value === 'boolean' ? value.toString() : ''}">
				{typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
			</div>
		</div>
	{/each}
</div>

<style>
	.data-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-family: Arial, sans-serif;
		max-width: 600px;
		margin: 20px auto;
		padding: 20px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
	}
	.data-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 10px;
		border-bottom: 1px solid #eee;
	}
	.data-label {
		font-weight: bold;
	}
	.data-value {
		text-align: right;
	}
	.data-value.false {
		color: #ff4136;
	}
	.data-value.true {
		color: #2ecc40;
	}
</style>
