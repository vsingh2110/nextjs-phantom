# Phantom Medical Imaging - Next.js Migration

## Project Overview
This project is a migration of the Phantom Medical Imaging static HTML website to a modern Next.js 15 application. The goal is to improve performance, maintainability, and SEO while preparing the codebase for future internationalization.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Firebase (Firestore for form data)
- **Email:** EmailJS
- **Deployment:** Vercel (Planned)

## Project Structure
The project follows a modular, component-based architecture:

```
src/
├── app/                 # App Router pages and layouts
│   ├── product-pages/   # Product catalog (nested hierarchy)
│   ├── service-pages/   # Service offerings
│   └── ...              # Core pages (About, Contact, etc.)
├── components/          # Reusable React components
│   ├── layout/          # Header, Footer, etc.
│   ├── home/            # Homepage-specific components
│   ├── ui/              # Generic UI elements (Buttons, Modals)
│   ├── features/        # Functional components (Forms, Maps)
│   └── scripts/         # Third-party integrations
├── lib/                 # Utility functions and configurations
└── types/               # TypeScript type definitions
```

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## Documentation
- **Roadmap:** `docs/development-roadmap.md`
- **Current Status:** `docs/CURRENT-STATUS.md`
- **Daily Logs:** `docs/daily-logs/`
- **Dev Notes:** `docs/dev-notes/` (Architectural plans and decisions)

## Key Features
- **Mobile-First Design:** Separate hero implementations for mobile and desktop.
- **SEO Optimized:** Server-side rendering and semantic HTML.
- **Internationalization Ready:** Folder structure designed for future multi-language support.
