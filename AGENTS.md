# AGENTS.md

## Project

SkillSpark — online course-selling website (skillspark.pk). Next.js 16 App Router, TypeScript, Tailwind CSS v4, lucide-react icons. Static/SSG with WhatsApp-based enrollment (no payment gateway yet).

## Commands

- `npm run dev` — start dev server (port 3000)
- `npm run build` — production build
- `npm run lint` — ESLint (next/core-web-vitals + typescript configs)
- No test suite exists. No typecheck script — use `npx tsc --noEmit` for type checking.

## Architecture

```
src/
  app/           — App Router pages (static + dynamic [slug] routes)
  components/    — Header, Footer, CourseCard, WhatsAppButton
  data/          — courses.ts, blog.ts, faq.ts (all content as TS data, no CMS)
  lib/           — config.ts (siteConfig), utils.ts, jsonld.ts
public/          — static assets
```

Key patterns:
- All content (courses, blogs, FAQ) lives in `src/data/*.ts` as typed arrays — no database, no CMS
- `src/lib/config.ts` (`siteConfig`) is the single source for brand info, nav links, contact details, colors
- Course pages use `generateStaticParams()` for SSG — add new courses in `src/data/courses.ts` only
- Dynamic routes: `src/app/courses/[slug]/page.tsx`, `src/app/blog/[slug]/page.tsx`
- Contact form uses Web3Forms API (env: `NEXT_PUBLIC_WEB3FORMS_KEY`)
- WhatsApp enrollment links generated via `generateWhatsAppLink()` in `src/lib/utils.ts`

## Quirks

- **Tailwind v4** — uses `@tailwindcss/postcss`, no `tailwind.config.js`. Custom colors defined in `src/app/globals.css` via CSS variables, referenced as `text-primary`, `bg-charcoal`, etc.
- **Fonts**: Space Grotesk + DM Sans via `next/font/google` — not Poppins as README says
- **No tests** — if adding tests, pick a framework and add a script to package.json
- **Images**: remote patterns allow `images.unsplash.com` and `placehold.co` only. Placeholder images marked with `// TODO: replace placeholder image` comments
- **Deploy**: push to `main` triggers Vercel auto-deploy. Manual: `.\deploy.ps1` (pushes git + runs `vercel --prod`)
- **`.gitignore`** excludes `claude.md`, `resume.md`, `SkillSpark-OpenCode-Master-Prompt.md`, and `*.pdf` — these are personal files, not for the repo

## Style

- Functional components only, async server components for data-heavy pages
- Tailwind utility classes, no CSS modules
- `@/*` path alias maps to `./src/*`
- Colors: primary `#FF7A1A`, charcoal `#1C1C1E`, cream `#FAF8F5` (see `siteConfig.colors`)
- Language in code comments and UI is English (site targets Pakistan/international audience)
