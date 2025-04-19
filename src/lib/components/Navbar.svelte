<!-- src/lib/Navbar.svelte -->
<script>
	import { page } from '$app/stores';
	import ThemeSelect from '$lib/components/Themes.svelte';
	import { themes } from '$lib/themes';

	let isMobileMenuOpen = $state(false);

	const routes = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/projects', label: 'Projects' },
		{ path: '/blog', label: 'Blog' }
	];

	function setTheme(theme) {
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<nav class="navbar bg-base-100 sticky top-0 z-50 px-4 shadow-lg sm:px-8">
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
		<a href="/" class="btn btn-ghost text-xl">Portfolio</a>
	</div>

	<!-- Desktop navigation -->
	<div class="hidden flex-none items-center gap-2 lg:flex">
		<ul class="menu menu-horizontal gap-2 px-1">
			{#each routes as route}
				<li>
					<a href={route.path} class:active={$page.url.pathname === route.path}>
						{route.label}
					</a>
				</li>
			{/each}
		</ul>
		<!-- Theme selector as dropdown (desktop) -->
		<div class="dropdown dropdown-end">
			<button type="button" tabindex="0" class="btn btn-ghost" aria-label="Select theme">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
					/>
				</svg>
			</button>
			<ul
				class="dropdown-content bg-base-300 rounded-box z-[1] max-h-96
						   w-52 overflow-y-auto p-2 shadow-2xl"
			>
				{#each themes as theme}
					<li>
						<button
							type="button"
							class="w-full text-left capitalize"
							onclick={() => setTheme(theme)}
						>
							{theme}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- Mobile menu drawer -->
	{#if isMobileMenuOpen}
		<button
			type="button"
			class="fixed inset-0 z-40 bg-black/50 lg:hidden"
			aria-label="Close mobile menu"
			onclick={() => (isMobileMenuOpen = false)}
			onkeydown={(e) => e.key === 'Enter' && (isMobileMenuOpen = false)}
		></button>
		<div class="bg-base-200 fixed top-0 left-0 z-50 h-full w-72 shadow-lg lg:hidden">
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
				{#each routes as route}
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
				<ThemeSelect />
			</div>
		</div>
	{/if}
</nav>
