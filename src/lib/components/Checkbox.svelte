<script lang="ts">
	export let name: string = 'default';
	export let required = false;
	let error = '';
</script>

<label>
	<input {name} type="checkbox" {required} />
	<span><slot /></span>
</label>

<style>
	label {
		display: flex;
		align-items: center;
		border: 1px solid #ddd; /* Example border */
		border-radius: var(--size-2);
		-webkit-transition: all ease-out 0.2s;
		transition: all ease-out 0.2s;
		margin-block: var(--size-3);
		padding: var(--size-3);
	}

	span {
		font: var(--text-xs);
	}
	input {
		margin-right: var(--size-2);
		font: var(--text-xl);
	}
</style>
