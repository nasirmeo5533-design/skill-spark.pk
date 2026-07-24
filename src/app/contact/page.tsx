"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { courses } from "@/data/courses";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement Web3Forms submission
    // For now, simulate submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    }, 1000);
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses? Want a personalized recommendation?
            Reach out and we&apos;ll help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+92 3XX XXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Which course are you interested in?
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">General Inquiry</option>
                    {courses.map((course) => (
                      <option key={course.slug} value={course.slug}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent. We&apos;ll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white p-6 rounded-xl hover:bg-green-600 transition-colors"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="h-8 w-8" />
                <div>
                  <div className="font-semibold">Chat on WhatsApp</div>
                  <div className="text-sm text-green-100">{siteConfig.contact.whatsapp}</div>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="block bg-light-gray p-6 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold text-charcoal">Email Us</div>
                  <div className="text-sm text-gray-600">{siteConfig.contact.email}</div>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="bg-light-gray p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold text-charcoal">Location</div>
                  <div className="text-sm text-gray-600">{siteConfig.contact.location}</div>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-light-gray p-6 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <div className="flex items-center gap-4">
                <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div>
                  <div className="font-semibold text-charcoal">LinkedIn</div>
                  <div className="text-sm text-gray-600">Connect with Abeer</div>
                </div>
              </div>
            </a>

            {/* Business Hours */}
            <div className="bg-light-gray p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold text-charcoal">Business Hours</div>
                  <div className="text-sm text-gray-600">{siteConfig.contact.businessHours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
