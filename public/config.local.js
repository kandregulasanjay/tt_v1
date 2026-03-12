window.APP_CONFIG = {
  api: {
    baseUrl: 'http://localhost:4000/api/v1',
    endpoints: {
      jobs: '/jobs/public',
      jobById: (jobId) => `/jobs/${jobId}`,
      applyJob: (jobId) => `/jobs/${jobId}/apply`,
      health: '/health'
    },
    timeout: 30000,
    retries: 3,
    retryDelay: 1000,
  },
  app: {
    name: 'Transforma AI',
    version: '1.0.0',
    environment: 'production',
    debugLogging: true,
  },
  cors: {
    origin: 'http://localhost:5173',
    credentials: true,
  },
  features: {
    jobSearch: true,
    jobFiltering: true,
    applicationSubmission: true,
    resumeUpload: true,
  },
  tenant: {
    id: 'ae801acf-6235-4de6-80f9-410ae57eb5f0', // Local tenant ID 
  },
};

// Debug logging helper
window.log = {
  info: (...args) => {
    if (window.APP_CONFIG?.app?.debugLogging) {
      console.log('[APP]', ...args);
    }
  },
  warn: (...args) => {
    if (window.APP_CONFIG?.app?.debugLogging) {
      console.warn('[APP WARNING]', ...args);
    }
  },
  error: (...args) => {
    console.error('[APP ERROR]', ...args);
  },
  debug: (...args) => {
    if (window.APP_CONFIG?.app?.debugLogging) {
      console.log('[APP DEBUG]', ...args);
    }
  },
};
