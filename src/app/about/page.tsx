import Link from "next/link";
import Image from "next/image";
import { Award, Target, Users, TrendingUp, BookOpen, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "About Us - SkillSpark",
  description: `Learn about ${siteConfig.founder.name}, the founder of SkillSpark, and his journey in AI and digital marketing.`,
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-charcoal mb-4">About SkillSpark</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Founder Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="aspect-[4/5] bg-charcoal rounded-2xl overflow-hidden relative">
              <Image
                src="/founder.png"
                alt={siteConfig.founder.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Meet {siteConfig.founder.name}
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                {siteConfig.founder.name} started learning Generative AI in 2023 with a simple question: <em>How can AI help businesses work better?</em> He learned by building projects, working with real clients, solving real problems, and staying curious.
              </p>
              <p>
                Today, he helps businesses use AI and digital marketing to improve their workflows, strengthen their online presence, and automate repetitive tasks. His experience spans Generative AI, AI Automation, AI Agents, Meta Ads, Shopify, and Digital Marketing.
              </p>
              <p>
                Working particularly with e-commerce and D2C brands in the perfume and beauty space, he helps them set up and optimize Shopify stores, run Meta Ads campaigns, create AI-assisted marketing content, and automate business processes with no-code AI tools.
              </p>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="bg-light-gray rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-charcoal mb-6">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <Target className="h-5 w-5" />, text: "Build AI Agents and no-code automation workflows" },
              { icon: <Users className="h-5 w-5" />, text: "Create AI-powered systems for marketing and business operations" },
              { icon: <TrendingUp className="h-5 w-5" />, text: "Plan, launch, and optimize Meta Ads campaigns" },
              { icon: <Award className="h-5 w-5" />, text: "Set up and optimize Shopify stores" },
              { icon: <BookOpen className="h-5 w-5" />, text: "Develop AI-assisted content for e-commerce and social media" },
              { icon: <Target className="h-5 w-5" />, text: "Design workflows that improve efficiency and reduce manual effort" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <div className="text-primary">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-charcoal text-white p-8 rounded-2xl text-center">
            <div className="text-5xl font-bold text-primary mb-2">30</div>
            <div className="text-gray-300">Qualified Sales Generated</div>
            <div className="text-sm text-gray-400 mt-2">On PKR 1,000 ad budget</div>
          </div>
          <div className="bg-charcoal text-white p-8 rounded-2xl text-center">
            <div className="text-5xl font-bold text-primary mb-2">6</div>
            <div className="text-gray-300">Qualified Leads Generated</div>
            <div className="text-sm text-gray-400 mt-2">On PKR 2,000 ad budget</div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Generative AI",
              "AI Automation",
              "AI Agents",
              "Prompt Engineering",
              "Workflow Automation",
              "Meta Ads",
              "Shopify",
              "Social Media Marketing",
              "AI-powered Content Creation",
              "Digital Marketing",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            To make real, practical AI and digital marketing skills accessible and affordable for Pakistani students and freelancers — taught by someone actively doing the work, not just teaching theory.
          </p>
        </div>

        {/* Why SkillSpark Exists */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Why SkillSpark Exists</h2>
          <p className="text-gray-600 leading-relaxed">
            Most course platforms are taught by people who stopped doing client work years ago. SkillSpark&apos;s courses come directly from live campaigns. When you learn Meta Ads here, you&apos;re learning from someone who just generated 30 sales on a PKR 1,000 budget for a real e-commerce brand — not from someone who read about it in a blog post.
          </p>
        </div>

        {/* Publications & Portfolio */}
        <div className="bg-light-gray rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Publications & Portfolio</h2>
          <div className="space-y-4">
            <a
              href={siteConfig.founder.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary hover:underline"
            >
              <ExternalLink className="h-5 w-5" />
              View Portfolio
            </a>
            {siteConfig.founder.ebooks.map((ebook, index) => (
              <a
                key={index}
                href={ebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary hover:underline"
              >
                <BookOpen className="h-5 w-5" />
                Free Ebook: {ebook.title}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">
            Ready to Learn from a Practicing Specialist?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Browse Courses
            </Link>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-charcoal hover:text-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
