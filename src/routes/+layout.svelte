<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();

	const { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<main class="mx-auto w-full flex-1 px-4 pt-4 sm:w-[90%] sm:px-6 lg:w-[70%]">
		{@render children?.()}
	</main>

	<Footer />
</div>
