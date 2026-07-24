import { Star, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "Success Stories - SkillSpark",
  description:
    "See the real results our students have achieved with SkillSpark courses.",
};

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "E-commerce Owner, Lahore",
    content:
      "After taking the Meta Ads Mastery course, I implemented the strategies on my perfume brand. Generated 30 sales on just PKR 1,000 ad spend. The course content is directly from real campaigns, not theory.",
    result: "30 sales on PKR 1,000 budget",
    course: "Meta Ads Mastery",
  },
  {
    name: "Fatima Ali",
    role: "Freelancer, Karachi",
    content:
      "I landed my first AI automation client within a month of completing the course. The skills I learned are directly applicable to real projects. My client was impressed with the workflow I built.",
    result: "First client in 1 month",
    course: "AI Automation & AI Agents",
  },
  {
    name: "Hassan Malik",
    role: "Digital Marketer, Islamabad",
    content:
      "Unlike other courses that teach theory, SkillSpark shows you exactly how to execute. The case studies are gold. I've been able to improve my campaign performance significantly.",
    result: "40% improvement in campaign ROI",
    course: "Meta Ads Mastery",
  },
  {
    name: "Sara Ahmed",
    role: "Shopify Store Owner, Karachi",
    content:
      "My store conversions increased by 40% after applying the strategies from the Shopify course. The product page optimization techniques alone were worth the investment.",
    result: "40% increase in conversions",
    course: "Shopify Store Setup & Optimization",
  },
  {
    name: "Bilal Hassan",
    role: "Freelancer, Rawalpindi",
    content:
      "The Prompt Engineering course transformed how I work with AI. I'm now able to deliver better results in less time, which means I can take on more clients.",
    result: "2x productivity increase",
    course: "Prompt Engineering Masterclass",
  },
  {
    name: "Ayesha Noor",
    role: "Content Creator, Peshawar",
    content:
      "The AI Content Creation course helped me streamline my content production. I'm now creating weeks of content in hours, maintaining quality while scaling output.",
    result: "5x content production speed",
    course: "AI-Powered Content Creation",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Success Stories
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from real students. See how SkillSpark courses have
            helped people achieve their goals.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <Users className="h-8 w-8" />, value: "100+", label: "Students Enrolled" },
            { icon: <TrendingUp className="h-8 w-8" />, value: "95%", label: "Completion Rate" },
            { icon: <Star className="h-8 w-8" />, value: "4.8", label: "Average Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-light-gray p-6 rounded-xl text-center"
            >
              <div className="text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-charcoal mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              {/* Result Badge */}
              <div className="inline-block bg-success/10 text-success text-sm font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.result}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6">{testimonial.content}</p>

              {/* Course */}
              <div className="text-sm text-primary font-medium mb-4">
                Course: {testimonial.course}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* TODO: replace placeholder image */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">
            Ready to Write Your Success Story?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Browse Courses
            </a>
            <a
              href="https://wa.me/923703159642"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-charcoal hover:text-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
