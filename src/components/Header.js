import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">AIVidha </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-blue-600`}
      >
        <a
          href="#home"
          className="block text-white py-2 px-4 hover:bg-blue-700"
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-white py-2 px-4 hover:bg-blue-700"
        >
          About
        </a>
        <a
          href="#services"
          className="block text-white py-2 px-4 hover:bg-blue-700"
        >
          Services
        </a>
        <a
          href="#contact"
          className="block text-white py-2 px-4 hover:bg-blue-700"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
