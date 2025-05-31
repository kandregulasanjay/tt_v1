import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import VisionMissionSection from './VisionMissionSection';
import roboHand from '../assets/webp/robo_hand.webp';
import roboPerson from '../assets/webp/robo_person.webp';
import robo from '../assets/webp/robo.webp';
import predictiveAnalaytics from '../assets/webp/predictiveAnalaytics.webp';
import analytics from '../assets/webp/analytics.webp';
import bpa from '../assets/webp/BPA.webp';
import automation from '../assets/webp/automation.webp';
import aiChatbot from '../assets/webp/ai-chatbot.webp';
import explore1 from '../assets/webp/explore1.webp';
import explore2 from '../assets/webp/explore2.webp';
import explore3 from '../assets/webp/explore3.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7
    }
  })
};

const HomeAboutUs = () => {
  return (
    <>
      {/* About Us Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12 px-4 sm:px-6 lg:px-36"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={roboHand}
            alt="Robotic Hand"
            className="rounded-tl-3xl rounded-br-3xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
            About Us
          </h2>
          <p className="text-gray-700 text-base mb-6 text-center md:text-left">
            At Transforma Technologies, we specialize in transforming industries through innovation.
            By integrating AI, SaaS platforms, and digital transformation strategies, we design
            solutions that solve real business challenges.
            <br /><br />
            Our journey is fueled by a passion for technology, customer-centric design, and a vision
            to redefine how businesses operate in a connected world.
          </p>
          <Link to="/about">
            <button className="bg-[#3dc1b1] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#35b0a1] transition">
              Read More
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <VisionMissionSection />
      </motion.div>

      {/* Our Services Section */}
      <motion.section
        className="py-16 px-4 sm:px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Our portfolio of services is designed to drive your business forward using smart, scalable, and AI-powered tools:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div
            className="bg-white shadow-lg flex flex-col items-center p-0 relative overflow-visible"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Main image */}
            <div className="w-full relative">
              <img src={roboPerson} alt="Agentic Chatbot" className="w-full h-60 object-cover" />
              {/* Overlapping robo circle */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] z-10">
                <div className="rounded-full bg-white p-2 shadow-lg flex items-center justify-center">
                  <div className="rounded-full bg-[#3dc1b1] w-20 h-20 flex items-center justify-center">
                    <img src={robo} alt="Robo" className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center px-6 pb-8 pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2 mt-8">Agentic Chatbot</h3>
              <p className="text-gray-600 text-center mb-6 text-sm">
                Provide 24/7 intelligent support with human-like conversation flows.
              </p>
              <Link to="/services">
                <button className="bg-[#3dc1b1] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#35b0a1] transition">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="bg-white shadow-lg flex flex-col items-center p-0 relative overflow-visible"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full relative">
              <img src={predictiveAnalaytics} alt="AI Analytics" className="w-full h-60 object-cover" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] z-10">
                <div className="rounded-full bg-white p-2 shadow-lg flex items-center justify-center">
                  <div className="rounded-full bg-[#3dc1b1] w-20 h-20 flex items-center justify-center">
                    <img src={analytics} alt="Robo" className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center px-6 pb-8 pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2 mt-8">Predictive Analytics</h3>
              <p className="text-gray-600 text-center mb-6 text-sm">
                Turn data into actionable insights to make informed business decisions.
              </p>
              <Link to="/services">
                <button className="bg-[#3dc1b1] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#35b0a1] transition">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="bg-white shadow-lg flex flex-col items-center p-0 relative overflow-visible"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full relative">
              <img src={bpa} alt="Automation Suite" className="w-full h-60 object-cover" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] z-10">
                <div className="rounded-full bg-white p-2 shadow-lg flex items-center justify-center">
                  <div className="rounded-full bg-[#3dc1b1] w-20 h-20 flex items-center justify-center">
                    <img src={automation} alt="Robo" className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center px-6 pb-8 pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2 mt-8">Business Process Automation</h3>
              <p className="text-gray-600 text-center mb-6 text-sm">
                Optimize operations and reduce manual overhead with intelligent automation.
              </p>
              <Link to="/services">
                <button className="bg-[#3dc1b1] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#35b0a1] transition">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Flagship Product Section */}
      <motion.section
        className="w-full bg-[#3dc1b1] py-16 px-4 sm:px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center sm:px-6 lg:px-8">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={aiChatbot}
              alt="AI Chatbot"
              className="w-90 max-w-full h-auto shadow-lg"
            />
          </div>
          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12 text-white">
            <span className=" font-light text-2xl tracking-wider">Flagship Product</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">AI-Powered Chatbot Platform</h2>
            <p className="mb-8 text-lg">
              Experience next-generation customer engagement with our AI chatbot solution. Designed for seamless integration and personalization, our chatbot enhances support, sales, and retention across multiple channels.
            </p>
            <Link to="/products">
              <button className="bg-[#484848] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#222] transition">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Explore Our Latest Articles Section */}
      <motion.section
        className="py-16 bg-gray-50"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Explore Our Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article Card 1 */}
            <motion.div
              className="p-3 flex flex-col items-start bg-transparent"
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={explore1} alt="Article 1" className="w-full h-56 rounded-xl object-cover mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-left">Fusce cursus nunc sed <br /> condimentum</h3>
              <Link to="/blogs">
                <button className="mt-4 text-[#3dc1b1] font-semibold underline underline-offset-4 decoration-4 decoration-[#3dc1b1] hover:text-[#35b0a1] transition text-left">
                  Read More
                </button>
              </Link>
            </motion.div>
            {/* Article Card 2 */}
            <motion.div
              className="p-3 flex flex-col items-start bg-transparent"
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={explore2} alt="Article 2" className="w-full h-56  object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-left">Nulla non vulputate turpis, non tincidunt eros</h3>
              <Link to="/blogs">
                <button className="mt-4 text-[#3dc1b1] font-semibold underline underline-offset-4 decoration-4 decoration-[#3dc1b1] hover:text-[#35b0a1] transition text-left">
                  Read More
                </button>
              </Link>
            </motion.div>
            {/* Article Card 3 */}
            <motion.div
              className="p-3 flex flex-col items-start bg-transparent"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={explore3} alt="Article 3" className="w-full h-56  rounded-xl object-cover mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-left">Mauris efficitur tellus vitae auctor auctor</h3>
              <Link to="/blogs">
                <button className="mt-4 text-[#3dc1b1] font-semibold underline underline-offset-4 decoration-4 decoration-[#3dc1b1] hover:text-[#35b0a1] transition text-left">
                  Read More
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HomeAboutUs;
