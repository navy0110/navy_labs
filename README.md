# Navy Labs

Landing modular en `/navy-labs`, independiente de las páginas de VYNX. React, Next.js 16, CSS Modules para aislar la identidad visual y Tailwind en las páginas legales. No agrega dependencias.

## Contacto

Configurar `NAVY_CONTACT_WEBHOOK_URL` con un endpoint HTTPS del CRM o automatización que acepte POST JSON. Opcional: `NAVY_CONTACT_WEBHOOK_TOKEN` (Bearer, solo servidor). El payload contiene name, email, company, project, message, consent, receivedAt y source. El endpoint debe guardar o entregar la consulta antes de responder 2xx. Sin configuración se devuelve 503 y el formulario muestra error, nunca un envío ficticio.

Antes de publicar: agregar identidad legal, dirección de contacto para derechos de privacidad, retención y proveedores efectivos a la política; confirmar el compromiso de respuesta de 24 horas hábiles; configurar enlaces reales de redes (no se inventaron perfiles); conectar el webhook y aplicar rate limiting en el proveedor de hosting. No hay testimonios ni métricas inventados: reemplazar la franja de garantías con prueba social verificable cuando esté disponible.

## Identidad inicial

Wordmark tipográfico navy ↗ labs. Navy #101f36, lima #d6ef86, blanco y gris salvia. El gráfico del hero es HTML/CSS, sin recursos externos. Respeta reducción de movimiento, navegación por teclado, etiquetas y estados de envío.

Para extraer a un proyecto propio: copiar `app/navy-labs`, `app/api/navy-contact` y configurar un root layout con Geist y Tailwind. No trasladar los providers, autenticación o service worker de VYNX. Cambiar rutas al publicar en la raíz. Ejecutar lint, typecheck y build.
