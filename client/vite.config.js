import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/', // Keep default for Vercel. We will override this via CLI for GitHub Pages.
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,
  },
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify('http://10.161.104.138:5000')
  }
})
