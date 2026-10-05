import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The site has static pages and an uncached contact API; it does not require ISR/R2.
export default defineCloudflareConfig();
