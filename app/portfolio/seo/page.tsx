import { pageMetadata } from "../../seo";
import { PageSchema } from "../../structured-data";
import { PortfolioPage } from "../portfolio-page";
export const metadata = pageMetadata("SEO, Performance en Google Ads y Meta Ads: proyectos — Navy Labs", "Conocé nuestra experiencia en SEO técnico, contenidos, Google Ads, Meta Ads, Linkedin Ads. Estrategias para atraer tráfico calificado y medir consultas y conversiones.", "/portfolio/seo");
export default function Page() { return <><PageSchema title={metadata.title as string} description={metadata.description as string} path="/portfolio/seo"/><PortfolioPage type="seo"/></>; }
