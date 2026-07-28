import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "./src/server.ts" },
    }),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    tailwindcss(),
    nitro(),
  ],
  environments: {
    ssr: { build: { rollupOptions: { input: "./src/server.ts" } } },
  },
});
