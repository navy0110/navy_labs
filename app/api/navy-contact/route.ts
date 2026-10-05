const projects = ["Web o landing", "SEO & Ads", "Automatización & CRM", "App inteligente (IA / IoT)", "Solución tech a medida", "Necesito orientación"];
export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origen inválido" }, { status: 403 });
  const raw = await request.text();
  if (raw.length > 12000) return Response.json({ error: "Solicitud demasiado grande" }, { status: 413 });
  let data: Record<string, unknown>;
  try { data = JSON.parse(raw); if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error(); } catch { return Response.json({ error: "Solicitud inválida" }, { status: 400 }); }
  if (data.website) return Response.json({ error: "Solicitud inválida" }, { status: 400 });
  const read = (key: string) => typeof data[key] === "string" ? (data[key] as string).trim() : "";
  const name = read("name"), email = read("email"), company = read("company"), project = read("project"), message = read("message");
  if (!name || name.length > 100 || company.length > 150 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !projects.includes(project) || message.length < 10 || message.length > 3000 || data.consent !== "yes") return Response.json({ error: "Revisá los campos" }, { status: 400 });
  const webhook = process.env.NAVY_CONTACT_WEBHOOK_URL;
  if (!webhook) return Response.json({ error: "Contacto no configurado" }, { status: 503 });
  try {
    if (new URL(webhook).protocol !== "https:") throw new Error();
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.NAVY_CONTACT_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.NAVY_CONTACT_WEBHOOK_TOKEN}` } : {}) }, body: JSON.stringify({ name, email, company, project, message, consent: true, receivedAt: new Date().toISOString(), source: "navy-labs" }), signal: AbortSignal.timeout(10000), redirect: "error" });
    if (!response.ok) throw new Error();
    return Response.json({ ok: true });
  } catch { return Response.json({ error: "No se pudo entregar la consulta" }, { status: 502 }); }
}
