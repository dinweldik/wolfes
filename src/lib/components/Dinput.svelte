<script lang="ts">
	export let name: string = 'default';
	export let type: string = 'text';
	export let placeholder: string = 'default';
	export let value = null;
	export let min = undefined;
	export let max = undefined;
	export let required = false;
	let error = '';
</script>

<div class="dinput">
	<label>
		<input {type} {name} {placeholder} value={value ?? value} {min} {max} {required} />
		<span>{placeholder}{required ? '*' : ''}</span>
	</label>
	<p class="error">{error ?? ''}</p>
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
	}
	input {
		padding-inline: var(--size-3);
		padding-top: var(--size-6);
		height: var(--size-14);
		width: 100%;
		border-radius: var(--size-2);
		border: 1px solid #ddd;
	}
	input::placeholder {
		opacity: 0;
	}
	span {
		position: absolute;
		margin-left: var(--size-2);
		top: 0;
		left: 0;
		transform: translateY(-50%);
		transition-duration: 300ms;
		font-size: var(--scale-1);
	}

	label:focus-within > span,
	input:not(:placeholder-shown) + span {
		color: var(--color-gray-900);
		transform: translateY(-25px);
		font-size: var(--scale-0);
	}
</style>
