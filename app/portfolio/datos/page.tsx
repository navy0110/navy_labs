import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Database } from "lucide-react";
import { dataClients, dataAreas } from "./data";
import { DataDashboard } from "./dashboard";
import styles from "../../navy.module.css";
import gallery from "../portfolio.module.css";
import automation from "../automatizaciones/automation.module.css";
import css from "./data.module.css";

export const metadata = { title: "Ingeniería de datos a medida — Navy Labs", description: "Arquitectura, ETL/ELT, modelado, dashboards, gobierno, seguridad, pronósticos y CRO. Experiencia en proyectos de datos." };

export default function DataPage() {
  return <div className={styles.site}>
    <a className={styles.skip} href="#experiencia">Saltar a la experiencia</a>
    <header className={styles.header}><Link href="/" aria-label="Navy Labs, inicio"><span className={styles.brand}>navy<span className={styles.brandMark}>↗</span><span className={styles.brandLabs}>labs</span></span></Link><nav aria-label="Navegación principal"><a href="#experiencia">Experiencia</a><a href="#dashboards">Dashboards</a></nav><Link href="/#contacto" className={styles.headerCta}>Hablemos de tu proyecto <ArrowUpRight size={16}/></Link></header>
    <main className={gallery.main}>
      <Link href="/#servicios" className={gallery.back}><ArrowLeft size={15}/> Volver a servicios</Link>
      <section className={gallery.intro}><span className={styles.eyebrow}>EXPERIENCIA / INGENIERÍA DE DATOS</span><h1>Datos conectados.<br/>Decisiones con fundamento.</h1><p>Ingeniería de datos a medida: diseñamos arquitecturas, desarrollamos pipelines y convertimos información dispersa en modelos y dashboards útiles para tu negocio.</p><div className={gallery.tabs}><Link href="/portfolio/webs">Webs y landings</Link><Link href="/portfolio/seo">SEO & Ads</Link><Link href="/portfolio/automatizaciones">Automatizaciones & CRM</Link><Link href="/portfolio/apps">Apps inteligentes</Link><Link href="/portfolio/datos" aria-current="page">Ingeniería de datos</Link></div></section>
      <section className={`${automation.clients} ${css.clients}`} aria-labelledby="clientes-title"><span className={styles.eyebrow}>PROYECTOS EN LOS QUE TRABAJAMOS</span><h2 id="clientes-title">Experiencia en distintos sectores.</h2><p className={automation.clientIntro}>Proyectos vinculados a tecnología, banca, retail, servicios financieros y agencias.</p><div>{dataClients.map(client => <a key={client.name} href={client.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${client.name} (abre en otra pestaña)`}><Image src={client.logo} alt={`Logo de ${client.name}`} width={160} height={80}/><span>{client.name}<ArrowUpRight size={14}/></span></a>)}</div></section>
      <section id="experiencia" className={automation.experience}><span className={styles.eyebrow}>01 / DE LA FUENTE A LA DECISIÓN</span><h2>Una base sólida para cada dato.</h2><div className={styles.services}>{dataAreas.map(([title,text],index) => <article className={styles.service} key={title}><div className={styles.cardTop}><Database size={24} strokeWidth={1.4}/><span>0{index+1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="dashboards" className={css.visualSection}><span className={styles.eyebrow}>02 / HACER VISIBLE LO IMPORTANTE</span><h2>De los datos a una vista que podés explorar.</h2><p>Dashboards de métricas, tendencias y estado de los procesos. Cambiá el período para explorar este ejemplo interactivo.</p><DataDashboard/><p className={css.disclaimer}>Visualización de demostración con datos simulados. No corresponde a resultados, sistemas ni información de los proyectos mencionados.</p></section>
      <section className={gallery.cta}><div><span className={styles.eyebrow}>EMPECEMOS POR TUS FUENTES</span><h2>¿Qué necesitás entender mejor?</h2><p>Contanos dónde están tus datos y qué decisiones querés tomar con ellos.</p></div><Link href="/#contacto" className={styles.primary}>Hablemos de tus datos <ArrowUpRight size={18}/></Link></section>
    </main><footer className={styles.footer}><div className={styles.copyright}><span>© {new Date().getFullYear()} Navy Labs</span><Link href="/">Volver al inicio ↗</Link></div></footer>
  </div>;
}
