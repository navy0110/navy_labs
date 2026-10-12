import type { Metadata } from "next";

export const siteUrl = "https://navylabs.tech";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: "Navy Labs",
      title,
      description,
      url: `${siteUrl}${path}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Navy Labs — Estrategia, diseño y tecnología" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
