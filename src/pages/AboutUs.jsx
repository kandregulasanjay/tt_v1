import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import VisionMissionSection from "../components/VisionMissionSection";
import AboutUsImage from "../assets/webp/about-us-bg.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const AboutUs = () => {
  return (
    <div className="pb-16">
      <motion.div
        className="w-full h-[90vh] flex items-center justify-center bg-center bg-cover relative"
        style={{ backgroundImage: `url(${AboutUsImage})` }}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center">
          About Us
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
        <p className=" font-para text-center text-lg text-gray-700">
          At Transforma Technologies, we specialize in transforming industries
          through innovation. By integrating AI, SaaS platforms, and digital
          transformation strategies, we design solutions that solve real business
          challenges.
          <br />
          <br />
          Our journey is fueled by a passion for technology, customer-centric
          design, and a vision to redefine how businesses operate in a connected
          world.
        </p>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <VisionMissionSection />
      </motion.div>
    </div>
  );
};

export default AboutUs;