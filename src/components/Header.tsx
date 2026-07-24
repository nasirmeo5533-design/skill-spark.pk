"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { courses } from "@/data/courses";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const categories = [...new Set(courses.map((c) => c.category))];

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-warm-gray/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" className="text-primary" />
            </svg>
            <span className="text-xl font-bold font-[family-name:var(--font-display)]">
              <span className="text-charcoal">Skill</span>
              <span className="text-primary">Spark</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-charcoal hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="relative flex items-center gap-1 text-charcoal hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Courses
                <ChevronDown className="h-4 w-4" />
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-cream rounded-lg shadow-lg border border-warm-gray/50 py-2">
                  <Link
                    href="/courses"
                    className="block px-4 py-2 text-charcoal hover:bg-light-gray hover:text-primary transition-colors font-medium"
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    All Courses
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/courses?category=${encodeURIComponent(category)}`}
                      className="block px-4 py-2 text-charcoal hover:bg-light-gray hover:text-primary transition-colors"
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="relative text-charcoal hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="relative text-charcoal hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Blog
            </Link>
            <Link
              href="/success-stories"
              className="relative text-charcoal hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Success Stories
            </Link>
            <Link
              href="/faq"
              className="relative text-charcoal hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="relative text-charcoal hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/courses"
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow-sm shadow-primary/20 hover:bg-primary-dark transition-colors font-[family-name:var(--font-display)] text-sm"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-cream border-t border-warm-gray/40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-[800px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-charcoal hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block text-charcoal hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              All Courses
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/courses?category=${encodeURIComponent(category)}`}
                className="block pl-4 text-charcoal hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
            <Link
              href="/about"
              className="block text-charcoal hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block text-charcoal hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/success-stories"
              className="block text-charcoal hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              href="/faq"
              className="block text-charcoal hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block text-charcoal hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/courses"
              className="block bg-primary text-white px-6 py-2 rounded-full font-semibold text-center shadow-sm shadow-primary/20 hover:bg-primary-dark transition-colors font-[family-name:var(--font-display)] text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
      </div>
    </header>
  );
}
