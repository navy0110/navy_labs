# Despliegue de Navy Labs en Cloudflare Workers

El proyecto conserva Next.js y usa OpenNext para generar el Worker. Nombre: `navy-labs`. No se crea ningún recurso remoto al compilar. El dominio se conecta después del primer despliegue.

## Requisitos

- Node.js 22 o superior y `npm ci`.
- Cuenta de Cloudflare con acceso a Workers.
- Para despliegue manual, autenticación con `npx wrangler login`.
- Para GitHub Actions, secretos del repositorio `CLOUDFLARE_ACCOUNT_ID` y `CLOUDFLARE_API_TOKEN`. Usar el template de token **Edit Cloudflare Workers**, limitado a la cuenta que publicará el sitio. No agregar tokens a archivos del proyecto.

## Verificación local

```sh
npm ci
npm run lint
npm run typecheck
npm run build:cloudflare
npm run check:worker
npm run preview:cloudflare
```

`build:cloudflare` ejecuta el build de Next.js y produce `.open-next/worker.js` y `.open-next/assets`. `check:worker` verifica el empaquetado con Wrangler sin publicar. `preview:cloudflare` sirve el build existente en el runtime local de Workers (habitualmente http://localhost:8787).

En Windows, si OpenNext o workerd no completan la ejecución, usar WSL o el workflow Linux incluido. No dar por verificada la ejecución del Worker solo porque `next build` pasó.

## Publicación manual

Después de verificar y autenticar la cuenta:

```sh
npm run deploy
```

Este comando compila y publica. Para publicar un build ya generado: `npm run deploy:cloudflare`. El argumento `--keep-vars` conserva variables de runtime configuradas en el panel. La salida confirma la URL `workers.dev` real; no se puede determinar hasta elegir la cuenta.

## Publicación desde GitHub

1. En el repositorio, Settings → Secrets and variables → Actions, agregar los dos secretos de Cloudflare.
2. Actions → Cloudflare Worker → Run workflow.
3. Dejar **Publicar** desactivado para validar sin desplegar.
4. Activarlo para publicar una versión que pasa lint, typecheck, build y empaquetado.

El workflow es manual. Subir cambios a `main` no publica automáticamente.

## Formulario y secretos de runtime

En Cloudflare → Workers & Pages → navy-labs → Settings → Variables and Secrets, definir como secretos:

- `NAVY_CONTACT_WEBHOOK_URL`: destino HTTPS del CRM/automatización.
- `NAVY_CONTACT_WEBHOOK_TOKEN`: opcional, token Bearer que espera ese destino.

Estos valores son secretos del Worker, distintos de los secretos de GitHub que autorizan el despliegue. No se requieren en el build porque el formulario los consulta durante la petición. Sin URL configurada, la API devuelve 503 y el formulario muestra error. Antes del lanzamiento, enviar una consulta real y comprobar su recepción.

Para desarrollo local, copiar `.env.example` a `.env.local` y `.dev.vars.example` a `.dev.vars`; ambos archivos reales se ignoran en Git.

## Dominio y revisión final

Después de desplegar, en Workers & Pages → navy-labs → Settings → Domains & Routes → Add → Custom Domain, agregar el dominio propio que ya esté activo en la misma cuenta de Cloudflare. No agregar un dominio ficticio a `wrangler.jsonc`. Configurar `www` y la redirección canónica cuando se conozca el dominio definitivo.

Comprobar inicio, cinco portfolios, imágenes, selector del dashboard, links y formulario. Completar las páginas legales con datos reales. Las imágenes se sirven sin transformación de Cloudflare Images; no hay binding de Images ni R2. El proyecto no usa ISR. Si se agrega revalidación dinámica en el futuro, configurar almacenamiento de caché según la guía de OpenNext.

Documentación: https://opennext.js.org/cloudflare/get-started y https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
