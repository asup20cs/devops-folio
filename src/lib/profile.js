// src/lib/profile.js

/**
 * Portfolio Profile Data
 *
 * This file contains all the data for your portfolio.
 * Edit this file to update your portfolio without touching the components.
 */

// Personal Information
export const personalInfo = {
	name: 'Jane Doe',
	title: 'DevOps Engineer',
	image: '/images/placeholder.png', // Path to your profile image
	bio: 'Experienced DevOps Engineer with a passion for automating infrastructure and optimizing deployment pipelines.',
	email: 'contact@example.com',
	location: 'San Francisco, CA',
	resumeUrl: '/resume.pdf', // Path to your resume PDF
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/yourusername',
			icon: '/images/stack.png'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/yourusername',
			icon: '/images/stack.png'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/yourusername',
			icon: '/images/stack.png'
		}
	]
};

// Education Information
export const education = [
	{
		degree: 'Master of Science in Computer Science',
		institution: 'University of Technology',
		location: 'San Francisco, CA',
		period: '2018 - 2020',
		description: 'Specialized in Cloud Computing and Distributed Systems'
	}
];

// Work Experience
export const experience = [
	{
		title: 'Senior DevOps Engineer',
		company: 'Tech Innovations Inc.',
		location: 'Remote',
		period: '2021 - Present',
		responsibilities: [
			'Implemented CI/CD pipelines for microservices architecture',
			'Managed multi-region Kubernetes clusters with 99.9% uptime',
			'Reduced deployment time by 70% through automation'
		]
	}
];

// Certifications
export const certifications = [
	{
		name: 'AWS Certified DevOps Engineer - Professional',
		issuer: 'Amazon Web Services',
		date: '2022',
		expiry: '2025',
		credentialId: 'CERT-12345',
		image: '/images/placeholder.png', // Path to certificate image
		verificationUrl: 'https://www.credly.com/badges/example-verification-link' // Optional verification link
	}
];

// Skills & Tech Stack
export const techStack = {
	// Cloud Platforms
	cloud: [
		{
			name: 'AWS',
			icon: 'https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000'
		}
	],

	// Containerization & Orchestration
	containerization: [
		{
			name: 'Docker',
			icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000'
		}
	],

	// CI/CD & Automation
	cicd: [
		{ name: 'Jenkins', icon: 'https://img.icons8.com/?size=100&id=39292&format=png&color=000000' }
	],

	// Infrastructure as Code
	iac: [
		{
			name: 'Terraform',
			icon: 'https://img.icons8.com/?size=100&id=kEkT1u7zTDk5&format=png&color=000000'
		}
	],

	// Monitoring & Logging
	monitoring: [
		{
			name: 'Prometheus',
			icon: 'https://img.icons8.com/?size=100&id=Ei4ZhVQvIMHE&format=png&color=000000'
		}
	],

	// Programming Languages
	languages: [
		{ name: 'Python', icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000' }
	]
};

// Section Icons (for section headers)
export const sectionIcons = {
	profile: 'https://img.icons8.com/?size=100&id=23280&format=png&color=000000',
	education: 'https://img.icons8.com/?size=100&id=12197&format=png&color=000000',
	experience: 'https://img.icons8.com/?size=100&id=5GKV0BxduhCw&format=png&color=000000',
	certifications: 'https://img.icons8.com/?size=100&id=13194&format=png&color=000000',
	techStack: 'https://img.icons8.com/?size=100&id=13057&format=png&color=000000'
};
