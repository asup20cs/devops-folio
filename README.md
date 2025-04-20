# 🚧 Work in Progress: My Portfolio 🚧

Welcome to the repository! This project is a personal portfolio website built using modern web technologies to showcase my skills, projects, and experience. It's a work in progress, and I'm constantly improving it to make it better.

---

## 🌟 Features

- **Responsive Design**: Fully responsive and optimized for all devices.
- **Dynamic Theme Selector**: Choose from multiple themes using the theme dropdown.
- **Interactive Animations**: Smooth transitions and animations for a delightful user experience.
- **Tech Stack Showcase**: Highlighting the tools and technologies I use.
- **Real-Time Nepal Time**: Displays the current time in Nepal.
- **Easy Navigation**: Sticky navigation bar for quick access to sections.

---

## 🛠️ Tech Stack

This project is built with the following technologies:

- **Frontend**: [SvelteKit](https://kit.svelte.dev/), [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Animations**: Svelte transitions and easing functions
- **Icons**: [Icons8](https://icons8.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Markdown Support**: [MDsveX](https://mdsvex.com/)

---

## 🚀 How to Run the Project

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Steps to Run

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   The development server will start at `http://localhost:5173`. Open this URL in your browser to view the project.

5. **Build for Production**:
   To create a production build:

   ```bash
   npm run build
   ```

6. **Preview the Production Build**:
   To preview the production build locally:
   ```bash
   npm run preview
   ```

---

## ✏️ How to Make Changes

### Update Content

- **Personal Information**: Edit the `src/lib/profile.js` file to update your name, bio, social links, and other details.
- **Tech Stack**: Add or modify technologies in the `techStack` object in `src/lib/profile.js`.
- **Sections**: Update the `sections` array in `src/routes/about/+page.svelte` to add or remove sections.

### Update Styles

- **Global Styles**: Modify `src/app.css` to update global styles.
- **Tailwind Config**: Customize Tailwind CSS by editing the `tailwind.config.js` file.

### Add New Pages

1. Create a new `.svelte` file in the `src/routes` directory.
2. Add your content and logic to the new file.
3. Update the navigation links in `src/lib/components/Navbar.svelte`.

---

## 📂 Project Structure

```
my-portfolio/
├── src/
│   ├── lib/
│   │   ├── components/    # Svelte components (Navbar, Footer, etc.)
│   │   ├── themes.js      # Theme configuration
│   │   └── profile.js     # Portfolio data (personal info, tech stack, etc.)
│   ├── routes/            # Pages (e.g., Home, About, Projects)
│   ├── app.css            # Global styles
│   └── app.html           # HTML template
├── .svelte-kit/           # SvelteKit generated files
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration
```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or find a bug, feel free to open an issue or submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) for the amazing framework.
- [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for beautiful styling.
- [Icons8](https://icons8.com/) for the icons used in this project.

---

Thank you for checking the portfolio! Feel free to reach out if you have any questions or feedback. 😊
