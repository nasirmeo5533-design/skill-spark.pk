"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { courses } from "@/data/courses";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = [...new Set(courses.map((c) => c.category))];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-charcoal/95 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-charcoal/10"
        : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" className="text-primary group-hover:text-primary-light transition-colors" />
              </svg>
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-display)]">
              <span className="text-white">Skill</span>
              <span className="text-primary">Spark</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-white/80 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="relative flex items-center gap-1 text-white/80 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Courses
                <ChevronDown className={`h-4 w-4 transition-transform ${isCoursesOpen ? "rotate-180" : ""}`} />
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-charcoal/95 backdrop-blur-xl rounded-xl shadow-2xl border border-primary/10 py-2">
                  <Link
                    href="/courses"
                    className="flex items-center gap-2 px-4 py-2 text-white/80 hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    <Sparkles className="h-4 w-4" />
                    All Courses
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/courses?category=${encodeURIComponent(category)}`}
                      className="block px-4 py-2 text-white/60 hover:bg-primary/10 hover:text-primary transition-colors"
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
              className="relative text-white/80 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="relative text-white/80 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Blog
            </Link>
            <Link
              href="/success-stories"
              className="relative text-white/80 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="relative text-white/80 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-primary/30 hover:bg-primary-light hover:shadow-primary/40 transition-all font-[family-name:var(--font-display)] text-sm flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
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
      <div className={`md:hidden bg-charcoal/95 backdrop-blur-xl border-t border-primary/10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-[800px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="px-4 py-4 space-y-4">
          <Link
            href="/"
            className="block text-white/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="block text-white/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            All Courses
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/courses?category=${encodeURIComponent(category)}`}
              className="block pl-4 text-white/60 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {category}
            </Link>
          ))}
          <Link
            href="/about"
            className="block text-white/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block text-white/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/success-stories"
            className="block text-white/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Success Stories
          </Link>
          <Link
            href="/contact"
            className="block text-white/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary text-white px-6 py-2 rounded-full font-semibold text-center shadow-lg shadow-primary/30 hover:bg-primary-light transition-all font-[family-name:var(--font-display)] text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </header>
  );
}
