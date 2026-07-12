// app/maturalne-veceri/page.tsx

import { Metadata } from 'next';
import MaturalneCTA from '@/components/MaturalneCTA';
import MaturalneHero from '@/components/MaturalneHero';
import MaturalnePricing from '@/components/MaturalnePricing';
import MaturalneStats from '@/components/MaturalneStats';
import WeddingGalleryCarousel from '@/components/WeddingGalleryCarousel';
import { maturalneItems } from './data';

// Redoslijed prikaza galerija u fotogaleriji.
const GALLERY_ORDER = [
  'opca-privatna-gimnazija',
  'spogi',
  'gimnazija-sesvete',
  'geodetska-skola',
  'graditeljsko-tehnicka-skola',
  'marko-antun-de-dominis',
  'gimnazija-antuna-vrancica',
  'strukovna-skola-ruder-boskovic',
];

export const metadata: Metadata = {
  title: 'Fotografiranje Maturalne Večeri Zagreb – Maturalna Večer Fotograf',
  description:
    'Fotografiranje maturalne večeri u Zagrebu — profesionalni fotograf za maturalnu večer i maturalnu zabavu. Paketi za slikanje maturalne večeri i fotografiranje generacije. Pogledajte cijene i rezervirajte termin.',
  keywords: [
    'fotografiranje maturalne večeri',
    'fotografiranje maturalne večeri Zagreb',
    'maturalna večer fotograf',
    'fotograf za maturalnu večer',
    'fotografiranje maturalne zabave',
    'maturalna večer fotograf cijena',
    'paketi za slikanje maturalne večeri',
    'fotografiranje generacije',
    'maturalne večeri',
    'matura 2026',
  ],
  alternates: { canonical: '/maturalne-veceri' },
  openGraph: {
    title: 'Fotografiranje Maturalne Večeri Zagreb – Maturalna Večer Fotograf',
    description:
      'Profesionalni fotograf za maturalnu večer u Zagrebu. Paketi za slikanje maturalne večeri i fotografiranje cijele generacije.',
    url: '/maturalne-veceri',
  },
};

const SITE_URL = 'https://www.luma-productions.net';

export default function MaturalneVeceri() {
  const orderedItems = [...maturalneItems].sort((a, b) => {
    const ia = GALLERY_ORDER.indexOf(a.slug);
    const ib = GALLERY_ORDER.indexOf(b.slug);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  const maturalneCards = orderedItems.map((item, i) => ({
    id: i + 1,
    name: item.name,
    category: item.category,
    imageSrc: item.coverImage,
    href: `/maturalne-veceri/${item.slug}`,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/maturalne-veceri#service`,
        name: 'Fotografiranje maturalne večeri',
        serviceType: 'Fotografiranje maturalne večeri',
        description:
          'Profesionalno fotografiranje maturalne večeri i maturalne zabave — fotograf za maturalnu večer u Zagrebu.',
        url: `${SITE_URL}/maturalne-veceri`,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'City', name: 'Zagreb' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          price: '4',
          description: 'Foto paket — cijena po maturantu',
          url: `${SITE_URL}/maturalne-veceri`,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MaturalneHero />

      {/* Description Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20">
            {/* Left — kicker + heading */}
            <div className="lg:max-w-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE9E5C] mb-4">
                Naš pristup
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                Fotografiranje maturalne večeri u{" "}
                <span className="text-[#BE9E5C]">Zagrebu</span>
              </h2>
              <div className="w-12 h-px bg-[#BE9E5C] mt-6" />
            </div>

            {/* Right — paragraphs */}
            <div className="space-y-6 max-w-2xl lg:pt-2">
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Maturalna večer je više od obične zabave, to je kruna
                školovanja, noć smijeha, plesa i uspomena koje traju cijeli
                život. Svake godine s ponosom za Vas bilježimo te posebne
                trenutke i pretvaramo ih u fotografije koje ćete moći
                proživljavati zauvijek.
              </p>
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Tu smo da uhvatimo sve one iskrene osmijehe, zagrljaje te plesne
                pokrete koje ne želite zaboraviti. Od svečanog dolaska, plesa i
                druženja, pa sve do onih spontanih trenutaka koji najviše
                vrijede.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MaturalneStats />

      <WeddingGalleryCarousel cards={maturalneCards} />

      <MaturalnePricing />

      <MaturalneCTA />

    </div>
  );
}
