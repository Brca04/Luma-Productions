import SectionHero from "./SectionHero";

const heroImages = [
  "/heroVjencanja/desktop/Lucija%26Ante%20-%20188.jpg",
  "/heroVjencanja/desktop/Stjepan%20%26%20Lucija%20-%20422.jpg",
];

export default function VjencanjaHero() {
  return (
    <SectionHero
      eyebrow="Fotografija & Video · Vjenčanja"
      titleTop="Vjenčanja"
      titleBottom=""
      description="Sačuvajte najvažniji dan života kroz kadar koji traje zauvijek. Elegantna, emotivna i autentična fotografija vašeg velikog dana."
      images={heroImages}
      imageAlt="Vjenčanje"
    />
  );
}
