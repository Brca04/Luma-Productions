import { Metadata } from "next";
import { notFound } from "next/navigation";

import PortfolioGallery from "@/components/PortfolioGallery";
import GalleryStructuredData from "@/components/GalleryStructuredData";
import { getMaturalneBySlug, maturalneItems } from "../data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return maturalneItems.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getMaturalneBySlug(slug);
  if (!item) return { title: "Maturalna večer" };
  const title = `${item.name} — Maturalna večer`;
  const desc =
    item.description ??
    `Galerija fotografija s maturalne večeri — ${item.name} (${item.category}).`;
  const url = `/maturalne-veceri/${slug}`;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: desc,
      images: [{ url: item.coverImage, alt: `${item.name} — maturalna večer` }],
    },
    twitter: { card: "summary_large_image", images: [item.coverImage] },
  };
}

export default async function MaturalneGalleryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getMaturalneBySlug(slug);
  if (!item) notFound();

  return (
    <>
    <GalleryStructuredData
      sectionLabel="Maturalne Večeri"
      sectionPath="/maturalne-veceri"
      name={item.name}
      slug={slug}
      images={item.gallery}
    />
    <PortfolioGallery
      title={item.name}
      category={item.category}
      description={item.description}
      images={item.gallery}
      backHref="/maturalne-veceri"
      backLabel="Sve maturalne večeri"
    />
    </>
  );
}
