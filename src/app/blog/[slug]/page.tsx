import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock, Tag, User, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { getCourseBySlug } from "@/data/courses";
import { siteConfig } from "@/lib/config";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} - SkillSpark Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - SkillSpark Blog`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedCourse = getCourseBySlug(post.relatedCourseSlug);

  // Simple TOC extraction from H2 headings
  const headings = post.content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", "").trim());

  // Simple markdown to HTML conversion
  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) {
        const id = line
          .replace("## ", "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-");
        return `<h2 id="${id}" class="text-2xl font-bold text-charcoal mt-8 mb-4">${line.replace("## ", "")}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-semibold text-charcoal mt-6 mb-3">${line.replace("### ", "")}</h3>`;
      }
      if (line.startsWith("- ")) {
        return `<li class="text-gray-600 ml-6 mb-2">${line.replace("- ", "")}</li>`;
      }
      if (line.trim() === "") {
        return "<br />";
      }
      // Handle bold text
      const withBold = line.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-charcoal">$1</strong>'
      );
      // Handle links
      const withLinks = withBold.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" class="text-primary hover:underline">$1</a>'
      );
      return `<p class="text-gray-600 mb-4">${withLinks}</p>`;
    })
    .join("\n");

  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-charcoal line-clamp-1">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span>{formatDate(post.date)}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600">{post.excerpt}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="bg-light-gray p-6 rounded-xl mb-8">
                <h2 className="font-semibold text-charcoal mb-3">
                  Table of Contents
                </h2>
                <ul className="space-y-2">
                  {headings.map((heading, index) => (
                    <li key={index}>
                      <a
                        href={`#${heading
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")}`}
                        className="text-primary hover:underline text-sm"
                      >
                        {heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Mid-article CTA */}
            {relatedCourse && (
              <div className="my-8 bg-primary/10 p-6 rounded-xl">
                <p className="text-charcoal font-medium mb-3">
                  Want to master {relatedCourse.category}?
                </p>
                <Link
                  href={`/courses/${relatedCourse.slug}`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                >
                  Check out {relatedCourse.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}

            {/* Author Box */}
            <div className="mt-12 bg-light-gray p-6 rounded-xl">
              <div className="flex items-start gap-4">
                {/* TODO: replace placeholder image */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">
                    {siteConfig.founder.name}
                  </h3>
                  <p className="text-primary text-sm mb-2">
                    {siteConfig.founder.title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {siteConfig.founder.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* End-of-article CTA */}
            {relatedCourse && (
              <div className="mt-8 bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white text-center">
                <p className="font-semibold mb-3">
                  Ready to take your skills to the next level?
                </p>
                <Link
                  href={`/courses/${relatedCourse.slug}`}
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Enroll in {relatedCourse.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Related Posts */}
              <div className="bg-light-gray p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal mb-4">
                  Related Posts
                </h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    ))}
                </div>
              </div>

              {/* Course CTA */}
              {relatedCourse && (
                <div className="bg-charcoal text-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Recommended Course</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {relatedCourse.shortDescription}
                  </p>
                  <Link
                    href={`/courses/${relatedCourse.slug}`}
                    className="block text-center bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                  >
                    View Course
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Back to Blog */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
