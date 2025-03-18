import React, { useState } from "react";
import {
  FaBars,
  FaBook,
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-teal-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Booking App
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="flex items-center hover:text-gray-300">
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link to="/book" className="flex items-center hover:text-gray-300">
            <FaBook className="mr-2" />
            Book a Room
          </Link>
          <Link
            to="/bookings"
            className="flex items-center hover:text-gray-300"
          >
            <FaBook className="mr-2" />
            View Bookings
          </Link>

          {!token ? (
            <Link to="/login" className="flex items-center hover:text-gray-300">
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center hover:text-gray-300"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          )}
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden p-4 space-y-4">
          <Link to="/" className="flex items-center hover:text-gray-300">
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link to="/book" className="flex items-center hover:text-gray-300">
            <FaBook className="mr-2" />
            Book a Room
          </Link>
          <Link
            to="/bookings"
            className="flex items-center hover:text-gray-300"
          >
            <FaBook className="mr-2" />
            View Bookings
          </Link>

          {/* Conditionally render Login or Logout link */}
          {!token ? (
            <Link to="/login" className="flex items-center hover:text-gray-300">
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center hover:text-gray-300"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
