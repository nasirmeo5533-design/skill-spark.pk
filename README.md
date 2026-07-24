# SkillSpark

**"Ignite Your Skills. Earn Online."**

A production-ready online course-selling website built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS.

**Domain:** [skillspark.pk](https://skillspark.pk)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14+ (App Router) | React framework & server-side rendering |
| TypeScript | Type safety & better DX |
| Tailwind CSS v4 | Utility-first styling |
| lucide-react | Icon library |
| Poppins font (next/font) | Optimized web typography |

---

## Features

- **10 course pages** with detailed curriculum, pricing, and WhatsApp enrollment
- **5 blog posts** with SEO optimization
- **Contact form** (Web3Forms integration)
- **FAQ accordion**
- **Mobile-first responsive design**
- **SEO:** sitemap, robots.txt, Open Graph, JSON-LD structured data
- **Floating WhatsApp button** on every page

---

## How to Run Locally

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/skill-spark.git
   cd skill-spark
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```

4. Start the dev server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

---

## Setting Up Web3Forms

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up with `abeerinfo5566@gmail.com`
3. Get your API key
4. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
   ```

---

## Adding Real Images

All placeholder images are marked with `// TODO: replace placeholder image` comments. Replace them with real photos using `next/image`.

---

## Adding TikTok Link

Find the commented-out TikTok stub in `src/components/Footer.tsx` and uncomment it with your TikTok URL.

---

## Phase 2 Ideas

- LMS/auth system with student dashboard
- Payment gateway integration (Stripe/PayFast/JazzCash API)
- Real student testimonials
- Real course videos
- Email marketing integration
- Analytics dashboard

---

## Project Structure

```
src/
  app/          - Next.js App Router pages
  components/   - Reusable React components
  data/         - Course, blog, FAQ data (TypeScript)
  lib/          - Utilities, config, JSON-LD helpers
public/         - Static assets
```

---

## License

All rights reserved. © 2026 SkillSpark
