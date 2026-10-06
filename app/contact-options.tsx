import { ArrowUpRight, MessageCircle } from "lucide-react";
import styles from "./contact-options.module.css";

const options = [
  ["Web o landing para mi negocio", "una web o landing para mi negocio"],
  ["Tienda online con pagos", "una tienda online con pagos"],
  ["SEO & Ads", "mejorar el tráfico y las campañas de SEO y Ads"],
  ["Automatizaciones & CRM", "automatizar procesos e integrar mi CRM"],
  ["App o sistema con IA", "una app o sistema con inteligencia artificial"],
  ["Datos y dashboards", "organizar mis datos y crear dashboards"],
  ["Todavía no sé, orientame", "recibir orientación para mi proyecto"],
];
const whatsapp = (message: string) => `https://wa.me/5491168905153?text=${encodeURIComponent(message)}`;

export function ContactOptions() {
  return <div className={styles.card}>
    <h3>¿Qué necesitás?</h3>
    <p className={styles.intro}>Tocá una opción y seguimos por WhatsApp.</p>
    <div className={styles.options} aria-label="Elegí el tipo de proyecto">
      {options.map(([label, project]) => <a key={label} className={styles.option} href={whatsapp(`Hola Navy Labs, me gustaría ${project}.`)} target="_blank" rel="noopener noreferrer">{label}<span className="sr-only"> (abre WhatsApp en otra pestaña)</span></a>)}
    </div>
    <a className={styles.cta} href={whatsapp("Hola Navy Labs, quiero contarles mi proyecto.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} aria-hidden="true"/> Escribime por WhatsApp <ArrowUpRight size={20} aria-hidden="true"/><span className="sr-only"> (abre en otra pestaña)</span></a>
    <p className={styles.note}>Sin compromiso. Contanos tu idea y definimos el próximo paso.</p>
  </div>;
}
