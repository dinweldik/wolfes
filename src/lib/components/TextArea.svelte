<script lang="ts">
	export let name: string = 'default';
	export let placeholder = '';
	let error = '';
</script>

<div class="dinput">
	<label>
		<span>{placeholder}</span>
		<textarea {name} rows="6"></textarea>
	</label>
	{#if error}
		<div class="error">{error}</div>
	{/if}
</div>

<style lang="css">
	.error {
		color: var(--color-error);
	}
	.dinput {
		margin-block: var(--size-3);
		padding-right: var(--size-3);
	}
	label {
		position: relative;
		display: block;
		margin-top: 1em; /* Ensure space for the span when it moves */
	}
	textarea {
		padding-inline: var(--size-3);
		height: auto; /* Adjust based on content, or set a fixed height */
		width: 100%;
		box-sizing: border-box; /* Include padding and border in the element's total width and height */
		border-radius: var(--size-2);
		border: 1px solid #ddd;
	}
	span {
		font-size: var(--scale-1);
	}
</style>
