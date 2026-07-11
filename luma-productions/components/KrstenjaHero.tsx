import SectionHero from "./SectionHero";

// TEMP: no dedicated photobooth hero image yet — using a maturalne event photo as placeholder.
const heroImages = ["/heroHompage/desktop/MaturalnaVe%C4%8Der_%20%C5%A0pogi%20-%20317.jpg"];
const heroImagesMobile = ["/heroPhotobooth/mobile/MaturalnaVe%C4%8Der_%20GGG%20-%20472.jpg"];

export default function KrstenjaHero() {
  return (
    <SectionHero
      eyebrow="Foto kutak · Photobooth"
      titleTop="Najam"
      titleBottom="Photobooth-a"
      description="Photobooth koji pretvara svaki event u interaktivno iskustvo. Neograničeni ispisi, rekviziti i digitalna galerija — gosti odlaze s uspomenom u ruci."
      images={heroImages}
      mobileImages={heroImagesMobile}
      imageAlt="Photobooth"
    />
  );
}
