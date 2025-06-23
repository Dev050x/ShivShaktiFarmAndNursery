# 🌱 ShivShakti Farm & Nursery Website

Modern, fast, and fully-typed Next.js application for ShivShakti Farm & Nursery.  
It showcases our plants, services, and contact details while providing a streamlined admin experience.

---

## 📑 Table of Contents
1. [Tech Stack](#-tech-stack)
2. [Features](#-features)
3. [Quick Start](#-quick-start)
4. [Project Structure](#-project-structure)
5. [Configuration](#-configuration)
6. [Scripts](#-scripts)
7. [Deployment](#-deployment)
8. [Contributing](#-contributing)
9. [License](#-license)
10. [Acknowledgements](#-acknowledgements)

---

## 🔧 Tech Stack

| Layer          | Technology                                    |
| -------------- | --------------------------------------------- |
| Framework      | **Next.js 14** (App Router, TypeScript)       |
| Styling        | Tailwind CSS · Shadcn UI                      |
| State / Utils  | React Hooks · Zod (validation)                |
| Hosting        | Vercel (default) or any Node 18+ server       |
| CI / Checks    | GitHub Actions + `next lint`                  |

---

## ✨ Features

- Responsive UI with dark-mode support  
- SEO-ready metadata (`<head>` handled by Next.js)  
- Dynamic routing via App Router (`/app`)  
- Components built with Shadcn UI  
- Favicon & web-manifest in **`/public`**  
- Zero-config image optimisation (`next/image`)  
- Ready-to-use contact form with email forwarding (Resend)  
- Strict TypeScript everywhere 📐

---

## ⚡ Quick Start

> Requires **Node 18 LTS +** and **pnpm** (recommended) or npm/yarn.

```bash
# 1 – Clone
git clone https://github.com/Dev050x/ShivShaktiFarmAndNursery.git
cd ShivShaktiFarmAndNursery

# 2 – Install deps
pnpm install        # or npm install / yarn

# 3 – Run dev server
pnpm dev            # => http://localhost:3000


.
├── app/                # App Router routes & layouts
│   ├── page.tsx
│   └── ...
├── components/         # Reusable UI pieces
├── lib/                # Helpers (e.g. zod schemas)
├── public/             # Static assets (favicon.png, og.png,…)
├── styles/             # Tailwind globals / utilities
├── .env.local.example  # Sample env variables
└── next.config.mjs
