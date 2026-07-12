import SectionHero from "./SectionHero";

const heroImages = ["/heroPhotobooth/desktop/MaturalnaVe%C4%8Der_%20GGG%20-%20472.jpg"];
const heroImagesMobile = ["/heroPhotobooth/mobile/MaturalnaVe%C4%8Der_%20GGG%20-%20472.jpg"];

export default function KrstenjaHero() {
  return (
    <SectionHero
      eyebrow="Photobooth · Zagreb · Eventi"
      titleTop="Najam"
      titleBottom="Photobooth-a"
      description="Podignite atmosferu na višu razinu uz photobooth. Gosti stvaraju uspomene kroz smijeh i zabavu, a kući odlaze s personaliziranim fotografijama."
      images={heroImages}
      mobileImages={heroImagesMobile}
      imageAlt="Najam photobootha Zagreb"
    />
  );
}
