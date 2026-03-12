/**
 * Maps HRMS API job data to Career page component format
 * This handles field name transformations and data parsing
 */

/**
 * Parse JSON string safely
 */
const parseJsonField = (value, fallback = []) => {
  if (!value) return fallback;
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch (e) {
      // If JSON parsing fails, split by newline or comma
      return value.split('\n').filter(v => v.trim());
    }
  }
  return fallback;
};

/**
 * Map single job from HRMS API format to Career page format
 * @param {Object} apiJob - Job object from HRMS API
 * @returns {Object} Mapped job object for Career component
 */
export const mapJobFromApi = (apiJob) => {
  if (!apiJob || !apiJob.id) {
    return null;
  }

  return {
    // Core fields (required)
    id: apiJob.id,
    title: apiJob.title || 'Untitled Position',
    tenant_id: apiJob.tenant_id || null,
    tenant_name: apiJob.tenant?.name || apiJob.tenant_name || 'Unknown Company',

    // Display fields
    department: apiJob.department?.name || 'General',
    location: apiJob.location || 'Not specified',
    type: apiJob.employment_type || 'Full-time',

    // Experience field (combine min and max)
    experience: formatExperience(apiJob.experience_min, apiJob.experience_max),

    // Description and requirements
    description: apiJob.description || '',
    requirements: parseJsonField(apiJob.requirements, []),

    // Additional fields
    responsibilities: parseJsonField(apiJob.responsibilities, []),
    salary_min: apiJob.salary_min || null,
    salary_max: apiJob.salary_max || null,
    currency: apiJob.currency || 'AED',
    remote_allowed: apiJob.remote_allowed || false,

    // Metadata
    status: apiJob.status || 'draft',
    priority: apiJob.priority || 'medium',
    application_deadline: apiJob.application_deadline || null,

    // Dates
    postedDate: formatDate(apiJob.created_at),
    created_at: apiJob.created_at,
    updated_at: apiJob.updated_at,

    // Stats
    views_count: apiJob.views_count || 0,
    applications_count: apiJob.applications_count || 0,
  };
};

/**
 * Format experience range for display
 */
const formatExperience = (min, max) => {
  if (!min && !max) return 'Not specified';
  if (min && !max) return `${min}+ years`;
  if (!min && max) return `Up to ${max} years`;
  if (min === max) return `${min} years`;
  return `${min}-${max} years`;
};

/**
 * Format date to YYYY-MM-DD format for consistency
 */
const formatDate = (dateString) => {
  if (!dateString) return new Date().toISOString().split('T')[0];

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return new Date().toISOString().split('T')[0];

  return date.toISOString().split('T')[0];
};

/**
 * Map array of jobs from HRMS API format
 * @param {Array} apiJobs - Array of job objects from API
 * @returns {Array} Mapped jobs array
 */
export const mapJobsFromApi = (apiJobs) => {
  if (!Array.isArray(apiJobs)) {
    console.warn('Expected array of jobs, got:', typeof apiJobs);
    return [];
  }

  return apiJobs
    .map(mapJobFromApi)
    .filter(job => job !== null) // Remove invalid entries
    .sort((a, b) => {
      // Sort by posted date (newest first)
      return new Date(b.postedDate) - new Date(a.postedDate);
    });
};

/**
 * Filter jobs by status (e.g., only published jobs)
 */
export const filterJobsByStatus = (jobs, status = 'published') => {
  return jobs.filter(job => job.status === status);
};

/**
 * Filter jobs by location
 */
export const filterJobsByLocation = (jobs, location) => {
  return jobs.filter(job =>
    job.location.toLowerCase().includes(location.toLowerCase())
  );
};

/**
 * Filter jobs by department
 */
export const filterJobsByDepartment = (jobs, department) => {
  return jobs.filter(job =>
    job.department.toLowerCase().includes(department.toLowerCase())
  );
};

/**
 * Search jobs by title, description, or requirements
 */
export const searchJobs = (jobs, searchTerm) => {
  const term = searchTerm.toLowerCase();
  return jobs.filter(job =>
    job.title.toLowerCase().includes(term) ||
    job.description.toLowerCase().includes(term) ||
    job.requirements.some(req => req.toLowerCase().includes(term))
  );
};
