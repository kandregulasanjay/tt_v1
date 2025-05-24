import React from "react";
import logo from "../assets/webp/footer-logo.webp";
import facebook from "../assets/webp/facebook.webp";
import twitter from "../assets/webp/twitter.webp";
import instagram from "../assets/webp/instagram.webp";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white">
      <div className="max-w-7xl mx-auto px-10 py-12 flex flex-col md:flex-row justify-center items-start gap-8">
        {/* Left: Logo & Social */}
        <div className="flex flex-col items-center flex-1 md:self-center">
          <img src={logo} alt="Logo" className="w-42 mb-6" />
          <div className="flex space-x-2 mb-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="w-8 h-8 hover:opacity-80" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={twitter} alt="Twitter" className="w-8 h-8 hover:opacity-80" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={instagram} alt="LinkedIn" className="w-8 h-8 hover:opacity-80" />
            </a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-col items-center flex-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#3dc1b1] transition font-light">Home</a></li>
            <li><a href="/about" className="hover:text-[#3dc1b1] transition font-light">About Us</a></li>
            <li><a href="/services" className="hover:text-[#3dc1b1] transition font-light">Services</a></li>
            <li><a href="/products" className="hover:text-[#3dc1b1] transition font-light">Products</a></li>
            <li><a href="/blogs" className="hover:text-[#3dc1b1] transition font-light">Blog News</a></li>
            <li><a href="/contact" className="hover:text-[#3dc1b1] transition font-light">Contact Us</a></li>
            <li><a href="/support-center" className="hover:text-[#3dc1b1] transition font-light">Support/FAQ</a></li>
          </ul>
        </div>
        {/* Right: Contact Info */}
        <div className="flex flex-col items-start flex-1">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2 font-light">9700 N 91st Street., suite A-115,<br />Scottsdale AZ 85258</p>
          <p className="mb-2 font-light">T. 123-456-7890</p>
          <p className="mb-2 font-light">
            E. <a href="mailto:it@transformatechnologies.com" className="hover:text-[#3dc1b1] transition">it@transformatechnologies.com</a>
          </p>
        </div>
      </div>
      <div className="bg-[#3dc1b1] text-center text-white py-4 text-sm">
        © Copyright 2025 Transforma Technologies, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;