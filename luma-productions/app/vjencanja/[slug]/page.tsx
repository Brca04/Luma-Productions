import { Metadata } from "next";
import { notFound } from "next/navigation";

import PortfolioGallery from "@/components/PortfolioGallery";
import GalleryStructuredData from "@/components/GalleryStructuredData";
import { getWeddingBySlug, weddingItems } from "../data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return weddingItems.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWeddingBySlug(slug);
  if (!item) return { title: "Vjenčanje" };
  const title = `${item.name} — Vjenčanje`;
  const desc =
    item.description ??
    `Galerija fotografija s vjenčanja ${item.name} (${item.category}).`;
  const url = `/vjencanja/${slug}`;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: desc,
      images: [{ url: item.coverImage, alt: `${item.name} — vjenčanje` }],
    },
    twitter: { card: "summary_large_image", images: [item.coverImage] },
  };
}

export default async function WeddingGalleryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getWeddingBySlug(slug);
  if (!item) notFound();

  return (
    <>
    <GalleryStructuredData
      sectionLabel="Vjenčanja"
      sectionPath="/vjencanja"
      name={item.name}
      slug={slug}
      images={item.gallery}
    />
    <PortfolioGallery
      title={item.name}
      category={item.category}
      description={item.description}
      images={item.gallery}
      backHref="/vjencanja"
      backLabel="Sva vjenčanja"
      altKeyword="vjenčanje"
    />
    </>
  );
}
