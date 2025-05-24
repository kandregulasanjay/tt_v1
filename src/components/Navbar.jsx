import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/webp/navbar_logo.webp';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="navbar_logo"
              />
            </Link>
          </div>
          {/* Center Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#3DC1B1] font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#3DC1B1] font-medium">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#3DC1B1] font-medium">Services</Link>
            <Link to="/products" className="text-gray-700 hover:text-[#3DC1B1] font-medium">Products</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-[#3DC1B1] font-medium">Blogs/News</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#3DC1B1] font-medium">Contact Us</Link>
            <Link to="/support-center" className="text-gray-700 hover:text-[#3DC1B1] font-medium">Support/FAQ</Link>
          </div>
          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                // Close icon
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Link to="/login">
              <button className="rounded-full bg-[#3DC1B1] text-white px-6 py-2 font-semibold shadow hover:bg-[#34a99b] transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-[#3DC1B1] font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#3DC1B1] font-medium" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#3DC1B1] font-medium" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/products" className="text-gray-700 hover:text-[#3DC1B1] font-medium" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-[#3DC1B1] font-medium" onClick={() => setMenuOpen(false)}>Blogs/News</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#3DC1B1] font-medium" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link to="/support-center" className="text-gray-700 hover:text-[#3DC1B1] font-medium" onClick={() => setMenuOpen(false)}>Support/FAQ</Link>
            <Link to="/login">
              <button className="rounded-full bg-[#3DC1B1] text-white px-6 py-2 font-semibold shadow hover:bg-[#34a99b] transition w-full mt-2">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;