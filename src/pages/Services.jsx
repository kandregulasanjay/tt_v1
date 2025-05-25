import React from "react";
import servicesBg from "../assets/webp/services-bg.webp"; 
import roboPerson from '../assets/webp/robo_person.webp';
import predictiveAnalytics from '../assets/webp/predictiveAnalaytics.webp';
import bpa from '../assets/webp/BPA.webp';

const Services = () => {
  return (
    <div >
      {/* Hero Section with BG Image */}
      <div
        className="w-full h-[90vh] flex items-center justify-center bg-center bg-cover relative"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center tracking-wider">
          Our Services
        </h1>
      </div>
      {/* Centered Paragraph */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-700">
          Our portfolio of services is designed to drive your business forward using smart, scalable, and AI-powered tools:
        </p>
      </div>

      {/* Service 1: Image Left, Text Right */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 mb-8 md:mb-0">
        <div className="md:w-1/2 flex justify-center">
          <img src={roboPerson} alt="Agentic Chatbots" className="w-full shadow" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start mt-6 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 ml-4 md:ml-4">Agentic Chatbots</h2>
          <p className="text-gray-700 text-lg ml-4 md:ml-4">
            Provide 24/7 intelligent support with human-like conversation flows.
          </p>
        </div>
      </div>

      {/* Service 2: Text Left, Image Right */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center px-4 mb-8 md:mb-0">
        <div className="md:w-1/2 flex justify-center">
          <img src={predictiveAnalytics} alt="Predictive Analytics" className="w-full shadow" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start mt-6 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 ml-4 md:ml-0">Predictive Analytics</h2>
          <p className="text-gray-700 text-lg ml-4 md:ml-0">
            Turn data into actionable insights to make informed business decisions.
          </p>
        </div>
      </div>

      {/* Service 3: Image Left, Text Right */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 mb-8 md:mb-0">
        <div className="md:w-1/2 flex justify-center">
          <img src={bpa} alt="Business Process Automation" className="w-full shadow" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start mt-6 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 ml-4 md:ml-4">Business Process Automation</h2>
          <p className="text-gray-700 text-lg ml-4 md:ml-4">
            Optimize operations and reduce manual overhead with intelligent automation.
          </p>
        </div>
      </div>

      {/* Final Centered Paragraph */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-700 font-semibold">
          Let us help you integrate future-ready technologies that enhance performance and accelerate growth.
        </p>
      </div>
    </div>
  );
};

export default Services;