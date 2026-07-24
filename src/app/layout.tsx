import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SkillSpark - Ignite Your Skills. Earn Online.",
  description:
    "Learn AI, Digital Marketing, Meta Ads & Shopify from a specialist who's done it for real e-commerce clients. Practical courses at Rs. 5,000 one-time.",
  keywords: [
    "AI courses Pakistan",
    "digital marketing course",
    "Meta Ads course",
    "Shopify course",
    "freelancing Pakistan",
    "generative AI course",
  ],
  openGraph: {
    title: "SkillSpark - Ignite Your Skills. Earn Online.",
    description:
      "Learn AI, Digital Marketing, Meta Ads & Shopify from a specialist who's done it for real e-commerce clients.",
    url: "https://skillspark.pk",
    siteName: "SkillSpark",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillSpark - Ignite Your Skills. Earn Online.",
    description:
      "Learn AI, Digital Marketing, Meta Ads & Shopify from a specialist who's done it for real e-commerce clients.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
