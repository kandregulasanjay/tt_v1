import React from 'react';
import vision from '../assets/webp/vision.webp';
import target from '../assets/webp/target.webp';

const VisionMissionSection = () => {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row mt-0 px-4 sm:px-6 lg:px-36">
        <div className="flex-1 bg-[#3dc1b1] flex flex-col items-center justify-center p-8 text-center min-h-[350px] md:min-h-[400px]">
          <img
            src={vision}
            alt="Vision"
            className="w-20 h-20 mb-4"
          />
          <h3 className="text-white text-2xl font-bold mb-2">Vision Statement</h3>
          <p className="text-white text-base">
            Transforma Technologies envisions a future where AI-driven innovation empowers businesses to achieve unparalleled success.
          </p>
        </div>
        {/* Mission */}
        <div className="flex-1 bg-[#484848] flex flex-col items-center justify-center p-8 text-center min-h-[350px] md:min-h-[400px]">
          <img
            src={target}
            alt="Mission"
            className="w-20 h-20 mb-4"
          />
          <h3 className="text-white text-2xl font-bold mb-2">Mission Statement</h3>
          <p className="text-white text-base">
            Our mission is to deliver cutting-edge software solutions that streamline operations, enhance customer experiences, and drive measurable growth.
          </p>
        </div>
      </section>
    </>
  );
};

export default VisionMissionSection;
