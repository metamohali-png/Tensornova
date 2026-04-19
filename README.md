# TensorNova — Enterprise AI & Data Science

Production website for TensorNova Technologies Pvt. Ltd. A modern, responsive,
enterprise-grade Next.js 16 application.

**Live:** [www.tensornova.in](https://www.tensornova.in)

---

## Redesign proposal summary

A comprehensive redesign transforming TensorNova into an enterprise-grade
marketing site that competes with Stripe, Accenture, and Google Cloud in
visual quality.

### Design language

- **Aesthetic:** Dark-first corporate-tech. Glassmorphism + subtle gradient
  meshes + premium typography. Built for credibility and conversion.
- **Color system:**
  - Deep brand: `#0A2540` (navy) → `#4F46E5` (indigo) → `#7C3AED` (violet)
  - Accents: `#00D4FF` (neon cyan) for CTAs and highlights
  - Neutrals: slate scale `#020617` → `#f8fafc`
  - All contrast ratios pass WCAG AA (4.5:1+ body, 3:1+ large text)
- **Typography:** Inter (300/400/500/600/700/800) via `next/font` for
  automatic optimization. Type scale from `text-xs` → `text-8xl`.
- **Motion:** Framer Motion for scroll-triggered reveals, hover micro-
  interactions, staggered lists. Reduced-motion respected via OS preferences.

### Site architecture

```
/ ................. Homepage
/about ............ Company story, mission, team, timeline
/services ......... 6 services with deep-dive sections
/solutions ........ 6 industries × 36 solution cards
/case-studies ..... Portfolio with filters & impact metrics
/blog ............. Thought leadership + resource library
/careers .......... Culture, benefits, open roles
/contact .......... Multi-step progressive form + contact methods
/privacy .......... Privacy policy + Terms of service
/sitemap.xml ...... Auto-generated sitemap
/robots.txt ....... SEO directives
```

### Key features shipped

- **9 fully-designed pages**, each with unique hero, sections, and CTAs
- **Multi-step contact form** with progressive disclosure (service →
  qualification → details)
- **Sticky blur navbar** with mega-menu and mobile drawer
- **12+ reusable components** (Button, GlassCard, PageHero, SectionHeader,
  Badge, ContactForm, etc.)
- **Structured data** (Organization JSON-LD) + full Open Graph / Twitter
  Cards
- **Dynamic sitemap & robots.txt** (Next.js metadata routes)
- **All routes statically pre-rendered** — sub-second LCP expected

### Tech stack

| Layer          | Choice                                              |
|----------------|-----------------------------------------------------|
| Framework      | Next.js 16 (App Router, Turbopack)                  |
| Language       | TypeScript (strict mode)                            |
| Styling        | Tailwind CSS v4 (CSS-native theme tokens)           |
| Animation      | Framer Motion 12                                    |
| Icons          | Lucide React                                        |
| Fonts          | Inter via `next/font/google`                        |
| Deployment     | Vercel (recommended) or any Node 18+ host           |

### Performance targets

- Lighthouse ≥ 90 across all categories (actual build is fully static)
- LCP < 2.5s (static HTML + edge caching)
- CLS < 0.1 (fixed-dimension layouts, next/font)
- All pages statically generated — no server cost on every request

### Accessibility

- WCAG 2.1 AA contrast ratios
- Semantic HTML5 (`<nav>`, `<main>`, `<article>`, `<footer>`, `<section>`)
- Focus-visible styles with indigo ring
- `aria-label` on all icon-only buttons and social links
- Keyboard-navigable mega-menu with hover + focus triggers
- Respects `prefers-reduced-motion` via Framer Motion's auto-detection

---

## Local development

Prerequisites: Node 18+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

### Lint & type-check

```bash
npm run lint
npx tsc --noEmit
```

---

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout, metadata, Navbar/Footer
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── services/
│   ├── solutions/
│   ├── case-studies/
│   ├── blog/
│   ├── careers/
│   ├── contact/
│   ├── privacy/
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   └── globals.css         # Tailwind v4 theme + utilities
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Button, GlassCard, PageHero, ...
│   ├── home/               # Homepage sections
│   └── contact/            # ContactForm (multi-step)
└── lib/
    └── utils.ts            # cn() helper + content data
```

---

## Content strategy

Content is currently seeded in `src/lib/utils.ts` (services, industries,
case studies, team, blog posts, open roles). For the next phase:

1. **Headless CMS recommendation:** Sanity.io (structured content, great
   DX, TypeScript-first)
2. **Portable blog:** MDX-based posts with syntax highlighting
3. **Dynamic case studies:** CMS-driven with image assets and long-form
   narrative
4. **SEO keywords:** "AI consulting India", "Generative AI services",
   "MLOps platform", "Enterprise LLM" — all surfaced in headings &
   metadata

---

## Implementation roadmap

| Phase | Scope                                                | Est. Effort |
|-------|------------------------------------------------------|-------------|
| 1     | **This PR:** Design system + 9 marketing pages       | ✅ Complete |
| 2     | Sanity CMS integration + blog MDX                    | 2 weeks     |
| 3     | Contact form backend (Resend + Slack notifications)  | 3 days      |
| 4     | Analytics (Plausible/PostHog) + A/B test framework   | 1 week      |
| 5     | Individual case study & blog post detail pages       | 1 week      |
| 6     | i18n (English ↔ Hindi)                               | 2 weeks     |
| 7     | Client portal (authenticated) + resource downloads   | 3 weeks     |

---

## License

© 2026 TensorNova Technologies Pvt. Ltd. All rights reserved.
