import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { portfolios, seoCapabilities } from "./data";
import styles from "../navy.module.css";
import gallery from "./portfolio.module.css";

export function PortfolioPage({ type }: { type: keyof typeof portfolios }) {
  const portfolio = portfolios[type];
  return <div className={styles.site}>
    <a className={styles.skip} href="#proyectos">Saltar a los proyectos</a>
    <header className={styles.header}>
      <Link href="/" aria-label="Navy Labs, inicio"><span className={styles.brand}>navy<span className={styles.brandMark}>↗</span><span className={styles.brandLabs}>labs</span></span></Link>
      <nav aria-label="Navegación principal"><Link href="/portfolio/webs" aria-current={type === "webs" ? "page" : undefined}>Webs y landings</Link><Link href="/portfolio/seo" aria-current={type === "seo" ? "page" : undefined}>SEO & Ads</Link></nav>
      <Link href="/#contacto" className={styles.headerCta}>Hablemos de tu proyecto <ArrowUpRight size={16}/></Link>
    </header>
    <main className={gallery.main}>
      <Link href="/#servicios" className={gallery.back}><ArrowLeft size={15}/> Volver a servicios</Link>
      <section className={gallery.intro} aria-labelledby="portfolio-title"><span className={styles.eyebrow}>PORTFOLIO / {portfolio.label}</span><h1 id="portfolio-title">{portfolio.title}</h1><p>{portfolio.description}</p><div className={gallery.tabs} aria-label="Categorías del portfolio"><Link href="/portfolio/webs" aria-current={type === "webs" ? "page" : undefined}>Webs y landings <span>05</span></Link><Link href="/portfolio/seo" aria-current={type === "seo" ? "page" : undefined}>SEO & Ads <span>05</span></Link><Link href="/portfolio/automatizaciones">Automatizaciones & CRM</Link><Link href="/portfolio/apps">Apps inteligentes</Link></div></section>
      {type === "seo" && <section className={gallery.capabilities} aria-label="Áreas de trabajo SEO y publicidad">{seoCapabilities.map(([name, description]) => <div key={name}><h2>{name}</h2><p>{description}</p></div>)}</section>}
      <section id="proyectos" className={gallery.grid} aria-label="Proyectos de clientes">{portfolio.projects.map((project, index) => <article key={project.image} className={gallery.project}>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className={gallery.preview} aria-label={`Visitar ${project.name} (abre en otra pestaña)`}>
          <div className={gallery.browserBar}><span><i/><i/><i/></span><small>{new URL(project.url).hostname}</small><ArrowUpRight size={14}/></div>
          <div className={gallery.imageWrap}><Image src={`/portfolio/${project.image}.${project.image === "plaza" ? "webp" : "jpg"}`} alt={`${["josefina", "plaza"].includes(project.image) ? "Imagen del" : "Vista del"} sitio de ${project.name}`} width={1200} height={850} sizes="(max-width: 700px) 100vw, 50vw" priority={index < 2}/><span className={gallery.visit}>Visitar sitio <ArrowUpRight size={17}/></span></div>
        </a>
        <div className={gallery.caption}><div><p>{project.category}</p><h2><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}<span className="sr-only"> (abre en otra pestaña)</span></a></h2></div><span className={gallery.number}>0{index + 1}</span></div>
      </article>)}</section>
      <section className={gallery.cta}><div><span className={styles.eyebrow}>TU PROYECTO PUEDE SER EL PRÓXIMO</span><h2>Construyamos lo que sigue.</h2><p>Contanos qué necesitás mejorar. Empezamos por entender tu negocio.</p></div><Link href="/#contacto" className={styles.primary}>Hablemos de tu proyecto <ArrowUpRight size={18}/></Link></section>
      <Link className={gallery.other} href={type === "webs" ? "/portfolio/seo" : "/portfolio/webs"}>Explorar {type === "webs" ? "SEO & Ads" : "Webs y landings"} <ArrowRight size={17}/></Link>
    </main>
    <footer className={styles.footer}><div className={styles.copyright}><span>© {new Date().getFullYear()} Navy Labs</span><Link href="/">Volver al inicio ↗</Link></div></footer>
  </div>;
}
