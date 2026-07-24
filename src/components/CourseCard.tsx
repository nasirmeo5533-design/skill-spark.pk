import Link from "next/link";
import { Clock, BarChart } from "lucide-react";
import { Course } from "@/data/courses";

const categoryGraphics: Record<string, React.ReactNode> = {
  "Generative AI": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#1C1C1E" />
      <circle cx="130" cy="90" r="50" fill="none" stroke="#FF7A1A" strokeWidth="2" opacity="0.6" />
      <circle cx="190" cy="90" r="50" fill="none" stroke="#FFC93C" strokeWidth="2" opacity="0.6" />
      <circle cx="160" cy="55" r="50" fill="none" stroke="#FF7A1A" strokeWidth="2" opacity="0.3" />
      <text x="160" y="160" textAnchor="middle" fill="#FAF8F5" fontSize="14" fontFamily="Space Grotesk, sans-serif" fontWeight="600" opacity="0.4">AI</text>
    </svg>
  ),
  "AI Automation": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#1C1C1E" />
      <line x1="60" y1="60" x2="130" y2="90" stroke="#FF7A1A" strokeWidth="1.5" opacity="0.5" />
      <line x1="130" y1="90" x2="200" y2="50" stroke="#FFC93C" strokeWidth="1.5" opacity="0.5" />
      <line x1="200" y1="50" x2="260" y2="100" stroke="#FF7A1A" strokeWidth="1.5" opacity="0.5" />
      <line x1="130" y1="90" x2="180" y2="140" stroke="#FFC93C" strokeWidth="1.5" opacity="0.4" />
      <circle cx="60" cy="60" r="5" fill="#FF7A1A" />
      <circle cx="130" cy="90" r="7" fill="#FFC93C" />
      <circle cx="200" cy="50" r="5" fill="#FF7A1A" />
      <circle cx="260" cy="100" r="5" fill="#FFC93C" />
      <circle cx="180" cy="140" r="4" fill="#FF7A1A" opacity="0.6" />
      <text x="160" y="170" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="500" opacity="0.3">AUTOMATE</text>
    </svg>
  ),
  "Prompt Engineering": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#1C1C1E" />
      <rect x="40" y="40" width="120" height="3" rx="1.5" fill="#FF7A1A" opacity="0.6" />
      <rect x="40" y="55" width="180" height="3" rx="1.5" fill="#FAF8F5" opacity="0.15" />
      <rect x="40" y="70" width="90" height="3" rx="1.5" fill="#FAF8F5" opacity="0.15" />
      <rect x="40" y="85" width="150" height="3" rx="1.5" fill="#FFC93C" opacity="0.4" />
      <rect x="40" y="100" width="110" height="3" rx="1.5" fill="#FAF8F5" opacity="0.15" />
      <rect x="40" y="115" width="70" height="3" rx="1.5" fill="#FF7A1A" opacity="0.3" />
      <rect x="155" y="37" width="2" height="20" fill="#FF7A1A">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>
      <text x="160" y="158" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="500" opacity="0.3">PROMPT</text>
    </svg>
  ),
  "Meta Ads": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#1C1C1E" />
      <line x1="40" y1="140" x2="280" y2="140" stroke="#FAF8F5" strokeWidth="1" opacity="0.1" />
      <rect x="60" y="100" width="24" height="40" rx="3" fill="#FF7A1A" opacity="0.4" />
      <rect x="100" y="80" width="24" height="60" rx="3" fill="#FF7A1A" opacity="0.55" />
      <rect x="140" y="60" width="24" height="80" rx="3" fill="#FFC93C" opacity="0.5" />
      <rect x="180" y="45" width="24" height="95" rx="3" fill="#FF7A1A" opacity="0.7" />
      <rect x="220" y="30" width="24" height="110" rx="3" fill="#FFC93C" />
      <polyline points="72,95 112,75 152,55 192,40 232,25" fill="none" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <circle cx="232" cy="25" r="4" fill="#FF7A1A" />
      <text x="160" y="170" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="500" opacity="0.3">GROWTH</text>
    </svg>
  ),
  Shopify: (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#1C1C1E" />
      <rect x="50" y="30" width="100" height="120" rx="8" fill="none" stroke="#FF7A1A" strokeWidth="1.5" opacity="0.4" />
      <rect x="60" y="45" width="80" height="50" rx="4" fill="#FF7A1A" opacity="0.15" />
      <rect x="60" y="105" width="35" height="8" rx="2" fill="#FFC93C" opacity="0.5" />
      <rect x="60" y="118" width="55" height="6" rx="2" fill="#FAF8F5" opacity="0.15" />
      <rect x="60" y="130" width="25" height="10" rx="2" fill="#FF7A1A" opacity="0.6" />
      <rect x="170" y="50" width="100" height="80" rx="8" fill="none" stroke="#FFC93C" strokeWidth="1.5" opacity="0.3" />
      <rect x="180" y="65" width="80" height="35" rx="4" fill="#FFC93C" opacity="0.1" />
      <rect x="180" y="110" width="40" height="8" rx="2" fill="#FF7A1A" opacity="0.4" />
      <rect x="180" y="122" width="60" height="6" rx="2" fill="#FAF8F5" opacity="0.1" />
      <text x="160" y="170" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="500" opacity="0.3">STORE</text>
    </svg>
  ),
  "Content Creation": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#1C1C1E" />
      <rect x="50" y="35" width="80" height="55" rx="6" fill="#FF7A1A" stroke="#FF7A1A" strokeWidth="1" opacity="0.3" />
      <rect x="140" y="25" width="80" height="55" rx="6" fill="#FFC93C" stroke="#FFC93C" strokeWidth="1" opacity="0.25" />
      <rect x="90" y="75" width="80" height="55" rx="6" fill="#FF7A1A" stroke="#FF7A1A" strokeWidth="1" opacity="0.2" />
      <line x1="240" y1="40" x2="280" y2="40" stroke="#FAF8F5" strokeWidth="2" opacity="0.2" strokeLinecap="round" />
      <line x1="240" y1="55" x2="270" y2="55" stroke="#FAF8F5" strokeWidth="2" opacity="0.12" strokeLinecap="round" />
      <line x1="240" y1="70" x2="260" y2="70" stroke="#FAF8F5" strokeWidth="2" opacity="0.08" strokeLinecap="round" />
      <text x="160" y="158" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="500" opacity="0.3">CREATE</text>
    </svg>
  ),
  "Digital Marketing": (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#1C1C1E" />
      <circle cx="160" cy="80" r="55" fill="none" stroke="#FF7A1A" strokeWidth="1.5" opacity="0.25" />
      <circle cx="160" cy="80" r="38" fill="none" stroke="#FFC93C" strokeWidth="1.5" opacity="0.35" />
      <circle cx="160" cy="80" r="20" fill="none" stroke="#FF7A1A" strokeWidth="2" opacity="0.6" />
      <circle cx="160" cy="80" r="5" fill="#FFC93C" />
      <line x1="160" y1="20" x2="160" y2="140" stroke="#FAF8F5" strokeWidth="0.5" opacity="0.1" />
      <line x1="100" y1="80" x2="220" y2="80" stroke="#FAF8F5" strokeWidth="0.5" opacity="0.1" />
      <text x="160" y="158" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="500" opacity="0.3">REACH</text>
    </svg>
  ),
  Freelancing: (
    <svg viewBox="0 0 320 180" className="w-full h-full">
      <rect width="320" height="180" fill="#1C1C1E" />
      <circle cx="90" cy="70" r="28" fill="none" stroke="#FF7A1A" strokeWidth="1.5" opacity="0.5" />
      <circle cx="230" cy="70" r="28" fill="none" stroke="#FFC93C" strokeWidth="1.5" opacity="0.5" />
      <line x1="118" y1="70" x2="202" y2="70" stroke="#FAF8F5" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
      <circle cx="160" cy="70" r="8" fill="#FF7A1A" opacity="0.3" />
      <circle cx="90" cy="120" r="3" fill="#FF7A1A" opacity="0.4" />
      <circle cx="230" cy="120" r="3" fill="#FFC93C" opacity="0.4" />
      <line x1="90" y1="98" x2="90" y2="117" stroke="#FF7A1A" strokeWidth="1" opacity="0.3" />
      <line x1="230" y1="98" x2="230" y2="117" stroke="#FFC93C" strokeWidth="1" opacity="0.3" />
      <text x="160" y="158" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="500" opacity="0.3">EARN</text>
    </svg>
  ),
};

const fallbackGraphic = (
  <svg viewBox="0 0 320 180" className="w-full h-full">
    <rect width="320" height="180" fill="#1C1C1E" />
    <circle cx="160" cy="80" r="40" fill="none" stroke="#FF7A1A" strokeWidth="2" opacity="0.4" />
    <circle cx="160" cy="80" r="20" fill="#FF7A1A" opacity="0.15" />
    <text x="160" y="158" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="500" opacity="0.3">LEARN</text>
  </svg>
);

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-warm-gray/40">
      {/* Branded Category Graphic */}
      <div className="relative aspect-video overflow-hidden">
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
          {categoryGraphics[course.category] || fallbackGraphic}
        </div>
        {/* Price Tag */}
        <div className="absolute top-3 right-3 bg-charcoal/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold font-[family-name:var(--font-display)]">
          Rs. {course.price.toLocaleString()}
        </div>
      </div>

      <div className="p-5">
        {/* Category Badge */}
        <span className="inline-block bg-primary/8 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
          {course.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-charcoal mb-2 line-clamp-2 font-[family-name:var(--font-display)] leading-snug">
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
          className="block w-full bg-charcoal text-white text-center py-3 rounded-lg font-semibold hover:bg-primary transition-colors font-[family-name:var(--font-display)] text-sm"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}
