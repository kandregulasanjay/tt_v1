import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Parse markdown-style bullet points and convert to structured format
 */
const parseBulletPoints = (text) => {
  if (!text) return [];
  if (Array.isArray(text)) return text;

  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0 && (line.startsWith('•') || line.startsWith('-')))
    .map(line => line.replace(/^[•\-]\s*/, '').trim());
};

/**
 * Extract sections from description text
 */
const extractSections = (description) => {
  if (!description) return {};

  const sections = {
    overview: '',
    responsibilities: [],
    qualifications: [],
    preferredSkills: [],
  };

  // Split by section headers
  const parts = description.split(/\*\*(?:Responsibilities|Qualifications|Preferred Skills):\*\*/i);

  if (parts.length > 0) {
    sections.overview = parts[0].trim();
  }

  // Extract each section
  const responsibilitiesMatch = description.match(/\*\*Responsibilities:\*\*([\s\S]*?)(?=\*\*|$)/i);
  if (responsibilitiesMatch) {
    sections.responsibilities = parseBulletPoints(responsibilitiesMatch[1]);
  }

  const qualificationsMatch = description.match(/\*\*Qualifications:\*\*([\s\S]*?)(?=\*\*|$)/i);
  if (qualificationsMatch) {
    sections.qualifications = parseBulletPoints(qualificationsMatch[1]);
  }

  const preferredMatch = description.match(/\*\*Preferred Skills:\*\*([\s\S]*?)(?=$)/i);
  if (preferredMatch) {
    sections.preferredSkills = parseBulletPoints(preferredMatch[1]);
  }

  return sections;
};

const JobDetailModal = ({ job, isOpen, onClose, onApplyClick }) => {
  if (!job) return null;

  // Extract structured data from description
  const sections = extractSections(job.description);
  const requirements = job.metadata?.qualifications || parseBulletPoints(job.requirements);
  const responsibilities = job.metadata?.responsibilities || parseBulletPoints(job.responsibilities);
  const preferredSkills = job.metadata?.preferred_skills || [];
  const tags = job.metadata?.metadata?.tags || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#3dc1b1] to-[#35b0a1] text-white p-6 flex justify-between items-start">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                <p className="text-teal-100 text-lg mb-3">{job.location}</p>

                {/* Quick Info Pills */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {job.experience}
                  </span>
                  {job.remote_allowed && (
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      Remote Available
                    </span>
                  )}
                  {job.salary_min && job.salary_max && (
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {job.currency} {job.salary_min.toLocaleString()}-{job.salary_max.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="text-white hover:bg-white/20 p-2 rounded-full transition ml-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Tech Tags */}
              {tags && tags.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold text-gray-800 mb-3">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#3dc1b1]/10 text-[#3dc1b1] px-3 py-1 rounded-full text-sm font-semibold border border-[#3dc1b1]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview */}
              {sections.overview && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Role</h2>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    {sections.overview.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities */}
              {(responsibilities.length > 0 || sections.responsibilities.length > 0) && (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-8 bg-[#3dc1b1] rounded mr-3"></div>
                    <h2 className="text-2xl font-bold text-gray-800">Responsibilities</h2>
                  </div>
                  <ul className="space-y-3">
                    {(responsibilities.length > 0 ? responsibilities : sections.responsibilities).map(
                      (responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#3dc1b1] font-bold mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{responsibility}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Requirements / Qualifications */}
              {requirements.length > 0 && (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-8 bg-[#3dc1b1] rounded mr-3"></div>
                    <h2 className="text-2xl font-bold text-gray-800">Required Qualifications</h2>
                  </div>
                  <ul className="space-y-3">
                    {requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#3dc1b1] font-bold mr-3 mt-1">★</span>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Preferred Skills */}
              {preferredSkills.length > 0 && (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-8 bg-gray-400 rounded mr-3"></div>
                    <h2 className="text-2xl font-bold text-gray-800">Preferred Skills</h2>
                  </div>
                  <ul className="space-y-3">
                    {preferredSkills.map((skill, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 font-bold mr-3 mt-1">◇</span>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Salary Info */}
              {(job.salary_min || job.salary_max) && (
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#3dc1b1]">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Compensation</h3>
                  <p className="text-gray-700 text-lg">
                    {job.currency} {job.salary_min?.toLocaleString() || 'N/A'} - {job.salary_max?.toLocaleString() || 'N/A'} per year
                  </p>
                </div>
              )}

              {/* Deadline */}
              {job.application_deadline && (
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Application Deadline</h3>
                  <p className="text-gray-700">
                    {new Date(job.application_deadline).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              )}

              {/* Apply Button */}
              <div className="bg-[#3dc1b1] text-white p-6 rounded-lg text-center">
                <p className="mb-4">Ready to apply for this position?</p>
                <button
                  onClick={(e) => {
                    // Prevent event propagation to backdrop
                    e.stopPropagation();
                    // Open application modal with this job
                    if (onApplyClick) {
                      onApplyClick(job);
                    }
                  }}
                  className="bg-white text-[#3dc1b1] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition inline-block"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobDetailModal;
