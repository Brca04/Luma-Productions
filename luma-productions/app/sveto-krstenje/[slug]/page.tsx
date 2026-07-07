import { Metadata } from "next";
import { notFound } from "next/navigation";

import PortfolioGallery from "@/components/PortfolioGallery";
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
  return {
    title: `${item.name} — Sveto krštenje`,
    description:
      item.description ??
      `Fotografija svetog krštenja — ${item.name} (${item.category}).`,
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
    <PortfolioGallery
      title={item.name}
      category={item.category}
      description={item.description}
      images={item.gallery}
      backHref="/sveto-krstenje"
      backLabel="Sva krštenja"
    />
  );
}
