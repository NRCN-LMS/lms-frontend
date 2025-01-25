import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaImages, FaRegNewspaper, FaPhone } from "react-icons/fa";

const MenuBar = () => {
  return (
    <div>
      {/* Desktop Navigation Bar */}
      <nav className="hidden md:flex bg-gray-800 text-white p-4">
        <Link to="/" className="hover:text-gray-400 transition duration-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-400 transition duration-300">
          About Us
        </Link>
        <Link to="/gallery" className="hover:text-gray-400 transition duration-300">
          Gallery
        </Link>
        <Link to="/adoption-form" className="hover:text-gray-400 transition duration-300">
          Adoption Form
        </Link>
        <Link to="/contact" className="hover:text-gray-400 transition duration-300">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white shadow-lg md:hidden">
        <div className="flex justify-around p-4">
          <Link to="/" className="flex flex-col items-center">
            <FaHome className="text-2xl" />
            <span className="text-sm">Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center">
            <FaInfoCircle className="text-2xl" />
            <span className="text-sm">About Us</span>
          </Link>
          <Link to="/gallery" className="flex flex-col items-center">
            <FaImages className="text-2xl" />
            <span className="text-sm">Gallery</span>
          </Link>
          <Link to="/adoption-form" className="flex flex-col items-center">
            <FaRegNewspaper className="text-2xl" />
            <span className="text-sm">Adoption Form</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center">
            <FaPhone className="text-2xl" />
            <span className="text-sm">Contact Us</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
