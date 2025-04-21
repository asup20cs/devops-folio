<!-- src/routes/projects/+page.svelte -->
<script>
	import { fade, fly } from 'svelte/transition';
	import { personalInfo } from '$lib/profile.js';
	import GithubStats from '$lib/components/GithubStats.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// Helper to format numbers (e.g., 1500 -> 1.5k)
	function formatStars(num) {
		if (num >= 1000) {
			return (num / 1000).toFixed(1) + 'k';
		}
		return num;
	}
</script>

<div class="py-8" in:fade={{ duration: 300 }}>
	<h1 class="mb-8 text-4xl font-bold">My Projects</h1>

	{#if data.projects && data.projects.length > 0}
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each data.projects as project, i (project.id || project.name || i)}
				<div
					class="card card-compact bg-base-100 flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl"
					in:fly={{ y: 20, duration: 300, delay: i * 50 }}
				>
					<div class="card-body flex grow flex-col">
						<!-- Title - Keeping card-title, usually large enough -->
						<h2 class="card-title text-primary text-lg lg:text-xl">
							<a
								href={project.html_url}
								target="_blank"
								rel="noopener noreferrer"
								class="hover:underline"
							>
								{project.name}
							</a>
						</h2>
						<!-- Description - Increased size to text-base -->
						<p class="min-h-[4rem] grow text-base opacity-80">
							<!-- Increased size and min-height -->
							{project.description || 'No description provided.'}
						</p>

						<!-- Meta Info: Language, Stars, Forks - Increased size to text-base -->
						<div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-base">
							<!-- Increased size -->
							{#if project.language}
								<span class="flex items-center gap-1 opacity-75">
									<!-- Language Icon (Optional) -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									{project.language}
								</span>
							{/if}
							<!-- Star Count -->
							<span class="flex items-center gap-1 opacity-75">
								<!-- STAR ICON PLACEHOLDER -->
								<span class="inline-block h-8 w-8"
									><img
										src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000"
										alt="github-stars"
									/></span
								>
								<!-- Placeholder text/char -->
								{formatStars(project.stargazers_count)}
							</span>
							<!-- Fork Count -->
							<span class="flex items-center gap-1 opacity-75">
								<!-- FORK ICON PLACEHOLDER -->
								<span class="inline-block h-8 w-8"
									><img
										src="https://img.icons8.com/?size=100&id=12856&format=png&color=000000"
										alt="fork"
									/></span
								>
								<!-- Placeholder text/char -->
								{project.forks_count}
							</span>
						</div>

						<!-- Card Actions / Buttons -->
						<div class="card-actions mt-5 justify-end">
							{#if project.homepage}
								<a
									href={project.homepage}
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-secondary"
								>
									<!-- Default button size -->
									Live Demo
								</a>
							{/if}
							<a
								href={project.html_url}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-primary"
							>
								<!-- Default button size -->
								View on GitHub
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else if !personalInfo.githubUsername}
		<!-- ... (Warning message remains the same) ... -->
		<div class="alert alert-warning">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/></svg
			>
			<span>GitHub username is not configured in <code>src/lib/profile.js</code>.</span>
		</div>
	{:else}
		<!-- ... (Empty state message remains the same) ... -->
		<p class="text-center opacity-70">
			No public projects found for {personalInfo.githubUsername} or failed to load.
		</p>
		<p class="mt-4 text-center">
			<a
				href="https://github.com/{personalInfo.githubUsername}?tab=repositories"
				target="_blank"
				rel="noopener noreferrer"
				class="link link-primary"
			>
				View on GitHub
			</a>
		</p>
	{/if}
</div>

<div class="py-8" in:fade={{ duration: 300 }}>
	<!-- GitHub Stats Section -->
	<div class="mb-12">
		<!-- Added margin-bottom -->
		<GithubStats />
		<!-- <<< USE COMPONENT -->
	</div>
</div>
