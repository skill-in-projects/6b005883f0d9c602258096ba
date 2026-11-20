import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/6b005883f0d9c602258096ba/',
  // Bundled when the dev server starts, so the first page the agent adds (HashRouter) does not make Vite re-bundle
  // mid-session, which left the Preview white until a manual reload.
  optimizeDeps: { include: ['react-router-dom'] },
})
