import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Terms of Use - SkillSpark",
  description: `Terms of Use for ${siteConfig.name}. Read the rules and guidelines for using our website and courses.`,
};

export default function TermsOfUsePage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-600">
            Last updated: July 24, 2026
          </p>
        </div>

        <div className="space-y-10">
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              1. Acceptance of Terms
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                By accessing or using the website{" "}
                <span className="text-primary font-medium">
                  {siteConfig.domain}
                </span>{" "}
                and purchasing or using any of our courses, you agree to be bound
                by these Terms of Use. If you do not agree, please do not use
                our website or services.
              </p>
              <p>
                We reserve the right to update these terms at any time. Continued
                use of the website after changes constitutes acceptance of the
                revised terms.
              </p>
            </div>
          </section>

          {/* 2. About SkillSpark */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              2. About {siteConfig.name}
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 text-gray-600 leading-relaxed">
              <p>
                {siteConfig.name} is a course-selling platform founded by{" "}
                <span className="font-semibold text-charcoal">
                  {siteConfig.founder.name}
                </span>
                , based in {siteConfig.founder.location}. We offer practical,
                skill-based courses on topics including Generative AI, AI
                Automation, Meta Ads, Shopify, Digital Marketing, and more.
              </p>
            </div>
          </section>

          {/* 3. Course Purchases */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              3. Course Purchases &amp; Pricing
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  All courses are priced at{" "}
                  <span className="font-semibold text-charcoal">Rs. 5,000</span>{" "}
                  per course (one-time payment).
                </li>
                <li>
                  Payment must be completed in full before course access is
                  granted.
                </li>
                <li>
                  Prices are in Pakistani Rupees (PKR) and are inclusive of all
                  applicable taxes unless stated otherwise.
                </li>
                <li>
                  We reserve the right to change course prices at any time.
                  Price changes will not affect previously completed purchases.
                </li>
                <li>
                  All payments are processed through secure third-party payment
                  processors. We do not store your card or banking details.
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Course Access & Delivery */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              4. Course Access &amp; Delivery
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  After successful payment, course access details will be shared
                  with you via WhatsApp or email.
                </li>
                <li>
                  SkillSpark does not currently operate a login/dashboard system.
                  Course materials are delivered directly to you after purchase.
                </li>
                <li>
                  You are responsible for providing accurate contact information
                  (email and/or WhatsApp number) at the time of purchase.
                </li>
                <li>
                  Course content is for personal, non-commercial use only.
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Refund Policy */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              5. Refund Policy
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                Due to the digital nature of our courses, all sales are
                <span className="font-semibold text-charcoal"> final</span> and
                non-refundable once course access has been delivered.
              </p>
              <p>
                Refunds may only be considered in the following exceptional
                cases:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  Course content was not delivered due to a technical error on
                  our end
                </li>
                <li>
                  The purchased course is materially different from its
                  description on the website
                </li>
              </ul>
              <p>
                To request a refund under these conditions, contact us within{" "}
                <span className="font-semibold text-charcoal">7 days</span> of
                purchase at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary hover:underline font-medium"
                >
                  {siteConfig.contact.email}
                </a>{" "}
                or via{" "}
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  WhatsApp
                </a>
                . Refund requests are reviewed on a case-by-case basis.
              </p>
            </div>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              6. Intellectual Property
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                All course content, including but not limited to videos, PDFs,
                templates, text, graphics, and logos, is the intellectual property
                of {siteConfig.name} and {siteConfig.founder.name}.
              </p>
              <p>You may not:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Reproduce, distribute, or share course materials with others</li>
                <li>Record, download, or redistribute course content</li>
                <li>Use course content for commercial purposes without written permission</li>
                <li>Resell or redistribute courses to third parties</li>
              </ul>
              <p>
                Violation of intellectual property rights may result in
                termination of access and legal action.
              </p>
            </div>
          </section>

          {/* 7. User Conduct */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              7. User Conduct
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>When using our website and services, you agree not to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Use the website for any unlawful or fraudulent purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt website functionality</li>
                <li>Impersonate another person or entity</li>
                <li>Use automated tools to scrape or extract content from the website</li>
                <li>Post or transmit harmful, offensive, or inappropriate content</li>
              </ul>
            </div>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              8. Limitation of Liability
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                Our courses are designed to provide practical, educational
                content. However, we do not guarantee specific outcomes, results,
                or income from applying the techniques taught in our courses.
              </p>
              <p>
                Your results depend on many factors including your effort,
                experience, market conditions, and implementation. {siteConfig.name} shall not be
                liable for any direct, indirect, incidental, or consequential
                damages arising from your use of our website or courses.
              </p>
              <p>
                Our total liability for any claim related to a course shall not
                exceed the amount you paid for that course (Rs. 5,000).
              </p>
            </div>
          </section>

          {/* 9. Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              9. Disclaimer
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                The information provided in our courses and on our website is for
                educational purposes only. While we strive to provide accurate
                and up-to-date information, we make no warranties or
                representations regarding the completeness, accuracy, or
                reliability of the content.
              </p>
              <p>
                {siteConfig.name} is not affiliated with Meta, Shopify, Google,
                or any other third-party platforms mentioned in our courses. All
                trademarks belong to their respective owners.
              </p>
            </div>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              10. Governing Law
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 text-gray-600 leading-relaxed">
              <p>
                These Terms of Use shall be governed by and construed in
                accordance with the laws of the Islamic Republic of Pakistan. Any
                disputes arising under these terms shall be subject to the
                exclusive jurisdiction of the courts in{" "}
                <span className="font-semibold text-charcoal">
                  {siteConfig.contact.location}
                </span>
                .
              </p>
            </div>
          </section>

          {/* 11. Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              11. Changes to These Terms
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 text-gray-600 leading-relaxed">
              <p>
                We reserve the right to modify these Terms of Use at any time.
                Changes will be posted on this page with an updated &quot;Last
                updated&quot; date. It is your responsibility to review these
                terms periodically. Your continued use of the website after any
                modifications indicates your acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* 12. Contact */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              12. Contact Us
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                If you have any questions about these Terms of Use, please
                contact us:
              </p>
              <ul className="space-y-2 mt-3">
                <li>
                  <span className="font-semibold text-charcoal">Email: </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-charcoal">WhatsApp: </span>
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Location: </span>
                  {siteConfig.contact.location}
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
