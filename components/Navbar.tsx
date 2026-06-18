"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top Bar */}
      <div className={`bg-gray-900 text-white transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@samarthwavehospitality.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@samarthwavehospitality.com</span>
            </a>
            <a href="tel:+919227155591" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 92271 55591</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Samarthwave Logo"
                width={56}
                height={56}
                className="h-14 w-auto object-contain rounded-full"
                priority
              />
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-wider uppercase leading-none">
                  Samarthwave
                </span>
                <span className="text-[10px] md:text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mt-1">
                  Hospitality & Services
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div 
              className="hidden md:flex items-center space-x-2 relative"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredPath(item.href)}
                    className={`relative px-4 py-2 font-medium text-[14px] uppercase tracking-wide transition-colors z-10 ${
                      isActive || hoveredPath === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {hoveredPath === item.href && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 bg-blue-50 rounded-md -z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact-us"
                className="bg-blue-600 text-white px-6 py-2.5 rounded hover:bg-blue-700 transition-colors font-medium uppercase tracking-wide text-sm"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-3 font-medium uppercase tracking-wide text-sm border-b border-gray-50 ${
                      isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 text-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-medium uppercase tracking-wide text-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
