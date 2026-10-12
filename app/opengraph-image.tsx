import { ImageResponse } from "next/og";

export const alt = "Navy Labs — Estrategia, diseño y tecnología para crecer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "65px 75px", background: "#101f36", color: "#ffffff", borderBottom: "16px solid #d6ef86" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}><span style={{ fontSize: 72, fontWeight: 700 }}>navy</span><span style={{ fontSize: 65, color: "#d6ef86" }}>↗</span><span style={{ fontSize: 30, letterSpacing: 6 }}>labs</span></div>
      <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>Construimos lo que tu negocio necesita para crecer.</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, color: "#d6ef86" }}><span>Estrategia · Diseño · Tecnología</span><span>navylabs.tech</span></div>
    </div>, size,
  );
}
