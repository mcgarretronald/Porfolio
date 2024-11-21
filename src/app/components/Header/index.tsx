"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-gray-900 py-4 shadow-sm pt-7 border-2 border-t-0 border-r-0 border-l-0 ">
      <div className="container flex justify-between items-center relative px-2 md:px-8 align-middle">
        {/* Brand Name */}
        <div className="mr-8">
          <p
            className="md:text-[44px] text-xl text-white font-serif font-bold md:ml-7"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Ronald Mcgarret
          </p>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden cursor-pointer"
        >
          {isOpen ? (
            <MdClose size={30} className="text-white" />
          ) : (
            <MdMenu size={30} className="text-white" />
          )}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 shadow-md z-10 ${isOpen ? "block" : "hidden md:block"
            }`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10 py-4 md:py-0">
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 text-white text-lg focus:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-500 text-white text-lg focus:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 text-white text-lg focus:text-blue-500"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 text-white text-lg focus:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hire Me Button */}
        <div className="hidden lg:block ml-8">
          <a
            href="mailto:mcgarretronald@gmail.com?subject=Hiring Ronald McGarret&body=Dear Ronald,%0D%0A%0D%0AWe are interested in hiring you for a project. Please let us know your availability and provide more details about your services.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]%0D%0A[Your Company Name]%0D%0A[Your Contact Information]"
            className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Hire Me
          </a>

        </div>
      </div>
    </header>
  );
};

export default Header;
