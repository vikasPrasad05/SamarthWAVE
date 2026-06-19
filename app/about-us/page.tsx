import { ShieldCheck, Target, HeartHandshake, Users, Search, GraduationCap, Shield, UserPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SAMARTHWAVE HOSPITALITY & SERVICES",
  description: "Learn about SAMARTHWAVE's 16+ years of consolidated industry experience in facility management. Discover our ideology, processes, and commitment to excellence.",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-white">
      {/* Header */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About SAMARTHWAVE</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            16+ years of consolidated industry experience in facility management.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Corporate Office" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Trusted Partner</h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              SAMARTHWAVE is formed by likeminded professionals dedicated to excellence. We look at building respectful collaborations & partnerships that help strengthen all our relationships.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              It's a forward-looking organization aimed at giving comfortable service delivery experience to our clients & fair working culture to our team members. High-value addition to each interaction with our clients is our core philosophy.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-4xl font-bold text-blue-600 mb-2">16+</h4>
                <p className="text-gray-700 font-medium">Years Experience</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl">
                <h4 className="text-4xl font-bold text-indigo-600 mb-2">100%</h4>
                <p className="text-gray-700 font-medium">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-900 text-white mt-24 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Ideology</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Goal Oriented</h3>
              <p className="text-gray-400">Delivering precisely what your business needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-400">Maintained through strict quality assurance and training.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p className="text-gray-400">Respectful collaborations for long-term growth.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fair Culture</h3>
              <p className="text-gray-400">Empowering our team members through a positive environment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Model */}
      <div className="py-24 bg-gray-50 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Engagement Model</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Soft Service Model */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-800 mb-8 pb-4 border-b border-gray-100">Soft Service Model</h3>
              <ul className="space-y-4">
                {[
                  "Housekeeping & Pantry",
                  "Security & Fire Safety",
                  "Pest Control",
                  "Landscaping & Horticulture",
                  "Façade Cleaning",
                  "MEP Services",
                  "Society Management",
                  "Office Support Services",
                  "Chair & Carpet Shampooing",
                  "Project Cleaning"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 shrink-0"></span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Staffing Model */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-800 mb-8 pb-4 border-b border-gray-100">Staffing Model</h3>
              <ul className="space-y-4">
                {[
                  "Recruitment",
                  "Training",
                  "Payroll Management",
                  "Compliance Management",
                  "Supervision & Control",
                  "Administrative Support",
                  "Direct Employment Relationship",
                  "Employee Life Cycle Management"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 shrink-0"></span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process Orientation */}
      <div className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Process Orientation</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sourcing */}
            <div className="bg-blue-50/50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-blue-100/50">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Sourcing</h3>
              <ul className="space-y-3">
                {["Site Survey", "NGO Tie-up", "Database", "Referrals"].map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Training & Development */}
            <div className="bg-blue-50/50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-blue-100/50">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/30">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Training & Development</h3>
              <ul className="space-y-3">
                {["Job Knowledge", "Technical Skills", "Soft Skills"].map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Employment */}
            <div className="bg-blue-50/50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-blue-100/50">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Employment</h3>
              <ul className="space-y-3">
                {["100% Compliance", "Statutory Benefits"].map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Empowerment */}
            <div className="bg-blue-50/50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-blue-100/50">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/30">
                <UserPlus className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Empowerment</h3>
              <ul className="space-y-3">
                {["Financial Security", "Recognition & Status", "Family Benefits"].map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center mt-20 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience Excellence?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Partner with SAMARTHWAVE and elevate your facility management to new heights.
        </p>
        <Link href="/contact-us" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg">
          Contact Us Today
        </Link>
      </div>
    </div>
  );
}
