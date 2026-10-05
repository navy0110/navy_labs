# Navy Labs

Landing independiente en `/`. React, Next.js 16, CSS Modules para la identidad visual y Tailwind en las páginas legales. No depende de VYNX ni de servicios de autenticación.

## Desarrollo y despliegue

Requiere Node.js 20.9 o superior. Ejecutar `npm install`, copiar `.env.example` a `.env.local` y ejecutar `npm run dev`. Abrir http://localhost:3000. Para producción: `npm run lint`, `npm run typecheck`, `npm run build` y `npm start`.

Importar el repositorio en un hosting compatible con Next.js, con directorio raíz del repositorio y comando `npm run build`. Configurar las variables de contacto en el hosting. GitHub almacena el código; el sitio requiere un despliegue para tener una URL pública. GitHub Pages no ejecuta la API de contacto.

## Contacto

Configurar `NAVY_CONTACT_WEBHOOK_URL` con un endpoint HTTPS del CRM o automatización que acepte POST JSON. Opcional: `NAVY_CONTACT_WEBHOOK_TOKEN` (Bearer, solo servidor). El payload contiene name, email, company, project, message, consent, receivedAt y source. El endpoint debe guardar o entregar la consulta antes de responder 2xx. Sin configuración se devuelve 503 y el formulario muestra error, nunca un envío ficticio.

Antes de publicar: agregar identidad legal, dirección de contacto para derechos de privacidad, retención y proveedores efectivos a la política; confirmar el compromiso de respuesta de 24 horas hábiles; configurar enlaces reales de redes (no se inventaron perfiles); conectar el webhook y aplicar rate limiting en el proveedor de hosting. No hay testimonios ni métricas inventados: reemplazar la franja de garantías con prueba social verificable cuando esté disponible.

## Identidad inicial

Wordmark tipográfico navy ↗ labs. Navy #101f36, lima #d6ef86, blanco y gris salvia. El gráfico del hero es HTML/CSS, sin recursos externos. Respeta reducción de movimiento, navegación por teclado, etiquetas y estados de envío.

Rutas: `/`, `/portfolio/webs`, `/portfolio/seo`, `/privacidad`, `/terminos` y `POST /api/navy-contact`. El secreto del webhook permanece en el servidor. Las páginas legales son una base que debe completarse con los datos reales de la agencia.

## Portfolio

Ingeniería de datos: `/portfolio/datos`. Nueve áreas de trabajo y proyectos confirmados de Dicsys, Banco Macro, Banco Supervielle, abc.cl, Alprestamo e Idílica en `app/portfolio/datos/data.ts`. Logos obtenidos de sus sitios oficiales. El dashboard interactivo usa SVG y CSS locales y conjuntos de datos simulados para 30/90 días; no es una captura de proyectos ni representa resultados de clientes. Editar la visualización en `dashboard.tsx` y su estilo en `data.module.css`.

Apps inteligentes: `/portfolio/apps`. Proyectos, experiencia y diez tecnologías en `app/portfolio/apps/data.ts`. Dicsys Analyzer enlaza al sitio corporativo indicado (la imagen corresponde a ese sitio, no a una interfaz privada del producto); Cobrix muestra su sitio público. Molotov usa el JPEG original adjunto y no tiene enlace. Las áreas de desarrollo, growth, producto y gestión se describen a nivel general, sin asignaciones específicas ni métricas inventadas por proyecto. Capturas públicas de Dicsys y Cobrix obtenidas mediante thum.io. Logos de tecnologías de Simple Icons, excepto OpenAI, obtenido del recurso público de Dicsys.

Automatizaciones y CRM: `/portfolio/automatizaciones`. Áreas de experiencia, tecnologías y marcas se editan en `app/portfolio/automatizaciones/data.ts`. La lista `automationClients` incluye Qendar, Temaikèn, TECHO, Idílica y Bloop, confirmados por el usuario, con logos locales obtenidos de sus sitios oficiales y enlaces externos. Los logos de tecnologías son archivos locales en `public/technologies`: Make, n8n y HubSpot de Simple Icons; Salesforce de su sitio oficial y Perfit de su favicon oficial. Se identifican herramientas utilizadas, sin afirmar certificaciones ni alianzas.

Editar clientes, categorías y enlaces en `app/portfolio/data.ts`; diseño compartido en `app/portfolio/portfolio-page.tsx` y `portfolio.module.css`. Imágenes locales en `public/portfolio`, optimizadas por Next Image. Las capturas se obtuvieron de los sitios públicos mediante thum.io; Josefina y Plaza de Mayo usan imágenes de sus propias páginas porque la captura mostró una verificación del navegador. Algunas páginas con video o popups pueden requerir capturas manuales más limpias. Las áreas de SEO/Ads se muestran a nivel general; no se atribuyen métricas ni tareas específicas a cada cliente.
