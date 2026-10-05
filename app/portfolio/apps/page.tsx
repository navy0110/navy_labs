import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { appProjects, appAreas, appTechnologies } from "./data";
import styles from "../../navy.module.css";
import gallery from "../portfolio.module.css";
import automation from "../automatizaciones/automation.module.css";
import apps from "./apps.module.css";

export const metadata = { title: "Apps inteligentes & Producto — Navy Labs", description: "Experiencia en apps con IA, APIs, deep tech, desarrollo, growth, product management y project management. Dicsys Analyzer, Cobrix y Molotov." };

export default function AppsPage() {
  return <div className={styles.site}>
    <a className={styles.skip} href="#proyectos">Saltar a los proyectos</a>
    <header className={styles.header}>
      <Link href="/" aria-label="Navy Labs, inicio"><span className={styles.brand}>navy<span className={styles.brandMark}>↗</span><span className={styles.brandLabs}>labs</span></span></Link>
      <nav aria-label="Navegación principal"><a href="#proyectos">Proyectos</a><a href="#experiencia">Experiencia</a><a href="#tecnologias">Tecnologías</a></nav>
      <Link href="/#contacto" className={styles.headerCta}>Hablemos de tu proyecto <ArrowUpRight size={16}/></Link>
    </header>
    <main className={gallery.main}>
      <Link href="/#servicios" className={gallery.back}><ArrowLeft size={15}/> Volver a servicios</Link>
      <section className={gallery.intro}><span className={styles.eyebrow}>PORTFOLIO / APPS INTELIGENTES</span><h1>De la idea al producto.<br/>Con tecnología y dirección.</h1><p>Trabajamos en proyectos de apps con base en IA, APIs y tecnología avanzada. Combinamos desarrollo, growth, product management y project management para conectar la solución técnica con las necesidades del negocio.</p><div className={gallery.tabs}><Link href="/portfolio/webs">Webs y landings</Link><Link href="/portfolio/seo">SEO & Ads</Link><Link href="/portfolio/automatizaciones">Automatizaciones & CRM</Link><Link href="/portfolio/apps" aria-current="page">Apps inteligentes</Link></div></section>
      <section id="proyectos" className={gallery.grid} aria-label="Proyectos de apps inteligentes">{appProjects.map((project, index) => {
        const image = <div className={`${gallery.imageWrap} ${project.url ? "" : apps.logoPreview}`}><Image src={`/portfolio/${project.image}`} alt={project.url ? `Vista del sitio de ${project.name}` : "Logo de Molotov"} width={1200} height={850} sizes="(max-width: 700px) 100vw, 50vw" priority={index < 2}/>{project.url && <span className={gallery.visit}>Visitar sitio <ArrowUpRight size={17}/></span>}</div>;
        return <article key={project.name} className={gallery.project}>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer" className={gallery.preview} aria-label={`Visitar ${project.name} (abre en otra pestaña)`}><div className={gallery.browserBar}><span><i/><i/><i/></span><small>{new URL(project.url).hostname}</small><ArrowUpRight size={14}/></div>{image}</a> : <div className={gallery.preview}><div className={gallery.browserBar}><span>MOLOTOV / IDENTIDAD DEL PROYECTO</span></div>{image}</div>}<div className={gallery.caption}><div><p>{project.category}</p><h2>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}<span className="sr-only"> (abre en otra pestaña)</span></a> : project.name}</h2></div><span className={gallery.number}>0{index + 1}</span></div></article>;
      })}</section>
      <section id="experiencia" className={`${automation.experience} ${apps.experience}`}><span className={styles.eyebrow}>01 / EXPERIENCIA QUE SUMA</span><h2>Construir el producto. Hacerlo avanzar.</h2><p className={apps.lead}>Participación en desarrollo y gestión de productos digitales: desde la definición de prioridades hasta la implementación y el lanzamiento.</p><div className={styles.services}>{appAreas.map((area, index) => <article className={styles.service} key={area.title}><div className={styles.cardTop}><Code2 size={24} strokeWidth={1.4}/><span>0{index + 1}</span></div><h3>{area.title}</h3><p>{area.text}</p></article>)}</div></section>
      <section id="tecnologias" className={automation.tools}><span className={styles.eyebrow}>02 / TECNOLOGÍAS CON LAS QUE TRABAJAMOS</span><h2>IA, desarrollo e infraestructura.</h2><p>El stack se define según la etapa y los requisitos del producto. También trabajamos con Python para APIs, procesamiento de datos y desarrollo con IA.</p><div className={apps.technologies}>{appTechnologies.map(tool => <div key={tool.name}><Image src={`/technologies/${tool.logo}`} alt={`Logo de ${tool.name}`} width={60} height={48}/><h3>{tool.name}</h3><p>{tool.text}</p></div>)}</div></section>
      <section className={gallery.cta}><div><span className={styles.eyebrow}>HAGAMOS CONCRETA TU IDEA</span><h2>¿Qué producto querés construir?</h2><p>Definamos el problema, validemos el alcance y encontremos el primer paso.</p></div><Link href="/#contacto" className={styles.primary}>Hablemos de tu app <ArrowUpRight size={18}/></Link></section>
    </main><footer className={styles.footer}><div className={styles.copyright}><span>© {new Date().getFullYear()} Navy Labs</span><Link href="/">Volver al inicio ↗</Link></div></footer>
  </div>;
}
