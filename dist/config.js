const getEnvVar = (key, defaultValue = null) => {
  const value = window.__ENV__?.[key];
  if (value === undefined || value === null) return defaultValue;
  if (value === 'null') return null;
  return value;
};

const API_BASE_URL = getEnvVar('HRMS_API_URL', 'https://demo-hcm.roots-cloud.com/api/v1');
const JOBS_ENDPOINT = getEnvVar('JOBS_ENDPOINT', '/jobs/public');
const HEALTH_ENDPOINT = getEnvVar('HEALTH_ENDPOINT', '/health');
const APPLY_ENDPOINT = getEnvVar('APPLY_ENDPOINT', '/apply');

window.APP_CONFIG = {
  api: {
    baseUrl: API_BASE_URL,

    // API Endpoints - all derived from environment variables
    endpoints: {
      jobs: JOBS_ENDPOINT,
      jobById: (jobId) => `${JOBS_ENDPOINT}/${jobId}`,
      applyJob: (jobId) => `${JOBS_ENDPOINT}/${jobId}${APPLY_ENDPOINT}`,
      health: HEALTH_ENDPOINT
    },

    // API Request Settings - all from environment
    timeout: getEnvVar('API_TIMEOUT', 30000),
    retries: getEnvVar('API_RETRIES', 3),
    retryDelay: getEnvVar('API_RETRY_DELAY', 1000),
  },

  // Application Settings - all from environment
  app: {
    name: getEnvVar('APP_NAME', 'Transforma AI'),
    version: getEnvVar('APP_VERSION', '1.0.0'),
    environment: getEnvVar('APP_ENVIRONMENT', 'production'),
    debugLogging: getEnvVar('DEBUG_API', false),
  },

  // CORS Settings - all from environment
  cors: {
    origin: getEnvVar('CORS_ORIGIN', 'https://transforma-ai.com'),
    credentials: getEnvVar('CORS_CREDENTIALS', true),
  },

  // Feature Flags - all from environment
  features: {
    jobSearch: getEnvVar('FEATURE_JOB_SEARCH', true),
    jobFiltering: getEnvVar('FEATURE_JOB_FILTERING', true),
    applicationSubmission: getEnvVar('FEATURE_APPLICATION_SUBMISSION', true),
    resumeUpload: getEnvVar('FEATURE_RESUME_UPLOAD', true),
  },

  // Tenant Configuration - from environment
  tenant: {
    id: getEnvVar('TENANT_ID', null),
  },
};

// Production logging (minimal)
window.log = {
  info: (...args) => {
    // Silently ignore in production
  },
  warn: (...args) => {
    console.warn('[APP]', ...args);
  },
  error: (...args) => {
    console.error('[APP ERROR]', ...args);
  },
  debug: (...args) => {
    // Disabled in production
  },
};
