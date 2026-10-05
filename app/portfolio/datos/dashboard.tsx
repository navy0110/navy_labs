"use client";
import { useState } from "react";
import { Activity, ArrowUpRight, Database, Check, RefreshCw } from "lucide-react";
import css from "./data.module.css";

const examples = {
  "30": { visits: "24.800", leads: "1.240", conversion: "5,0 %", points: "0,123 40,112 80,118 120,85 160,94 200,72 240,79 280,43 320,55 360,26 400,35 440,12", bars: [40, 56, 48, 70, 62, 85], dates: ["01", "06", "11", "16", "21", "30"] },
  "90": { visits: "71.200", leads: "3.418", conversion: "4,8 %", points: "0,129 40,120 80,127 120,100 160,109 200,84 240,72 280,87 320,49 360,58 400,28 440,18", bars: [32, 46, 61, 55, 78, 92], dates: ["01", "18", "36", "54", "72", "90"] },
};

export function DataDashboard() {
  const [period, setPeriod] = useState<"30" | "90">("30");
  const values = examples[period];
  return <div className={css.dashboard}>
    <div className={css.dashTop}><span><Activity size={17}/> NAVY / ANALYTICS LAB</span><span className={css.sample}>DATOS DE DEMOSTRACIÓN</span></div>
    <div className={css.dashHeading}><div><h3>Una mirada completa a tu operación.</h3><p>Adquisición, conversión y calidad de datos.</p></div><label>Período<select value={period} onChange={event => setPeriod(event.target.value as "30" | "90")}><option value="30">Últimos 30 días</option><option value="90">Últimos 90 días</option></select></label></div>
    <div className={css.kpis} aria-live="polite">{[["Visitas", values.visits], ["Leads", values.leads], ["Conversión", values.conversion]].map(([name,value]) => <div key={name}><span>{name}</span><strong>{value}</strong><small><ArrowUpRight size={12}/> Indicador ilustrativo</small></div>)}</div>
    <div className={css.chartGrid}><div className={css.chart}><div><h4>Evolución de leads</h4><span>POR DÍA</span></div><svg viewBox="0 0 460 175" role="img" aria-label={`Tendencia ilustrativa de leads durante ${period} días`}><title>Evolución de leads — datos de demostración</title>{[20,60,100,140].map(y => <line key={y} x1="10" y1={y} x2="450" y2={y} stroke="#e3e9e2"/>)}<polyline points={values.points} transform="translate(10 10)" fill="none" stroke="#739242" strokeWidth="3" strokeLinejoin="round"/></svg><div className={css.axis}>{values.dates.map(date => <span key={date}>Día {date}</span>)}</div></div>
    <div className={css.chart}><div><h4>Actividad por canal</h4><span>VOLUMEN RELATIVO</span></div><div className={css.bars} role="img" aria-label="Comparación ilustrativa de actividad por canal">{values.bars.map((height,i) => <div key={i}><div style={{height: `${height}%`}}/><span>{["SEO", "Ads", "Email", "Directo", "Social", "Otros"][i]}</span></div>)}</div></div></div>
    <div className={css.pipeline}><div><Database size={18}/><h4>Salud del pipeline</h4><span>EJEMPLO DE MONITOREO</span></div><ol>{["Fuentes", "Extracción", "Transformación", "Validación", "Dashboard"].map(step => <li key={step}><Check size={14}/>{step}</li>)}</ol><p><RefreshCw size={12}/> Flujo ilustrativo de actualización y validación.</p></div>
  </div>;
}
