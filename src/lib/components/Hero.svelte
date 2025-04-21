<!--
	Hero.svelte

	This component represents the Hero section of a portfolio website. It includes animated elements
	such as a name, title, description, and buttons, which are revealed with staggered animations 
	when the component is mounted.

	Features:
	- Animated introduction of the user's name with a fly-in effect.
	- Title with a scaling animation for emphasis.
	- Description with a fade-in effect to provide additional details.
	- Buttons with staggered fly-in animations for navigation.

	Transitions and Animations:
	- Uses Svelte's built-in transitions (`fly`, `scale`, `fade`) for smooth animations.
	- Easing functions (`backOut`, `elasticOut`) are applied for natural motion effects.
	- Animations are staggered using delays to create a sequential reveal effect.

	Props:
	- None.

	Dependencies:
	- `svelte/transition` for animations.
	- `svelte/easing` for easing functions.
	- `onMount` from `svelte` to trigger animations after the component is mounted.

	Usage:
	- Place this component in the desired section of your Svelte application.
	- Customize the text, links, and styles as needed to match your portfolio's theme.

	Notes:
	- Ensure that the CSS classes used (e.g., `btn`, `text-primary`, `text-secondary`) are defined
		in your project's styles or framework (e.g., Tailwind CSS).
	- The `visible` variable controls the conditional rendering of animated elements.
-->
<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { backOut, elasticOut } from 'svelte/easing';

	// For staggered animations
	let visible = false;

	// Show elements after a small delay
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<!-- Hero Section with animated elements -->
<section
	class="no-scrollbar flex min-h-[90vh] flex-col items-center justify-center gap-6 overflow-hidden text-center"
>
	{#if visible}
		<!-- Name with fly-in animation -->
		<div in:fly={{ y: -50, duration: 800, delay: 200, easing: backOut }}>
			<h1 class="mb-4 text-5xl font-bold md:text-6xl">
				Hi, I'm <span class="text-primary">Ashutosh Khanal Upadhyay</span>
			</h1>
		</div>

		<!-- Title with scale animation -->
		<div in:scale={{ start: 0.8, duration: 700, delay: 500, easing: elasticOut }}>
			<h2 class="text-secondary mb-2 text-2xl font-semibold md:text-3xl">DevOps Enthusiast</h2>
		</div>

		<!-- Description with fade animation -->
		<p
			class="text-base-content/70 mx-auto mb-6 max-w-xl text-lg"
			in:fade={{ duration: 800, delay: 700 }}
		>
			Passionate about automation, cloud infrastructure, CI/CD, and building resilient systems. I
			love bridging the gap between development and operations to deliver robust, scalable
			solutions.
		</p>

		<!-- Buttons with staggered fly-in animations -->
		<div class="mt-6 flex flex-wrap justify-center gap-4">
			<a
				href="/about"
				class="btn btn-primary btn-lg"
				in:fly={{ x: -40, duration: 600, delay: 900 }}
			>
				About Me
			</a>
			<a
				href="/projects"
				class="btn btn-secondary btn-lg"
				in:fly={{ x: 0, duration: 600, delay: 1000 }}
			>
				Projects
			</a>
		</div>
	{/if}
</section>
