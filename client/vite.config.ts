import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [react(), tailwindcss()],
  define: {
    "import.meta.env": {}, // Prevents ESLint issues
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"), // ✅ works locally & on Vercel
    },
  },
});
