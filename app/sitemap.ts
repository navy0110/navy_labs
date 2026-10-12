import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/portfolio/webs",
    "/portfolio/seo",
    "/portfolio/automatizaciones",
    "/portfolio/apps",
    "/portfolio/datos",
    "/privacidad",
    "/terminos",
  ];

  return routes.map((route) => ({
    url: `https://navylabs.tech${route}`,
  }));
}
