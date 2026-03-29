import { Metadata } from 'next';
import KontaktClient from '@/components/KontaktClient';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktirajte Luma Productions za profesionalnu fotografiju i video produkciju. Dostupni smo za vjenčanja, maturalne večeri, krštenja i komercijalne projekte.',
  openGraph: {
    title: 'Kontakt | Luma Productions',
    description: 'Kontaktirajte Luma Productions za profesionalnu fotografiju i video produkciju.',
  },
};

export default function Kontakt() {
  return <KontaktClient />;
}
