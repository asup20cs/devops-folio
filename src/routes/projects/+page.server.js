// src/routes/projects/+page.server.js
import { personalInfo } from '$lib/profile.js';
import { error } from '@sveltejs/kit';
import fs from 'fs/promises'; // Node.js File System module (Promise-based)
import path from 'path'; // Node.js Path module

// Define the path for the cache file relative to the project root
// Using '.cache' directory is a common convention
const cacheDir = path.join(process.cwd(), '.cache');
const cacheFilePath = path.join(cacheDir, 'github_repos_cache.json');

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	try {
		// --- Step 1: Try to read from the cache file ---
		try {
			await fs.access(cacheFilePath, fs.constants.R_OK); // Check if file exists and is readable
			console.log('Cache file found. Reading projects from cache...');
			const cachedData = await fs.readFile(cacheFilePath, 'utf-8');
			const projects = JSON.parse(cachedData);
			return { projects }; // Return cached data
		} catch (fileError) {
			// If file doesn't exist (ENOENT) or other read error, proceed to fetch
			if (fileError.code !== 'ENOENT') {
				console.warn('Warning reading cache file:', fileError.message);
			}
			console.log('Cache file not found or unreadable. Fetching from GitHub API...');
		}

		// --- Step 2: Fetch from GitHub API (if cache missed) ---
		const username = personalInfo.githubUsername;
		if (!username) {
			console.error('GitHub username not found in profile.js');
			return { projects: [] }; // Return empty if no username
		}

		const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;
		const response = await fetch(apiUrl, {
			headers: {
				// Consider adding PAT via environment variable for higher rate limits
				// 'Authorization': `token ${process.env.GITHUB_TOKEN}`
				Accept: 'application/vnd.github.v3+json',
				'User-Agent': 'SvelteKit-Portfolio-App'
			}
		});

		if (!response.ok) {
			throw error(response.status, `GitHub API Error: ${response.statusText}`);
		}

		const repos = await response.json();
		console.log(`Fetched ${repos.length} repos from GitHub API.`);

		// Filter and sort as before
		const filteredRepos = repos
			.filter((repo) => !repo.fork)
			.sort((a, b) => b.stargazers_count - a.stargazers_count);

		// --- Step 3: Write the fetched data to the cache file ---
		try {
			// Ensure the cache directory exists
			await fs.mkdir(cacheDir, { recursive: true });
			// Write the filtered repos data to the file
			await fs.writeFile(cacheFilePath, JSON.stringify(filteredRepos, null, 2), 'utf-8');
			console.log(
				`Successfully wrote ${filteredRepos.length} projects to cache file: ${cacheFilePath}`
			);
		} catch (writeError) {
			// Log error but still return data - caching is secondary
			console.error('Error writing to cache file:', writeError);
		}

		// Return the freshly fetched data
		return { projects: filteredRepos };
	} catch (err) {
		// Handle fetch errors or other unexpected errors
		console.error('Error in projects load function:', err);
		if (err.status) {
			// Re-throw SvelteKit errors
			throw err;
		} else {
			// Throw a generic internal error
			throw error(500, 'Could not load projects');
		}
	}
}
