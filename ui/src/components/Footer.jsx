import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing React Icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white pt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="text-2xl font-bold mb-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Booking App
            </Link>
          </div>
          <p className="text-gray-300 text-center md:text-left">
            Discover your perfect stay with the best prices and amenities at
            your fingertips.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-teal-700 py-4 mt-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-200">
          <p>&copy; 2025 Booking App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
