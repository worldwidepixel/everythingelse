import { fileURLToPath } from "node:url";
import { dirname, resolve } from "pathe";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
});
