"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all animate-pulse-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
