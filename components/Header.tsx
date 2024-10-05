"use client";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-6 md:px-12 lg:px-24 xl:px-48 py-4 md:py-8 text-[#66FCF1] sticky top-0 z-10 shadow-sm shadow-cyan-800 header">
      <nav className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link
          href="/"
          className="glow-text font-extrabold text-2xl md:text-3xl"
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
            className="w-8 h-8"
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
        <ul className="hidden md:flex justify-end gap-6 lg:gap-10">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="navbar-text glow-text font-bold text-lg lg:text-xl"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full header flex flex-col items-start px-6 gap-4 py-4 md:hidden">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item} onClick={toggleMobileMenu}>
                <Link
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="navbar-text glow-text font-bold text-lg"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
