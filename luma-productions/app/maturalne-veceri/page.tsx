// app/maturalne-veceri/page.tsx

import { Metadata } from 'next';
import MaturalneCTA from '@/components/MaturalneCTA';
import MaturalneHero from '@/components/MaturalneHero';
import MaturalnePricing from '@/components/MaturalnePricing';
import WeddingGalleryCarousel from '@/components/WeddingGalleryCarousel';
import { maturalneItems } from './data';

export const metadata: Metadata = {
  title: 'Fotografija Maturalne Večeri',
  description:
    'Profesionalna fotografija maturalne večeri. Uhvatite najljepše trenutke slavlja. Pristupačni paketi i vrhunska kvaliteta.',
  keywords: ['maturalne večeri', 'fotografija', 'matura', 'maturalna zabava', 'foto studio'],
  alternates: { canonical: '/maturalne-veceri' },
  openGraph: {
    title: 'Fotografija Maturalne Večeri | Foto Studio',
    description: 'Profesionalna fotografija maturalne večeri. Uhvatite najljepše trenutke slavlja.',
    url: '/maturalne-veceri',
  },
};

export default function MaturalneVeceri() {
  const maturalneCards = maturalneItems.map((item, i) => ({
    id: i + 1,
    name: item.name,
    category: item.category,
    imageSrc: item.coverImage,
    href: `/maturalne-veceri/${item.slug}`,
  }));

  return (
    <div className="min-h-screen bg-white text-black">

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
                Jedna noć,{" "}
                <span className="text-[#BE9E5C]">milijun uspomena</span>
              </h2>
              <div className="w-12 h-px bg-[#BE9E5C] mt-6" />
            </div>

            {/* Right — paragraphs */}
            <div className="space-y-6 max-w-2xl lg:pt-2">
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Matura je kraj jednog poglavlja i početak novog — noć prepuna
                emocija, prijatelja i trenutaka koje ćete pamtiti zauvijek. Naša
                zadaća je uhvatiti svaki taj detalj: od pripreme i dolaska,
                preko prvog plesa, do zadnjih zagrljaja pred zoru.
              </p>
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Radimo diskretno, bez ometanja, a opet smo tu za svaki važan
                kadar. Kombiniramo klasične grupne fotografije s autentičnim
                reportažnim pristupom — dobit ćete i formalne portrete i
                spontane trenutke koji najbolje pričaju priču vaše večeri.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WeddingGalleryCarousel cards={maturalneCards} />

      <MaturalnePricing />

      <MaturalneCTA />

    </div>
  );
}
