import SectionHero from "./SectionHero";

const heroImages = ["/heroHompage/desktop/SvetoKr%C5%A1tenje%C5%A0imun_%20-%203.jpg"];
// Portrait crop for phones (heroKrstenja/mobile).
const heroImagesMobile = ["/heroKrstenja/mobile/SvetoKr%C5%A1tenje%C5%A0imun_%20-%2037.jpg"];

export default function SvetoKrstenjeHero() {
  return (
    <SectionHero
      eyebrow="Fotografija · Sveto krštenje"
      titleTop="Sveto"
      titleBottom="Krštenje"
      description="Nježna i diskretna fotografija svetog krštenja — od dolaska u crkvu i obreda do slavlja s obitelji. Čuvamo svaki sveti trenutak vašeg djeteta."
      images={heroImages}
      mobileImages={heroImagesMobile}
      imageAlt="Sveto krštenje"
    />
  );
}
