<!-- src/lib/components/Footer.svelte -->
<script>
	import { onMount } from 'svelte';

	// Tech stack used in this portfolio with Icons8 SVGs
	const techStack = [
		{
			name: 'SvelteKit',
			icon: 'https://img.icons8.com/?size=100&id=Mm35TzLKahiF&format=png&color=000000',
			url: 'https://kit.svelte.dev/'
		},
		{
			name: 'Tailwind CSS',
			icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png',
			url: 'https://tailwindcss.com/'
		},
		{
			name: 'daisyUI',
			icon: 'https://img.icons8.com/color/48/000000/flower.png', // Using a flower as placeholder for daisyUI
			url: 'https://daisyui.com/'
		},
		{
			name: 'Markdown',
			icon: 'https://img.icons8.com/color/48/000000/markdown.png',
			url: 'https://www.markdownguide.org/'
		},
		{
			name: 'Perplexity',
			icon: 'https://img.icons8.com/?size=100&id=kzJWN5jCDzpq&format=png&color=000000',
			url: 'https://www.perplexity.ai/'
		}
	];

	// Nepal time state variables
	let nepalTime = '';
	let nepalDate = '';
	let timeInterval;

	// Function to update Nepal time
	function updateNepalTime() {
		const now = new Date();

		// Nepal is UTC+5:45
		const nepalOffset = 5 * 60 + 45; // in minutes
		const utcOffset = now.getTimezoneOffset(); // local offset in minutes
		const totalOffsetMinutes = nepalOffset + utcOffset;

		// Create Nepal time by adding the offset
		const nepalDateTime = new Date(now.getTime() + totalOffsetMinutes * 60000);

		// Format time: HH:MM:SS AM/PM
		const hours = nepalDateTime.getHours();
		const minutes = nepalDateTime.getMinutes();
		const seconds = nepalDateTime.getSeconds();
		const ampm = hours >= 12 ? 'PM' : 'AM';

		nepalTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

		// Format date: Day, Month Date, Year
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		nepalDate = `${days[nepalDateTime.getDay()]}, ${months[nepalDateTime.getMonth()]} ${nepalDateTime.getDate()}, ${nepalDateTime.getFullYear()}`;
	}

	onMount(() => {
		// Initial update
		updateNepalTime();

		// Update time every second
		timeInterval = setInterval(updateNepalTime, 1000);

		// Clean up interval on component destruction
		return () => {
			clearInterval(timeInterval);
		};
	});
</script>

<footer
	class="bg-base-200 text-base-content flex w-full flex-col items-center justify-center px-4 py-6"
>
	<!-- Made with love section -->
	<div class="mb-5 text-center">
		<p class="text-lg">
			Made with
			<span class="heart-beat text-error inline-block">❤</span>
			by <span class="font-bold">[Your Name]</span>
		</p>
	</div>

	<!-- Tech stack section with Icons8 SVGs -->
	<div class="mb-5 w-full text-center">
		<div class="flex flex-wrap justify-center gap-3">
			{#each techStack as tech}
				<a
					href={tech.url}
					class="badge badge-lg flex items-center gap-2 transition-opacity hover:opacity-80"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={tech.icon} alt={tech.name} class="h-4 w-4" />
					{tech.name}
				</a>
			{/each}
		</div>
	</div>

	<!-- Nepal time section -->
	<div class="mb-4 text-center">
		<p class="font-mono text-sm">{nepalTime} • {nepalDate}</p>
	</div>

	<!-- Icons8 attribution -->
	<div class="text-center text-xs opacity-70">
		<a
			href="https://icons8.com"
			class="flex items-center justify-center gap-1 hover:underline"
			target="_blank"
			rel="noopener noreferrer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
				<path
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
				/>
			</svg>
			Icons by Icons8
		</a>
	</div>
</footer>

<style>
	/* Beating heart animation */
	.heart-beat {
		animation: heartbeat 1.2s infinite;
	}

	@keyframes heartbeat {
		0% {
			transform: scale(1);
		}
		14% {
			transform: scale(1.3);
		}
		28% {
			transform: scale(1);
		}
		42% {
			transform: scale(1.3);
		}
		70% {
			transform: scale(1);
		}
	}
</style>
