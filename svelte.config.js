//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import * as dotenv from 'dotenv';

dotenv.config();

const environment = process.env.ENVIROMENT;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	prerender: {
		enabled: false
	},

	kit: {
		paths: {
			base: environment == 'SITE' ? '/play' : ''
		},
		adapter: adapter({
			fallback: 'index.html'
		})
	}
};

export default config;
