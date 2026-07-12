import { Metadata } from "next";
import { notFound } from "next/navigation";

import PortfolioGallery from "@/components/PortfolioGallery";
import GalleryStructuredData from "@/components/GalleryStructuredData";
import { getKrstenjeBySlug, krstenjeItems } from "../data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return krstenjeItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getKrstenjeBySlug(slug);
  if (!item) return { title: "Sveto krštenje" };
  const title = `${item.name} — Sveto krštenje`;
  const desc =
    item.description ??
    `Fotografija svetog krštenja — ${item.name} (${item.category}).`;
  const url = `/krstenja/${slug}`;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: desc,
      images: [{ url: item.coverImage, alt: `${item.name} — sveto krštenje` }],
    },
    twitter: { card: "summary_large_image", images: [item.coverImage] },
  };
}

export default async function KrstenjeGalleryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getKrstenjeBySlug(slug);
  if (!item) notFound();

  return (
    <>
    <GalleryStructuredData
      sectionLabel="Sveto Krštenje"
      sectionPath="/krstenja"
      name={item.name}
      slug={slug}
      images={item.gallery}
    />
    <PortfolioGallery
      title={item.name}
      category={item.category}
      description={item.description}
      images={item.gallery}
      backHref="/krstenja"
      backLabel="Sva krštenja"
    />
    </>
  );
}
