import { Metadata } from 'next';
import VjencanjaPricing from '@/components/VjencanjaPricing';
import VjencanjaHero from '@/components/VjencanjaHero';
import MaturalneCTA from '@/components/MaturalneCTA';

export const metadata: Metadata = {
  title: 'Fotograf za Vjenčanje Zagreb – Fotografiranje Vjenčanja',
  description: 'Profesionalno fotografiranje vjenčanja u Zagrebu. Fotograf za vjenčanje koji čuva najljepše trenutke vašeg velikog dana — iskustvo, kreativnost i strast u svakom kadru.',
  keywords: ['fotografiranje vjenčanja', 'fotograf za vjenčanje', 'fotograf za vjenčanje Zagreb', 'svadbena fotografija', 'fotografija vjenčanja', 'vjenčanje Zagreb'],
  alternates: { canonical: '/vjencanja' },
  openGraph: {
    title: 'Fotograf za Vjenčanje Zagreb – Fotografiranje Vjenčanja',
    description: 'Profesionalna fotografija vjenčanja. Sačuvajte najljepše trenutke vašeg velikog dana.',
    url: '/vjencanja',
  },
};

export default function Vjencanja() {
  return (
    <div className="min-h-screen">
      <VjencanjaHero />

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
                Svaki trenutak{" "}
                <span className="text-[#BE9E5C]">zaslužuje priču</span>
              </h2>
              <div className="w-12 h-px bg-[#BE9E5C] mt-6" />
            </div>

            {/* Right — paragraphs */}
            <div className="space-y-6 max-w-2xl lg:pt-2">
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Vjenčanje je najvažniji dan u vašem životu, i naša misija je
                uhvatiti svaki poseban trenutak - od prvih suza radosnica do
                posljedneg plesa. S godinama iskustva i strašću za pričanjem
                priča, stvaramo fotografije koje će vam dozvoliti da ponovno
                doživite emocije vašeg velikog dana.
              </p>
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Naš pristup kombinira diskretnost s kreativnošću, dopuštajući
                vam da uživate u svakom trenutku dok mi hvatamo autentične
                trenutke ljubavi, smijeha i radosti. Od intimate portreta do
                velikih grupnih fotografija, pokrivamo svaki aspekt vašeg
                slavlja.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VjencanjaPricing />

      <MaturalneCTA
        eyebrow="Zaslužujete uspomene koje traju vječno."
        subtitle="Slobodnih termina je sve manje — osigurajte svoj datum na vrijeme."
      />

    </div>
  );
}
