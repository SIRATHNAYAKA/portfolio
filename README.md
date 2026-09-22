# 🚀 Premium Portfolio — Sachin Rathnayaka

> A modern, blazing-fast, and fully responsive personal portfolio built with **vanilla HTML, CSS & JavaScript** — no frameworks, no build step, 100% GitHub Pages ready.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 📖 Table of Contents

- [About](#-about)
- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance & Accessibility](#-performance--accessibility)
- [License](#-license)
- [Contact](#-contact)

---

## 🧑‍💻 About

This is the personal portfolio of **Sachin Rathnayaka** — a Full Stack Web Developer, UI/UX Designer, and Creative Developer based in Sri Lanka. The site showcases projects, skills, certificates, and a contact form, all wrapped in a premium dark/light themed interface.

It is intentionally built **without any frameworks or build tools** so that it remains lightweight, easy to maintain, and instantly deployable to GitHub Pages, Netlify, or Vercel.

---

## 🌐 Live Demo

🔗 **[https://sirathnayaka.github.io/premium-portfolio/](https://sirathnayaka.github.io/premium-portfolio/)**

> Replace the link above with your actual deployed URL.

---

## 🖼 Screenshots

| Light Mode | Dark Mode |
| --- | --- |
| ![Light Mode](assets/images/screenshots/light.png) | ![Dark Mode](assets/images/screenshots/dark.png) |

| Projects Section | Contact Section |
| --- | --- |
| ![Projects](assets/images/screenshots/projects.png) | ![Contact](assets/images/screenshots/contact.png) |

> Add your own screenshots to `assets/images/screenshots/`.

---

## ✨ Features

### 🎨 UI / UX
- Dark / light theme toggle with `localStorage` persistence and a **no-flash** init script
- Sticky header with backdrop blur, scroll state, and active section highlighting
- Full-screen mobile menu with smooth animations
- Custom cursor (desktop only) with contextual hover states
- Magnetic buttons and subtle parallax effects
- Scroll progress indicator and back-to-top button
- Scroll reveal animations powered by `IntersectionObserver`
- Animated counters for statistics
- Lightweight canvas particle system in the hero (disabled for `prefers-reduced-motion`)

### 📁 Content & Functionality
- Project filtering by category
- Dynamic case study pages (`project-details.html?id=...`) rendered from JSON
- Certificate gallery with modal viewer
- Contact form with client-side validation + Formspree / `mailto:` fallback
- Copy-email button with toast notifications
- Custom 404 page

### ⚙️ Technical
- Semantic HTML5 and ARIA labels
- Keyboard navigation, skip link, and visible focus states
- `prefers-reduced-motion` support throughout
- SEO meta tags, Open Graph, Twitter Card, and JSON-LD `Person` schema
- Zero dependencies — pure vanilla stack
- Fully responsive from 320px to 4K

---

## 🛠 Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 (semantic) |
| Styling | CSS3 — custom properties, Grid, Flexbox, `clamp()` fluid typography |
| Behaviour | Vanilla JavaScript (ES2015+) |
| Icons | Inline SVG |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) + [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) |
| Data | JSON files loaded via `fetch` |

---

## 📂 Project Structure
