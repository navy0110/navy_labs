"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./navy.module.css";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending"); setMessage("");
    try {
      const response = await fetch("/api/navy-contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))), signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw new Error();
      setStatus("success"); setMessage("Recibimos tu consulta. Te contactaremos por email en menos de 24 horas hábiles."); form.reset();
    } catch { setStatus("error"); setMessage("No pudimos enviar tu consulta. Tus datos siguen en el formulario; intentá nuevamente más tarde."); }
  }
  return <form className={styles.form} onSubmit={submit}><h3>Contanos tu idea.</h3><p>No hace falta tener todo resuelto.</p><div className={styles.formRow}><label>Tu nombre<input name="name" autoComplete="name" placeholder="¿Cómo te llamás?" required maxLength={100}/></label><label>Empresa <span>(opcional)</span><input name="company" autoComplete="organization" placeholder="Nombre de tu negocio" maxLength={150}/></label></div><label>Email<input name="email" type="email" autoComplete="email" placeholder="vos@tuempresa.com" required maxLength={254}/></label><label>¿Qué necesitás?<select name="project" required defaultValue=""><option value="" disabled>Elegí el tipo de proyecto</option>{["Web o landing", "SEO & Ads", "Automatización & CRM", "App inteligente (IA / IoT)", "Ingeniería de datos a medida", "Necesito orientación"].map(x=><option key={x}>{x}</option>)}</select></label><label>Un poco sobre tu proyecto<textarea name="message" placeholder="¿Qué te gustaría lograr o mejorar?" rows={3} required minLength={10} maxLength={3000}/></label><label className={styles.honeypot} aria-hidden="true">Sitio personal<input name="website" tabIndex={-1} autoComplete="off"/></label><label className={styles.consent}><input name="consent" type="checkbox" required value="yes"/><span>Acepto la <a href="/privacidad">política de privacidad</a> para que me contacten sobre mi consulta.</span></label><button className={styles.primary} disabled={status==="sending"} type="submit">{status==="sending" ? "Enviando…" : "Enviar mi consulta"}<ArrowUpRight size={18}/></button><p className={styles.formStatus} role="status" aria-live="polite">{message || "Sin compromiso. Sin suscripciones a listas de correo."}</p></form>;
}
