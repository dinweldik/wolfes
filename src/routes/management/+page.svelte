<script>
	export let data;

	const calculateAge = (birthdate) => {
		const birthDate = new Date(birthdate);
		const difference = Date.now() - birthDate.getTime();
		const ageDate = new Date(difference);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
</script>

<div class="card-container">
	{#each data.attendes as entry}
		<div class="card">
			<div class="field">
				<span class="label">Child's Name:</span>
				{entry.firstname_child}
				{entry.lastname_child}
			</div>
			<div class="field">
				<span class="label">Parent's Name:</span>
				{entry.firstname_parent}
				{entry.lastname_parent}
			</div>
			<div class="field">
				<span class="label">Birthdate and Age:</span>
				{new Date(entry.birthdate).toLocaleDateString('de-DE')} (Age: {calculateAge(
					entry.birthdate
				)})
			</div>
			<div class="field">
				<span class="label">Email:</span>
				{entry.email}
			</div>
			<div class="field">
				<span class="label">Phone Number:</span>
				{entry.phone_number}
			</div>
			<div class="field">
				<span class="label">Insurance Approved:</span>
				{entry.insuranceApproved ? 'Yes' : 'No'}
			</div>
			<div class="field">
				<span class="label">Selected Camps:</span>
				<ul>
					{#each entry.expand.selectedCamps as camp}
						<li>
							{new Date(camp.from).toLocaleDateString('de-DE')} - {new Date(
								camp.to
							).toLocaleDateString('de-DE')}: {camp.collectionName}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</div>

<style>
	.card-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 20px;
		padding: 20px;
	}
	.card {
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.field {
		font-size: 14px;
	}
	.label {
		font-weight: bold;
	}
	ul {
		padding-left: 20px;
	}
	li {
		margin-bottom: 5px;
	}
</style>
