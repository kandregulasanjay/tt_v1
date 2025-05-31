import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import servicesBg from "../assets/webp/services-bg.webp"; 
import roboPerson from '../assets/webp/robo_person.webp';
import predictiveAnalytics from '../assets/webp/predictiveAnalaytics.webp';
import bpa from '../assets/webp/BPA.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Services = () => {
  return (
    <div>
      {/* Hero Section with BG Image */}
      <motion.div
        className="w-full h-[90vh] flex items-center justify-center bg-center bg-cover relative"
        style={{ backgroundImage: `url(${servicesBg})` }}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center ">
          Our Services
        </h1>
      </motion.div>
      {/* Centered Paragraph */}
      <motion.div
        className="max-w-3xl mx-auto px-4 py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-center text-lg text-gray-700">
          Our portfolio of services is designed to drive your business forward using smart, scalable, and AI-powered tools:
        </p>
      </motion.div>

      {/* Service 1: Image Left, Text Right */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 mb-8 md:mb-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="md:w-1/2 flex justify-center">
          <img src={roboPerson} alt="Agentic Chatbots" className="w-full shadow" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start mt-6 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 ml-4 md:ml-4">Agentic Chatbots</h2>
          <p className="text-gray-700 text-lg ml-4 md:ml-4">
            Provide 24/7 intelligent support with human-like conversation flows.
          </p>
        </div>
      </motion.div>

      {/* Service 2: Text Left, Image Right */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center px-4 mb-8 md:mb-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="md:w-1/2 flex justify-center">
          <img src={predictiveAnalytics} alt="Predictive Analytics" className="w-full shadow" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start mt-6 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 ml-4 md:ml-0">Predictive Analytics</h2>
          <p className="text-gray-700 text-lg ml-4 md:ml-0">
            Turn data into actionable insights to make informed business decisions.
          </p>
        </div>
      </motion.div>

      {/* Service 3: Image Left, Text Right */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 mb-8 md:mb-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="md:w-1/2 flex justify-center">
          <img src={bpa} alt="Business Process Automation" className="w-full shadow" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start mt-6 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 ml-4 md:ml-4">Business Process Automation</h2>
          <p className="text-gray-700 text-lg ml-4 md:ml-4">
            Optimize operations and reduce manual overhead with intelligent automation.
          </p>
        </div>
      </motion.div>

      {/* Final Centered Paragraph */}
      <motion.div
        className="max-w-3xl mx-auto px-4 py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-center text-lg text-gray-700">
          Let us help you integrate future-ready technologies that enhance performance and accelerate growth.
        </p>
      </motion.div>
    </div>
  );
};

export default Services;