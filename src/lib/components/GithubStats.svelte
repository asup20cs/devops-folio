<!--
	GitHubStats.svelte

	This component displays GitHub statistics, top programming languages, and trophies
	for a given GitHub username. It uses external services like GitHub Readme Stats
	and GitHub Profile Trophy to generate the visual data.

	## Props and Configuration:
	- `personalInfo.githubUsername`: The GitHub username to fetch stats for.
	- `statsTheme`: Theme for the GitHub stats card (e.g., 'dracula', 'radical').
	- `trophyTheme`: Theme for the GitHub trophies (e.g., 'dracula').
	- `langLayout`: Layout for the top languages card ('compact' or default).
	- `showIcons`: Boolean to show/hide icons in the stats card.
	- `hideBorder`: Boolean to show/hide borders in the stats card.

	## Features:
	- Displays:
		- GitHub stats card (total commits, stars, etc.).
		- Top programming languages.
		- GitHub trophies.
	- Responsive layout with a grid structure.
	- Smooth fade-in animation for images.
	- Alerts the user if the GitHub username is not set.

	## External Dependencies:
	- GitHub Readme Stats: https://github-readme-stats.vercel.app/
	- GitHub Profile Trophy: https://github-profile-trophy.vercel.app/

	## Notes:
	- Ensure the `personalInfo.githubUsername` is set in `profile.js` for the component to work.
	- Customize themes and options by modifying the configuration variables in the script section.
	- The component uses Svelte's `fly` transition for smooth entry animations.
-->
<!-- src/lib/components/GitHubStats.svelte -->
<script>
	import { personalInfo } from '$lib/profile.js';
	import { fly } from 'svelte/transition';

	// --- Configuration ---
	const username = personalInfo.githubUsername;
	const statsTheme = 'dracula';
	const trophyTheme = 'dracula';
	const langLayout = 'compact';
	const showIcons = true;
	const hideBorder = false;

	// Construct URLs (ensure username is available)
	let statsCardUrl = '';
	let topLangsUrl = '';
	let trophyUrl = '';

	if (username) {
		statsCardUrl = `https://github-readme-stats.vercel.app/api?username=${username}&theme=${statsTheme}&show_icons=${showIcons}&hide_border=${hideBorder}&count_private=true&include_all_commits=true`;
		topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${statsTheme}&show_icons=${showIcons}&hide_border=${hideBorder}&layout=${langLayout}`;
		trophyUrl = `https://github-profile-trophy.vercel.app/?username=${username}&theme=${trophyTheme}&no-frame=true&margin-w=15&margin-h=15`;
	}
</script>

{#if username}
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2" in:fly={{ y: 20, duration: 400 }}>
		<!-- GitHub Readme Stats - Stats Card -->
		{#if statsCardUrl}
			<div class="bg-base-100 flex justify-center rounded-lg p-4 shadow-md">
				<img src={statsCardUrl} alt="{username}'s GitHub Stats" class="max-w-full" />
			</div>
		{/if}

		<!-- GitHub Readme Stats - Top Languages -->
		{#if topLangsUrl}
			<div class="bg-base-100 flex justify-center rounded-lg p-4 shadow-md">
				<img src={topLangsUrl} alt="Top Languages for {username}" class="max-w-full" />
			</div>
		{/if}

		<!-- GitHub Profile Trophy -->
		{#if trophyUrl}
			<!-- This might span full width on mobile, adjust md:col-span-2 if needed -->
			<div class="bg-base-100 flex justify-center rounded-lg p-4 shadow-md md:col-span-2">
				<img src={trophyUrl} alt="GitHub Trophies for {username}" class="max-w-full" />
			</div>
		{/if}
	</div>
{:else}
	<div class="alert alert-sm alert-info">
		<span>GitHub username not set in profile.js, cannot display stats.</span>
	</div>
{/if}

<style>
	/* Optional: Add slight delay or animation */
	img {
		opacity: 0;
		animation: fadeIn 0.5s ease-out forwards;
		animation-delay: 0.2s; /* Small delay */
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}
</style>
