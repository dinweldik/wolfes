<section class="content">
	<div>
		<h2>Unser Team</h2>
		<div class="team-grid">
			<div class="team-member">
				<img src="https://picsum.photos/200?random=1" alt="Member 1" />
				<p>Member 1</p>
			</div>
			<div class="team-member">
				<img src="https://picsum.photos/200?random=2" alt="Member 2" />
				<p>Member 2</p>
			</div>
			<!-- Add more team members here -->
			<div class="team-member">
				<img src="https://picsum.photos/200?random=3" alt="Member 3" />
				<p>Member 3</p>
			</div>
			<div class="team-member">
				<img src="https://picsum.photos/200?random=4" alt="Member 4" />
				<p>Member 4</p>
			</div>
			<!-- ... -->
		</div>
	</div>
</section>

<style>
	.content {
		text-align: center;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 20px;
		padding: 20px;
	}

	.team-member {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.team-member img {
		width: 100%;
		height: auto;

		margin-bottom: 10px;
	}

	.team-member p {
		margin: 0;
		font-size: 1.1em;
	}
</style>
