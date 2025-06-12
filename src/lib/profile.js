// src/lib/profile.js

/**
 * Portfolio Profile Data
 *
 * This file contains all the data for your portfolio.
 * Edit this file to update your portfolio without touching the components.
 */

// Personal Information
export const personalInfo = {
	name: 'Ashutosh Khanal Upadhyay',
	title: 'DevOps Enthusiast',
	image: '/images/profile2.png', // Path to your profile image
	bio: 'DevOps Ethusiast with a passion for automating infrastructure and optimizing deployment pipelines.',
	email: 'uashutoshk@gmail.com',
	location: 'Ramgram-3, Parasi, Nepal',
	githubUsername: 'asup20cs',
	description:
		'Passionate about automation, cloud infrastructure, CI/CD, and building resilient systems. I love bridging the gap between development and operations to deliver robust, scalable solutions.',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/asup20cs',
			icon: 'https://img.icons8.com/bubbles/200/github.png'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/asup20cs/',
			icon: 'https://img.icons8.com/bubbles/200/linkedin.png'
		},
		{
			name: 'Credly',
			url: 'https://www.credly.com/users/ashutosh-khanal-upadhyay.dd547dec',
			icon: 'https://img.icons8.com/clouds/200/credly.png'
		},
		{
			name: 'X',
			url: 'https://x.com/uashutoshk',
			icon: 'https://img.icons8.com/ios/250/twitterx--v2.png'
		}
	]
};

// Education Information
export const education = [
	{
		degree: 'Bachelor of Engineering Computer Science',
		institution: 'Visvesvaraya Technological University',
		location: 'Belagavi, Karnataka, India',
		period: '2020 - 2024',
		description: ''
	}
];

// Work Experience
export const experience = [
	{
		title: 'Cybersecurity and Ethical Hacking Intern',
		company: 'Innovate Intern',
		location: 'Remote',
		period: 'Feb 2024 - April 2024',
		responsibilities: [
			'Acquired comprehension of cyber security principles, ethical hacking, and vulnerability assessment.',
			'Gained proficiency in utilizing various tools and technologies such as OWASP ZAP and Metasploit for conducting penetration testing and vulnerability assessment.'
		]
	},
	{
		title: 'Web Development Intern',
		company: 'Vault of Code',
		location: 'Remote',
		period: 'Oct 2023 - Nov 2023',
		responsibilities: [
			'Grasped the fundamental concepts of web development.',
			'Contributed to the maintenance and construction of the companys website.'
		]
	}
];

// Certifications
export const certifications = [
	{
		name: 'Introduction to Kubernetes',
		image: '/images/certificates/kubernetes.webp'
	},
	{
		name: 'Introduction to GitOps',
		image: '/images/certificates/gitops.webp'
	},
	{
		name: 'Introduction to OpenTofu',
		image: '/images/certificates/opentofu.webp'
	},
	{
		name: 'Introduction to DevOps and Site Reliability Engineering',
		image: '/images/certificates/devops.webp'
	},
	{
		name: 'Introduction to Jenkins',
		image: '/images/certificates/jenkins.jpg'
	},
	{
		name: 'IT Security: Defense against the digital dark arts',
		image: '/images/certificates/itsec.webp'
	},
	{
		name: 'Linux Fundamentals',
		image: '/images/certificates/linuxfun.webp'
	},
	{
		name: 'Operating Systems and You: Becoming a Power User',
		image: '/images/certificates/os.webp'
	}
];

// Skills & Tech Stack
export const techStack = {
	// Cloud Platforms
	cloud: [
		{
			name: 'AWS',
			icon: 'https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000'
		},
		{
			name: 'Azure',
			icon: 'https://img.icons8.com/?size=100&id=81727&format=png&color=000000'
		}
	],

	// Containerization & Orchestration
	containerization: [
		{
			name: 'Docker',
			icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000'
		},
		{
			name: 'Podman',
			icon: 'https://www.vectorlogo.zone/logos/podmanio/podmanio-ar21.svg'
		}
	],

	// CI/CD & Automation
	'CI/CD': [
		{ name: 'Jenkins', icon: 'https://img.icons8.com/?size=100&id=39292&format=png&color=000000' }
	],

	// Infrastructure as Code
	IaC: [
		{
			name: 'Terraform',
			icon: 'https://img.icons8.com/?size=100&id=kEkT1u7zTDk5&format=png&color=000000'
		},
		{
			name: 'OpenTofu',
			icon: 'https://www.vectorlogo.zone/logos/opentofu/opentofu-ar21.svg'
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
		{ name: 'Python', icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000' },
		{
			name: 'Bash',
			icon: 'https://img.icons8.com/?size=100&id=50ZQHdJTmPqw&format=png&color=000000'
		}
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

export const project = [
	{
		name: 'devops-folio',
		description: 'A personal portfolio website built with SvelteKit and Tailwind CSS.',
		language: 'Svelte',
		languageIcon: 'https://img.icons8.com/doodle/96/svetle.png', // Svelte icon
		githubLink: 'https://github.com/asup20cs/devops-folio',
		liveDemoLink: 'https://www.uashutoshk.com.np/'
	},
	{
		name: 'CurrencyRecognizationApp',
		description: 'A python app to recognize currencies',
		language: 'Python',
		languageIcon: 'https://img.icons8.com/color/240/python--v1.png', // Svelte icon
		githubLink: 'https://github.com/asup20cs/CurrencyRecognizationApp',
		liveDemoLink: ''
	},
	{
		name: 'dev-tutorials',
		description: 'A blog app for writing tutorials for DevOps and Blogs',
		language: 'Astro',
		languageIcon: 'https://img.icons8.com/nolan/96/astro.png', // Svelte icon
		githubLink: 'https://github.com/asup20cs/dev-tutorials',
		liveDemoLink: ''
	}
];
