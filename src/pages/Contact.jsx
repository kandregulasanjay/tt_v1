import React, { useState } from "react";
import contact from "../assets/webp/contact-bg.webp";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Hero Section with BG Image */}
      <div
        className="w-full h-[90vh] flex flex-col items-center justify-center bg-center bg-cover relative"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-bold text-center tracking-wider">
          Contact Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 relative z-20">
        <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-800 mb-4 mt-12">
          Let's Connect
        </h2>
        <p className="text-center text-2xl text-gray-700 mb-10">
          Have questions, need support, or want to explore partnership opportunities? <br /> We’d love to hear from you.
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Left: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-3/5 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name*"
              className="w-full px-5 py-5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3dc1b1] text-gray-800"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email*"
              className="w-full px-5 py-5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3dc1b1] text-gray-800"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone*"
              className="w-full px-5 py-5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3dc1b1] text-gray-800"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Message*"
              rows={4}
              className="w-full px-5 py-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3dc1b1] text-gray-800 resize-none"
            />
            <button
              type="submit"
              className="w-full  px-5 bg-[#484848] text-white py-5 rounded-full font-bold shadow hover:bg-[#222] transition self-center mt-2 tracking-wider"
            >
              Send
            </button>
          </form>
          {/* Right: Contact Information */}
          <div className="w-full md:w-2/5 bg-[#3dc1b1] flex flex-col justify-start items-center p-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Contact Information</h3>
            <div className="flex items-center mb-6 w-full">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-transparent mr-4">
                <img
                  src="src/assets/email.png"
                  alt="Email"
                  className="w-4 h-4"
                />
              </div>
              <div>
                <div className="text-white text-lg font-semibold">Email Us:</div>
                <div className="text-white text-base break-all">it@transformatechnologies.com</div>
              </div>
            </div>
            <p className="text-white text-sm text-center">
              We typically respond within 24 business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;