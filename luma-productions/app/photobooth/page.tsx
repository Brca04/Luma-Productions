import { Metadata } from 'next';
import KrstenjaHero from '@/components/KrstenjaHero';
import PricingCard from '@/components/PricingCard';
import PhotoboothServices from '@/components/PhotoboothServices';

export const metadata: Metadata = {
  title: 'Najam Photobootha Zagreb – Cijena i Paketi | Photobooth za Evente',
  description:
    'Najam photobootha u Zagrebu za vjenčanja, maturalne večeri i evente. Paketi od 3 do 6 sati — pogledajte cijenu. Neograničeni ispisi, rekviziti i digitalna galerija. Rent a photobooth.',
  keywords: [
    'najam photobootha',
    'najam photobootha cijena',
    'najam photobootha Zagreb',
    'najam photobootha 5 sati',
    'photobooth Zagreb',
    'photobooth eventi',
    'rent a photobooth',
    'foto kutak',
  ],
  alternates: { canonical: '/photobooth' },
  openGraph: {
    url: '/photobooth',
    title: 'Najam Photobootha Zagreb – Cijena i Paketi',
    description:
      'Najam photobootha u Zagrebu za vjenčanja, maturalne večeri i evente. Neograničeni ispisi i digitalna galerija.',
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

const SITE_URL = 'https://www.luma-productions.net';

export default function Photobooth() {
  const pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      price: '300€',
      imageSrc: '/prikaz.webp',
      features: [
        '3 sata najma',
        'Neograničeni digitalni ispisi',
        'Osnovni set rekvizita',
        'Online galerija sa svim fotografijama',
        'Dostava i postavljanje',
      ],
    },
    {
      name: 'Standard',
      price: '400€',
      imageSrc: '/prikaz2.webp',
      highlighted: true,
      features: [
        '4 sata najma',
        'Neograničeni fizički ispisi',
        'Prošireni set rekvizita',
        'Izbor pozadine',
        'Online galerija sa svim fotografijama',
        'USB sa svim materijalima',
        'Dostava i postavljanje',
      ],
    },
    {
      name: 'Premium',
      price: '600€',
      imageSrc: '/prikaz3.webp',
      features: [
        '6 sati najma',
        'Neograničeni fizički ispisi',
        'Custom brendirani layout',
        'Custom pozadina ili backdrop',
        'Premium set rekvizita',
        'Instant upload na društvene mreže',
        'Online galerija i USB',
        'Dedicirani operater',
      ],
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/photobooth#service`,
        name: 'Najam photobootha',
        serviceType: 'Najam photobootha',
        description:
          'Najam photobootha u Zagrebu za vjenčanja, maturalne večeri i evente — neograničeni ispisi, rekviziti i digitalna galerija.',
        url: `${SITE_URL}/photobooth`,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'City', name: 'Zagreb' },
        offers: pricingPlans.map((p) => ({
          '@type': 'Offer',
          name: p.name,
          priceCurrency: 'EUR',
          price: p.price.replace(/[^0-9]/g, ''),
          description: p.features[0],
          url: `${SITE_URL}/photobooth`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KrstenjaHero />

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
                Najam photobootha u{' '}
                <span className="text-[#BE9E5C]">Zagrebu</span>
              </h2>
              <div className="w-12 h-px bg-[#BE9E5C] mt-6" />
            </div>

            {/* Right — paragraphs */}
            <div className="space-y-6 max-w-2xl lg:pt-2">
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Najam photobootha pretvara svaki event u interaktivno iskustvo. Od
                vjenčanja i maturalnih večeri do korporativnih lansiranja i privatnih
                slavlja — naš photobooth u Zagrebu donosi rekvizite, svjetla i instant
                ispise, a vaši gosti stvaraju uspomene koje odmah mogu ponijeti kući.
              </p>
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Svaki paket uključuje dostavu, postavljanje i operatera koji brine o
                tehnici dok vi uživate u slavlju. Pozadine, layout ispisa i rekvizite
                prilagođavamo temi vašeg eventa, a sve fotografije dobijate i u
                digitalnoj galeriji odmah nakon događaja.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PhotoboothServices />

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 mb-16">
          <div className="lg:max-w-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE9E5C] mb-4">
              Cjenik
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
              Paketi <span className="text-[#BE9E5C]">najma</span>
            </h2>
            <div className="w-12 h-px bg-[#BE9E5C] mt-6" />
          </div>

          <div className="max-w-2xl lg:pt-2">
            <p className="text-lg text-gray-600 leading-[1.8] font-light">
              Odaberite paket prema trajanju i vrsti eventa. Sve cijene uključuju
              dostavu, postavljanje i operatera. Dodatni sati i custom brending
              dostupni su na upit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </section>

    </div>
  );
}
