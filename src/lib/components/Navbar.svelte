<!--
	Navbar.svelte

	This component represents a responsive navigation bar for a portfolio website.
	It includes a brand/logo, navigation links, a theme selector, and a mobile menu.

	Features:
	- **Responsive Design**: Adapts to both desktop and mobile screens.
	- **Mobile Menu**: Includes a toggleable drawer for navigation on smaller screens.
	- **Theme Selector**: Allows users to switch themes, available for both desktop and mobile views.
	- **Active Route Highlighting**: Highlights the active route based on the current URL.

	Props:
	- None

	Reactive Variables:
	- `isMobileMenuOpen`: A boolean that tracks the state of the mobile menu (open/closed).

	Dependencies:
	- `page` store from `$app/stores`: Used to determine the current URL for active route highlighting.
	- `ThemeSelect` component: A child component for theme selection.

	Structure:
	1. **Mobile Menu Button**: A button to toggle the mobile menu.
	2. **Brand/Logo**: A clickable link to the homepage.
	3. **Desktop Navigation**: A horizontal menu for larger screens.
	4. **Mobile Menu Drawer**: A slide-out menu for smaller screens.
	5. **Theme Selector**: Integrated into both desktop and mobile views.

	Styling:
	- The `.active` class is applied to the active route link for styling.
	- Tailwind CSS classes are used for layout and styling.

	Accessibility:
	- ARIA labels and roles are used for better accessibility.
	- Keyboard navigation is supported for opening/closing the mobile menu.

	Usage:
	Place this component in your layout or pages to provide navigation functionality.
-->
<!-- src/lib/components/Navbar.svelte -->
<script>
	import { page } from '$app/stores';
	import ThemeSelect from '$lib/components/Themes.svelte';

	let isMobileMenuOpen = $state(false);

	const routes = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/projects', label: 'Projects' },
		{ path: 'https://tutorials.uashutoshk.com.np', label: 'Tutorials', external: true }
	];
</script>

<nav class="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
	<div class="mx-auto flex w-full justify-between px-4 sm:w-[90%] sm:px-6 lg:w-[70%]">
		<!-- Mobile menu button -->
		<div class="flex-none lg:hidden">
			<button
				type="button"
				class="btn btn-square btn-ghost"
				aria-label="Open menu"
				onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-6 w-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>

		<!-- Brand/logo -->
		<div class="flex-1">
			<a href="/" class="btn btn-ghost text-xl">Ashutosh Khanal Upadhyay</a>
		</div>

		<!-- Desktop navigation -->
		<div class="hidden flex-none items-center gap-2 lg:flex">
			<ul class="menu menu-horizontal gap-2 px-1">
				{#each routes as route (route.path)}
					<li>
						<a href={route.path} class:active={$page.url.pathname === route.path}>
							{route.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Theme selector component for desktop -->
			<ThemeSelect />
		</div>

		<!-- Mobile menu drawer -->
		{#if isMobileMenuOpen}
			<div
				class="fixed inset-0 z-40 bg-black/50 lg:hidden"
				role="button"
				tabindex="0"
				onclick={() => (isMobileMenuOpen = false)}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') isMobileMenuOpen = false;
				}}
			></div>
			<div
				class="bg-base-200 fixed top-0 left-0 z-50 h-full w-72 shadow-lg lg:hidden"
				role="dialog"
				tabindex="0"
				onkeydown={(e) => {
					if (e.key === 'Escape') isMobileMenuOpen = false;
				}}
			>
				<div class="flex items-center justify-between border-b p-4">
					<span class="text-xl font-bold">Menu</span>
					<button
						type="button"
						class="btn btn-sm btn-circle"
						aria-label="Close menu"
						onclick={() => (isMobileMenuOpen = false)}
					>
						✕
					</button>
				</div>
				<ul class="menu gap-2 p-4">
					{#each routes as route (route.path)}
						<li>
							<a
								href={route.path}
								class:active={$page.url.pathname === route.path}
								onclick={() => (isMobileMenuOpen = false)}
							>
								{route.label}
							</a>
						</li>
					{/each}
				</ul>
				<div class="p-4">
					<!-- Theme selector component for mobile -->
					<ThemeSelect />
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	/* Active route styling */
	.active {
		background-color: var(--tw-bg-opacity, 1) var(--tw-color-primary);
		color: var(--tw-text-opacity, 1) var(--tw-color-primary-content);
	}
</style>
