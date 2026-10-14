import { siteUrl } from "./seo";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function OrganizationSchema() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Navy Labs",
        logo: { "@type": "ImageObject", url: `${siteUrl}/brand/navy-labs-icon.svg` },
        url: `${siteUrl}/`,
        description: "Estrategia, diseño y tecnología con foco en ventas.",
        email: "hola@navylabs.tech",
        telephone: "+5491168905153",
        contactPoint: { "@type": "ContactPoint", contactType: "Consultas comerciales", email: "hola@navylabs.tech", telephone: "+5491168905153", availableLanguage: "Spanish" },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Navy Labs",
        inLanguage: "es-AR",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  }} />;
}

export function PageSchema({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${siteUrl}${path}`;
  const page = {
    "@type": path.startsWith("/portfolio/") ? "CollectionPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "es-AR",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    ...(path !== "/" ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  };
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [page, ...(path === "/" ? [] : [{
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Navy Labs", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: title, item: url },
      ],
    }])],
  }} />;
}
