// app/maturalne-veceri/page.tsx

import { Metadata } from 'next';
import PricingCard from '@/components/PricingCard';
import ImageSlider from '@/components/ImageSlider';
import MaturalneTitleSection from '@/components/MaturalneTitleSection';
import AnimatedSectionHeading from '@/components/AnimatedSectionHeading';
import MaturalneCTA from '@/components/MaturalneCTA';

export const metadata: Metadata = {
  title: 'Fotografija Maturalne Večeri',
  description:
    'Profesionalna fotografija maturalne večeri. Uhvatite najljepše trenutke slavlja. Pristupačni paketi i vrhunska kvaliteta.',
  keywords: ['maturalne večeri', 'fotografija', 'matura', 'maturalna zabava', 'foto studio'],
  openGraph: {
    title: 'Fotografija Maturalne Večeri | Foto Studio',
    description: 'Profesionalna fotografija maturalne večeri. Uhvatite najljepše trenutke slavlja.',
  },
};

export type PricingPlan = {
  name: string;
  price: string;
  imageSrc: string;
  imageAlt?: string;
  features: string[];
  highlighted?: boolean;
};

export default function MaturalneVeceri() {
  const pricingPlans: PricingPlan[] = [
    {
      name: 'Foto #1',
      price: '8€/maturant',
      imageSrc: '/prikaz.webp',
      features: [
        'Do 30 maturanata',
        '1 fotograf',
        '200 digitalno obrađenih fotografija',
        'Isporuka materijala do 3 dana',
      ],
    },
    {
      name: 'Foto #2',
      price: '5€/maturant',
      imageSrc: '/prikaz2.webp',
      features: [
        '30+ maturanata',
        '2 fotografa',
        '300+ digitalno obrađenih fotografija',
        'Isporuka materijala do 4 dana',
      ],
    },
    {
      name: 'Video #1',
      price: '7€/maturant',
      imageSrc: '/prikaz.webp',
      features: [
        '1 snimatelj',
        'Highlight video do 180 sekundi',
        'Isporuka materijala kroz 4 dana',
      ],
    },
    {
      name: 'Video #2',
      price: '7€/maturant',
      imageSrc: '/prikaz2.webp',
      features: [
        '60+ maturanata',
        '2 snimatelja',
        'Video cijele večeri u trajanju do 60 minuta',
        'Isporuka materijala kroz 4 dana',
      ],
    },
    {
      name: 'Mix #1',
      price: '13€/maturant',
      imageSrc: '/prikaz.webp',
      features: [
        'Do 100 maturanata',
        '1 fotograf',
        '2 snimatelja',
        'Do 400 digitalno obrađenih fotografija',
        'Video cijele večeri u trajanju do 60 minuta',
        'Isporuka materijala unutar 5 dana',
      ],
    },
    {
      name: 'Mix #2',
      price: '10€/maturant',
      imageSrc: '/prikaz2.webp',
      features: [
        '100+ maturanata',
        '2 fotografa',
        '2 snimatelja',
        '800 digitalno obrađenih fotografija',
        'Video cijele večeri u trajanju do 60 minuta',
        'Isporuka materijala unutar 7 dana',
      ],
    },
  ];

  const galleryImages = [
    { id: 1, alt: 'Maturalna večer 1', src: '/prikaz.webp' },
    { id: 2, alt: 'Maturalna večer 2', src: '/prikaz2.webp' },
    { id: 3, alt: 'Maturalna večer 3', src: '/prikaz3.webp' },
    { id: 4, alt: 'Maturalna večer 4', src: '/prikaz4.webp' },
    { id: 5, alt: 'Maturalna večer 5', src: '/prikaz5.webp' },
    { id: 6, alt: 'Maturalna večer 6', src: '/prikaz2.webp' },
    { id: 7, alt: 'Maturalna večer 7', src: '/prikaz2.webp' },
    { id: 8, alt: 'Maturalna večer 8', src: '/prikaz2.webp' },
    { id: 9, alt: 'Maturalna večer 9', src: '/prikaz2.webp' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Hero ── */}
      <section className="relative h-[100dvh] overflow-hidden">

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');

          @keyframes pRise {
            from { opacity:0; transform: translateY(60px) skewY(3deg); }
            to   { opacity:1; transform: translateY(0) skewY(0deg); }
          }
          @keyframes pFade {
            from { opacity:0; transform: translateY(16px); }
            to   { opacity:1; transform: translateY(0); }
          }
          @keyframes scrollDrop {
            0%,100% { transform: translateY(0); opacity:1; }
            50%     { transform: translateY(8px); opacity:0.3; }
          }
          .p-tag {
            font-family: 'DM Sans', sans-serif;
            font-size: 0.7rem;
            font-weight: 400;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: #BE9E5C;
            opacity: 0;
            animation: pFade 0.6s ease 0.3s forwards;
          }
          .p-word {
            font-family: 'Bebas Neue', 'Impact', sans-serif;
            font-size: clamp(5rem, 13vw, 11rem);
            line-height: 0.88;
            color: #fff;
            display: block;
            letter-spacing: 0.01em;
          }
          .p-word-1 {
            opacity: 0;
            animation: pRise 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s forwards;
          }
          .p-word-2 {
            opacity: 0;
            animation: pRise 0.8s cubic-bezier(0.16,1,0.3,1) 0.75s forwards;
            color: #BE9E5C;
          }
          .p-desc {
            font-family: 'DM Sans', sans-serif;
            font-size: 0.9rem;
            color: rgba(255,255,255,0.45);
            line-height: 1.9;
            font-weight: 300;
            letter-spacing: 0.01em;
            opacity: 0;
            animation: pFade 0.8s ease 1.3s forwards;
          }
          .p-scroll {
            position: absolute;
            bottom: max(2.5rem, env(safe-area-inset-bottom, 0px) + 1.5rem);
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            opacity: 0;
            animation: pFade 0.8s ease 1.8s forwards;
            z-index: 10;
          }
          .p-scroll-label {
            font-family: 'DM Sans', sans-serif;
            font-size: 0.6rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.3);
          }
          .p-scroll-dot {
            width: 4px; height: 4px; border-radius: 50%;
            background: #BE9E5C;
            animation: scrollDrop 1.6s ease-in-out 2s infinite;
          }
        `}</style>

        <video
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        >
          <source src="/videoMaturalne.mp4" type="video/mp4" />
        </video>

<div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', pointerEvents: 'none' }} />

        {/* Fade-to-black gradient at bottom of hero */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          background: 'linear-gradient(to bottom, transparent, #000)',
          pointerEvents: 'none',
          zIndex: 5,
        }} />

      </section>

      <MaturalneTitleSection />

      {/* ── Gallery ── */}
      <section id="galerija" className="bg-black h-screen flex flex-col">
        <div className="px-4 sm:px-6 pt-10 pb-6 text-center flex-shrink-0">
          <AnimatedSectionHeading label="Naši radovi" title="Galerija" />
        </div>
        <div className="flex-1 min-h-0">
          <ImageSlider images={galleryImages} />
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <AnimatedSectionHeading label="Odaberite paket" title="Naši Paketi" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <MaturalneCTA />

    </div>
  );
}