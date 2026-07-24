"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Got questions? We&apos;ve got answers. If you can&apos;t find what
            you&apos;re looking for, feel free to reach out on WhatsApp.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-light-gray transition-colors"
              >
                <span className="font-semibold text-charcoal pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="https://wa.me/923703159642"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
