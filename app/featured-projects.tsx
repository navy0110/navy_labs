import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./featured-projects.module.css";

const cases = [
  { name: "Manso Gestión", type: "Web & experiencia digital", image: "manso.jpg", url: "https://manso-gestion.vercel.app/", problem: "Reunir distintas experiencias y servicios en un acceso claro.", solution: "Una interfaz con accesos a coworking, eventos, entradas personales y otros servicios.", result: "Un punto de entrada para elegir una experiencia y encontrar el siguiente paso.", alt: "Interfaz de Manso con accesos a Cowork Day, eventos, entradas, carta y cineclub" },
  { name: "Josefina Madariaga", type: "Web & portfolio de obra", image: "josefina.jpg", url: "https://josefinamadariaga.com.ar/", problem: "Dar protagonismo a la obra y comunicar una identidad artística.", solution: "Una presentación digital centrada en las imágenes y el recorrido por el trabajo de la artista.", result: "La obra tiene un espacio propio para ser conocida más allá de las redes.", alt: "Obra de Josefina Madariaga presentada en su sitio web" },
  { name: "Quienvino app", type: "Visión por computadora & datos", image: "quienvino.jpg", url: null, problem: "Visualizar entradas, salidas y ocupación de un espacio.", solution: "Una demo que combina imagen de cámara, línea de conteo e indicadores en un dashboard.", result: "Conteo y estado de aforo visibles en una misma pantalla.", alt: "Demo de Quienvino app con cámara e indicadores de ocupación, entradas y salidas" },
];

export function FeaturedProjects() {
  return <section id="proyectos" className={styles.section} aria-labelledby="featured-title">
    <div className={styles.heading}><span className={styles.eyebrow}>PROYECTOS / DE LA IDEA A UNA SOLUCIÓN</span><h2 id="featured-title">No te lo contamos.<br/>Te lo mostramos.</h2><p>Webs y productos digitales con un propósito claro. Mirá el problema que abordan y la solución que podés recorrer.</p></div>
    <div className={styles.grid}>{cases.map(project => <article className={styles.card} key={project.name}>
      <div className={styles.preview}><Image src={`/portfolio/${project.image}`} alt={project.alt} width={1200} height={850} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"/><span>{project.url ? "PROYECTO WEB" : "DEMO DE PRODUCTO"}</span></div>
      <div className={styles.body}><p className={styles.type}>{project.type}</p><h3>{project.name}</h3><dl><div><dt>Problema que aborda</dt><dd>{project.problem}</dd></div><div><dt>Solución</dt><dd>{project.solution}</dd></div><div className={styles.result}><dt>Resultado visible</dt><dd>{project.result}</dd></div></dl>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">Explorar proyecto <ArrowUpRight size={16}/><span className="sr-only"> (abre en otra pestaña)</span></a> : <a href="/portfolio/apps">Ver portfolio de apps <ArrowUpRight size={16}/></a>}</div>
    </article>)}</div>
    <div className={styles.bottom}><p>¿Querés conectar tu web, las consultas y el seguimiento como un único sistema?</p><a href="#contacto">Hablemos de tu proyecto <ArrowUpRight size={17}/></a></div>
  </section>;
}
