<script>
	import blank_avatar from '$lib/assets/blank_avatar.webp';
	import glatze from '$lib/assets/glatze.webp';
	import Fa from 'svelte-fa';
	import { faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<section class="content">
	<h1>Unser Team</h1>
	<div class="team-grid">
		<div class="team-member">
			<img src={blank_avatar} alt="Karim Rajhi" />
			<p>Karim Rajhi</p>
		</div>
		<div class="team-member">
			<img src={blank_avatar} alt="Rida Rajhi" />
			<div class="name">
				<p>Rida Rajhi</p>
				<a href="https://instagram.com/coach.rida" target="_blank"><Fa icon={faInstagram} /></a>
			</div>
		</div>
	</div>
</section>

<style>
	.content {
		text-align: center;
	}

	.team-grid {
		margin-top: var(--size-5);
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--size-4);
	}

	.team-member {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 30vh; /* Set a fixed width for each member */
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
	.name {
		display: flex;
		gap: var(--size-2);
		align-items: center;
	}
</style>
