import { MessageCircle, Calendar } from "lucide-react";

export const metadata = {
  title: "Schedule a Call - SkillSpark",
  description:
    "Book a free consultation call with Abeer Nasir to discuss your learning goals.",
};

export default function ScheduleACallPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Schedule a Call
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Want to discuss your learning goals or get a personalized course
            recommendation? Book a free 15-minute consultation call.
          </p>
        </div>

        {/* Calendly Embed Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="aspect-video bg-light-gray rounded-lg flex flex-col items-center justify-center">
            <Calendar className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500 text-center">
              Calendly embed will appear here
              <br />
              <span className="text-sm">
                // TODO: Add your Calendly link
              </span>
            </p>
          </div>
        </div>

        {/* WhatsApp Alternative */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <p className="text-gray-700 mb-4">
            Prefer to chat on WhatsApp instead?
          </p>
          <a
            href="https://wa.me/923703159642?text=Hi,%20I'd%20like%20to%20schedule%20a%20call%20to%20discuss%20course%20options."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
