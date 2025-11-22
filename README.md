# DevOps Portfolio

A modern, high-performance DevOps portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Features a sleek dark mode, interactive dock, and dynamic animations.

![DevOps Portfolio](public/screenshots/projects.png)

## Features

-   **Modern UI/UX**: Built with Tailwind CSS and Framer Motion for smooth animations.
-   **Dark/Light Mode**: Fully supported theme switching with a persistent state.
-   **Interactive Dock**: Mac-style dock for easy navigation.
-   **Responsive Design**: Fully responsive layout for all devices.
-   **Performance**: Optimized for speed and accessibility.

## Tech Stack

-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Theme**: [Next Themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   pnpm (recommended) or npm/yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/devops-portfolio.git
    cd devops-portfolio
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

3.  Start the development server:
    ```bash
    pnpm dev
    ```

## Customization

### Profile Data

Edit `src/data/profile.ts` to update your personal information, skills, projects, and achievements.

### Static Assets

Place your static assets (images, resume, etc.) in the `public/assets` directory.

**See [ASSETS.md](./ASSETS.md) for a detailed guide on where to place each file.**

**Required Files:**
-   `public/assets/profile.png` - Your profile picture.
-   `public/assets/resume.pdf` - Your resume file.
-   `public/assets/project-1.png` - Image for Project 1.
-   `public/assets/project-2.png` - Image for Project 2.
-   `public/assets/cert-cka.png` - CKA Certificate image.
-   `public/assets/cert-aws.png` - AWS Certificate image.

### Theme

The theme configuration is located in `src/index.css` and `src/components/theme-provider.tsx`.

## Deployment

Build the project for production:

```bash
pnpm build
```

The output will be in the `dist` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

## License

MIT
