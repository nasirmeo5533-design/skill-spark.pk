import Link from "next/link";
import Image from "next/image";
import { Clock, BarChart } from "lucide-react";
import { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Thumbnail with Image */}
      <div className="relative aspect-video overflow-hidden group">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Icon Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-md">
          {course.icon}
        </div>
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
