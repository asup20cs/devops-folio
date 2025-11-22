import { Home, GraduationCap, Briefcase, Code, FolderGit2, Download, } from "lucide-react";
import { DiIllustrator } from "react-icons/di";
import { FaFigma, FaGithub, FaLinkedin, FaMicrosoft, FaTwitter } from "react-icons/fa";
import { LiaCertificateSolid, LiaJenkins } from "react-icons/lia";
import { SiKubernetes, SiTerraform, SiPython, SiGnubash, SiDocker, SiAmazon } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

export const profile = {
    personal: {
        name: "Ashutosh Khanal Upadhyay",
        role: "Tech Enthusiast",
        bio: "Tech Enthusiast with a passion for DevOps, Automation, and Cloud Infrastructure.",
        location: "Ramgram-3, Parasi, Nepal",
        email: "uashutoshk@gmail.com",
        avatar: "/assets/profile2.png",
        resume: "/assets/resume.pdf",
        socials: [
            {
                name: "GitHub",
                url: "https://github.com/asup20cs",
                icon: FaGithub,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/asup20cs/",
                icon: FaLinkedin,
            },
            {
                name: "X (Twitter)",
                url: "https://x.com/uashutoshk",
                icon: FaTwitter,
            },
        ],
    },
    education: [
        {
            degree: "Bachelor of Engineering Computer Science",
            school: "Visvesvaraya Technological University",
            year: "2020 - 2024",
            description: "Belagavi, Karnataka, India",
        },
    ],
    experience: [
        {
            role: "Cybersecurity and Ethical Hacking Intern",
            company: "Innovate Intern",
            year: "Feb 2024 - April 2024",
            description: "Acquired comprehension of cyber security principles, ethical hacking, and vulnerability assessment. Gained proficiency in utilizing various tools and technologies such as OWASP ZAP and Metasploit for conducting penetration testing and vulnerability assessment.",
        },
        {
            role: "Web Development Intern",
            company: "Vault of Code",
            year: "Oct 2023 - Nov 2023",
            description: "Grasped the fundamental concepts of web development. Contributed to the maintenance and construction of the company's website.",
        },
    ],
    skills: {
        languages: [
            { name: "Python", icon: SiPython },
            { name: "Bash", icon: SiGnubash },
        ],
        tools: [
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Terraform", icon: SiTerraform },
            { name: "Jenkins", icon: LiaJenkins },
            { name: "Git", icon: SiGnubash },
        ],
        cloud: [
            { name: "AWS", icon: SiAmazon },
            { name: "Azure", icon: VscAzureDevops },
        ],
        softwares: [
            { name: "Microsoft Office", icon: FaMicrosoft },
            { name: "Illustrator", icon: DiIllustrator },
            { name: "Figma", icon: FaFigma },
        ],
    },
    projects: [
        {
            title: "devops-folio",
            description: "A personal portfolio website built with React and Magic UI.",
            tech: ["React", "Magic UI"],
            liveUrl: "https://www.uashutoshk.com.np/",
            repoUrl: "https://github.com/asup20cs/devops-folio",
        },
        {
            title: "CurrencyRecognizationApp",
            description: "A python app to recognize currencies",
            tech: ["Python", "Machine Learning"],
            liveUrl: "",
            repoUrl: "https://github.com/asup20cs/CurrencyRecognizationApp",
        },
        {
            title: "dev-tutorials",
            description: "A blog app for writing tutorials for DevOps and Blogs",
            tech: ["Astro", "Markdown"],
            liveUrl: "",
            repoUrl: "https://github.com/asup20cs/dev-tutorials",
        },
        {
            title: "js-landscape",
            description: "A personal project to visualize the JavaScript ecosystem.",
            tech: ["JavaScript", "Visualization"],
            liveUrl: "https://js-landscape.pages.dev/",
            repoUrl: "https://github.com/asup20cs/js-landscape",
        },
    ],
    achievements: [
        {
            title: "Introduction to Kubernetes",
            year: "2024",
            issuer: "Linux Foundation",
            url: "https://www.credly.com/users/ashutosh-khanal-upadhyay.dd547dec",
            description: "Completed comprehensive training on Kubernetes fundamentals and container orchestration.",
            image: "/assets/achievements/kubernetes.webp",
        },
        {
            title: "Introduction to GitOps",
            year: "2024",
            issuer: "Linux Foundation",
            url: "https://www.credly.com/users/ashutosh-khanal-upadhyay.dd547dec",
            description: "Learned GitOps principles and best practices for infrastructure management.",
            image: "/assets/achievements/gitops.webp",
        },
        {
            title: "Introduction to OpenTofu",
            year: "2024",
            issuer: "Linux Foundation",
            url: "https://www.credly.com/users/ashutosh-khanal-upadhyay.dd547dec",
            description: "Gained expertise in OpenTofu for infrastructure as code.",
            image: "/assets/achievements/opentofu.webp",
        },
        {
            title: "Introduction to DevOps and Site Reliability Engineering",
            year: "2024",
            issuer: "Linux Foundation",
            url: "https://www.credly.com/users/ashutosh-khanal-upadhyay.dd547dec",
            description: "Comprehensive understanding of DevOps practices and SRE principles.",
            image: "/assets/achievements/devops.webp",
        },
        {
            title: "Introduction to Jenkins",
            year: "2024",
            issuer: "Linux Foundation",
            url: "https://www.credly.com/users/ashutosh-khanal-upadhyay.dd547dec",
            description: "Mastered Jenkins for continuous integration and continuous deployment.",
            image: "/assets/achievements/jenkins.jpg",
        },
        {
            title: "IT Security: Defense against the digital dark arts",
            year: "2024",
            issuer: "Google",
            url: "https://www.coursera.org/account/accomplishments/verify/QPBY5WSC9BQH",
            description: "Comprehensive IT security training covering various security concepts and practices.",
            image: "/assets/achievements/itsec.webp",
        },
        {
            title: "Linux Fundamentals",
            year: "2024",
            issuer: "Linux Foundation",
            url: "https://www.coursera.org/account/accomplishments/verify/WZVTCLL8AR79",
            description: "Solid foundation in Linux operating system and command-line operations.",
            image: "/assets/achievements/linuxfun.webp",
        },
        {
            title: "Operating Systems and You: Becoming a Power User",
            year: "2024",
            issuer: "Google",
            url: "https://www.coursera.org/account/accomplishments/verify/K8HY8KRKFRNF",
            description: "Advanced operating system concepts and power user techniques.",
            image: "/assets/achievements/os.webp",
        },
    ],
    dockItems: [
        { title: "Home", icon: Home, href: "#home" },
        { title: "Education", icon: GraduationCap, href: "#education" },
        { title: "Experience", icon: Briefcase, href: "#experience" },
        { title: "Skills", icon: Code, href: "#skills" },
        { title: "Projects", icon: FolderGit2, href: "#projects" },
        { title: "Certifications", icon: LiaCertificateSolid, href: "#certifications" },
        { title: "Resume", icon: Download, href: "/assets/resume.pdf" },
    ],
};
