import { defineConfig } from "nitro";

const isVercel = Boolean(process.env.VERCEL);

// Keep local/non-Vercel builds on the existing Cloudflare Workers module target,
// but let Vercel builds emit Vercel Build Output API files under .vercel/output.
export default defineConfig({
  preset: isVercel ? "vercel" : "cloudflare_module",
});
