import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, MapPin, CheckCircle, ShieldCheck, Clock, Sparkles } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSlider />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SAMARTHWAVE?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We bring 16+ years of experience to ensure high-value addition to each interaction with our clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experience</h3>
              <p className="text-gray-600">16+ years of consolidated industry experience in comprehensive facility management.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team of Experts</h3>
              <p className="text-gray-600">Formed by likeminded professionals dedicated to excellence and reliable service delivery.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Value Addition</h3>
              <p className="text-gray-600">We look at building respectful collaborations & partnerships that help strengthen all our relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service: Eco Waterless Carwash */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/images/carwash_bg.png" 
                alt="Eco Waterless Carwash Service" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/20 max-w-xs">
                <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider block mb-1">Eco Saving</span>
                <p className="text-gray-800 text-sm font-semibold">Saves 100+ liters of water per vehicle wash!</p>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-100 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" /> Flagship Service
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Eco Waterless <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Carwash Service</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                Our advanced waterless carwash technology uses high-grade, biodegradable polymer sprays to lift, lubricate, and encapsulate dirt. It delivers a showroom-grade shine while protecting both your car's paintwork and our planet's vital water resources.
              </p>
              
              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Water-Saving Solution", desc: "No runoffs, preserving community water." },
                  { title: "Premium Paint Protection", desc: "Polymer coat shields from UV & dust." },
                  { title: "Scratch-Free Method", desc: "Dirt is safely lifted off before wiping." },
                  { title: "Convenient & Clean", desc: "Can be done anywhere without creating a mess." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link href="/contact-us" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-colors shadow-lg shadow-emerald-600/20 text-center w-full sm:w-auto">
                  Book A Professional Wash
                </Link>
                <Link href="/services" className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-full transition-colors border border-gray-200 text-center w-full sm:w-auto">
                  Learn Detailing Process
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Facility Management Tailored for You</h2>
            </div>
            <Link href="/services" className="mt-6 md:mt-0 text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-2 group">
              View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px]">
              <Image src="/images/housekeeping_bg.png" alt="Housekeeping" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Housekeeping Services</h3>
                <p className="text-gray-300 line-clamp-2">Maintaining pristine environments with professional cleaning and upkeep for corporate spaces.</p>
              </div>
            </div>
            
            <div className="grid grid-rows-2 gap-6 md:h-[400px]">
              <div className="group relative rounded-3xl overflow-hidden">
                <Image src="/images/pantry_bg.png" alt="Pantry Management" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Pantry Management</h3>
                  <p className="text-gray-300 text-sm">Efficient and hygienic food service operations for your office.</p>
                </div>
              </div>
              
              <div className="group relative rounded-3xl overflow-hidden">
                <Image src="/images/technical_bg.png" alt="Technical Services" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Technical Services</h3>
                  <p className="text-gray-300 text-sm">Comprehensive MEP and facility maintenance solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Partners Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-[0.25em] uppercase text-[11px] mb-3 block">Leadership & Partners</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Meet Our Leaders
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Founder Card */}
            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="shrink-0 relative">
                <div className="w-36 h-36 md:w-44 md:h-44 relative rounded-2xl overflow-hidden shadow-sm border-[4px] border-gray-50 z-10 transition-transform group-hover:scale-105 duration-500">
                  <Image 
                    src="/client1.jpeg" 
                    alt="Dippak Chauudhari - Founder & Director" 
                    fill 
                    className="object-cover"
                  />
                </div>
                {/* Decorative background elements for premium feel */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-emerald-50/80 rounded-full -z-0"></div>
                <div className="absolute top-0 -left-4 w-8 h-8 bg-orange-50/80 rounded-full -z-0"></div>
              </div>
              
              <div className="flex-grow text-center md:text-left flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Dippak Chauudhari</h3>
                  <span className="text-emerald-600 font-semibold tracking-wider text-xs uppercase mb-4 block">Founder & Director</span>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light italic">
                    "True hospitality is about nurturing environments where people can thrive. Our vision is simple yet profound: to bring uncompromising quality and genuine care into the facility management industry."
                  </p>
                </div>
                <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                  SAMARTHWAVE HOSPITALITY
                </div>
              </div>
            </div>

            {/* Partner Card */}
            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="shrink-0 relative">
                <div className="w-36 h-36 md:w-44 md:h-44 relative rounded-2xl overflow-hidden shadow-sm border-[4px] border-gray-50 z-10 transition-transform group-hover:scale-105 duration-500">
                  <Image 
                    src="/yash_chaudhari.jpg" 
                    alt="Yash Chaudhari - Partner & Director" 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
                {/* Decorative background elements for premium feel */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-teal-50/80 rounded-full -z-0"></div>
                <div className="absolute top-0 -left-4 w-8 h-8 bg-emerald-50/80 rounded-full -z-0"></div>
              </div>
              
              <div className="flex-grow text-center md:text-left flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Yash Chaudhari</h3>
                  <span className="text-emerald-600 font-semibold tracking-wider text-xs uppercase mb-4 block">Partner & Director</span>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light italic">
                    "We look at building respectful collaborations and long-term partnerships. High-value addition to each interaction with our clients is our core philosophy."
                  </p>
                </div>
                <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                  SAMARTHWAVE HOSPITALITY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}
