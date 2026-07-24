import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  BookOpen,
  Users,
  TrendingUp,
  Zap,
  Target,
  Headphones,
  ChevronRight,
  BrainCircuit,
  Bot,
  Sparkles,
  Megaphone,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { courses } from "@/data/courses";
import { siteConfig } from "@/lib/config";
import CourseCard from "@/components/CourseCard";

const categoryIcons: Record<string, React.ReactNode> = {
  "Generative AI": <BrainCircuit className="h-5 w-5" />,
  "AI Automation": <Bot className="h-5 w-5" />,
  "Prompt Engineering": <Sparkles className="h-5 w-5" />,
  "Meta Ads": <Megaphone className="h-5 w-5" />,
  Shopify: <ShoppingCart className="h-5 w-5" />,
  "Digital Marketing": <BarChart3 className="h-5 w-5" />,
};

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "E-commerce Owner",
    content:
      "SkillSpark's Meta Ads course helped me generate 30 sales on just PKR 1,000 ad budget. The practical approach is what sets it apart.",
  },
  {
    name: "Fatima Ali",
    role: "Freelancer",
    content:
      "I landed my first AI automation client within a month of completing the course. The skills I learned are directly applicable to real projects.",
  },
  {
    name: "Hassan Malik",
    role: "Digital Marketer",
    content:
      "Unlike other courses that teach theory, SkillSpark shows you exactly how to execute. The case studies are gold.",
  },
  {
    name: "Sara Ahmed",
    role: "Shopify Store Owner",
    content:
      "My store conversions increased by 40% after applying the strategies from the Shopify course. Highly recommended!",
  },
];

export default function Home() {
  const categories = [...new Set(courses.map((c) => c.category))];

  return (
    <>
      {/* ── Hero: "The Proof Card" ──────────────────────────── */}
      <section className="bg-cream py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-display)]">
                Taught by a practitioner
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-charcoal leading-[1.08] mb-6 font-[family-name:var(--font-display)]">
                Ignite Your Skills.
                <br />
                Earn Online.
              </h1>
              <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                Learn AI, Digital Marketing, Meta Ads & Shopify from a specialist
                who&apos;s done it for real e-commerce clients — not just theory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/courses"
                  className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 font-[family-name:var(--font-display)]"
                >
                  Browse Courses
                </Link>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-charcoal/15 text-charcoal px-8 py-4 rounded-full font-semibold text-base hover:border-charcoal hover:bg-charcoal hover:text-white transition-all flex items-center justify-center gap-2 font-[family-name:var(--font-display)]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Founder trust line */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-warm-gray/60 flex-shrink-0">
                  <Image
                    src="/founder.png"
                    alt={siteConfig.founder.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="text-sm">
                  <span className="text-charcoal font-medium">{siteConfig.founder.name}</span>
                  <span className="text-gray-400"> &middot; </span>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    See credentials &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right — The Proof Card (signature element) */}
            <div className="animate-card-slide-in">
              <div className="relative mx-auto max-w-md">
                {/* Decorative ring behind the card */}
                <div className="absolute -inset-4 rounded-3xl border-2 border-primary/10 -rotate-2" />

                {/* The card itself */}
                <div className="relative bg-white rounded-2xl shadow-2xl shadow-charcoal/8 border border-warm-gray/50 overflow-hidden">
                  {/* Top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-primary to-secondary" />

                  <div className="p-8">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-[family-name:var(--font-display)]">
                        Campaign Result
                      </span>
                      <span className="bg-success/10 text-success text-xs font-bold px-2.5 py-1 rounded-full">
                        Verified
                      </span>
                    </div>

                    {/* The big stat */}
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-5xl font-bold text-charcoal font-[family-name:var(--font-display)] tracking-tight">
                        30
                      </span>
                      <span className="text-xl font-semibold text-primary font-[family-name:var(--font-display)]">
                        sales
                      </span>
                    </div>

                    {/* The cost line */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-gray-400">on</span>
                      <span className="text-2xl font-bold text-charcoal font-[family-name:var(--font-display)]">
                        PKR 1,000
                      </span>
                      <span className="text-gray-400">ad spend</span>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-warm-gray/60 my-6" />

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400 mb-1">Platform</div>
                        <div className="font-semibold text-charcoal">Meta Ads</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Niche</div>
                        <div className="font-semibold text-charcoal">D2C Beauty</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">ROAS</div>
                        <div className="font-semibold text-charcoal">15x</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Course</div>
                        <div className="font-semibold text-charcoal">Meta Ads Mastery</div>
                      </div>
                    </div>

                    {/* Bottom note */}
                    <div className="mt-6 pt-4 border-t border-warm-gray/60 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success" />
                      <span className="text-xs text-gray-400">
                        Real result from a live client campaign
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar — Editorial Statement ───────────────────── */}
      <section className="bg-charcoal py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-display)]">
            By the numbers
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {siteConfig.stats.map((stat, index) => (
              <div key={index} className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-display)] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </span>
                {index < siteConfig.stats.length - 1 && (
                  <span className="hidden md:inline text-gray-600 ml-8">
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Categories — Compact Strip ──────────────────── */}
      <section className="py-10 bg-cream border-b border-warm-gray/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-[family-name:var(--font-display)] whitespace-nowrap mr-2">
              Categories
            </span>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/courses?category=${encodeURIComponent(category)}`}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-charcoal hover:border-primary border border-warm-gray/50 transition-all whitespace-nowrap group"
              >
                <span className="text-gray-400 group-hover:text-primary transition-colors">
                  {categoryIcons[category] || <BookOpen className="h-4 w-4" />}
                </span>
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Courses — Staggered Grid ──────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-[family-name:var(--font-display)] mb-3">
                Our Courses
              </h2>
              <p className="text-gray-500 max-w-lg">
                Practical, results-driven courses taught by a specialist who
                actively works with real clients.
              </p>
            </div>
            <Link
              href="/courses"
              className="hidden md:flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all font-[family-name:var(--font-display)]"
            >
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 course-grid-stagger">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1 text-primary font-semibold text-sm font-[family-name:var(--font-display)]"
            >
              View all courses <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works — Connected Path Timeline ────────────── */}
      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-3">
              How It Works
            </h2>
            <p className="text-gray-400">Three steps to start earning</p>
          </div>

          <div className="relative">
            {/* Horizontal connecting line — hidden on mobile */}
            <div className="hidden md:block absolute top-[2.25rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {[
                {
                  num: "01",
                  title: "Enroll",
                  description:
                    "Message us on WhatsApp, receive payment details, and get instant access.",
                  icon: <MessageCircle className="h-5 w-5" />,
                },
                {
                  num: "02",
                  title: "Learn",
                  description:
                    "Attend live sessions, watch recorded videos, and learn at your own pace with lifetime access.",
                  icon: <BookOpen className="h-5 w-5" />,
                },
                {
                  num: "03",
                  title: "Apply & Earn",
                  description:
                    "Apply what you learn with real client work templates and start earning online.",
                  icon: <TrendingUp className="h-5 w-5" />,
                },
              ].map((item, i) => (
                <div key={item.num} className="text-center relative">
                  {/* Node circle */}
                  <div className="w-18 h-18 rounded-full border-2 border-primary/40 flex items-center justify-center mx-auto mb-5 relative z-10 bg-charcoal">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                  </div>

                  {/* Large number */}
                  <div className="text-5xl font-bold text-white/8 font-[family-name:var(--font-display)] tracking-tight mb-2 select-none">
                    {item.num}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why SkillSpark — Asymmetric Grid ─────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-[family-name:var(--font-display)] mb-3">
              Why SkillSpark?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Unlike bigger platforms where courses are taught by people who
              stopped doing client work years ago, SkillSpark&apos;s courses come
              directly from live client campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1 — Large accent card */}
            <div className="md:row-span-2 bg-charcoal rounded-2xl p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-display)]">
                  Practicing Specialist
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Taught by someone actively doing the work — not a presenter who
                  read the slides once. Every lesson comes from a live campaign
                  running right now.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">3+</span>
                <span className="text-gray-400 text-sm">years of hands-on client work</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-cream rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 translate-x-1/2" />
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 font-[family-name:var(--font-display)]">
                Live + Recorded Sessions
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Attend live or watch recordings anytime — lifetime access, no
                expirations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-cream rounded-2xl p-8 relative overflow-hidden">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-primary mb-4">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 font-[family-name:var(--font-display)]">
                Real Case Studies
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Perfume &amp; Beauty D2C brand results — learn from campaigns that
                actually ran and converted.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-cream rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/5 rounded-full" />
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Headphones className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 font-[family-name:var(--font-display)]">
                Direct WhatsApp Support
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get help directly from the instructor — no ticket systems, no
                waiting queues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Founder — Name-Forward ─────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Decorative monogram block */}
            <div className="relative">
              <div className="aspect-square bg-charcoal rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-8 left-8 w-32 h-32 border-2 border-primary/20 rounded-full" />
                  <div className="absolute bottom-12 right-12 w-48 h-48 border-2 border-secondary/15 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full" />
                </div>
                <span className="text-7xl font-bold text-white/10 font-[family-name:var(--font-display)] tracking-tighter select-none relative z-10">
                  AN
                </span>
              </div>
            </div>

            {/* Right — Text */}
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 font-[family-name:var(--font-display)]">
                About the founder
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5 font-[family-name:var(--font-display)] leading-tight">
                {siteConfig.founder.name}
              </h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                {siteConfig.founder.bio}
              </p>
              <p className="text-gray-500 mb-8 text-sm">
                <span className="font-semibold text-charcoal">Skills:</span>{" "}
                Generative AI, AI Automation, AI Agents, Prompt Engineering, Meta
                Ads, Shopify, Digital Marketing.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all font-[family-name:var(--font-display)] text-sm"
              >
                Read Full Story <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials — Quote-Forward ─────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-[family-name:var(--font-display)] mb-3">
              What Our Students Say
            </h2>
            <p className="text-gray-500">Real results from real students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                {/* Large decorative quote mark */}
                <span className="absolute -top-3 -left-1 text-6xl text-primary/15 font-[family-name:var(--font-display)] select-none leading-none">
                  &ldquo;
                </span>

                <div className="relative pl-6 pt-4">
                  <p className="text-charcoal text-lg md:text-xl leading-relaxed mb-5 font-[family-name:var(--font-display)]">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/40" />
                    <div>
                      <div className="font-semibold text-charcoal text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA — Restrained ───────────────────────────── */}
      <section className="bg-charcoal py-20 relative overflow-hidden">
        {/* Single subtle accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
            Ready to Start Earning Online?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of students already building skills that pay.
          </p>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 font-[family-name:var(--font-display)]"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
