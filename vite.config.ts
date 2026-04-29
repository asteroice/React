import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: [],
        },
      },
    }),
  ],
  server: {
    proxy: {
      "/login": { target: "http://localhost:8085", changeOrigin: true },
      "/register": {
        target: "http://localhost:8085",
        changeOrigin: true,
      },
      "/profile": { target: "http://localhost:8082", changeOrigin: true },
      "/me": { target: "http://localhost:8082", changeOrigin: true },
    },
  },
});
