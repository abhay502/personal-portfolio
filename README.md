# Abhay S Nath — Portfolio

A single-page developer portfolio built with React, Vite, and Tailwind CSS — featuring a spider-web-inspired signature animation, orchestrated scroll reveals, and a smooth dark/light theme toggle.

**[Live Demo](#)** · **[Report a bug](../../issues)**

![Portfolio preview](./preview.png)

---

## ✨ Features

- **Signature web background** — an animated canvas of drifting, connected nodes rendered behind the hero, with thread color adapting to the active theme
- **Dark / light mode** — persisted to `localStorage`, respects system preference on first visit, eased with a synchronized page-wide color transition
- **Scroll-orchestrated animations** — sections reveal via Framer Motion as they enter the viewport; the nav's active-link underline tracks scroll position through an `IntersectionObserver`
- **Strung experience timeline** — work history is laid out along a self-drawing vertical thread
- **Fully responsive** — dedicated mobile navigation with a slide-down menu and locked body scroll
- **Accessible** — visible keyboard focus states, `aria-*` attributes on interactive controls, and `prefers-reduced-motion` support that freezes the background animation for users who request it
- **Optimized** — canvas animation pauses when scrolled out of view; Lighthouse scores 90+ across Performance, Accessibility, Best Practices, and SEO on a production build

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Space Grotesk, Inter, JetBrains Mono |

## 📂 Project Structure

```
src/
├── components/       # Navbar, ThemeToggle, WebBackground
├── sections/         # Hero, About, Skills, Experience, Projects, Contact
├── context/          # ThemeContext (dark/light state + persistence)
├── data/             # resume.js — all site copy in one place
├── index.css         # Design tokens (@theme) + global styles
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

```bash
# clone the repo
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it locally.

### Build for production

```bash
npm run build
npm run preview
```

`npm run preview` serves the optimized production build locally — use this (not `npm run dev`) when checking real performance, e.g. with Lighthouse.

## ✏️ Customizing

All personal content (name, summary, skills, experience, projects) lives in a single file:

```
src/data/resume.js
```

Update that file and every section re-renders with your content — no need to touch component code for a content change.

Design tokens (colors, fonts) live in `src/index.css` under the `@theme` block, so the whole palette can be restyled from one place.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

**Abhay S Nath**
📧 abhaysnath502@gmail.com
🔗 [linkedin.com/in/abhay-s-nath-192445182](https://linkedin.com/in/abhay-s-nath-192445182)