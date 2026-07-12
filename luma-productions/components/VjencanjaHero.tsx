import SectionHero from "./SectionHero";

const heroImages = ["/heroVjencanja/desktop/Lucija%26Ante%20-%20188.jpg"];
// Portrait crops for phones (heroVjencanja/mobile).
const heroImagesMobile = [
  "/heroVjencanja/mobile/Lucija%26Ante%20-%20182.jpg",
  "/heroVjencanja/mobile/Lucija%26Ante%20-%20184.jpg",
];

export default function VjencanjaHero() {
  return (
    <SectionHero
      eyebrow="Fotografija, video, reels"
      titleTop="Vjenčanja"
      titleBottom=""
      description="Sačuvajte najvažniji dan života kroz fotografije koji postaju vječna uspomena."
      images={heroImages}
      mobileImages={heroImagesMobile}
      imageAlt="Vjenčanje"
    />
  );
}
