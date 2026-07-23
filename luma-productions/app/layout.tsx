import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ReserveButton from "@/components/ReserveButton";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

const SITE_URL = "https://www.luma-productions.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Luma Productions - Profesionalna Fotografija | Vjenčanja, Maturalne Večeri, Krštenja",
    template: "%s | Luma Productions",
  },
  description:
    "Profesionalna fotografija za vjenčanja, maturalne večeri i krštenja. Vrhunska kvaliteta i pristupačne cijene.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/luma-productions-logo-225x300.webp",
    apple: "/luma-productions-logo-225x300.webp",
  },
  keywords: [
    "fotografija",
    "vjenčanja",
    "maturalne večeri",
    "krštenja",
    "sveto krštenje",
    "foto studio",
    "profesionalni fotograf",
  ],
  authors: [{ name: "Luma Productions" }],
  creator: "Luma Productions",
  publisher: "Luma Productions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: SITE_URL,
    siteName: "Luma Productions",
    title: "Luma Productions - Profesionalna Fotografija",
    description:
      "Profesionalna fotografija za vjenčanja, maturalne večeri i krštenja.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luma Productions - Profesionalna Fotografija",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luma Productions - Profesionalna Fotografija",
    description:
      "Profesionalna fotografija za vjenčanja, maturalne večeri i krštenja.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    name: "Luma Productions",
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/luma-productions-logo-225x300.webp`,
    url: SITE_URL,
    email: "info@luma-productions.net",
    telephone: "+385976172191",
    priceRange: "€€",
    description:
      "Profesionalna fotografija za vjenčanja, maturalne večeri i krštenja.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zagreb",
      addressCountry: "HR",
    },
    areaServed: [
      { "@type": "City", name: "Zagreb" },
      { "@type": "Country", name: "Hrvatska" },
    ],
    knowsAbout: [
      "Fotografija vjenčanja",
      "Fotografija maturalnih večeri",
      "Fotografija krštenja",
      "Photobooth najam",
    ],
    sameAs: ["https://www.instagram.com/lumaproductions__/"],
  };

  return (
    <html lang="hr">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToTop />

        <Navbar />

        <ReserveButton />

        <main className="">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
