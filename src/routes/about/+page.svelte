<!-- src/routes/about/+page.svelte -->
<script>
	import { fade, fly } from 'svelte/transition';
	import {
		personalInfo,
		education,
		experience,
		certifications,
		techStack,
		sectionIcons
	} from '$lib/profile.js';

	// Function to scroll to a section
	function scrollToSection(id) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}

	// Sections for navigation
	const sections = [
		{ id: 'profile', label: 'Profile' },
		{ id: 'education', label: 'Education' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'certifications', label: 'Certifications' },
		{ id: 'techStack', label: 'Tech Stack' }
	];
</script>

<div class="py-4" in:fade={{ duration: 300 }}>
	<!-- Section Navigation -->
	<div class="bg-base-100 sticky top-16 z-30 mb-4 flex justify-center pt-2 pb-2">
		<div class="tabs tabs-boxed">
			{#each sections as section}
				<button class="tab gap-2" onclick={() => scrollToSection(section.id)}>
					<img src={sectionIcons[section.id]} alt={section.label} class="h-4 w-4" />
					<span>{section.label}</span>
				</button>
			{/each}
		</div>
	</div>

	<!-- Profile Section -->
	<section id="profile" class="mb-12 scroll-mt-24" in:fly={{ y: 50, duration: 500, delay: 200 }}>
		<h2 class="mb-6 flex items-center gap-3 text-3xl font-bold">
			<img src={sectionIcons.profile} alt="Profile" class="h-6 w-6" />
			Profile
		</h2>

		<div class="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
			<div class="flex w-full justify-center lg:w-1/3">
				<div class="avatar">
					<div class="ring-primary ring-offset-base-100 w-64 rounded-full ring ring-offset-2">
						<img src={personalInfo.image} alt={personalInfo.name} />
					</div>
				</div>
			</div>

			<div class="w-full lg:w-2/3">
				<h1 class="mb-2 text-4xl font-bold">{personalInfo.name}</h1>
				<h3 class="text-primary mb-4 text-2xl">{personalInfo.title}</h3>
				<div class="prose max-w-none">
					<p class="text-lg">{personalInfo.bio}</p>
				</div>

				<div class="mt-6 flex gap-4">
					<a href={`mailto:${personalInfo.email}`} class="btn btn-primary btn-sm gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Contact Me
					</a>
					<a href={personalInfo.resumeUrl} target="_blank" class="btn btn-outline btn-sm gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
						Download Resume
					</a>
				</div>

				<div class="mt-6 flex gap-3">
					{#each personalInfo.socialLinks as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-circle btn-sm btn-ghost"
						>
							<img
								src={social.icon}
								alt={social.name}
								class="w 5
								h-5"
							/>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Education Section -->
	<section id="education" class="mb-16 scroll-mt-24" in:fly={{ y: 50, duration: 500, delay: 300 }}>
		<h2 class="mb-8 flex items-center gap-3 text-3xl font-bold">
			<img src={sectionIcons.education} alt="Education" class="h-6 w-6" />
			Education
		</h2>

		<div class="space-y-6">
			{#each education as edu}
				<div class="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl">
					<div class="card-body">
						<div class="flex flex-col md:flex-row md:justify-between">
							<div>
								<h3 class="card-title text-primary">{edu.degree}</h3>
								<h4 class="text-lg">{edu.institution}</h4>
								<p class="text-sm opacity-70">{edu.location}</p>
							</div>
							<div class="badge badge-lg mt-2 md:mt-0">{edu.period}</div>
						</div>
						<p class="mt-4">{edu.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Experience Section -->
	<section id="experience" class="mb-16 scroll-mt-24" in:fly={{ y: 50, duration: 500, delay: 400 }}>
		<h2 class="mb-8 flex items-center gap-3 text-3xl font-bold">
			<img src={sectionIcons.experience} alt="Experience" class="h-6 w-6" />
			Professional Experience
		</h2>

		<div class="space-y-6">
			{#each experience as exp}
				<div class="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl">
					<div class="card-body">
						<div class="flex flex-col md:flex-row md:justify-between">
							<div>
								<h3 class="card-title text-primary">{exp.title}</h3>
								<h4 class="text-lg">{exp.company}</h4>
								<p class="text-sm opacity-70">{exp.location}</p>
							</div>
							<div class="badge badge-lg mt-2 md:mt-0">{exp.period}</div>
						</div>
						<div class="mt-4">
							<h4 class="mb-2 font-semibold">Key Responsibilities:</h4>
							<ul class="list-disc space-y-1 pl-5">
								{#each exp.responsibilities as responsibility}
									<li>{responsibility}</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Certifications Section -->
	<section
		id="certifications"
		class="mb-16 scroll-mt-24"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
	>
		<h2 class="mb-8 flex items-center gap-3 text-3xl font-bold">
			<img src={sectionIcons.certifications} alt="Certifications" class="h-6 w-6" />
			Certifications
		</h2>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each certifications as cert}
				<div class="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl">
					<figure class="px-4 pt-4">
						<img
							src={cert.image}
							alt={cert.name}
							class="h-48 w-full rounded-lg object-cover shadow"
						/>
					</figure>
					<div class="card-body">
						<h3 class="card-title text-primary">{cert.name}</h3>
						<p class="text-sm">
							<span class="font-semibold">{cert.issuer}</span> •
							<span>Issued: {cert.date}</span> •
							<span>Expires: {cert.expiry}</span>
						</p>
						<p class="mt-1 text-xs opacity-70">Credential ID: {cert.credentialId}</p>

						{#if cert.verificationUrl}
							<div class="card-actions mt-2 justify-end">
								<a
									href={cert.verificationUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-sm btn-outline"
								>
									Verify
								</a>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Tech Stack Section -->
	<section id="tech-stack" class="scroll-mt-24" in:fly={{ y: 50, duration: 500, delay: 600 }}>
		<h2 class="mb-8 flex items-center gap-3 text-3xl font-bold">
			<img src={sectionIcons.techStack} alt="Tech Stack" class="h-6 w-6" />
			Tech Stack
		</h2>

		<div class="space-y-8">
			{#each Object.entries(techStack) as [category, technologies]}
				<div>
					<h3 class="mb-4 text-xl font-semibold capitalize">
						{category.replace(/([A-Z])/g, ' $1').trim()}
					</h3>
					<div class="flex flex-wrap gap-4">
						{#each technologies as tech}
							<div class="bg-base-100 flex items-center gap-2 rounded-lg px-3 py-2 shadow-md">
								<img src={tech.icon} alt={tech.name} class="h-5 w-5" />
								<span>{tech.name}</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
