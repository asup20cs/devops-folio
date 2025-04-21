import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: { adapter: adapter() },
	preprocess: [],
	extensions: ['.svelte', '.svx']
};

export default config;
