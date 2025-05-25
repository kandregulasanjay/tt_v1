import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tt_v1/', // <-- Add this line
  plugins: [react()]
})
