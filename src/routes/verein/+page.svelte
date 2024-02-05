<section class="content">
	<h1>Unser Fußballverein</h1>
	<h2>Wo Leidenschaft und Professionalität aufeinandertreffen</h2>
	<p>
		Unser Fußballverein steht für mehr als nur den Fußball selbst. Wir sind eine Gemeinschaft, die
		sich durch die Liebe zum Sport und das Streben nach Exzellenz auszeichnet. Unsere Mission ist
		es, jedem Mitglied - unabhängig vom Alter oder Können - die Möglichkeit zu bieten, sein volles
		Potenzial zu entfalten.
	</p>

	<h2>Unsere Mission:</h2>
	<ul class="text-cards">
		<li>
			<p>
				<strong>Jugendförderung durch umfassendes Training</strong> Unser Ansatz geht weit über das übliche
				Fußballtraining hinaus. Wir legen großen Wert auf Athletiktraining und Koordination, um die körperliche
				Entwicklung unserer Spieler zu fördern. Dies trägt nicht nur zur Verbesserung ihrer fußballerischen
				Fähigkeiten bei, sondern auch zur allgemeinen Fitness und Gesundheit.
			</p>
		</li>
		<li>
			<p>
				<strong>Laufschule für Geschwindigkeit und Ausdauer</strong> Ein wichtiger Bestandteil unseres
				Trainingsprogramms ist die Laufschule. Hier konzentrieren wir uns auf die Entwicklung von Geschwindigkeit,
				Ausdauer und Agilität. Dies hilft unseren Spielern, auf dem Spielfeld eine bessere Leistung zu
				erbringen und ihre persönlichen sportlichen Ziele zu erreichen.
			</p>
		</li>
		<li>
			<p>
				<strong>Förderung von Teamgeist und persönlicher Entwicklung</strong> Wir glauben, dass Fußball
				mehr als nur ein Spiel ist. Es ist eine Plattform für persönliches Wachstum, Disziplin und Teamarbeit.
				Unsere Programme sind darauf ausgerichtet, diese Werte zu vermitteln und zu stärken.
			</p>
		</li>
		<li>
			<p>
				<strong>Sommercamps mit ganzheitlichem Ansatz</strong> Unsere Fußballcamps im Sommer bieten eine
				Kombination aus technischem Training, Athletikübungen und koordinativen Herausforderungen. Sie
				sind eine hervorragende Gelegenheit für junge Spieler, ihre Fähigkeiten in einer spaßigen und
				unterstützenden Umgebung zu verbessern.
			</p>
		</li>
	</ul>

	<div>
		<p>
			Wir sind stolz darauf, eine Umgebung zu schaffen, in der Spieler aller Altersgruppen ihre
			Liebe zum Spiel entdecken und pflegen können. Unser Ziel ist es, jedem Einzelnen die besten
			Voraussetzungen zu bieten, um sowohl auf als auch abseits des Platzes erfolgreich zu sein.
		</p>
		<p>
			<strong
				>Treten Sie unserer Gemeinschaft bei und erleben Sie die Freude am Fußball in einer
				Umgebung, die Entwicklung, Gesundheit und Teamgeist fördert.</strong
			>
		</p>
	</div>
</section>

<style lang="postcss">
	strong {
		color: var(--color-primary);
	}
	p {
		margin-block: var(--size-12);
	}

	.text-cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr); /* Two columns by default */
		gap: var(--size-4);
		margin: 0;
		padding: 0;
		list-style: none;

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr; /* One column on small screens */
		}
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
</style>
