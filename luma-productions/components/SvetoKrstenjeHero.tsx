import SectionHero from "./SectionHero";

const heroImages = [
  "/krstenje.webp",
  "/prikaz.webp",
  "/prikaz2.webp",
  "/prikaz3.webp",
];

export default function SvetoKrstenjeHero() {
  return (
    <SectionHero
      titleTop="Sveto"
      titleBottom="Krštenje"
      description="Nježna i diskretna fotografija svetog krštenja — od dolaska u crkvu i obreda do slavlja s obitelji. Čuvamo svaki sveti trenutak vašeg djeteta."
      images={heroImages}
      imageAlt="Sveto krštenje"
    />
  );
}
