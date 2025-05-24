import React from "react";
import SupportCenterImage from "../assets/webp/support-center-bg.webp";

const SupportCenter = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with BG Image */}
      <div
        className="w-full h-[90vh] flex flex-col items-center justify-center bg-center bg-cover relative"
        style={{ backgroundImage: `url(${SupportCenterImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-bold text-center tracking-wider">
          Support Center
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 mt-0 relative z-20">
        <p className="text-center text-lg text-gray-700 mb-8 mt-12">
         Looking for answers? Our FAQ and knowledge base provide support to help you get the most out of our products.
        </p>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Topics include</h3>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Feature 1 */}
          <div className="flex items-center bg-[#3dc1b1]  p-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#3dc1b1] mr-6">
              01
            </div>
            <span className="text-white text-lg font-semibold">Account setup and onboarding</span>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center bg-[#484848] p-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#484848] mr-6">
              02
            </div>
            <span className="text-white text-lg font-semibold">Integration guides</span>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center bg-[#484848] p-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#484848] mr-6">
              03
            </div>
            <span className="text-white text-lg font-semibold">Troubleshooting tips</span>
          </div>
          {/* Feature 4 */}
          <div className="flex items-center bg-[#3dc1b1] p-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#3dc1b1] mr-6">
              04
            </div>
            <span className="text-white text-lg font-semibold">Feature tutorials</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;