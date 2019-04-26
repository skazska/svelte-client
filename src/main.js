import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'world',
		message: 'XXX'
	}
});

export default app;