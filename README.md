# QA Engineering Portfolio

A production-ready static portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, shadcn/ui-style components, and Lucide React icons.

The site positions the owner as a QA Engineer with strong development and automation expertise. All portfolio content is stored in structured TypeScript data files so future updates do not require UI changes.

## Features

- Responsive dark engineering aesthetic with restrained motion
- Focus Mode toggle for QA Focus and Developer Focus
- Data-driven sections for capabilities, experience, projects, certifications, and contact links
- Project filtering by QA Automation, Software Development, Workflow Automation, and IoT
- Command palette navigation with `Ctrl/Cmd + K`
- Animated counters, scroll reveal effects, accessible focus states, and reduced-motion support
- GitHub Pages deployment workflow and Vite base-path handling

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Edit Portfolio Content

Update the placeholder content in:

```text
src/data/portfolio.ts
src/data/navigation.ts
index.html
public/og-image.svg
```

Replace placeholders for full name, title, bio, projects, certifications, social links, resume URL, and contact information.

## Folder Structure

```text
src/
  components/
    sections/        Page sections
    ui/              shadcn/ui-style primitives
  data/              Editable portfolio content
  hooks/             Shared React hooks
  lib/               Utilities
  App.tsx            Page composition and focus state
```

## GitHub Pages Deployment

The included workflow deploys `dist` to GitHub Pages on pushes to `main`.

1. Push this repository to GitHub.
2. In repository settings, set Pages source to GitHub Actions.
3. Update `index.html` Open Graph URLs with your deployed URL.
4. Push to `main`.

`vite.config.ts` automatically uses `/${repository-name}/` as the base path when building in GitHub Actions.
