<!-- src/lib/components/ThemeSelect.svelte -->
<script>
	import { themes } from '$lib/themes.js';
	import { onMount } from 'svelte';

	let current_theme = $state('');
	let themeColors = $state({});
	let initialized = $state(false); // Keep track if colors are loaded

	onMount(() => {
		if (typeof window !== 'undefined') {
			const savedTheme = window.localStorage.getItem('theme');
			// Ensure a valid theme is set initially
			if (savedTheme && themes.includes(savedTheme)) {
				set_theme(savedTheme); // Use set_theme to apply it
			} else {
				const defaultTheme = document.documentElement.getAttribute('data-theme') || themes[0];
				set_theme(defaultTheme); // Set default if needed
			}

			// Extract theme colors - slight delay can help ensure styles are applied
			setTimeout(() => {
				loadThemeColors();
				initialized = true;
			}, 50); // Short delay
		}
	});

	function set_theme(theme) {
		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
			document.documentElement.setAttribute('data-theme', theme);
			current_theme = theme;

			// Close dropdown after selection
			if (document.activeElement instanceof HTMLElement) {
				document.activeElement.blur();
			}
		}
	}

	function loadThemeColors() {
		const tempDiv = document.createElement('div');
		tempDiv.style.cssText = 'position:absolute; top:-9999px; left:-9999px; visibility:hidden;'; // Ensure it's truly hidden
		document.body.appendChild(tempDiv);

		const colors = {};
		for (const theme of themes) {
			tempDiv.setAttribute('data-theme', theme);
			// Read computed style *after* setting the attribute
			const style = getComputedStyle(tempDiv);
			colors[theme] = {
				primary: style.getPropertyValue('--color-primary').trim() || '#570df8',
				secondary: style.getPropertyValue('--color-secondary').trim() || '#f000b8',
				accent: style.getPropertyValue('--color-accent').trim() || '#37cdbe',
				base: style.getPropertyValue('--color-base-100').trim() || '#ffffff'
			};
		}

		document.body.removeChild(tempDiv);
		themeColors = colors; // Trigger reactivity
	}
</script>

<!-- Theme selector dropdown -->
<div class="dropdown dropdown-centre">
	<!-- Dropdown Button -->
	<button type="button" tabindex="0" class="btn btn-ghost" aria-label="Select theme">
		<!-- Current Theme Swatches -->
		{#if current_theme && initialized && themeColors[current_theme]}
			<div class="flex shrink-0">
				<div
					class="h-6 w-3 rounded-l-full"
					style="background-color: {themeColors[current_theme].primary}"
				></div>
				<div class="h-6 w-3" style="background-color: {themeColors[current_theme].secondary}"></div>
				<div class="h-6 w-3" style="background-color: {themeColors[current_theme].accent}"></div>
				<div
					class="h-6 w-3 rounded-r-full"
					style="background-color: {themeColors[current_theme].base}"
				></div>
			</div>
		{:else if !initialized}
			<!-- Placeholder while loading -->
			<span class="loading loading-spinner loading-xs"></span>
		{/if}

		<!-- Palette Icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="ml-1 h-6 w-6 shrink-0 stroke-current"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
			/>
		</svg>
	</button>

	<!-- Dropdown Menu Content -->
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul
		tabindex="0"
		class="dropdown-content bg-base-200 rounded-box z-[51] mt-1 max-h-96 w-52 overflow-y-auto p-2 shadow-lg"
	>
		<!-- Increased z-index -->
		{#each themes as theme}
			<li>
				<button
					type="button"
					class="hover:bg-base-300 flex w-full items-center rounded-lg px-3 py-2 text-left {theme ===
					current_theme
						? 'bg-base-300 font-semibold'
						: ''}"
					onclick={() => set_theme(theme)}
				>
					{#if initialized && themeColors[theme]}
						<!-- Swatches for this theme option -->
						<div class="mr-2 flex shrink-0">
							<div
								class="h-5 w-2 rounded-l-full lg:h-6 lg:w-3"
								style="background-color: {themeColors[theme].primary}"
							></div>
							<div
								class="h-5 w-2 lg:h-6 lg:w-3"
								style="background-color: {themeColors[theme].secondary}"
							></div>
							<div
								class="h-5 w-2 lg:h-6 lg:w-3"
								style="background-color: {themeColors[theme].accent}"
							></div>
							<div
								class="h-5 w-2 rounded-r-full lg:h-6 lg:w-3"
								style="background-color: {themeColors[theme].base}"
							></div>
						</div>
						<!-- Theme Name -->
						<span class="grow overflow-hidden text-ellipsis whitespace-nowrap capitalize"
							>{theme}</span
						>
					{:else}
						<!-- Placeholder if colors not loaded yet -->
						<span class="loading loading-dots loading-xs mr-2"></span>
						<span class="grow overflow-hidden text-ellipsis whitespace-nowrap capitalize"
							>{theme}</span
						>
					{/if}
				</button>
			</li>
		{/each}
	</ul>
</div>
