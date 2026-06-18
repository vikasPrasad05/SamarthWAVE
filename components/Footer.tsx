"use client"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/logo.png" 
                alt="Samarthwave Logo" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain rounded-full"
              />
              <h3 className="text-xl font-bold text-white uppercase tracking-wide leading-tight">
                SAMARTHWAVE<br/>
                <span className="text-[10px] text-blue-500 tracking-[0.2em] font-medium">HOSPITALITY & SERVICES</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Leading provider of integrated facility management solutions with over 16 years of industry experience. Excellence in Service | Trusted Partner
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-sm hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link href="/#clients" className="text-sm hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Our Clients
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Housekeeping Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Pantry Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Technical Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Manpower Supply
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> MEP Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  SH/1, MADHAV PARK APPT<br />
                  JAY BHARAT NAGAR – CHHIRI<br />
                  PARDI, VALSAD, GUJARAT
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+919227155591" className="text-sm hover:text-blue-400 transition-colors">
                  +91 92271 55591
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@samarthwavehospitality.com" className="text-sm hover:text-blue-400 transition-colors break-all">
                  info@samarthwavehospitality.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} SAMARTHWAVE HOSPITALITY & SERVICES PVT LTD. All rights reserved.
              </p>
              <span className="hidden md:inline text-gray-600">|</span>
              <p className="text-gray-400">
                Designed & Developed by <a href="https://www.davlabs.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">DAVLabs</a>
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
