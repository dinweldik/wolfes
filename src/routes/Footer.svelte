<script>
	import logo from '$lib/assets/logo.png';
</script>

<footer>
	<div class="footer-container">
		<div class="footer-contact">
			<p class="bold">SV Fußballwölfe</p>
			<p>Waldgasse 1<br />3001 Mauerbach</p>
			<p>Organschaftliche Vertreter: Karim Rajih</p>
			<p>Email: <a href="mailto:verein@feuerwölfe.at">verein@fussballwoelfe.at</a></p>
			<p>Telefon: +43 6603749790</p>
		</div>
		<div class="footer-links">
			<p><a href="/privacy">Datenschutz</a></p>
			<p><a href="/legal">Impressum</a></p>
			<p><a href="mailto:verein@feuerwölfe.at">Kontakt</a></p>
		</div>
		<div class="logo">
			<img src={logo} alt="logo" />
			<p>Made with ❤️ by <a href="https://dinweldik.com" target="_blank">dinweldik.com</a></p>
		</div>
	</div>
</footer>

<style>
	.logo {
		text-align: center;
		& img {
			height: var(--size-32);
			width: var(--size-32);
		}
		& p {
			font: var(--text-xs);
			margin-top: 10px;
		}
		& a {
			color: #ffaaaa;
			text-decoration: none;
		}
	}
	.bold {
		font-weight: bold;
	}
	footer {
		padding: 40px; /* Spacing around the content */
	}

	.footer-container {
		display: flex;
		justify-content: space-between;
	}

	.footer-contact,
	.footer-links {
		width: 33%; /* Each column takes up roughly half the footer */
	}

	.footer-contact h3,
	.footer-links h3 {
		margin-bottom: 20px; /* Spacing below headings */
	}

	.footer-contact p,
	.footer-links p {
		line-height: 1.5; /* Line spacing for readability */
		margin-bottom: 10px; /* Spacing between paragraphs */
	}

	.footer-contact a,
	.footer-links a {
		color: var(--color-warning-500);
		text-decoration: none; /* No underline for links */
	}

	.footer-contact a:hover,
	.footer-links a:hover {
		text-decoration: underline; /* Underline on hover for links */
	}
	@media (max-width: 768px) {
		.footer-container {
			flex-direction: column;
			align-items: center; /* Centers the children horizontally */
		}
		.footer-contact,
		.footer-links,
		.logo {
			/* Apply full width and centering for all footer children */
			width: 100%; /* Full width on smaller screens */
			margin-bottom: 20px; /* Spacing between sections on smaller screens */
			text-align: center; /* Center the content for contact and links */
		}
		.logo img {
			margin: 0 auto; /* Additional centering specifically for the logo image */
			display: block; /* Ensures that auto margins work for horizontal centering */
		}
	}
</style>
