import Link from "next/link";
import { Clock, BarChart } from "lucide-react";
import { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Thumbnail Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        {/* TODO: replace placeholder image */}
        <span className="text-4xl">📚</span>
      </div>

      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
          {course.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BarChart className="h-4 w-4" />
            {course.level}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">
            Rs. {course.price.toLocaleString()}
          </span>
          {course.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              Rs. {course.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-xs text-gray-500">— One-Time</span>
        </div>

        {/* CTA Button */}
        <Link
          href={`/courses/${course.slug}`}
          className="block w-full bg-charcoal text-white text-center py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}
