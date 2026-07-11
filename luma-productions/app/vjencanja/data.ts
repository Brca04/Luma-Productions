export type WeddingItem = {
  slug: string;
  name: string;
  category: string;
  coverImage: string;
  description?: string;
  gallery: { src: string; width?: number; height?: number; caption?: string }[];
};

export const weddingItems: WeddingItem[] = [
  {
    slug: "stjepan-lucija",
    name: "Stjepan & Lucija",
    category: "Zagreb",
    coverImage: "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-141.jpg",
    description:
      " vjenčanje u srcu Zagreba — dan pun emocija, smijeha i radosti.",
    gallery: [
      { src: "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-141.jpg", width: 1825, height: 2738 },
      { src: "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-153.jpg", width: 1825, height: 2738 },
      { src: "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-173.jpg", width: 1825, height: 2738 },
      { src: "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-184.jpg", width: 2738, height: 1825 },
      { src: "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-190.jpg", width: 2738, height: 1825 },
      { src: "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-276.jpg", width: 1825, height: 2738 },
      { src: "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-295.jpg", width: 1825, height: 2738 },
      { src: "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-348.jpg", width: 2738, height: 1825 },
    ],
  },
  {
    slug: "ivana-luka",
    name: "Ivana & Luka",
    category: "Dubrovnik",
    coverImage: "/prikaz2.webp",
    gallery: [
      { src: "/prikaz2.webp" },
      { src: "/prikaz.webp" },
      { src: "/prikaz3.webp" },
      { src: "/prikaz4.webp" },
    ],
  },
  {
    slug: "petra-filip",
    name: "Petra & Filip",
    category: "Istra",
    coverImage: "/prikaz3.webp",
    gallery: [
      { src: "/prikaz3.webp" },
      { src: "/prikaz2.webp" },
      { src: "/prikaz5.webp" },
    ],
  },
  {
    slug: "maja-tomislav",
    name: "Maja & Tomislav",
    category: "Split",
    coverImage: "/prikaz4.webp",
    gallery: [
      { src: "/prikaz4.webp" },
      { src: "/prikaz.webp" },
      { src: "/prikaz2.webp" },
    ],
  },
  {
    slug: "lara-matej",
    name: "Lara & Matej",
    category: "Hvar",
    coverImage: "/prikaz5.webp",
    gallery: [
      { src: "/prikaz5.webp" },
      { src: "/prikaz3.webp" },
      { src: "/prikaz.webp" },
    ],
  },
  {
    slug: "nika-ivan",
    name: "Nika & Ivan",
    category: "Rovinj",
    coverImage: "/prikaz.webp",
    gallery: [
      { src: "/prikaz.webp" },
      { src: "/prikaz4.webp" },
      { src: "/prikaz2.webp" },
    ],
  },
];

export function getWeddingBySlug(slug: string): WeddingItem | undefined {
  return weddingItems.find((w) => w.slug === slug);
}
