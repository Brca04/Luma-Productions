import { Metadata } from "next";
import FaqClient from "@/components/FaqClient";
import { FAQ_ITEMS } from "@/components/faqData";

export const metadata: Metadata = {
  title: "Česta pitanja | Luma Productions",
  description:
    "Odgovori na najčešća pitanja o fotografiranju maturalnih večeri, vjenčanja i krštenja te najmu photobootha — cijene, rezervacije, isporuka i akontacija.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "/faq",
    title: "Česta pitanja | Luma Productions",
    description:
      "Odgovori na najčešća pitanja o našim uslugama — cijene, rezervacije, isporuka i akontacija.",
  },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqClient />
    </>
  );
}
