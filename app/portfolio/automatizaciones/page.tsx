import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Workflow } from "lucide-react";
import { automationAreas, automationClients, automationTechnologies } from "./data";
import styles from "../../navy.module.css";
import gallery from "../portfolio.module.css";
import automation from "./automation.module.css";

export const metadata = { title: "Automatizaciones & CRM — Navy Labs", description: "Experiencia en automatización de marketing, contenidos, tareas administrativas, APIs y CRM. Make, n8n, HubSpot, Salesforce y Perfit." };

export default function AutomationPage() {
  return <div className={styles.site}>
    <a className={styles.skip} href="#experiencia">Saltar a la experiencia</a>
    <header className={styles.header}>
      <Link href="/" aria-label="Navy Labs, inicio"><span className={styles.brand}>navy<span className={styles.brandMark}>↗</span><span className={styles.brandLabs}>labs</span></span></Link>
      <nav aria-label="Navegación principal"><a href="#experiencia">Experiencia</a><a href="#tecnologias">Tecnologías</a></nav>
      <Link href="/#contacto" className={styles.headerCta}>Hablemos de tu proyecto <ArrowUpRight size={16}/></Link>
    </header>
    <main className={gallery.main}>
      <Link href="/#servicios" className={gallery.back}><ArrowLeft size={15}/> Volver a servicios</Link>
      <section className={gallery.intro}>
        <span className={styles.eyebrow}>EXPERIENCIA / AUTOMATIZACIONES & CRM</span>
        <h1>Menos tareas repetidas.<br/>Más negocio conectado.</h1>
        <p>Trabajamos en automatización de campañas de marketing, contenidos y tareas administrativas, optimización de APIs y CRM. Conectamos herramientas y procesos para que tu equipo pueda concentrarse en lo que importa.</p>
        <div className={gallery.tabs}><Link href="/portfolio/webs">Webs y landings</Link><Link href="/portfolio/seo">SEO & Ads</Link><Link href="/portfolio/automatizaciones" aria-current="page">Automatizaciones & CRM</Link></div>
      </section>
      {automationClients.length > 0 && <section className={automation.clients} aria-labelledby="clientes-title"><span className={styles.eyebrow}>MARCAS CON LAS QUE TRABAJAMOS</span><h2 id="clientes-title">Experiencia aplicada a negocios reales.</h2><p className={automation.clientIntro}>Colaboramos con agencias y organizaciones en proyectos de automatización y CRM.</p><div>{automationClients.map(client => <a key={client.name} href={client.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${client.name} (abre en otra pestaña)`}><Image src={client.logo} alt={`Logo de ${client.name}`} width={160} height={80}/><span>{client.name}<ArrowUpRight size={14}/></span></a>)}</div></section>}
      <section id="experiencia" className={automation.experience} aria-labelledby="experiencia-title">
        <span className={styles.eyebrow}>01 / QUÉ AUTOMATIZAMOS</span><h2 id="experiencia-title">Del primer contacto al trabajo de todos los días.</h2>
        <div className={styles.services}>{automationAreas.map((area, index) => <article className={styles.service} key={area.title}><div className={styles.cardTop}><Workflow size={24} strokeWidth={1.4}/><span>0{index + 1}</span></div><h3>{area.title}</h3><p>{area.text}</p><div className={styles.cardBottom}><small>{area.tags}</small></div></article>)}</div>
      </section>
      <section id="tecnologias" className={automation.tools} aria-labelledby="tecnologias-title"><span className={styles.eyebrow}>02 / HERRAMIENTAS QUE CONECTAMOS</span><h2 id="tecnologias-title">La tecnología adecuada para cada flujo.</h2><p>Elegimos y combinamos herramientas según tu operación, tu equipo y las integraciones que necesitás.</p><div className={automation.toolGrid}>{automationTechnologies.map(tool => <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" aria-label={`${tool.name} (abre en otra pestaña)`}><Image src={`/technologies/${tool.logo}`} alt={`Logo de ${tool.name}`} width={72} height={52}/><h3>{tool.name}</h3><p>{tool.text}</p><ArrowUpRight size={14}/></a>)}</div></section>
      <section className={automation.approach}><div><span className={styles.eyebrow}>03 / AUTOMATIZAR CON CRITERIO</span><h2>Primero el proceso.<br/>Después, la automatización.</h2></div><ul>{["Mapeamos tareas, responsables y puntos de fricción.", "Definimos qué automatizar y dónde mantener revisión humana.", "Probamos datos, permisos y escenarios de error.", "Documentamos los flujos y acompañamos la puesta en marcha."].map(text => <li key={text}><Check size={17}/>{text}</li>)}</ul></section>
      <section className={gallery.cta}><div><span className={styles.eyebrow}>EMPECEMOS POR LO QUE TE QUITA TIEMPO</span><h2>¿Qué tarea harías una sola vez?</h2><p>Contanos cómo trabaja tu equipo. Busquemos una oportunidad concreta para simplificarlo.</p></div><Link href="/#contacto" className={styles.primary}>Hablemos de tu proceso <ArrowUpRight size={18}/></Link></section>
    </main>
    <footer className={styles.footer}><div className={styles.copyright}><span>© {new Date().getFullYear()} Navy Labs</span><Link href="/">Volver al inicio ↗</Link></div></footer>
  </div>;
}
