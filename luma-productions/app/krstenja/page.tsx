import { Metadata } from 'next';
import SvetoKrstenjeHero from '@/components/SvetoKrstenjeHero';
import PricingCard from '@/components/PricingCard';
import WeddingGalleryCarousel from '@/components/WeddingGalleryCarousel';
import MaturalneCTA from '@/components/MaturalneCTA';
import { krstenjeItems } from './data';

export const metadata: Metadata = {
  title: 'Fotograf za Krštenje Zagreb – Fotografiranje Svetog Krštenja',
  description:
    'Profesionalno fotografiranje svetog krštenja u Zagrebu — obred u crkvi, obiteljski portreti i slavlje. Fotograf za krštenje, diskretan pristup i vrhunska kvaliteta.',
  keywords: ['fotografiranje krštenja', 'fotograf za krštenje', 'fotograf za krštenje Zagreb', 'sveto krštenje', 'fotografija krštenja', 'obiteljska fotografija'],
  alternates: { canonical: '/krstenja' },
  openGraph: {
    url: '/krstenja',
    title: 'Fotograf za Krštenje Zagreb – Fotografiranje Svetog Krštenja',
    description:
      'Profesionalna fotografija svetog krštenja — obred u crkvi, obiteljski portreti i slavlje.',
  },
};

type PricingPlan = {
  name: string;
  price: string;
  imageSrc: string;
  imageAlt?: string;
  features: string[];
  highlighted?: boolean;
};

export default function SvetoKrstenje() {
  // TODO: zamijeniti placeholder cijene stvarnim cijenama.
  const pricingPlans: PricingPlan[] = [
    {
      name: 'Luma #1',
      price: '150€',
      imageSrc: '/krstenje.webp',
      features: [
        'Pokrivenost obreda u crkvi',
        'Do 150 digitalno obrađenih fotografija',
        'Online galerija',
        'Isporuka unutar 3 dana',
      ],
    },
    {
      name: 'Luma #2',
      price: '200€',
      imageSrc: '/prikaz.webp',
      highlighted: true,
      features: [
        'Obred u crkvi i slavlje',
        'Obiteljski portreti',
        'Do 300 digitalno obrađenih fotografija',
        'Online galerija i USB',
        'Isporuka unutar 3 dana',
      ],
    },
    {
      name: 'Luma #3',
      price: '250€',
      imageSrc: '/prikaz2.webp',
      features: [
        'Cjelodnevna pokrivenost',
        'Obiteljski portreti i reportaža',
        'Do 500 digitalno obrađenih fotografija',
        'Tiskani foto album',
        'Online galerija i USB',
        'Isporuka unutar 3 dana',
      ],
    },
  ];

  const krstenjeCards = krstenjeItems.map((item, i) => ({
    id: i + 1,
    name: item.name,
    category: item.category,
    imageSrc: item.coverImage,
    href: `/krstenja/${item.slug}`,
  }));

  return (
    <div className="min-h-screen">
      <SvetoKrstenjeHero />

      {/* Description Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20">
            <div className="lg:max-w-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE9E5C] mb-4">
                Naš pristup
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                Sveti trenutak,{' '}
                <span className="text-[#BE9E5C]">zauvijek sačuvan</span>
              </h2>
              <div className="w-12 h-px bg-[#BE9E5C] mt-6" />
            </div>

            <div className="space-y-6 max-w-2xl lg:pt-2">
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Krštenje je jedan od najvažnijih dana u životu vašeg djeteta i
                obitelji. Fotografiramo diskretno i s poštovanjem prema obredu,
                od dolaska u crkvu i svetog čina do zagrljaja i suza radosnica
                koje slijede.
              </p>
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Uz obred, snimamo i obiteljske portrete te opuštene reportažne
                trenutke sa slavlja. Sve fotografije pažljivo obrađujemo i
                dostavljamo u digitalnoj galeriji, a po želji i u tiskanom
                albumu koji ostaje trajna uspomena.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WeddingGalleryCarousel cards={krstenjeCards} />

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 mb-16">
          <div className="lg:max-w-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE9E5C] mb-4">
              Cjenik
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
              Paketi <span className="text-[#BE9E5C]">krštenja</span>
            </h2>
            <div className="w-12 h-px bg-[#BE9E5C] mt-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </section>

      <MaturalneCTA
        eyebrow="Vaš sveti trenutak"
        heading="Kontaktirajte nas"
        subtitle="Javite nam datum krštenja i osigurajte svoj termin na vrijeme."
      />
    </div>
  );
}
