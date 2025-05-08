<!-- src/routes/projects/+page.svelte -->
<script>
	import { fade, fly } from 'svelte/transition';
	import { personalInfo, project } from '$lib/profile.js';
	import GithubStats from '$lib/components/GithubStats.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="py-8" in:fade={{ duration: 300 }}>
	<h1 class="mb-8 text-4xl font-bold">My Projects</h1>
	{#if project && project.length > 0}
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each project as project (project.name)}
				<ProjectCard {project} />
			{/each}
		</div>
	{:else}
		<p class="text-center opacity-70">No projects found.</p>
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
