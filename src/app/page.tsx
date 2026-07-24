import Link from "next/link";
import {
  MessageCircle,
  BookOpen,
  Users,
  TrendingUp,
  Zap,
  Target,
  Headphones,
  GraduationCap,
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
  "Generative AI": <BrainCircuit className="h-6 w-6" />,
  "AI Automation": <Bot className="h-6 w-6" />,
  "Prompt Engineering": <Sparkles className="h-6 w-6" />,
  "Meta Ads": <Megaphone className="h-6 w-6" />,
  Shopify: <ShoppingCart className="h-6 w-6" />,
  "Digital Marketing": <BarChart3 className="h-6 w-6" />,
};

const testimonials = [
  {
    name: "Ahmed Khan",
    initials: "AK",
    role: "E-commerce Owner",
    content:
      "SkillSpark's Meta Ads course helped me generate 30 sales on just PKR 1,000 ad budget. The practical approach is what sets it apart.",
    gradient: "from-orange-400 to-rose-500",
  },
  {
    name: "Fatima Ali",
    initials: "FA",
    role: "Freelancer",
    content:
      "I landed my first AI automation client within a month of completing the course. The skills I learned are directly applicable to real projects.",
    gradient: "from-violet-400 to-indigo-500",
  },
  {
    name: "Hassan Malik",
    initials: "HM",
    role: "Digital Marketer",
    content:
      "Unlike other courses that teach theory, SkillSpark shows you exactly how to execute. The case studies are gold.",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "Sara Ahmed",
    initials: "SA",
    role: "Shopify Store Owner",
    content:
      "My store conversions increased by 40% after applying the strategies from the Shopify course. Highly recommended!",
    gradient: "from-amber-400 to-orange-500",
  },
];

export default function Home() {
  const categories = [...new Set(courses.map((c) => c.category))];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 lg:py-32 overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Abstract Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-orange-300/30 to-amber-400/20 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-yellow-300/25 to-orange-400/15 blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-gradient-to-tl from-amber-200/20 to-rose-300/15 blur-3xl" />
          <div className="absolute top-1/4 left-1/3 h-48 w-48 rounded-full bg-gradient-to-br from-orange-200/20 to-yellow-300/10 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 tracking-tight">
              Ignite Your Skills.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Earn Online.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn AI, Digital Marketing, Meta Ads & Shopify from a specialist
              who&apos;s done it for real e-commerce clients — not just theory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                Browse Courses
              </Link>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-charcoal hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {siteConfig.stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold text-primary mb-2 font-mono tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Strip */}
      <section className="py-12 bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category}
                href={`/courses?category=${encodeURIComponent(category)}`}
                className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-primary/20"
              >
                <div className="text-primary mb-2 flex justify-center group-hover:scale-110 group-hover:text-primary-dark transition-all duration-300">
                  {categoryIcons[category] || <BookOpen className="h-6 w-6" />}
                </div>
                <span className="text-sm font-medium text-charcoal">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Our Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical, results-driven courses taught by a specialist who
              actively works with real clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">Three simple steps to start learning</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enroll",
                description:
                  "Message us on WhatsApp, receive payment details, and get instant access.",
                icon: <MessageCircle className="h-8 w-8" />,
              },
              {
                step: "2",
                title: "Learn",
                description:
                  "Attend live sessions, watch recorded videos, and learn at your own pace with lifetime access.",
                icon: <BookOpen className="h-8 w-8" />,
              },
              {
                step: "3",
                title: "Apply & Earn",
                description:
                  "Apply what you learn with real client work templates and start earning online.",
                icon: <TrendingUp className="h-8 w-8" />,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-primary mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SkillSpark */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why SkillSpark?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlike bigger platforms where courses are taught by people who
              stopped doing client work years ago, SkillSpark&apos;s courses come
              directly from live client campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Live + Recorded Sessions",
                description: "Attend live or watch recordings anytime",
                icon: <BookOpen className="h-6 w-6" />,
              },
              {
                title: "Practicing Specialist",
                description: "Taught by someone actively doing the work",
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: "Real Case Studies",
                description: "Perfume/Beauty D2C brand results",
                icon: <Target className="h-6 w-6" />,
              },
              {
                title: "Direct WhatsApp Support",
                description: "Get help directly from the instructor",
                icon: <Headphones className="h-6 w-6" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-light-gray p-6 rounded-xl text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Teaser */}
      <section className="py-16 bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-inner">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center shadow-xl shadow-primary/30">
                  <span className="text-5xl font-bold text-white tracking-tight">
                    AN
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Meet the Founder
              </h2>
              <p className="text-gray-600 mb-4">{siteConfig.founder.bio}</p>
              <p className="text-gray-600 mb-6">
                <strong>Skills:</strong> Generative AI, AI Automation, AI Agents,
                Prompt Engineering, Meta Ads, Shopify, Digital Marketing.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read Full Story <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600">
              Real results from real students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-md`}
                  >
                    <span className="text-white font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="relative py-16 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-amber-500 to-secondary" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/40 rounded-full blur-3xl mix-blend-overlay" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-300/35 rounded-full blur-3xl mix-blend-overlay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-400/25 rounded-full blur-2xl mix-blend-overlay" />
        </div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Earning Online?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of students already building skills that pay.
          </p>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
