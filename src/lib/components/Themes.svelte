<!-- src/lib/components/ThemeSelect.svelte -->
<script>
	import { themes } from '$lib/themes.js';
	import { onMount } from 'svelte';

	let current_theme = $state('');
	let themeColors = $state({});

	onMount(() => {
		if (typeof window !== 'undefined') {
			// Load saved theme
			const theme = window.localStorage.getItem('theme');
			if (theme && themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme);
				current_theme = theme;
			}

			// Extract theme colors
			loadThemeColors();
		}
	});

	function set_theme(theme) {
		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
			document.documentElement.setAttribute('data-theme', theme);
			current_theme = theme;
		}
	}

	// Function to extract colors from all themes
	function loadThemeColors() {
		// Create a temporary div to apply themes and extract colors
		const tempDiv = document.createElement('div');
		tempDiv.style.display = 'none';
		document.body.appendChild(tempDiv);

		// Extract colors for each theme
		for (const theme of themes) {
			tempDiv.setAttribute('data-theme', theme);
			document.body.appendChild(tempDiv);

			// Get computed colors (primary, secondary, accent, neutral)
			themeColors[theme] = {
				primary: getComputedStyle(tempDiv).getPropertyValue('--color-primary') || '#570df8',
				secondary: getComputedStyle(tempDiv).getPropertyValue('--color-secondary') || '#f000b8',
				accent: getComputedStyle(tempDiv).getPropertyValue('--color-accent') || '#37cdbe',
				base: getComputedStyle(tempDiv).getPropertyValue('--color-base-100') || '#ffffff'
			};

			// Clean up
			document.body.removeChild(tempDiv);
		}
	}
</script>

<div class="dropdown dropdown-end w-full max-w-xs">
	<div tabindex="0" role="button" class="btn w-full">
		{#if current_theme}
			<div class="flex items-center gap-2">
				<!-- Color swatches for current theme -->
				<div class="flex">
					<div
						class="h-6 w-3 rounded-l-full"
						style="background-color: {themeColors[current_theme]?.primary ||
							'var(--color-primary)'}"
					></div>
					<div
						class="h-6 w-3"
						style="background-color: {themeColors[current_theme]?.secondary ||
							'var(--color-secondary)'}"
					></div>
					<div
						class="h-6 w-3"
						style="background-color: {themeColors[current_theme]?.accent || 'var(--color-accent)'}"
					></div>
					<div
						class="h-6 w-3 rounded-r-full"
						style="background-color: {themeColors[current_theme]?.base || 'var(--color-base-100)'}"
					></div>
				</div>
				<span class="capitalize">{current_theme}</span>
			</div>
		{:else}
			Select Theme
		{/if}
	</div>

	<ul
		class="dropdown-content bg-base-200 rounded-box z-[1] grid max-h-96 w-full grid-cols-1 gap-1 overflow-y-auto p-2 shadow-lg"
	>
		{#each themes as theme}
			<li>
				<button
					type="button"
					class="btn btn-ghost w-full justify-start {theme === current_theme ? 'btn-active' : ''}"
					onclick={() => set_theme(theme)}
				>
					<!-- 4 color swatches for each theme -->
					<div class="mr-2 flex">
						<div
							class="h-6 w-3 rounded-l-full"
							style="background-color: {themeColors[theme]?.primary || 'var(--color-primary)'}"
						></div>
						<div
							class="h-6 w-3"
							style="background-color: {themeColors[theme]?.secondary || 'var(--color-secondary)'}"
						></div>
						<div
							class="h-6 w-3"
							style="background-color: {themeColors[theme]?.accent || 'var(--color-accent)'}"
						></div>
						<div
							class="h-6 w-3 rounded-r-full"
							style="background-color: {themeColors[theme]?.base || 'var(--color-base-100)'}"
						></div>
					</div>
					<span class="capitalize">{theme}</span>
				</button>
			</li>
		{/each}
	</ul>
</div>
