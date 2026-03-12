import React from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import logo from "../assets/webp/footer-logo.webp";
import facebook from "../assets/webp/facebook.webp";
import twitter from "../assets/webp/twitter.webp";
import instagram from "../assets/webp/instagram.webp";

const Footer = () => {
  const APK_DOWNLOAD_URL = "https://tranforma-ai.s3.me-central-1.amazonaws.com/downlaods/app-release.apk";

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
            <li><Link to="/home" className="hover:text-[#3dc1b1] transition font-light">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#3dc1b1] transition font-light">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#3dc1b1] transition font-light">Services</Link></li>
            <li><Link to="/products" className="hover:text-[#3dc1b1] transition font-light">Products</Link></li>
            <li><Link to="/blogs" className="hover:text-[#3dc1b1] transition font-light">Blog News</Link></li>
            <li><Link to="/contact" className="hover:text-[#3dc1b1] transition font-light">Contact Us</Link></li>
            <li><Link to="/support-center" className="hover:text-[#3dc1b1] transition font-light">Support/FAQ</Link></li>
          </ul>
        </div>
        {/* Right: Contact Info + App Download */}
        <div className="flex flex-col items-start flex-1">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2 font-light">UAE, DUBAI</p>
          {/* <p className="mb-2 font-light">T. 123-456-7890</p> */}
          <p className="mb-2 font-light">
            E. <a href="mailto:it@transformatechnologies.com" className="hover:text-[#3dc1b1] transition">it@transforma-ai.com</a>
          </p>

          {/* Download Mobile App Section */}
          <div className="mt-6 pt-6 border-t border-gray-700 w-full">
            <h3 className="text-lg font-semibold mb-3">Download Mobile App</h3>
            <div className="flex flex-col items-center bg-white p-4 rounded-lg" aria-label="QR code to download Roots HCM mobile app">
              <QRCode
                value={APK_DOWNLOAD_URL}
                size={128}
                bgColor="#ffffff"
                fgColor="#161616"
                level="M"
                title="Scan to download Roots HCM app"
              />
              <p className="text-xs text-gray-700 mt-3 text-center font-medium">
                Scan to download<br />Roots HCM
              </p>
            </div>
            <a
              href={APK_DOWNLOAD_URL}
              className="block text-center mt-3 text-sm text-[#3dc1b1] hover:text-white transition font-light"
              download="roots-hcm.apk"
            >
              Or click to download
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#3dc1b1] text-center text-white py-4 text-sm">
        © Copyright 2025 Transforma Technologies, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;