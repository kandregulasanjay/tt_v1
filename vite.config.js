import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/',
    plugins: [react()],
    define: {
      __VITE_HRMS_API_URL__: JSON.stringify(env.VITE_HRMS_API_URL || 'http://localhost:4000/api/v1'),
      __VITE_CORS_ORIGIN__: JSON.stringify(env.VITE_CORS_ORIGIN || 'http://localhost:5173'),
      __VITE_JOBS_ENDPOINT__: JSON.stringify(env.VITE_JOBS_ENDPOINT || '/jobs/public'),
      __VITE_HEALTH_ENDPOINT__: JSON.stringify(env.VITE_HEALTH_ENDPOINT || '/health'),
      __VITE_APPLY_ENDPOINT__: JSON.stringify(env.VITE_APPLY_ENDPOINT || '/apply'),
      __VITE_DEBUG_API__: env.VITE_DEBUG_API === 'true',
      __VITE_TENANT_ID__: JSON.stringify(env.VITE_TENANT_ID || null),
      __VITE_APP_NAME__: JSON.stringify(env.VITE_APP_NAME || 'Transforma AI'),
      __VITE_APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION || '1.0.0'),
      __VITE_APP_ENVIRONMENT__: JSON.stringify(env.VITE_APP_ENVIRONMENT || 'production'),
      __VITE_CORS_CREDENTIALS__: env.VITE_CORS_CREDENTIALS === 'true',
      __VITE_API_TIMEOUT__: parseInt(env.VITE_API_TIMEOUT || '30000'),
      __VITE_API_RETRIES__: parseInt(env.VITE_API_RETRIES || '3'),
      __VITE_API_RETRY_DELAY__: parseInt(env.VITE_API_RETRY_DELAY || '1000'),
      __VITE_FEATURE_JOB_SEARCH__: env.VITE_FEATURE_JOB_SEARCH === 'true',
      __VITE_FEATURE_JOB_FILTERING__: env.VITE_FEATURE_JOB_FILTERING === 'true',
      __VITE_FEATURE_APPLICATION_SUBMISSION__: env.VITE_FEATURE_APPLICATION_SUBMISSION === 'true',
      __VITE_FEATURE_RESUME_UPLOAD__: env.VITE_FEATURE_RESUME_UPLOAD === 'true',
    }
  }
})
