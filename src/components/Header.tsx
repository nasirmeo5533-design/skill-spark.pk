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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="h-8 w-8 text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xl font-bold">
              <span className="text-charcoal">Skill</span>
              <span className="text-primary">Spark</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-charcoal hover:text-primary transition-colors"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center gap-1 text-charcoal hover:text-primary transition-colors"
              >
                Courses
                <ChevronDown className="h-4 w-4" />
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
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
              className="text-charcoal hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-charcoal hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/success-stories"
              className="text-charcoal hover:text-primary transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="text-charcoal hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/courses"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors"
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
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
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
              href="/contact"
              className="block text-charcoal hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/courses"
              className="block bg-primary text-white px-6 py-2 rounded-full font-medium text-center hover:bg-primary-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
