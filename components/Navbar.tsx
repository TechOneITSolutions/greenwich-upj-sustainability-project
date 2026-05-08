"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-0 z-[60] w-full bg-[#4aa537] text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex justify-end items-center text-xs font-bold">
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>contact@greenwich-upj-sustainability.org</span>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/90 backdrop-blur-md py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 group">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    <img src="/logo.png" alt="Logo" className="w-55 h-auto" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-2 text-sm font-bold transition-all relative group ${
                        isActive ? "text-[#4aa537]" : "text-gray-700 hover:text-[#4aa537]"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#4aa537]"
                        />
                      )}
                    </Link>
                  );
                })}
                <Link
                  href="/get_involved"
                  className="ml-4 px-6 py-2.5 bg-[#4aa537] text-white text-sm font-bold rounded-full transition-all transform hover:scale-105"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-4 text-base font-bold border-b border-gray-50 transition-colors ${
                      isActive ? "text-[#4aa537]" : "text-gray-700 hover:text-[#4aa537]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/get_involved"
                className="block px-3 py-4 text-base font-bold text-[#4aa537]"
                onClick={() => setIsOpen(false)}
              >
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

