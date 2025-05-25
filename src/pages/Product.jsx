import React from "react";
import products from "../assets/webp/products-bg.webp"; 

const Product = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with BG Image */}
      <div
        className="w-full h-[90vh] flex flex-col items-center justify-center bg-center bg-cover relative"
        style={{ backgroundImage: `url(${products})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-bold text-center">
          Products
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 mt-0 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 mt-12">
          AI-Powered Chatbot Platform
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Experience next-generation customer engagement with our AI chatbot solution. Designed for seamless integration and personalization, our chatbot enhances support, sales, and retention across multiple channels.
        </p>
        <div className="flex justify-center mb-10">
          <img
            src={products}
            alt="Products"
            className="w-full h-auto rounded-2xl shadow"
          />
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Key Features</h3>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Feature 1 */}
          <div className="flex items-center bg-[#3dc1b1]  p-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#3dc1b1] mr-6">
              01
            </div>
            <span className="text-white text-lg font-semibold">Natural Language Processing</span>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center bg-[#484848] p-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#484848] mr-6">
              02
            </div>
            <span className="text-white text-lg font-semibold">Multilingual Support</span>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center bg-[#484848] p-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#484848] mr-6">
              03
            </div>
            <span className="text-white text-lg font-semibold">CRM & ERP Integrations</span>
          </div>
          {/* Feature 4 */}
          <div className="flex items-center bg-[#3dc1b1] p-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#3dc1b1] mr-6">
              04
            </div>
            <span className="text-white text-lg font-semibold">Real-time Insights & Reporting</span>
          </div>
        </div>
        <p className="text-center text-lg text-gray-700 font-semibold mb-12">
          Discover how our chatbot is redefining customer interaction.
        </p>
      </div>
    </div>
  );
};

export default Product;