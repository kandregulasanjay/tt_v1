import React from "react";
import VisionMissionSection from "../components/VisionMissionSection";
import AboutUsImage from "../assets/webp/about-us-bg.webp";

const AboutUs = () => {
  return (
    <div className="pb-16">
      <div
        className="w-full h-[90vh] flex items-center justify-center bg-center bg-cover relative"
        style={{ backgroundImage: `url(${AboutUsImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center tracking-wider">
          About Us
        </h1>
      </div>
      {/* Centered Paragraph */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-700">
          At Transforma Technologies, we specialize in transforming industries through innovation. By integrating AI, SaaS platforms, and digital transformation strategies, we design solutions that solve real business challenges.<br /><br />
          Our journey is fueled by a passion for technology, customer-centric design, and a vision to redefine how businesses operate in a connected world.
        </p>
      </div>
      <VisionMissionSection/>
    </div>
  );
};

export default AboutUs;