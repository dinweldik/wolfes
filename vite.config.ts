// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// allows vite access to ./posts
	server: {
		fs: {
			allow: ['./']
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	}
};

export default config;
