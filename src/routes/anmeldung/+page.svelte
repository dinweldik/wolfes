<script>
	import Camps from '$lib/components/Camps.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Dinput from '$lib/components/Dinput.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	export let data;
</script>

<section class="content">
	<form method="POST" action="?/submit">
		<h1>Ihr Kind</h1>
		<div class="kind">
			<Dinput name="firstname_child" type="text" placeholder="Vorname (Kind)" required={true} />
			<Dinput name="lastname_child" type="text" placeholder="Nachname (Kind)" required={true} />
			<Dinput
				name="birthdate"
				type="date"
				placeholder="Geburtsdatum"
				required={true}
				max={new Date().toISOString().split('T')[0]}
			/>
			<Dinput name="heimatverein" type="text" placeholder="Heimatverein" />
		</div>

		<!-- 	<div class="form-group valid required width-50 fid_9299195 required field-select">
		<label for="t-shirt-gre-kein-umtausch-mglich"
			>T-Shirt Größe (kein Umtausch möglich)</label
		>
		<div class="field-wrap">
			<select id="t-shirt-gre-kein-umtausch-mglich" class="form-control"
				><option disabled="disabled" value="">Bitte auswählen</option><option value="116"
					>116</option
				><option value="128">128</option><option value="140">140</option
				><option value="152">152</option><option value="164">164</option
				><option value="S">S</option><option value="M">M</option><option
					value="L">L</option
				><option value="XL">XL</option></select
			>
		</div>
	</div> -->
		<h1>Ihre Daten</h1>
		<div class="parent">
			<Dinput
				name="firstname_parent"
				type="text"
				placeholder="Vorname (Erziehungsberechtigter)"
				required={true}
			/>
			<Dinput
				name="lastname_parent"
				type="text"
				placeholder="Nachname (Erziehungsberechtigter)"
				required={true}
			/>
			<Dinput name="email" type="email" placeholder="E-mail" required={true} />
			<Dinput type="tel" name="phone_number" placeholder="Telefonnummer" required={true} />
			<!-- 			<Dinput name="adress" type="text" placeholder="Straße, Türnummer, etc.." />
			<Dinput name="zip_code" type="text" placeholder="Postleitzahl" />
			<Dinput name="ort" type="text" placeholder="Ort" /> -->
		</div>
		<TextArea
			name="message"
			placeholder="Sonstige Mitteilungen (Unverträglichkeiten, Allergien, Medikamente,...):"
		/>
		<Camps events={data.camps} isForm={true} initialSelected={data.preselected} />
		<div class="legal">
			<Checkbox name="insuranceApproved" required={true}>
				Mein Kind ist körperlich voll belastbar; Verletzungen oder Krankheiten deckt unsere
				Krankenversicherung.*</Checkbox
			>

			<Checkbox name="terms" required={true}>
				Hiermit akzeptiere ich die <a href="/teilnahmebedingungen" target="__blank"
					>Teilnahmebedingungen</a
				>*
			</Checkbox>
			<p>
				Die Anmeldung ist <strong>vorläufig und unverbindlich</strong>. Wir werden Sie kontaktieren,
				um die Zahlung abzuwickeln, sobald die Camps festgelegt sind.
			</p>
			<p>
				<em>Bitte überprüfen Sie Ihren Spam-Ordner, falls Sie keine E-Mail von uns erhalten.</em>
			</p>
		</div>
		<div class="center">
			<button type="submit" class="btn">Absenden</button>
		</div>
	</form>
</section>

<style>
	a {
		color: var(--color-primary);
		text-decoration: none;
	}

	textarea {
		padding-inline: var(--size-3);
		padding-top: var(--size-6);
		height: var(--size-14);
		line-height: var(--size-4);
		font-size: var(--scale-2);
		width: 100%;
		margin: var(--size-3);
	}

	.btn {
		background: var(--color-primary);
		border: 1px solid;
		-webkit-transition: all ease-out 0.2s;
		transition: all ease-out 0.2s;
		border-radius: 30px;
		padding: var(--size-1) var(--size-4);
		font: var(--text-xl);
		font-weight: bold;
	}
	.btn:hover {
		-webkit-transform: scale(1.01);
		transform: scale(1.01);
	}

	.kind,
	.parent {
		display: grid;
		@media (min-width: 900px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media (min-width: 600px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.legal {
		margin-top: var(--size-6);
	}

	p {
		margin-block: var(--size-12);
		@media screen and (max-width: 768px) {
			text-align: center;
		}
	}
</style>
