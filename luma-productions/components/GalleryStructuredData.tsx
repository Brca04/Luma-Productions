const SITE_URL = "https://www.luma-productions.net";

type GalleryImage = { src: string };

type Props = {
  sectionLabel: string;
  sectionPath: string; // e.g. "/vjencanja"
  name: string;
  slug: string;
  images: GalleryImage[];
};

export default function GalleryStructuredData({
  sectionLabel,
  sectionPath,
  name,
  slug,
  images,
}: Props) {
  const pageUrl = `${SITE_URL}${sectionPath}/${slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: sectionLabel,
        item: `${SITE_URL}${sectionPath}`,
      },
      { "@type": "ListItem", position: 3, name, item: pageUrl },
    ],
  };

  const gallery = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    url: pageUrl,
    image: images.slice(0, 25).map((i) => `${SITE_URL}${i.src}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallery) }}
      />
    </>
  );
}
