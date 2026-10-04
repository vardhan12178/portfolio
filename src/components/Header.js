import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
];

const linkClassName = ({ isActive }) =>
  `block rounded-md px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 ${
    isActive
      ? 'bg-white/20 text-purple-200 underline underline-offset-4'
      : 'text-white hover:bg-white/10 hover:text-purple-200'
  }`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.key]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const renderLinks = () =>
    navigation.map(({ to, label }) => (
      <li key={to}>
        <NavLink
          to={to}
          end
          onClick={closeMobileMenu}
          className={linkClassName}
        >
          {label}
        </NavLink>
      </li>
    ));

  return (
    <header className="bg-gradient-to-r from-black via-purple-800 to-black text-white p-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          onClick={closeMobileMenu}
          aria-label="BalaVardhan home"
          className="flex items-center space-x-4 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
        >
          <span aria-hidden="true" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-violet-600 font-bold">
            B
          </span>
          <span className="text-xl font-bold">BalaVardhan</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="lg:hidden rounded-md p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? (
            <XIcon className="w-6 h-6" aria-hidden="true" />
          ) : (
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          )}
        </button>

        <nav aria-label="Main navigation" className="hidden lg:flex">
          <ul className="flex justify-end items-center space-x-2">
            {renderLinks()}
          </ul>
        </nav>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMobileMenuOpen}
        className="lg:hidden bg-gradient-to-r from-black via-purple-800 to-black py-4 px-8 absolute top-full left-0 right-0 shadow-lg"
      >
        <ul className="flex flex-col items-center space-y-4">
          {renderLinks()}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
