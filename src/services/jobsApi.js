// Jobs API Service
// Get configuration from window.APP_CONFIG (loaded from /config.js in HTML)
const getConfig = () => {
  if (!window.APP_CONFIG) {
    throw new Error('APP_CONFIG not loaded. Ensure config.js is loaded in index.html');
  }
  return window.APP_CONFIG;
};

const config = getConfig();
const API_BASE_URL = config.api.baseUrl;
const JOBS_ENDPOINT = config.api.endpoints.jobs;
const DEBUG_API = config.app.debugLogging;

/**
 * Log debug information if enabled
 */
const debug = (message, data = null) => {
  if (DEBUG_API) {
    console.log(`[Jobs API] ${message}`, data || '');
  }
};

/**
 * Validate API configuration
 */
const validateConfig = () => {
  if (!API_BASE_URL) {
    throw new Error('VITE_HRMS_API_URL is not configured. Please set it in your .env file');
  }
  debug('API Config', { API_BASE_URL, JOBS_ENDPOINT });
};

/**
 * Fetch all job postings from HRMS API with pagination support
 * Uses the public endpoint (/jobs/public) to fetch jobs from all tenants or a specific tenant
 * @param {number} page - Page number (default: 1)
 * @param {number} limit - Results per page (default: 10, max: 50)
 * @param {string} status - Filter by job status: 'published', 'draft', 'all' (default: 'published')
 * @param {string} tenantId - Optional: Filter jobs by tenant ID (if not provided, shows jobs from all tenants)
 * @returns {Promise<Object>} Object with jobs array, total count, and pagination info
 */
export const fetchJobs = async (page = 1, limit = 10, status = 'published', tenantId = null) => {
  try {
    validateConfig();

    // Validate pagination parameters
    const validPage = Math.max(1, Math.floor(page));
    const validLimit = Math.min(50, Math.max(1, Math.floor(limit)));

    // Build URL with pagination and optional filters
    let url = `${API_BASE_URL}${JOBS_ENDPOINT}?page=${validPage}&limit=${validLimit}`;
    if (status && status !== 'all') {
      url += `&status=${status}`;
    }

    // NOTE: Backend /jobs/public endpoint does NOT support tenant_id parameter
    // Tenant filtering is done client-side in the Career component
    // The backend returns all published jobs, and we filter by tenant_id on the client
    const debugContext = tenantId ? `with client-side tenant filter: ${tenantId}` : 'all tenants (no filter)';
    debug(`Fetching jobs from API ${debugContext}:`, { url, status, tenantIdForClientFilter: tenantId });

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // Note: credentials removed to avoid CORS issues with public endpoints
      // credentials: 'include',
    });

    debug('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      debug('Error response:', errorText);
      throw new Error(`API Error: ${response.status} ${response.statusText}. ${errorText}`);
    }

    const data = await response.json();
    debug('Full API response:', data);

    // Parse paginated response with multiple format support
    let jobs = [];
    let total = 0;
    let returnPage = validPage;
    let returnLimit = validLimit;

    // Handle different response formats
    // Priority 1: Success wrapper with nested paginated data (HRX-Platform standard format)
    // Example: { success: true, data: { data: [], total: 0, page: 1, limit: 20 }, ... }
    if (data.success && data.data) {
      if (data.data.data && Array.isArray(data.data.data)) {
        debug(`Extracted ${data.data.data.length} jobs from HRX success wrapper`);
        jobs = data.data.data;
        total = data.data.total || jobs.length;
        returnPage = data.data.page || validPage;
        returnLimit = data.data.limit || validLimit;
      } else if (Array.isArray(data.data)) {
        debug(`Extracted ${data.data.length} jobs from success wrapper data`);
        jobs = data.data;
        total = data.total || jobs.length;
      }
    }
    // Priority 2: Paginated response with data wrapper (HRMS standard)
    else if (data.data && data.data.data && Array.isArray(data.data.data)) {
      debug(`Extracted ${data.data.data.length} jobs from nested paginated response`);
      jobs = data.data.data;
      total = data.data.total || jobs.length;
      returnPage = data.data.page || validPage;
      returnLimit = data.data.limit || validLimit;
    }
    else if (data.data && Array.isArray(data.data)) {
      debug(`Extracted ${data.data.length} jobs from paginated response`);
      jobs = data.data;
      total = data.total || jobs.length;
    }
    // Priority 3: Direct array response
    else if (Array.isArray(data)) {
      debug(`Extracted ${data.length} jobs from array response`);
      jobs = data;
      total = data.length;
    }
    // Priority 4: result wrapper
    else if (data.result && Array.isArray(data.result)) {
      debug(`Extracted ${data.result.length} jobs from result wrapper`);
      jobs = data.result;
      total = data.result.length;
    }
    // Fallback: return as-is
    else {
      debug('Warning: Unexpected response format', data);
      jobs = [];
      total = 0;
    }

    // Return paginated response with metadata
    const calculatedTotalPages = returnLimit > 0 ? Math.ceil(total / returnLimit) : 1;

    debug('API Response Summary:', {
      jobsCount: jobs.length,
      total,
      page: returnPage,
      limit: returnLimit,
      totalPages: calculatedTotalPages,
    });

    return {
      jobs,
      total,
      page: returnPage,
      limit: returnLimit,
      hasMore: (returnPage * returnLimit) < total,
      totalPages: calculatedTotalPages,
    };
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    throw error;
  }
};

/**
 * Fetch a single job posting by ID
 * @param {string} jobId - The job ID
 * @returns {Promise<Object>} Job object
 */
export const fetchJobById = async (jobId) => {
  try {
    validateConfig();

    const url = `${API_BASE_URL}${JOBS_ENDPOINT}/${jobId}`;
    debug(`Fetching job ${jobId} from:`, url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // Note: credentials removed to avoid CORS issues with public endpoints
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} ${response.statusText}. ${errorText}`);
    }

    const data = await response.json();
    debug(`Job ${jobId} fetched successfully`);
    return data.data || data;
  } catch (error) {
    console.error(`Failed to fetch job ${jobId}:`, error);
    throw error;
  }
};

/**
 * Apply for a job posting
 * @param {string} jobId - The job ID
 * @param {FormData|Object} applicationData - Applicant data (can be FormData for file uploads)
 * @returns {Promise<Object>} Application response
 */
export const applyForJob = async (jobId, applicationData) => {
  try {
    validateConfig();

    // Use the dedicated apply endpoint, not /jobs/public
    const url = `${API_BASE_URL}/jobs/${jobId}/apply`;
    debug(`Submitting application for job ${jobId} to URL:`, url);

    // Determine if we're sending FormData (with files) or JSON
    const isFormData = applicationData instanceof FormData;

    // Debug: Log what we're sending
    if (isFormData) {
      debug('Sending FormData with fields:');
      for (let [key, value] of applicationData.entries()) {
        if (value instanceof File) {
          debug(`  ${key}: File(${value.name})`);
        } else {
          debug(`  ${key}: ${value}`);
        }
      }
    } else {
      debug('Sending JSON payload:', applicationData);
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: isFormData ? {} : { 'Content-Type': 'application/json' }, // Let browser set Content-Type for FormData
      // Note: credentials removed to avoid CORS issues with public endpoints
      body: isFormData ? applicationData : JSON.stringify(applicationData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      debug('Application submission error:', errorText);
      throw new Error(`API Error: ${response.status} ${response.statusText}. ${errorText}`);
    }

    const data = await response.json();
    debug(`Application submitted successfully for job ${jobId}`);
    return data.data || data;
  } catch (error) {
    console.error(`Failed to apply for job ${jobId}:`, error);
    throw error;
  }
};

/**
 * Generate presigned URL for resume upload to S3
 * Allows direct browser upload to S3 without server intermediary
 * @param {Object} params - Upload parameters
 * @param {string} params.jobId - Job ID the candidate is applying for
 * @param {string} params.fileName - Name of the resume file
 * @param {string} params.fileType - MIME type of the file (application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document)
 * @param {string} params.tenantId - Tenant ID (required for tenant resolution)
 * @returns {Promise<Object>} Presigned upload URL and metadata
 */
export const generatePresignedUploadUrl = async ({
  jobId,
  fileName,
  fileType,
  tenantId,
}) => {
  try {
    validateConfig();

    const resumeCollectionEndpoint = '/resume-collection';
    const url = `${API_BASE_URL}${resumeCollectionEndpoint}/generate-presigned-url`;

    debug('Generating presigned URL for resume upload:', { jobId, fileName, fileType, tenantId });

    const body = {
      job_id: jobId,
      file_name: fileName,
      file_type: fileType,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    // Add X-Tenant-Id header for tenant resolution
    if (tenantId) {
      headers['X-Tenant-Id'] = tenantId;
      debug('Added X-Tenant-Id header:', tenantId);
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      debug('Presigned URL generation error:', errorText);
      throw new Error(`API Error: ${response.status} ${response.statusText}. ${errorText}`);
    }

    const data = await response.json();
    debug('Presigned URL generated successfully');

    // Extract presigned data from response
    return {
      uploadUrl: data.data?.upload_url || data.data?.presignedUrl,
      fileKey: data.data?.file_key || data.data?.key,
      bucket: data.data?.bucket,
      expiresIn: data.data?.expires_in || 900,
      expiresAt: data.data?.expires_at,
    };
  } catch (error) {
    console.error('Failed to generate presigned URL:', error);
    throw error;
  }
};

/**
 * Upload resume file directly to S3 using presigned URL
 * This bypasses the server and uploads directly to S3
 * @param {string} presignedUrl - Presigned URL from generatePresignedUploadUrl
 * @param {File} file - The resume file to upload
 * @param {Function} onProgress - Optional progress callback (event) => {}
 * @returns {Promise<void>}
 */
export const uploadResumeToS3 = async (presignedUrl, file, onProgress = null) => {
  try {
    debug('Uploading resume to S3 via presigned URL');

    const xhr = new XMLHttpRequest();

    // Track upload progress
    if (onProgress) {
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          onProgress({
            loaded: event.loaded,
            total: event.total,
            percent: percentComplete,
          });
        }
      });
    }

    return new Promise((resolve, reject) => {
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          debug('Resume uploaded to S3 successfully');
          resolve();
        } else {
          reject(new Error(`S3 Upload failed: ${xhr.status} ${xhr.statusText}`));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Resume upload to S3 failed: Network error'));
      });

      xhr.addEventListener('abort', () => {
        reject(new Error('Resume upload to S3 was cancelled'));
      });

      xhr.open('PUT', presignedUrl);
      xhr.setRequestHeader('Content-Type', file.type || 'application/octet-stream');
      xhr.send(file);
    });
  } catch (error) {
    console.error('Failed to upload resume to S3:', error);
    throw error;
  }
};

/**
 * Finalize presigned upload and trigger resume parsing
 * Called after file is uploaded to S3 via presigned URL
 * This endpoint will parse the resume and create candidate/application records
 * @param {Object} params - Finalization parameters
 * @param {string} params.fileKey - S3 file key returned from generatePresignedUploadUrl
 * @param {string} params.fileName - Name of the uploaded file
 * @param {string} params.jobId - Job ID the candidate is applying for
 * @param {Object} params.applicantInfo - Applicant information {first_name, last_name, email, phone}
 * @param {string} params.tenantId - Tenant ID (required for tenant resolution)
 * @returns {Promise<Object>} Parsed candidate and application data
 */
export const finalizeResumeUpload = async ({
  fileKey,
  fileName,
  jobId,
  applicantInfo = {},
  tenantId,
}) => {
  try {
    validateConfig();

    const resumeCollectionEndpoint = '/resume-collection';
    const url = `${API_BASE_URL}${resumeCollectionEndpoint}/finalize-presigned-upload`;

    debug('Finalizing resume upload and parsing:', { fileKey, fileName, jobId, tenantId });

    const body = {
      file_key: fileKey,
      file_name: fileName,
      job_id: jobId,
      applicant_info: applicantInfo,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    // Add X-Tenant-Id header for tenant resolution
    if (tenantId) {
      headers['X-Tenant-Id'] = tenantId;
      debug('Added X-Tenant-Id header for finalize:', tenantId);
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      debug('Resume finalization error:', errorText);
      throw new Error(`API Error: ${response.status} ${response.statusText}. ${errorText}`);
    }

    const data = await response.json();
    debug('Resume finalized and parsed successfully');

    // Extract parsed data from response
    return {
      candidateId: data.data?.candidate?.id || data.data?.candidate_id,
      candidate: data.data?.candidate,
      jobApplicationId: data.data?.jobApplication?.id || data.data?.job_application_id,
      jobApplication: data.data?.jobApplication,
      parsedData: data.data?.parsedData || data.data?.parsed_data,
      success: data.success || true,
      message: data.message,
    };
  } catch (error) {
    console.error('Failed to finalize resume upload:', error);
    throw error;
  }
};
