import { Course } from "@/data/courses";
import { FAQ } from "@/data/faq";
import { BlogPost } from "@/data/blog";

const siteUrl = "https://skillspark.pk";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkillSpark",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      "SkillSpark offers practical online courses in Generative AI, Prompt Engineering, AI Automation, Meta Ads, Shopify, Digital Marketing, and Freelancing — built around real case studies and results.",
    email: "abeerinfo5566@gmail.com",
    telephone: "+923703159642",
    founder: {
      "@type": "Person",
      name: "Abeer Nasir",
      url: "https://www.linkedin.com/in/abeer-nasir-3052b628a/",
      jobTitle: "Founder",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    sameAs: ["https://www.linkedin.com/in/abeer-nasir-3052b628a/"],
  };
}

export function generateCourseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.fullDescription,
    provider: {
      "@type": "Organization",
      name: "SkillSpark",
      url: siteUrl,
    },
    url: `${siteUrl}/courses/${course.slug}`,
    courseCode: course.slug,
    educationalLevel: course.level,
    timeRequired: course.duration,
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/courses/${course.slug}`,
    },
    instructor: {
      "@type": "Person",
      name: course.instructor,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.format,
      courseWorkload: course.duration,
    },
    about: {
      "@type": "Thing",
      name: course.category,
    },
    teaches: course.learningOutcomes,
  };
}

export function generateFAQPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Abeer Nasir",
    },
    publisher: {
      "@type": "Organization",
      name: "SkillSpark",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
    datePublished: post.date,
    url: `${siteUrl}/blog/${post.slug}`,
    keywords: post.targetKeyword,
    articleSection: post.category,
  };
}
