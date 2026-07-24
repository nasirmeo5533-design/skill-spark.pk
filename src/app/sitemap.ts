import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { blogPosts } from "@/data/blog";

const baseUrl = "https://skillspark.pk";

const staticRoutes: string[] = [
  "/",
  "/courses",
  "/about",
  "/contact",
  "/faq",
  "/blog",
  "/success-stories",
  "/schedule-a-call",
  "/privacy-policy",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));

  const courseEntries: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...courseEntries, ...blogEntries];
}
