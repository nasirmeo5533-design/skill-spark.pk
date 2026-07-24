import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  BarChart,
  CheckCircle,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { courses, getCourseBySlug, getCoursesByCategory } from "@/data/courses";
import { siteConfig } from "@/lib/config";
import { generateWhatsAppLink } from "@/lib/utils";
import CourseCard from "@/components/CourseCard";

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} - SkillSpark`,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} - SkillSpark`,
      description: course.shortDescription,
      url: `${siteConfig.url}/courses/${course.slug}`,
      type: "website",
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = getCoursesByCategory(course.category)
    .filter((c) => c.slug !== course.slug)
    .slice(0, 3);

  const whatsappLink = generateWhatsAppLink(course.title);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/courses" className="hover:text-primary">
            Courses
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-charcoal">{course.title}</span>
        </nav>

        {/* Title & Badge */}
        <div className="mb-8">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1 rounded-full mb-4">
            {course.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-gray-600">{course.shortDescription}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video/Image Preview */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
              {/* TODO: replace placeholder image */}
              <span className="text-6xl">🎬</span>
            </div>

            {/* Full Description */}
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                About This Course
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {course.fullDescription}
              </p>
            </div>

            {/* What You'll Learn */}
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                What You&apos;ll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-light-gray rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <details
                    key={index}
                    className="bg-light-gray rounded-lg overflow-hidden"
                  >
                    <summary className="p-4 cursor-pointer font-semibold text-charcoal hover:bg-gray-100 transition-colors">
                      Module {index + 1}: {module.moduleTitle}
                    </summary>
                    <div className="px-4 pb-4">
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lessonIndex}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs text-primary">
                              {lessonIndex + 1}
                            </span>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Who This Course Is For */}
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Who This Course Is For
              </h2>
              <ul className="space-y-3">
                {course.audience.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor Bio */}
            <div className="bg-light-gray p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Your Instructor
              </h2>
              <div className="flex items-start gap-4">
                {/* TODO: replace placeholder image */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal">
                    {course.instructor}
                  </h3>
                  <p className="text-primary text-sm mb-2">
                    {siteConfig.founder.title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {siteConfig.founder.bio}
                  </p>
                  <Link
                    href="/about"
                    className="inline-block mt-2 text-primary text-sm font-medium hover:underline"
                  >
                    Read Full Story →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT Column - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              {/* Price Card */}
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-charcoal mb-2">
                  Rs. {course.price.toLocaleString()}
                </div>
                {course.originalPrice && (
                  <div className="text-gray-500 line-through">
                    Rs. {course.originalPrice.toLocaleString()}
                  </div>
                )}
                <div className="text-sm text-gray-500 mt-1">
                  One-Time Payment
                </div>
              </div>

              {/* Course Info */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">
                    Duration: {course.duration}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <BarChart className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">Level: {course.level}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {course.format}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enroll via WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full border-2 border-charcoal text-charcoal py-3 rounded-lg font-semibold hover:bg-charcoal hover:text-white transition-colors"
                >
                  <HelpCircle className="h-5 w-5" />
                  Ask a Question
                </Link>
              </div>

              {/* How to Enroll */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-charcoal mb-3">
                  How to Enroll
                </h3>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li>1. Message on WhatsApp with course name</li>
                  <li>2. Receive payment details</li>
                  <li>3. Send payment screenshot</li>
                  <li>4. Get instant access</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-charcoal mb-8">
              Related Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse) => (
                <CourseCard key={relatedCourse.slug} course={relatedCourse} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


