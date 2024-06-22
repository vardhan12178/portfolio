import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-black via-purple-800 to-black text-white p-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
       
        <Link to="/"><div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-violet-600 font-bold">
            B
          </div></Link>
          <Link to="/"><h1 className="text-xl font-bold">BalaVardhan</h1></Link>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex justify-end items-center space-x-6">
            <li>
              <Link
                to="/"
                className="text-white hover:underline hover:text-purple-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="text-white hover:underline hover:text-purple-300 transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-white hover:underline hover:text-purple-300 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="text-white hover:underline hover:text-purple-300 transition duration-300"
              >
                Education
              </Link>
            </li>
           
          </ul>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-black via-purple-800 to-black py-4 px-8 absolute top-full left-0 right-0">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-white hover:underline hover:text-purple-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={closeMobileMenu}
                className="text-white hover:underline hover:text-purple-300 transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={closeMobileMenu}
                className="text-white hover:underline hover:text-purple-300 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                onClick={closeMobileMenu}
                className="text-white hover:underline hover:text-purple-300 transition duration-300"
              >
                Education
              </Link>
            </li>
           
           
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
