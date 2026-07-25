"use client";

import { useRef } from "react";
import Link from "next/link";
import { Clock, BarChart, ArrowRight } from "lucide-react";
import { Course } from "@/data/courses";

const categoryGraphics: Record<string, React.ReactNode> = {
  "Generative AI": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#134E4A" />
      <circle cx="130" cy="90" r="50" fill="none" stroke="#0D9488" strokeWidth="2" opacity="0.6" />
      <circle cx="190" cy="90" r="50" fill="none" stroke="#D97706" strokeWidth="2" opacity="0.6" />
      <circle cx="160" cy="55" r="50" fill="none" stroke="#0D9488" strokeWidth="2" opacity="0.3" />
      <text x="160" y="160" textAnchor="middle" fill="#F0FDFA" fontSize="14" fontFamily="Nunito, sans-serif" fontWeight="600" opacity="0.4">AI</text>
    </svg>
  ),
  "AI Automation": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#134E4A" />
      <line x1="60" y1="60" x2="130" y2="90" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
      <line x1="130" y1="90" x2="200" y2="50" stroke="#D97706" strokeWidth="1.5" opacity="0.5" />
      <line x1="200" y1="50" x2="260" y2="100" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="60" r="5" fill="#0D9488" />
      <circle cx="130" cy="90" r="7" fill="#D97706" />
      <circle cx="200" cy="50" r="5" fill="#0D9488" />
      <circle cx="260" cy="100" r="5" fill="#D97706" />
      <text x="160" y="170" textAnchor="middle" fill="#F0FDFA" fontSize="11" fontFamily="Nunito, sans-serif" fontWeight="500" opacity="0.3">AUTOMATE</text>
    </svg>
  ),
  "Prompt Engineering": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#134E4A" />
      <rect x="40" y="40" width="120" height="3" rx="1.5" fill="#0D9488" opacity="0.6" />
      <rect x="40" y="55" width="180" height="3" rx="1.5" fill="#F0FDFA" opacity="0.15" />
      <rect x="40" y="70" width="90" height="3" rx="1.5" fill="#F0FDFA" opacity="0.15" />
      <rect x="40" y="85" width="150" height="3" rx="1.5" fill="#D97706" opacity="0.4" />
      <rect x="40" y="100" width="110" height="3" rx="1.5" fill="#F0FDFA" opacity="0.15" />
      <text x="160" y="158" textAnchor="middle" fill="#F0FDFA" fontSize="11" fontFamily="Nunito, sans-serif" fontWeight="500" opacity="0.3">PROMPT</text>
    </svg>
  ),
  "Meta Ads": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#134E4A" />
      <line x1="40" y1="140" x2="280" y2="140" stroke="#F0FDFA" strokeWidth="1" opacity="0.1" />
      <rect x="60" y="100" width="24" height="40" rx="3" fill="#0D9488" opacity="0.4" />
      <rect x="100" y="80" width="24" height="60" rx="3" fill="#0D9488" opacity="0.55" />
      <rect x="140" y="60" width="24" height="80" rx="3" fill="#D97706" opacity="0.5" />
      <rect x="180" y="45" width="24" height="95" rx="3" fill="#0D9488" opacity="0.7" />
      <rect x="220" y="30" width="24" height="110" rx="3" fill="#D97706" />
      <polyline points="72,95 112,75 152,55 192,40 232,25" fill="none" stroke="#F0FDFA" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <circle cx="232" cy="25" r="4" fill="#0D9488" />
      <text x="160" y="170" textAnchor="middle" fill="#F0FDFA" fontSize="11" fontFamily="Nunito, sans-serif" fontWeight="500" opacity="0.3">GROWTH</text>
    </svg>
  ),
  Shopify: (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#134E4A" />
      <rect x="50" y="30" width="100" height="120" rx="8" fill="none" stroke="#0D9488" strokeWidth="1.5" opacity="0.4" />
      <rect x="60" y="45" width="80" height="50" rx="4" fill="#0D9488" opacity="0.15" />
      <rect x="60" y="105" width="35" height="8" rx="2" fill="#D97706" opacity="0.5" />
      <rect x="170" y="50" width="100" height="80" rx="8" fill="none" stroke="#D97706" strokeWidth="1.5" opacity="0.3" />
      <rect x="180" y="65" width="80" height="35" rx="4" fill="#D97706" opacity="0.1" />
      <text x="160" y="170" textAnchor="middle" fill="#F0FDFA" fontSize="11" fontFamily="Nunito, sans-serif" fontWeight="500" opacity="0.3">STORE</text>
    </svg>
  ),
  "Content Creation": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#134E4A" />
      <rect x="50" y="35" width="80" height="55" rx="6" fill="#0D9488" opacity="0.3" />
      <rect x="140" y="25" width="80" height="55" rx="6" fill="#D97706" opacity="0.25" />
      <rect x="90" y="75" width="80" height="55" rx="6" fill="#0D9488" opacity="0.2" />
      <text x="160" y="158" textAnchor="middle" fill="#F0FDFA" fontSize="11" fontFamily="Nunito, sans-serif" fontWeight="500" opacity="0.3">CREATE</text>
    </svg>
  ),
  "Digital Marketing": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#134E4A" />
      <circle cx="160" cy="80" r="55" fill="none" stroke="#0D9488" strokeWidth="1.5" opacity="0.25" />
      <circle cx="160" cy="80" r="38" fill="none" stroke="#D97706" strokeWidth="1.5" opacity="0.35" />
      <circle cx="160" cy="80" r="20" fill="none" stroke="#0D9488" strokeWidth="2" opacity="0.6" />
      <circle cx="160" cy="80" r="5" fill="#D97706" />
      <text x="160" y="158" textAnchor="middle" fill="#F0FDFA" fontSize="11" fontFamily="Nunito, sans-serif" fontWeight="500" opacity="0.3">REACH</text>
    </svg>
  ),
  Freelancing: (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#134E4A" />
      <circle cx="90" cy="70" r="28" fill="none" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
      <circle cx="230" cy="70" r="28" fill="none" stroke="#D97706" strokeWidth="1.5" opacity="0.5" />
      <line x1="118" y1="70" x2="202" y2="70" stroke="#F0FDFA" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
      <text x="160" y="158" textAnchor="middle" fill="#F0FDFA" fontSize="11" fontFamily="Nunito, sans-serif" fontWeight="500" opacity="0.3">EARN</text>
    </svg>
  ),
};

const fallbackGraphic = (
  <svg viewBox="0 0 320 180" className="w-full h-full">
    <rect width="320" height="180" fill="#134E4A" />
    <circle cx="160" cy="80" r="40" fill="none" stroke="#0D9488" strokeWidth="2" opacity="0.4" />
    <circle cx="160" cy="80" r="20" fill="#0D9488" opacity="0.15" />
    <text x="160" y="158" textAnchor="middle" fill="#F0FDFA" fontSize="11" fontFamily="Nunito, sans-serif" fontWeight="500" opacity="0.3">LEARN</text>
  </svg>
);

export default function CourseCard({ course }: { course: Course }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group border border-warm-gray/40 cursor-pointer"
      style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease-out" }}
    >
      {/* Category Graphic */}
      <div className="relative aspect-video overflow-hidden">
        <div className="w-full h-full group-hover:scale-110 transition-transform duration-700">
          {categoryGraphics[course.category] || fallbackGraphic}
        </div>
        {/* Price Tag */}
        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold font-[family-name:var(--font-display)] shadow-lg">
          Rs. {course.price.toLocaleString()}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-semibold flex items-center gap-1 font-[family-name:var(--font-display)]">
            View Course <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="p-5">
        {/* Category Badge */}
        <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
          {course.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-charcoal mb-2 line-clamp-2 font-[family-name:var(--font-display)] leading-snug group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 uppercase tracking-wide">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <BarChart className="h-3.5 w-3.5" />
            {course.level}
          </span>
        </div>

        {/* CTA Button */}
        <Link
          href={`/courses/${course.slug}`}
          className="block w-full bg-charcoal text-white text-center py-3 rounded-lg font-semibold hover:bg-primary transition-all font-[family-name:var(--font-display)] text-sm group-hover:shadow-lg group-hover:shadow-primary/20"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}
