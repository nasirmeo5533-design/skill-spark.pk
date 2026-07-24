import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Privacy Policy - SkillSpark",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: July 24, 2026
          </p>
        </div>

        <div className="space-y-10">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              1. Introduction
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                Welcome to {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;). We operate the website{" "}
                <span className="text-primary font-medium">
                  {siteConfig.domain}
                </span>{" "}
                and are committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website and purchase our courses.
              </p>
              <p>
                By accessing or using our website, you agree to the terms of this
                Privacy Policy. If you do not agree, please do not use our
                website.
              </p>
            </div>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              2. Information We Collect
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-4 text-gray-600 leading-relaxed">
              <div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Personal Information
                </h3>
                <p>
                  When you purchase a course or contact us, we may collect:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number (if provided)</li>
                  <li>Payment transaction details (we do not store credit/debit card numbers)</li>
                  <li>WhatsApp contact information (if you reach out via WhatsApp)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Non-Personal Information
                </h3>
                <p>We may automatically collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              3. How We Use Your Information
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 text-gray-600 leading-relaxed">
              <p className="mb-3">We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Process course purchases and deliver course access</li>
                <li>Send course-related communication (purchase confirmation, updates)</li>
                <li>Respond to your inquiries and provide customer support via WhatsApp or email</li>
                <li>Improve our website, courses, and user experience</li>
                <li>Send occasional marketing emails (you can opt out at any time)</li>
                <li>Detect and prevent fraud or unauthorized access</li>
              </ul>
            </div>
          </section>

          {/* 4. Payment Information */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              4. Payment Information
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                All course purchases are a one-time payment of{" "}
                <span className="font-semibold text-charcoal">Rs. 5,000</span>.
                Payments are processed through secure third-party payment
                processors. We do <span className="font-semibold text-charcoal">not</span> store
                your credit card, debit card, or banking details on our servers.
              </p>
              <p>
                We only retain transaction IDs and payment confirmation details
                necessary for order fulfilment and record-keeping.
              </p>
            </div>
          </section>

          {/* 5. Cookies & Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              5. Cookies &amp; Tracking Technologies
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience. Cookies are small data files
                stored on your device.
              </p>
              <p>We may use:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <span className="font-semibold text-charcoal">Essential cookies</span>{" "}
                  — required for basic site functionality
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Analytics cookies</span>{" "}
                  — to understand how visitors interact with our site
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Marketing cookies</span>{" "}
                  — to deliver relevant advertisements (e.g., Meta Pixel)
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling
                cookies may affect certain site functionality.
              </p>
            </div>
          </section>

          {/* 6. Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              6. Third-Party Services
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>We may share your information with trusted third parties that help us operate our business, including:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Payment processors (for transaction handling)</li>
                <li>Email service providers (for communication)</li>
                <li>Analytics tools (e.g., Google Analytics)</li>
                <li>Advertising platforms (e.g., Meta for remarketing)</li>
              </ul>
              <p>
                These third parties are contractually obligated to keep your
                information confidential and use it only for the purposes we
                specify.
              </p>
            </div>
          </section>

          {/* 7. Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              7. Data Security
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>
                We implement reasonable administrative, technical, and physical
                security measures to protect your personal information. These
                include SSL encryption, secure servers, and access controls.
              </p>
              <p>
                However, no method of transmission over the Internet or
                electronic storage is 100% secure. While we strive to protect
                your data, we cannot guarantee its absolute security.
              </p>
            </div>
          </section>

          {/* 8. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              8. Data Retention
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 text-gray-600 leading-relaxed">
              <p>
                We retain your personal information only for as long as necessary
                to fulfil the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law. Purchase
                records are retained for tax and accounting purposes in accordance
                with Pakistani law.
              </p>
            </div>
          </section>

          {/* 9. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              9. Your Rights
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information (subject to legal retention requirements)</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary hover:underline font-medium"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              10. Children&apos;s Privacy
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 text-gray-600 leading-relaxed">
              <p>
                Our website and courses are not intended for individuals under
                the age of 13. We do not knowingly collect personal information
                from children. If you are a parent or guardian and believe your
                child has provided us with personal information, please contact
                us immediately.
              </p>
            </div>
          </section>

          {/* 11. Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              11. Changes to This Policy
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 text-gray-600 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated &quot;Last
                updated&quot; date. We encourage you to review this page
                periodically. Continued use of the website after changes are made
                constitutes your acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* 12. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              12. Contact Us
            </h2>
            <div className="bg-light-gray rounded-2xl p-6 space-y-3 text-gray-600 leading-relaxed">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
