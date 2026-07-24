"use client";

import { useState } from "react";
import { courses, getCategories } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...getCategories()];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Our Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical, results-driven courses taught by a specialist who
            actively works with real clients. All courses include live sessions,
            recorded videos, and lifetime access.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-light-gray text-charcoal hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredCourses.length} course
            {filteredCourses.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
