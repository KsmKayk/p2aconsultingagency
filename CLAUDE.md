# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product Overview

Landing Page para a agência de consultoria P2A, especializada em ajudar empresas a alcançar seus objetivos de negócios por meio de automação e inteligência artificial para chats como WhatsApp.

A landing page apresenta os serviços oferecidos pela P2A, incluindo automação de atendimento ao cliente, integração de chatbots e soluções personalizadas para melhorar a eficiência e a experiência do cliente.

## Development Commands

- `npm run dev`: Start the development server at http://localhost:3000
- `npm run build`: Build the application for production (generates static files in `out/` due to export configuration)
- `npm run start`: Start the production server (after building)
- `npm run deploy`: Build, touch .nojekyll, and deploy to GitHub Pages (gh-pages branch)
- Note: There are no test scripts defined in the project. Testing is not configured.

## Code Architecture

The project follows a Next.js structure with the following key directories:

- `components/`: Contains reusable React components for each section of the landing page:
  - Header.tsx: Site header with navigation and logo
  - Banner.tsx: Main banner with background image and call-to-action
  - AboutSection.tsx: Company description, mission, and vision
  - ServicesSection.tsx: Grid of service cards (Automação de Atendimento, Integração de Chatbots, Soluções Personalizadas)
  - ServiceCard.tsx: Individual service card component used by ServicesSection
  - ScheduleSection.tsx: Interactive weekly schedule for booking consultations (links to WhatsApp)
  - Footer.tsx: Footer with contact information and social media links
- `pages/`: Next.js pages (only `index.tsx` is used, which combines all sections; `404.tsx` for not found)
- `public/`: Static assets:
  - logo.jpg: Company logo
  - banner.png: Background image for the banner section
- `styles/`: Global CSS:
  - globals.css: Tailwind CSS base styles and customizations

## Styling

The project uses Tailwind CSS for utility-first styling. Configuration is in:
- tailwind.config.js
- postcss.config.js

## Deployment

The landing page is configured for static export (next.config.js with `output: 'export'`).
After running `npm run build`, the static files are placed in the `out/` directory.
To deploy to GitHub Pages, run `npm run deploy` which will push the `out/` directory to the `gh-pages` branch.

## Commit Guidelines

- Make commits for each completed stage of development, following the product flow.
- Use clear, descriptive messages with appropriate prefixes (feat:, fix:, docs:, etc.).
- Do not commit unnecessary files (local config, build artifacts, .env, or sensitive information).

## What Not to Do

- Do not use a database.
- Do not implement user authentication.
- Do not commit unnecessary files (local config, build artifacts).
- Do not commit .env or files containing sensitive information.