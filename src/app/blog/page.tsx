import Link from "next/link";
import Image from "next/image";
import { Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog - SkillSpark",
  description:
    "Read our latest articles on AI, digital marketing, Meta Ads, Shopify, and freelancing in Pakistan.",
};

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical insights on AI, digital marketing, and freelancing from a
            specialist who actively works with real clients.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                {/* Category & Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-charcoal mb-3 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Date & Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary font-medium text-sm hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
