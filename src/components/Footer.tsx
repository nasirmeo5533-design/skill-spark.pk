import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { courses } from "@/data/courses";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-5 w-5" />
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SkillSpark. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* TODO: Add TikTok link later */}
              {/* <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Music className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
