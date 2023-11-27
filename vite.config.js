import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * This is from stack overflow regarding the deployment of the app with handling axios error for building
 * 
 * see the link: https://stackoverflow.com/questions/76774089/axios-related-error-when-building-react-app-using-vite
 * 
 * I have defined

    define: { global: 'globalThis'}

and after that it works fine. It works locally and in production. "define: { _global: ({}), }", this only work for production but not for development. and "define: { global: ({}), }" this works for local but not for production. so the following solution works for both.
 * 
 */

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: "https://centrosecretariat-backend.onrender.com",
  },
  plugins: [react()],
  define: { global: "globalThis" },
});
