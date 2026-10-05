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

Editar clientes, categorías y enlaces en `app/portfolio/data.ts`; diseño compartido en `app/portfolio/portfolio-page.tsx` y `portfolio.module.css`. Imágenes locales en `public/portfolio`, optimizadas por Next Image. Las capturas se obtuvieron de los sitios públicos mediante thum.io; Josefina y Plaza de Mayo usan imágenes de sus propias páginas porque la captura mostró una verificación del navegador. Algunas páginas con video o popups pueden requerir capturas manuales más limpias. Las áreas de SEO/Ads se muestran a nivel general; no se atribuyen métricas ni tareas específicas a cada cliente.
