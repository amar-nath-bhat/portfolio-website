"use client";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-nav rounded-full px-6 py-3 flex justify-between items-center w-full max-w-5xl shadow-lg shadow-[#66FCF1]/10 border border-[#66FCF1]/20">
        {/* Logo */}
        <Link
          href="/"
          className="glow-text font-extrabold text-xl md:text-2xl tracking-wider"
        >
          <span>Amarnath </span>
          <span className="text-white">Bhat</span>
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          className="block md:hidden text-[#66FCF1] focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex justify-end gap-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="navbar-text font-medium text-sm lg:text-base uppercase tracking-widest hover:text-[#66FCF1] transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 mx-4 glass-panel rounded-2xl p-4 md:hidden animate-in slide-in-from-top-5 duration-300">
            <ul className="flex flex-col items-center gap-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item} onClick={toggleMobileMenu} className="w-full text-center">
                  <Link
                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    className="navbar-text block w-full py-2 font-bold text-lg hover:bg-[#66FCF1]/10 rounded-lg transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
