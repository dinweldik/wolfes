<script>
	import Camps from '$lib/components/Camps.svelte';
	import kids1 from '$lib/assets/kids1.webp';
	import kids2 from '$lib/assets/kids2.webp';
	import kids3 from '$lib/assets/kids3.webp';
	import kids4 from '$lib/assets/kids4.webp';

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
					<strong>Qualitatives Fußballtraining</strong> Unsere qualifizierten Trainer sorgen dafür, dass
					jedes Kind individuell gefördert wird. Der Fokus liegt darauf, sportliche, athletische und
					fußballerische Fähigkeiten spielerisch und effektiv zu verbessern.
				</p>
			</li>
			<li>
				<p>
					<strong>Abwechslungsreiches Athletiktraining </strong> Neben Fußball legen wir Wert auf die
					allgemeine körperliche Entwicklung. Durch gezieltes Athletiktraining verbessern wir die Koordination
					und Kondition der Kinder.
				</p>
			</li>
			<li>
				<p>
					<strong>Betreute Mittagspause mit Mittagessen</strong> Wir sorgen dafür, dass die Kinder auch
					während der Mittagspause bestens versorgt sind. Zu Mittag gibt es ein ausgewogenes Mittagessen
					inkl. Getränk und Nachspeise.
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
		<img src={kids1} alt="kids1" />
		<img src={kids4} alt="kids4" />
		<img src={kids3} alt="kids3" />
		<img src={kids2} alt="kids2" />
	</div>
</section>

<style>
	.images {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: var(--size-4);

		& img {
			border: 1px solid #ddd; /* Example border */
			border-radius: var(--size-2);
			object-fit: cover; /* Ensure image covers container */
			width: 100%;
			height: 100%;
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
