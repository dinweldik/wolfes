<script>
	import Camps from '$lib/components/Camps.svelte';
	import platz from '$lib/assets/platz.webp';
	import spielen from '$lib/assets/spielen.webp';
	import GoogleMap from '$lib/components/GoogleMap.svelte';

	export let data;
</script>

<section class="content">
	<h1>Aktuelle Fußballcamps</h1>
	<Camps events={data.camps} />

	<div>
		<h1>Herzlich Willkommen zu unseren Sommer-Fußballcamps!</h1>
		<p><em>Ein Sommer voller Fußball, Freude und Freundschaft wartet auf Ihre Kinder!</em></p>

		<p>
			Bei uns erleben Jungs und Mädchen ab 6 Jahren die perfekte Kombination aus <strong
				>Fußballtraining, Athletiktraining und Spaß</strong
			>. Unsere Sommercamps sind mehr als nur ein Ort, um Fußball zu spielen; sie sind eine
			Plattform für sportliche Entwicklung, Teamgeist und unvergessliche Erlebnisse.
		</p>

		<div><h2>Was wir bieten:</h2></div>
		<ul class="text-cards">
			<li>
				<p>
					<strong>Professionelles Fußballtraining</strong> Unsere qualifizierten Trainer sorgen dafür,
					dass jedes Kind individuell gefördert wird. Der Fokus liegt darauf, fußballerische Fähigkeiten
					spielerisch und effektiv zu verbessern.
				</p>
			</li>
			<li>
				<p>
					<strong>Athletiktraining für die kleinen Sportler</strong> Neben Fußball legen wir Wert auf
					die allgemeine körperliche Entwicklung. Durch gezieltes Athletiktraining verbessern wir die
					Koordination und Fitness der Kinder.
				</p>
			</li>
			<li>
				<p>
					<strong>Betreute Mittagspause mit Mittagessen</strong> Wir sorgen dafür, dass die Kinder auch
					während der Mittagspause bestens versorgt sind. Ein ausgewogenes Mittagessen und Zeit zum Entspannen
					sind bei uns inklusive.
				</p>
			</li>
			<li>
				<p>
					<strong>Spaß und sportliche Entwicklung im Fokus</strong> Unsere Camps sind darauf ausgelegt,
					die Freude am Sport zu wecken und zu fördern. Wir schaffen eine positive und motivierende Umgebung,
					in der jedes Kind sich entfalten kann.
				</p>
			</li>
			<li>
				<p>
					<strong>Kosten</strong> Für eine Woche voller Fußball, Spaß und Lernen beträgt die Teilnahmegebühr
					260€.
				</p>
			</li>
		</ul>

		<p>
			Unsere Camps sind die perfekte Gelegenheit für Ihre Kinder, ihre Sommerferien aktiv und
			sinnvoll zu gestalten. Melden Sie Ihr Kind noch heute an und seien Sie Teil unseres
			Fußballabenteuers!
		</p>
		<p>
			<strong
				>Wir freuen uns darauf, Ihr Kind in unseren Sommer-Fußballcamps begrüßen zu dürfen!</strong
			>
		</p>
	</div>
	<div class="images">
		<img src={platz} alt="Sportplatz" />
		<img src={spielen} alt="Kinder" />
	</div>
</section>

<style>
	.images {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--size-4);

		& img {
			border: 1px solid #ddd; /* Example border */
			border-radius: var(--size-2);
		}

		& img:hover {
			-webkit-transform: scale(1.01);
			transform: scale(1.01);
		}
		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}
	h1,
	h2 {
		text-align: center;
		color: var(--color-primary);
		margin-bottom: var(--size-12);
	}
	.versus {
		display: grid;
		grid-template-columns: repeat(2, 1fr); /* Two columns by default */
		justify-content: space-around;
		gap: var(--size-4);
		@media only screen and (max-width: 600px) {
			grid-template-columns: 1fr; /* One column on mobile */
		}
	}

	.media {
		height: 100%;
	}

	strong {
		color: var(--color-primary);
	}

	div,
	p {
		margin-block: var(--size-10);
	}

	.text-cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr); /* Two columns by default */
		gap: var(--size-4);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.text-cards li {
		background: #f9f9f9; /* Example background color */
		border: 1px solid #ddd; /* Example border */
		padding: var(--size-4);
		border-radius: var(--size-2);
	}

	.text-cards li strong {
		display: block;
		font-size: 1.2em; /* Larger font size for the title */
		margin-bottom: var(--size-2); /* Space below the title */
		color: var(--color-primary); /* Title color */
	}

	@media only screen and (max-width: 600px) {
		.text-cards {
			grid-template-columns: 1fr; /* One column on mobile */
		}
	}
</style>
