<script>
	export let project;
</script>

<div
	class="card card-compact bg-base-100 flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl"
>
	<div class="card-body flex grow flex-col">
		<!-- Project Title -->
		<h2 class="card-title text-primary text-lg lg:text-xl">
			<a
				href={project.githubLink}
				target="_blank"
				rel="noopener noreferrer"
				class="hover:underline"
			>
				{project.name}
			</a>
		</h2>

		<!-- Project Description -->
		<p class="min-h-[4rem] grow text-base opacity-80">
			{project.description || 'No description provided.'}
		</p>

		<!-- Language and Meta Info -->
		<div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xl">
			{#if project.language}
				<span class="flex items-center gap-2 opacity-75">
					<img src={project.languageIcon} alt="{project.language} icon" class="h-12 w-12" />
					<span>{project.language}</span>
				</span>
			{/if}
		</div>

		<!-- Card Actions -->
		<div class="card-actions mt-5 justify-end">
			{#if project.liveDemoLink}
				<a
					href={project.liveDemoLink}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary"
				>
					Live Demo
				</a>
			{/if}
			<a
				href={project.githubLink}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-primary"
			>
				View on GitHub
			</a>
		</div>
	</div>
</div>
