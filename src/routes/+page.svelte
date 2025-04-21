<!-- src/routes/+page.svelte -->
<script>
	import Hero from '$lib/components/Hero.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="py-4" in:fade={{ duration: 300 }}>
	<!-- Hero Section with animated elements -->
	<section
		class="flex min-h-[80vh] flex-col items-center justify-center gap-4 overflow-hidden text-center"
	>
		<!-- Your hero content -->
		<Hero />
	</section>
</div>
