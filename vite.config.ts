import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MCC--Rebuild/",
  build: {
    outDir: "dist", // Make sure this matches what Netlify expects
  },
  plugins: [react()],
  publicDir: "public",
});
