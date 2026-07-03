import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Fixes "WebSocket closed before onopen" errors
    host: true,
    port: 5173,
  },
})
