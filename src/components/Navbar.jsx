"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#D9D9D9] p-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="text-black w-16 cursor-pointer font-bold text-[20px]">
                  SUSTAINABLE transportation
                </div>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white */}
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:font-black "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only"></span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <div className="text-black hover:font-black hover:text-black cursor-pointer px-3 py-2 rounded-md text-[20px] font-medium">
                    Home
                  </div>
                </Link>
                <Link href="/About">
                  <div className="text-black hover:font-black hover:text-black cursor-pointer px-3 py-2 rounded-md text-[20px] font-medium">
                    About
                  </div>
                </Link>
                <Link href="/Contact">
                  <div className="text-black hover:font-black hover:text-black cursor-pointer px-3 py-2 rounded-md text-[20px] font-medium">
                    Contact
                  </div>
                </Link>
                <Link href="/Support">
                  <div className="text-black hover:font-black hover:text-black cursor-pointer px-3 py-2 rounded-md text-[20px] font-medium">
                    Support
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <div
                onClick={closeMenu}
                className="text-black hover:font-black block px-3 py-2 rounded-md text-[20px] font-medium"
              >
                Home
              </div>
            </Link>
            <Link href="/About">
              <div
                onClick={closeMenu}
                className="text-black hover:font-black block px-3 py-2 rounded-md text-[20px] font-medium"
              >
                About
              </div>
            </Link>
            <Link href="/Contact">
              <div
                onClick={closeMenu}
                className="text-black hover:font-black block px-3 py-2 rounded-md text-[20px] font-medium"
              >
                Contact
              </div>
            </Link>
            <Link href="/Support">
              <div
                onClick={closeMenu}
                className="text-black hover:font-black block px-3 py-2 rounded-md text-[20px] font-medium"
              >
                Support
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
