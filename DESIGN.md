## Overview

P2A Consulting Agency's landing page uses a clean, professional design system built on Tailwind CSS with a blue-primary palette. The system balances corporate trust (blue tones) with modern AI-tech aesthetics (gradients, shadows, transitions). White space and rounded corners create an approachable, modern feel for a consultancy specializing in AI automation and WhatsApp integration.

The **primary blue** (`{colors.primary.600}` — #2563eb) serves as the main action color, appearing on CTAs, links, and active states. The system uses **green** (`{colors.secondary.500}` — #22c55e) as a secondary accent for success states and tech-forward elements. Photography and illustrations focus on modern office environments, AI/automation concepts, and professional team collaboration.

Type voice runs **system sans-serif** (Inter via Tailwind defaults: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif) in three weights: 600 (semibold) for headlines, 500 (medium) for subheads, and 400 (regular) for body. The system avoids all-caps for a more approachable, consultancy-focused voice.

**Key Characteristics:**
- Clean white/gray canvas (`{colors.gray.50}` — #f9fafb) with blue-primary CTAs and accents
- Headlines in 600/700 weight, sentence-case. Body in 400 weight with 1.5+ line height for readability
- Generous use of rounded corners (`{rounded.lg}` 8px, `{rounded.xl}` 12px, `{rounded.2xl}` 16px) — the "approachable tech" silhouette
- Cards with subtle shadows (`shadow-md`, `shadow-xl`) and hover lift effects (`hover:shadow-xl`, `transform hover:-translate-y-1`)
- Transition animations (`transition-all duration-300`, `transition-colors duration-200`) for smooth interactive feedback
- Spacing follows Tailwind's default scale: `{spacing.16}` (64px) between major sections; `{spacing.12}` (48px) inside sections; `{spacing.8}` (32px) between cards

## Colors

### Brand & Accent
- **Primary 500** (`{colors.primary.500}` — #3b82f6): The system's main accent. Used for primary buttons, active nav links, and icon accents.
- **Primary 600** (`{colors.primary.600}` — #2563eb): Darker primary for hover states, Swiper pagination, and focus rings.
- **Primary 700** (`{colors.primary.700}` — #1d4ed8): The darkest primary, used for text links and hover states on buttons.
- **Secondary 500** (`{colors.secondary.500}` — #22c55e): Success green, used on service icons (green variant) and positive indicators.
- **Red 600** (`{colors.red.600}` — #dc2626): Used on service icons (n8n integration) and warning/danger states.
- **Purple 600** (`{colors.purple.600}` — #9333ea): Used on service icons (AI/automation wand) for visual variety.

### Surface
- **White** (`{colors.white}` — #ffffff): Default page background, card surfaces, and header background.
- **Gray 50** (`{colors.gray.50}` — #f9fafb): Alternate section background (Services section uses `bg-gray-50`).
- **Gray 100** (`{colors.gray.100}` — #f3f4f6): Gradient end for banner section (`from-gray-50 to-gray-100`).
- **Blue 50** (`{colors.blue.50}` — #eff6ff): Accent card backgrounds (Mission/Vision cards in About section).
- **Blue 100** (`{colors.blue.100}` — #dbeafe): Icon container backgrounds in About section.
- **Gray 800** (`{colors.gray.800}` — #1f2937): Heading text color across the system.
- **Gray 900** (`{colors.gray.900}` — #111827): Footer background.

### Text
- **Gray 900** (`{colors.gray.900}` — #111827): Heading text color (though `text-gray-800` is more commonly used).
- **Gray 800** (`{colors.gray.800}` — #1f2937): Primary heading color (`text-gray-800`).
- **Gray 600** (`{colors.gray.600}` — #4b5563): Default body text, descriptions, and secondary text.
- **Gray 200** (`{colors.gray.200}` — #e5e7eb): Muted text in footer and light contexts.
- **White** (`{colors.white}` — #ffffff): Text over dark backgrounds (banner overlay, footer).

### Semantic
- **Success** (`{colors.secondary.500}` — #22c55e): Positive indicators, green service icon.
- **Warning/Danger** (`{colors.red.600}` — #dc2626): n8n service icon, error states.
- **Info** (`{colors.blue.600}` — #2563eb): Focus rings, active states, links.

## Typography

### Font Family
**System Sans-Serif** via Tailwind's default stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif. The project uses Inter as a conceptual base but relies on the system font stack for performance.

The system uses three weight tiers:
- **600 (Semibold)**: h2 section headings, h3 card titles, button labels
- **500 (Medium)**: Service card titles, nav links
- **400 (Regular)**: Body paragraphs, descriptions, footer text

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-xl}` | 48px (mobile) / 64px (desktop) | 700 | 1.1 | 0 | Banner h1 ("Sua empresa vendendo e atendendo 24/7 com IA de verdade") |
| `{typography.hero-md}` | 20px (mobile) / 24px (desktop) | 400 | 1.6 | 0 | Banner subtitle/description |
| `{typography.section-heading}` | 30px (mobile) / 36px (desktop) | 700 | 1.2 | 0 | Section h2 ("Sobre Nós", "Nossos Serviços", "Fale com um especialista") |
| `{typography.card-title}` | 20px | 600 | 1.2 | 0 | Service card titles, feature headings |
| `{typography.body-lg}` | 18px | 400 | 1.6 | 0 | Lead paragraphs, banner description |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body text, card descriptions |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Form labels, footer text, small descriptions |
| `{typography.button}` | 16px (mobile) / 14px (desktop) | 600 | 1.0 | 0 | Button labels — sentence case, no uppercase |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |
| `{typography.caption}` | 12px | 400 | 1.4 | 0 | Footer copyright, small meta text |

### Principles
The system uses sentence-case throughout — no UPPERCASE headlines — for an approachable, consultancy-focused voice. Weight contrast is moderate (400 body vs 600/700 headlines) rather than extreme, keeping the tone professional rather than aggressive.

Line height is generous (1.5-1.6) for body text to ensure readability on consultancy-focused content. Headings use tighter line heights (1.1-1.2) for impact.

## Layout

### Spacing System
- **Base unit:** 4px (Tailwind default).
- **Tokens:** Tailwind's default scale: 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 96px.
- **Section padding (vertical):** `py-20` (80px) between major sections.
- **Banner padding:** `min-h-[600px]` with flexible height (70vh, max 800px).
- **Card internal padding:** `p-6` (24px) for service cards; `p-6` (24px) for about section cards.
- **Container max-width:** `max-w-7xl` (~1280px) centered with responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).

### Grid & Container
- **Max content width:** `max-w-7xl` (1280px) centered — standard SaaS/consultancy width.
- **Card grids:** 3-up at desktop (`lg:grid-cols-3`), 1-up at mobile for service cards.
- **About section:** 2-column at desktop (`md:grid-cols-2`), 1-up at mobile with Swiper carousel.
- **Footer:** 4-column at desktop (`md:grid-cols-4`), 1-up at mobile.
- **Banner:** Centered single column with max-w-4xl constraint.

### Whitespace Philosophy
The system uses white/gray-50 backgrounds to create section separation. Cards use white surfaces with subtle shadows to create depth. Whitespace between sections is uniform (80px vertical padding), with 48px between section heading and content. The design avoids decorative backdrops — clean surfaces and strategic blue accents provide visual interest.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, white background | Body sections (Sobre, Services, Schedule), top nav |
| Soft shadow | `shadow-md` | Service cards, About info cards — subtle lift |
| Elevated shadow | `shadow-xl` on hover (`hover:shadow-xl`) | Service cards on hover — interactive lift effect |
| Overlay | `bg-black/80` (80% black overlay) | Banner text overlay for readability |
| Gradient | `from-gray-50 to-gray-100` | Banner background gradient |

The system uses shadows and hover effects to indicate interactivity. The `transform hover:-translate-y-1` (slight upward movement) combined with shadow increase creates a modern, responsive feel for cards.

### Decorative Depth
- **Blue accent cards:** `bg-blue-50` background with `bg-blue-100` icon containers in the About section (Mission/Vision cards).
- **Icon containers:** 40×40px rounded-md containers (`rounded-md`) with colored backgrounds for service and feature icons.
- **Gradient overlay:** Banner uses `bg-gradient-to-r from-gray-50 to-gray-100` as base with `bg-black/80` overlay for text readability.
- **Swiper pagination:** Custom blue dots (`.swiper-pagination-bullet-active { background: #2563eb; }`).

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Form inputs (date picker, select) — intentional sharp for form elements |
| `{rounded.md}` | 6px | Icon containers in About section (`rounded-md`) |
| `{rounded.lg}` | 8px | Buttons (`rounded-lg`), form inputs |
| `{rounded.xl}` | 12px | Service cards (`rounded-xl`), About info cards |
| `{rounded.2xl}` | 16px | Swiper slide images (if used), larger containers |
| `{rounded.full}` | 50% | Social media icon links (Instagram/LinkedIn as flex items) |

The radius hierarchy is "approachable modern" — predominantly `rounded-xl` (12px) for cards and `rounded-lg` (8px) for buttons. This creates a friendlier, more accessible feel than sharp corners, aligning with the consultancy's approachable brand voice.

### Photography Geometry
- **Banner:** Full-width background image with `object-cover`, `opacity-85`, and dark overlay.
- **About section:** Square/rectangular images (if employee slides enabled) with `rounded-xl` corners and `shadow-sm`.
- **Logo:** Horizontal rectangle, `h-10` (40px) with auto width, no rounding.

## Components

### Top Navigation

**`header`** — White nav bar pinned to the top of every page. 64px height (`h-16`), white background with `shadow-lg` and `backdrop-blur-sm`. Carries the P2A logo at left, primary horizontal menu (Sobre Nós, Serviços, Contato), and mobile hamburger menu (☰ Menu). Menu items render in `{typography.nav-link}` with `text-gray-600 hover:text-gray-900` and `rounded-md` with transition.

### Buttons

**`button-primary`** — The signature primary CTA. Background `{colors.primary.600}` (`bg-blue-600`), text white (`text-white`), `rounded-lg` (8px), padding 8px × 16px on mobile / 32px width on desktop, height ~40px. Type `{typography.button}` — sentence case, 600 weight. Hover state darkens to `bg-blue-700` with `transform hover:scale-[1.02]`.

**`button-primary-white`** — Banner CTA variant. Background white (`bg-white`), text blue (`text-blue-600`), `rounded-lg`, padding 12px × 32px, height 48px. Hover state lightens to `bg-gray-100` with `transform hover:scale-[1.02]`. Used in the banner for high contrast against dark overlay.

**`button-submit`** — Schedule section submit button. Same as primary but with `w-full max-w-xs` and `font-medium`. Hover includes `transform hover:scale-[1.05]`.

**`text-link`** — Inline links in footer and nav. `text-gray-600 hover:text-blue-400` with `transition-colors duration-200`. No underline by default, color change on hover.

### Cards & Containers

**`service-card`** — Used in 3-up grid for services section. Background white (`bg-white`), `rounded-xl` (12px), `shadow-md` with `hover:shadow-xl` and `transform hover:-translate-y-1`. Internal padding `p-6` (24px). Top section has icon container (40×40px, `rounded-md`, no background) + title in `{typography.card-title}`. Below: description in `text-gray-600`.

**`about-info-card`** — Mission and Vision cards in About section. Background `bg-blue-50`, `rounded-lg` (8px), padding `p-6` (24px), `shadow-sm`. Icon container: 40×40px, `bg-blue-100`, `rounded-md`, centered icon (UserIcon/EyeIcon) in brand color. Below: h3 title (`text-lg font-medium text-gray-800`), p description (`text-sm text-gray-600`).

**`banner-section`** — Full-width hero band with background image. `min-h-[600px] h-[70vh] max-h-[800px]`, `bg-gradient-to-r from-gray-50 to-gray-100`, overflow hidden. Background image with `object-cover opacity-85` + `bg-black/80` overlay. Content centered with `max-w-4xl mx-auto`, text in white.

**`schedule-section`** — Form section with date picker and time select. Background white (`bg-white`), padding `py-20`. Form elements: date input (`rounded-lg`, `border-gray-300`, `focus:ring-2 focus:ring-blue-500`), time select (same styling), submit button. Info text below: `text-gray-600 text-sm`.

### Inputs & Forms

**`text-input`** — Standard text input. Background white, text `text-gray-600`, `rounded-lg`, padding 8px × 16px, height ~44px. `border-gray-300` with `focus:outline-none focus:ring-2 focus:ring-blue-500`. Used for date picker.

**`select-input`** — Standard select dropdown. Same styling as text-input. Used for time selection with options 8h-18h.

**`submit-button`** — Form submit. `bg-blue-600 hover:bg-blue-700`, white text, `rounded-lg`, `font-medium`, `transition-colors duration-200`, `transform hover:scale-[1.05]`.

### Signature Components

**`swiper-carousel`** — About section uses Swiper.js for content carousel. Custom styling: `.about-swiper` with `padding-bottom: 2.5rem`. Navigation arrows colored `#2563eb`, pagination bullets `#9ca3af` (inactive) / `#2563eb` (active).

**`footer`** — Dark footer that closes every page. Background `bg-gray-900`, text `text-gray-200`. 4-column grid at desktop covering P2A info / Contact / Quick Links / Social Media. Vertical padding `py-12` (48px). Bottom row: copyright centered, `text-sm`. Social icons: `h-8 w-8` (32px) with `hover:text-blue-400` and `transition-colors duration-200`.

## Do's and Don'ts

### Do
- Use blue-primary (`#2563eb`) for CTAs, links, and interactive elements. Consistent color builds trust.
- Maintain generous whitespace (80px vertical section padding) for a clean, professional consultancy feel.
- Use `rounded-xl` (12px) for cards and `rounded-lg` (8px) for buttons — the "approachable tech" silhouette.
- Apply hover effects (`hover:shadow-xl`, `hover:-translate-y-1`, `hover:scale-[1.02]`) to indicate interactivity on cards and buttons.
- Keep body text at 400 weight with 1.5+ line height for readability.
- Use sentence-case headlines. All-caps feels too aggressive for a consultancy brand.
- Use `transition-all duration-300` or `transition-colors duration-200` for smooth interactive feedback.
- Use `max-w-7xl` (1280px) centered container with responsive padding for consistent layout.

### Don't
- Don't use all-caps for headlines or body text. The consultancy voice is approachable, not aggressive.
- Don't use sharp corners (0px radius) on cards or buttons — the system's "approachable" brand language requires rounded corners.
- Don't overuse shadows. Cards get `shadow-md`, not `shadow-2xl`. The design should feel light, not heavy.
- Don't use colors outside the blue-primary and gray palette for structural elements. Accent colors (green, red, purple) are reserved for service icons only.
- Don't bold body type beyond 400. Body stays at regular weight — bumping to 600 makes the page feel too heavy.
- Don't skip hover states. Interactive elements (cards, buttons, links) must have clear hover feedback.
- Don't use the secondary green (`#22c55e`) or red (`#dc2626`) for CTAs — these are icon-only colors.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Single column layout; hamburger nav; hero h1 scales 48px→36px; service cards 1-up; footer 1 column |
| Tablet | 768–1024px | 2-column about section; 3-up service cards start at lg:grid-cols-3; footer 4-column |
| Desktop | > 1024px | Full layout; `max-w-7xl` container; `lg:grid-cols-3` for services; `md:grid-cols-2` for about |

### Touch Targets
- Header nav links: `px-3 py-2` (~44px height) — meets accessibility standards.
- Buttons: Minimum 40px height with padding — comfortable tap targets.
- Swiper pagination bullets: Standard size with clickable area.
- Footer links: `block` display with natural padding — easy to tap.

### Collapsing Strategy
- Top nav collapses to hamburger menu (☰ Menu) at mobile (< 768px). Menu opens as slide-down panel with `block` display toggle.
- Service cards stack 1-up at mobile, 3-up at desktop (`sm:grid-cols-1 lg:grid-cols-3`).
- About section uses Swiper carousel on mobile for content slides.
- Footer columns collapse from 4-up to 1-up at mobile.
- Banner text scales down: `text-4xl md:text-5xl` for h1, `text-xl md:text-2xl` for description.

### Image Behavior
- Banner image fills width with `object-cover` and `opacity-85`.
- About section images (if enabled) use `rounded-xl` with `shadow-sm`.
- Logo maintains aspect ratio with `h-10 w-auto`.
- No images are letterboxed or pillarboxed — they use `object-cover` for consistent fill.

## Iteration Guide

1. Focus on ONE component at a time. Reference its Tailwind classes (e.g., `service-card` uses `bg-white rounded-xl shadow-md`).
2. New components default to `rounded-xl` (12px) for cards, `rounded-lg` (8px) for buttons.
3. Variants (hover, focus, active) use Tailwind's `hover:`, `focus:` prefixes.
4. Use Tailwind color tokens everywhere — never inline hex values in component files.
5. Document hover states using Tailwind class notation (e.g., `hover:bg-blue-700`).
6. Headlines stay at 600/700 weight, sentence-case. Body stays at 400 weight.
7. Blue-primary is the action color — don't extend it to decorative elements unnecessarily.
8. When in doubt about emphasis: larger padding/whitespace before larger type.

## Known Gaps

- The project uses Tailwind's default font stack rather than a custom font like Inter. Loading Inter via Google Fonts would improve consistency.
- Animation and transition timings are handled by Tailwind utilities (`duration-200`, `duration-300`) but there's no custom animation system (no keyframes for complex animations).
- The About section has employee slides commented out — if enabled, they'll need image handling and responsive adjustments.
- Form validation states beyond basic HTML5 validation are not implemented in the Schedule section.
- The Swiper.js carousel in About section relies on external CSS from the swiper package — custom styling is minimal (`.about-swiper` class).
- No dark mode support — the system is light-mode only with `bg-white` and `bg-gray-50` surfaces.
- The banner uses a static background image (`banner.png`) — responsive image optimization (srcset, next/image) could improve performance.
- No loading states or skeleton screens for the initial page load.
