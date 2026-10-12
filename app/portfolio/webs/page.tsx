import { pageMetadata } from "../../seo";
import { PageSchema } from "../../structured-data";
import { PortfolioPage } from "../portfolio-page";
export const metadata = pageMetadata("Diseño de webs y landings de alta conversión — Navy Labs", "Conocé nuestros proyectos de páginas web y landings: diseño moderno, carga rápida y una experiencia pensada para convertir visitas en consultas.", "/portfolio/webs");
export default function Page() { return <><PageSchema title={metadata.title as string} description={metadata.description as string} path="/portfolio/webs"/><PortfolioPage type="webs"/></>; }
