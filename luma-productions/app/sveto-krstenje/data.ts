export type KrstenjeItem = {
  slug: string;
  name: string;
  category: string;
  coverImage: string;
  description?: string;
  gallery: { src: string; caption?: string }[];
};

export const krstenjeItems: KrstenjeItem[] = [
  {
    slug: "krstenje-lucija",
    name: "Krštenje Lucija",
    category: "Sveto krštenje",
    coverImage: "/krstenje.webp",
    description:
      "Obiteljsko slavlje uz obred krštenja — od crkve do zajedničkog stola.",
    gallery: [
      { src: "/krstenje.webp", caption: "Obred u crkvi" },
      { src: "/prikaz.webp", caption: "Obiteljski portret" },
      { src: "/prikaz2.webp", caption: "Slavlje" },
      { src: "/prikaz3.webp", caption: "Detalji" },
    ],
  },
  {
    slug: "krstenje-david",
    name: "Krštenje David",
    category: "Sveto krštenje",
    coverImage: "/prikaz.webp",
    description:
      "Svečan obred u krugu najbližih, ovjekovječen diskretnom reportažom.",
    gallery: [
      { src: "/prikaz.webp" },
      { src: "/prikaz2.webp" },
      { src: "/prikaz3.webp" },
    ],
  },
  {
    slug: "krstenje-mia",
    name: "Krštenje Mia",
    category: "Sveto krštenje",
    coverImage: "/prikaz2.webp",
    description:
      "Nježni trenuci prvog velikog dana — kum, kuma i cijela obitelj.",
    gallery: [
      { src: "/prikaz2.webp" },
      { src: "/prikaz3.webp" },
      { src: "/prikaz4.webp" },
    ],
  },
  {
    slug: "krstenje-marta",
    name: "Krštenje Marta",
    category: "Sveto krštenje",
    coverImage: "/prikaz3.webp",
    gallery: [
      { src: "/prikaz3.webp" },
      { src: "/prikaz4.webp" },
      { src: "/prikaz5.webp" },
    ],
  },
];

export function getKrstenjeBySlug(slug: string): KrstenjeItem | undefined {
  return krstenjeItems.find((p) => p.slug === slug);
}
