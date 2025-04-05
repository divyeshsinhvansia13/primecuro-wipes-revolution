import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Import Node's path module

export default defineConfig({
  base: "./", // Use a relative base so assets load correctly on GitHub Pages
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});