import { ShieldCheck, Target, HeartHandshake, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Ideology & Process</h2>
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
