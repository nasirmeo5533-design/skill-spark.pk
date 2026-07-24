# MASTER BUILD PROMPT — Paste this entire document into OpenCode

Copy everything below the line into your OpenCode agent as ONE message. It is written so the agent can plan, build, and finish the entire site without stopping for clarification.

---

## ROLE

You are a senior full-stack web developer + SEO strategist. Build a complete, production-ready online course-selling website called **SkillSpark** (domain: `skillspark.pk`). Work end-to-end, autonomously, without pausing to ask me questions — if something is ambiguous, make the most sensible professional decision and continue. Do not stop until every page listed below exists, is styled, is responsive, and is internally linked correctly.

## 1. TECH STACK (use exactly this — no substitutions)

- **Framework:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Content:** Store course/blog data as local JSON/TS data files (no CMS needed yet — structure the data layer so a CMS can be swapped in later)
- **Contact form:** Use Web3Forms (https://web3forms.com) or EmailJS client-side integration — no custom backend/server needed. Wire it to send to: `abeerinfo5566@gmail.com`. Add a clear `NEXT_PUBLIC_WEB3FORMS_KEY` placeholder in `.env.example` with setup instructions in the README.
- **Icons:** lucide-react
- **Fonts:** A modern geometric sans (e.g. "Poppins" or "Plus Jakarta Sans") via next/font
- **Deployment target:** Vercel-ready (include `vercel.json` if needed), also runnable with `npm run build && npm run start`
- **Image handling:** next/image with placeholder images (use https://placehold.co or unsplash source URLs) wherever real photos aren't provided — mark clearly with a `// TODO: replace placeholder image` comment

## 2. BRAND IDENTITY

- **Brand name:** SkillSpark
- **Tagline:** "Ignite Your Skills. Earn Online."
- **Domain:** skillspark.pk
- **Primary color:** Orange `#FF7A1A` (energetic CTA color)
- **Secondary color:** Golden Yellow `#FFC93C` (accents, highlights, badges)
- **Neutral/dark:** Charcoal `#1C1C1E` for text, White `#FFFFFF` / Light Gray `#F8F8F6` for backgrounds
- **Success/accent green** (for price/discount badges only): `#22C55E`
- Define all of the above as Tailwind theme extension variables in `tailwind.config.ts`, never hardcode hex values inside components.
- Logo: build a simple text-based wordmark "Skill**Spark**" (Spark in orange, Skill in charcoal) with a small spark/lightning-bolt icon — SVG, no external image needed.

## 3. CONTACT / OWNER INFO (use exactly, in footer + contact page + WhatsApp button)

- WhatsApp number: `+92 370 3159642` → wa.me link: `https://wa.me/923703159642`
- Email: `abeerinfo5566@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/abeer-nasir-3052b628a/`
- Founder name: **Abeer Nasir** — Generative AI Specialist | AI Agent Developer | Digital Marketing Specialist | Meta Ads Expert
- Location: Karachi, Pakistan
- No TikTok link yet — do not add a broken/placeholder TikTok icon; only show WhatsApp, Email, and LinkedIn icons in the footer/social row. Leave a commented-out TikTok `<a>` stub in the footer component so it's a one-line add later.
- Floating WhatsApp button: fixed bottom-right on every page, pulsing/bounce animation on load, opens `https://wa.me/923703159642` in new tab.

## 4. SITE MAP — build every one of these routes

```
/                          Home
/courses                   All courses grid (filter by category)
/courses/[slug]            Individual course sales page (×10, see §6)
/about                     About Us / Founder story
/contact                   Contact page with form + WhatsApp + map-style info block
/faq                       FAQ accordion
/blog                      Blog listing
/blog/[slug]               Individual blog post (×5 starter posts, see §8)
/success-stories           Testimonials/results page
/schedule-a-call           Simple page with a Calendly embed placeholder + WhatsApp CTA
/privacy-policy            Standard privacy policy (generate reasonable PK-context content)
/terms-of-use              Standard terms of use
```

No login/dashboard/student-portal system needed for v1 — enrollment happens via WhatsApp/manual payment, not a full LMS backend. (This is a deliberate scope decision to ship fast; note in the README that a full auth+LMS can be phase 2.)

## 5. HOME PAGE — section-by-section spec

1. **Header (sticky):** Logo left. Center nav: Courses (dropdown showing all 10 course categories), About, Blog, Success Stories, Contact. Right: "Enroll Now" CTA button (orange, links to /courses).
2. **Hero:** Big bold headline "Ignite Your Skills. Earn Online." subheadline: "Learn AI, Digital Marketing, Meta Ads & Shopify from a specialist who's done it for real e-commerce clients — not just theory." Two CTAs: "Browse Courses" (primary orange) and "Chat on WhatsApp" (outline, WhatsApp icon). Include a subtle abstract orange/yellow gradient blob background (SVG, no stock photo needed).
3. **Trust bar:** 3 stat counters (animate on scroll): "3+ Years Hands-On Experience", "10+ Practical Courses", "Real Client Results — Meta Ads & Shopify".
4. **Course categories strip:** icon tiles for: Generative AI, AI Automation, Prompt Engineering, Meta Ads, Shopify, Digital Marketing — each links to filtered /courses.
5. **Featured courses grid:** Show all 10 course cards — each card: thumbnail (placeholder), title, 1-line hook, price "Rs. 5,000 — One-Time", "View Course" button. Grid of 3 columns desktop / 1 column mobile.
6. **"How It Works" 3-step section:** Step 1 "Enroll" (WhatsApp/manual payment), Step 2 "Learn" (live sessions + recorded videos, lifetime access), Step 3 "Apply & Earn" (real client work templates).
7. **Why SkillSpark (differentiator vs bigger platforms):** short paragraph + 4 icon-benefits: "Live + Recorded Sessions", "Taught by a Practicing Specialist (not just a trainer)", "Real Client Case Studies (Perfume/Beauty D2C brands)", "Direct WhatsApp Support".
8. **About founder teaser:** Short block with photo placeholder, 2-line bio pulled from §7, "Read Full Story" link to /about.
9. **Testimonials carousel:** 4-5 placeholder testimonials (clearly marked as placeholder content to replace with real reviews later).
10. **Final CTA banner:** Full-width orange/yellow gradient band: "Ready to Start Earning Online?" + WhatsApp CTA button.
11. **Footer:** 4 columns exactly like this:
   - **Contact:** WhatsApp number (tel/wa.me link), Email (mailto), Location "Karachi, Pakistan"
   - **Company:** About Us, Blog, Contact, Success Stories
   - **Courses:** list all 10 course titles as links
   - **Legal:** Privacy Policy, Terms of Use
   - Bottom row: social icons (WhatsApp, Email, LinkedIn only) + "© 2026 SkillSpark. All rights reserved."

## 6. COURSE DATA MODEL + THE 10 COURSES

Create a `data/courses.ts` file exporting an array of this shape:

```ts
interface Course {
  slug: string;
  title: string;
  category: string;
  price: number; // always 5000
  originalPrice?: number; // optional strikethrough for perceived value, e.g. 15000
  duration: string;
  format: string; // always "Live Sessions + Recorded Videos + Lifetime Access"
  level: "Beginner" | "Intermediate" | "All Levels";
  shortDescription: string;
  fullDescription: string; // 150-250 words, benefit-driven
  learningOutcomes: string[]; // 5-7 bullet points
  curriculum: { moduleTitle: string; lessons: string[] }[]; // 5-8 modules
  audience: string[]; // who this course is for
  instructor: string; // "Abeer Nasir"
}
```

Populate it with these 10 courses (write full marketing copy for each — don't leave placeholders, this is the actual sellable content):

1. **Generative AI Mastery** (slug: `generative-ai-mastery`) — ChatGPT, Gemini & Claude for business use, prompt workflows, content generation.
2. **AI Automation & AI Agents (No-Code)** (`ai-automation-agents`) — building automated workflows and AI agents without coding, using real business use-cases.
3. **Prompt Engineering Masterclass** (`prompt-engineering-masterclass`) — writing high-quality prompts for accurate, business-ready AI outputs.
4. **Meta Ads Mastery — Facebook & Instagram** (`meta-ads-mastery`) — campaign structure, audience research, budget optimization, real case study of generating 30 sales on a PKR 1,000 budget.
5. **Shopify Store Setup & Optimization** (`shopify-store-setup`) — building and optimizing a store from scratch for D2C brands, product page CRO.
6. **AI-Powered Content Creation for Social Media** (`ai-content-creation`) — using AI tools to produce marketing content, captions, ad creatives at scale.
7. **Complete Digital Marketing Bootcamp** (`digital-marketing-bootcamp`) — SEO, social media, paid ads, and strategy fundamentals.
8. **E-commerce & D2C Brand Growth** (`ecommerce-dtc-growth`) — real case-study-driven course on scaling perfume/beauty D2C brands online.
9. **Freelancing & Client Acquisition for AI/Marketing Services** (`freelancing-client-acquisition`) — how to package and sell AI/marketing skills as freelance services and land clients.
10. **AI Chatbot & Virtual Assistant Development** (`ai-chatbot-development`) — building chatbots/virtual assistants for customer support and lead gen using no-code AI tools.

All 10: price `5000`, format `"Live Sessions + Recorded Videos + Lifetime Access"`, instructor `"Abeer Nasir"`.

## 7. COURSE DETAIL PAGE (`/courses/[slug]`) — exact section order

1. Breadcrumb: Home / Courses / [Course Title]
2. Title + category badge + short 1-line hook
3. Two-column layout: LEFT = video/image preview placeholder + full description + "What You'll Learn" checklist grid (from `learningOutcomes`) + Curriculum accordion (from `curriculum`, module titles collapsible, lesson list inside) + "Who This Course Is For" (from `audience`) + Instructor bio card (photo placeholder, name, title, 2-line bio, link to /about). RIGHT (sticky sidebar) = Price card: "Rs. 5,000 — One-Time Payment" (NOT monthly — must clearly state one-time payment for the full course), format line, level, big "Enroll via WhatsApp" button (pre-filled wa.me message: "Hi, I want to enroll in [Course Title]"), secondary "Ask a Question" button linking to /contact.
4. Related courses row (3 other courses from same or adjacent category).

## 8. ABOUT PAGE CONTENT (write full page copy using this real bio — do not fabricate credentials beyond this)

Use this as the source for founder bio content, rewritten into 3-4 warm paragraphs plus a "What I Do" bullet list and a "Results" stats block:

> Abeer Nasir started learning Generative AI in 2023, self-taught through real projects rather than a formal program. Today works with e-commerce and D2C brands — particularly in the perfume/beauty space — helping them set up and optimize Shopify stores, run Meta Ads campaigns, create AI-assisted marketing content, and automate business processes with no-code AI tools. Skills: Generative AI, AI Automation, AI Agents, Prompt Engineering, Workflow Automation, Meta Ads, Shopify, Social Media Marketing, AI-powered Content Creation, Digital Marketing. Notable results: generated 30 qualified sales for an e-commerce brand on a PKR 1,000 ad budget; generated 6 qualified leads for a client on a PKR 2,000 ad budget. Has also written free ebooks on Generative AI and Digital Marketing to help beginners understand these topics practically. Based in Karachi, Pakistan.

Include a "Mission" line: "To make real, practical AI and digital marketing skills accessible and affordable for Pakistani students and freelancers — taught by someone actively doing the work, not just teaching theory." And a "Why SkillSpark Exists" short paragraph explaining it was built because most course platforms are taught by people who stopped doing client work years ago — SkillSpark's courses come directly from live client campaigns.

## 9. FAQ PAGE — write 8-10 Q&As including at minimum these (adapt tone to SkillSpark, don't copy competitor wording verbatim)

- Who is the founder of SkillSpark?
- Are the courses live or recorded?  → Answer: both — every course includes live sessions plus recorded video access you keep forever.
- Is the Rs. 5,000 a one-time payment or a subscription? → Answer: one-time payment for full lifetime access to that course — not a monthly subscription.
- How do I pay / enroll?
- Do you offer a certificate on completion?
- Can I ask questions after purchasing a course?
- Which course should I start with if I'm a complete beginner?
- Do you offer refunds?
- Can I contact you directly on WhatsApp for a custom recommendation?

## 10. BLOG SECTION + SEO STRATEGY (this is the part that needs real SEO thinking, not decoration)

### 10a. Blog listing + post template
- `/blog` — grid of post cards (title, excerpt, category tag, read time, date).
- `/blog/[slug]` — single post: H1 title, meta description, table of contents (auto-generated from H2s), body content, author box (Abeer Nasir), related posts, and a mid-article + end-of-article CTA block linking to relevant course.

### 10b. Write these 5 starter blog posts in full (800-1200 words each, real usable content, not lorem ipsum)
1. "How to Start Freelancing in Pakistan with AI Skills in 2026" — target keyword: `freelancing in Pakistan with AI skills`
2. "Meta Ads for Beginners: How I Generated 30 Sales on a PKR 1,000 Budget" — target keyword: `Meta ads Pakistan low budget`
3. "Shopify vs WooCommerce for Pakistani D2C Brands: Which Should You Choose?" — target keyword: `Shopify Pakistan ecommerce`
4. "Prompt Engineering 101: How to Get Better Results from ChatGPT and Gemini" — target keyword: `prompt engineering for beginners`
5. "5 AI Automation Tools Every Pakistani Freelancer Should Know in 2026" — target keyword: `AI automation tools freelancers Pakistan`

Each post must naturally link to 1-2 relevant courses from §6 (internal linking for SEO + conversion).

### 10c. Technical SEO checklist — implement ALL of these, don't skip any
- Unique `<title>` and `<meta name="description">` per page (use Next.js Metadata API)
- Open Graph + Twitter Card tags on every page (title, description, image)
- `sitemap.xml` auto-generated (Next.js `app/sitemap.ts`) including all static + dynamic course/blog routes
- `robots.txt` allowing all crawlers, pointing to the sitemap
- JSON-LD structured data:
  - `Organization` schema on the homepage (name, logo, url, contact, sameAs: LinkedIn)
  - `Course` schema on every course detail page (name, description, provider, offers/price)
  - `FAQPage` schema on the FAQ page
  - `BlogPosting` schema on every blog post
- Semantic HTML: one `<h1>` per page, logical `<h2>`/`<h3>` hierarchy, `alt` text on every image
- Fast Core Web Vitals: use next/image, lazy-load below-the-fold sections, avoid layout shift (reserve image dimensions)
- Canonical URL tag on every page
- Mobile-first responsive design (test at 375px, 768px, 1440px breakpoints)
- Clean URL slugs (already defined in §6/§10b, all lowercase-hyphenated)
- Internal linking: every page should link to at least 2-3 other relevant pages (courses ↔ blog ↔ about)

### 10d. Why this ranks (include this reasoning as a code comment or README section, don't just implement blindly)
Target long-tail, low-competition Pakistan-specific keywords (e.g. "Meta ads Pakistan low budget" rather than generic "Meta ads course") because SkillSpark is a new domain competing against an established, high-authority competitor (Lets Uncover) — ranking for broad terms will take too long. Blog content built around Abeer's real, specific results (PKR 1,000 → 30 sales) is more crawlable/citable and differentiated than generic "learn digital marketing" content. Local schema + .pk domain + Karachi location signals help local SEO relevance for "Pakistan" + "online course" searches.

## 11. CONTACT PAGE

- Contact form fields: Name, Email, Phone (optional), Which course are you interested in? (dropdown of all 10 + "General Inquiry"), Message. Submit via Web3Forms to `abeerinfo5566@gmail.com`. Show a success toast/message on submit, inline validation on required fields.
- Sidebar/info block: WhatsApp button, Email (mailto), Location "Karachi, Pakistan", LinkedIn link, and business hours (reasonable default, e.g. Mon–Sat, 10am–8pm PKT).

## 12. MANUAL PAYMENT / ENROLLMENT FLOW (since there's no payment gateway in v1)

Add a short "How to Enroll" block (can live on course pages + a dedicated section) explaining: 1) Message on WhatsApp with the course name, 2) Receive payment details (Easypaisa/JazzCash/bank transfer — use `[TODO: add your account details]` placeholders), 3) Send payment screenshot on WhatsApp, 4) Get instant access link/instructions via WhatsApp/email. Note in the README that Stripe/PayFast/JazzCash API integration can be added in phase 2.

## 13. EXECUTION INSTRUCTIONS FOR THE AGENT

- Work through this spec top to bottom, section by section, without stopping to ask me anything — make sensible calls on anything unspecified and note them as `// ASSUMPTION:` comments in code or in the README.
- Prioritize a working, deployable build over perfection — get all routes rendering correctly first, then polish styling.
- Use consistent spacing/typography scale across all pages (Tailwind's default scale is fine).
- At the end, produce a `README.md` covering: how to run locally, how to set the Web3Forms API key, how to add real images (replacing placeholders), how to add the TikTok link later, and a short "Phase 2 ideas" list (LMS/auth, payment gateway integration, real testimonials, real course videos).
- Do not include any content, code, or asset copied from letsuncover.pk — this spec describes structure and format only; all copy, colors, and course content here are original to SkillSpark.

---
**End of prompt. Paste everything above into OpenCode as a single instruction.**
