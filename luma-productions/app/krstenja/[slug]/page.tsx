import { Metadata } from "next";
import { notFound } from "next/navigation";

import PortfolioGallery from "@/components/PortfolioGallery";
import GalleryStructuredData from "@/components/GalleryStructuredData";
import { getPhotoboothBySlug, photoboothItems } from "../data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return photoboothItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPhotoboothBySlug(slug);
  if (!item) return { title: "Photobooth" };
  const title = `${item.name} — Photobooth`;
  const desc =
    item.description ??
    `Photobooth najam — ${item.name} (${item.category}).`;
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
      images: [{ url: item.coverImage, alt: `${item.name} — photobooth` }],
    },
    twitter: { card: "summary_large_image", images: [item.coverImage] },
  };
}

export default async function PhotoboothGalleryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getPhotoboothBySlug(slug);
  if (!item) notFound();

  return (
    <>
    <GalleryStructuredData
      sectionLabel="Photobooth"
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
      backLabel="Svi eventi"
    />
    </>
  );
}
