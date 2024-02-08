<script lang="ts">
	export let productInfo = {
		name: 'SV Fußballwölfe',
		description: 'Waldgasse 1, 3001 Mauerbach'
	};
	import logo from '$lib/assets/logo.png';
</script>

<section class="content center">
	<header class="header">
		<div class="logo-wrapper">
			<a href="/"><img class="logo" src={logo} alt=" Icon" /></a>
		</div>
		<div class="app__infos">
			<a href="/"><h1 class="name supertitle">{productInfo.name}</h1></a>
			<p class="description">{productInfo.description}</p>
		</div>
	</header>
	<p class="description" />
</section>

<style lang="postcss">
	.header {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: row;
		flex-direction: row;
		margin-bottom: 16px;
		-ms-flex-align: center;
		align-items: center;
		font: var(--text-sm);

		& h1 {
			color: var(--color-primary);
		}

		@media (max-width: 768px) {
			-ms-flex-align: start;
			align-items: flex-start;
			margin-top: 32px;
			margin-bottom: 16px;
		}
	}

	.logo-wrapper {
		display: inline-block;
		/* background-image: url('/assets/images/ios-mask-border-128.svg'); */
		background-size: contain;
		max-width: 150px;
		max-height: 150px;
		padding: 1px;
		margin-right: 64px;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		@media (max-width: 768px) {
			max-width: 150px;
			max-height: 150px;
			margin-right: 16px;
		}
	}

	.logo {
		border-radius: 10.5%;
		/* 		-webkit-mask-image: url('/static/ios-mask.svg');
		mask-image: url('/assets/images/ios-mask.svg'); */
		-webkit-mask-size: cover;
		mask-size: cover;
		width: 100%;
		height: auto;
	}

	.name {
		margin: 0;
	}

	a {
		text-decoration: none;
	}

	.description {
		font-size: var(--font-lg);
		@media (max-width: 768px) {
			margin-top: 8px;
			margin-bottom: 0;
		}
	}
</style>
