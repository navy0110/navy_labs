import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Navy Labs — Estrategia, diseño y tecnología para crecer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/navy-labs-logo.png"));
  const sourceUrl = `data:image/png;base64,${logo.toString("base64")}`;
  // Recolor the original silhouette without changing its geometry or alpha.
  const whiteLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="319" viewBox="0 0 1200 319"><defs><filter id="white" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/></filter></defs><image href="${sourceUrl}" width="1200" height="319" filter="url(#white)"/></svg>`;
  const logoUrl = `data:image/svg+xml;base64,${Buffer.from(whiteLogo).toString("base64")}`;
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "65px 75px", background: "#101f36", color: "#ffffff", borderBottom: "16px solid #d6ef86" }}>
      <div style={{ display: "flex", alignItems: "center", width: 430 }}>
        {/* ImageResponse renders a native image into the generated PNG. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUrl} alt="Navy Labs" width={430} height={114} style={{ objectFit: "contain" }}/>
      </div>
      <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>Construimos lo que tu negocio necesita para crecer.</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, color: "#d6ef86" }}><span>Estrategia · Diseño · Tecnología</span><span>navylabs.tech</span></div>
    </div>, size,
  );
}
