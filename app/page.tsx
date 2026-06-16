import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, MapPin, CheckCircle, ShieldCheck, Clock } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

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
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experience</h3>
              <p className="text-gray-600">16+ years of consolidated industry experience in comprehensive facility management.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team of Experts</h3>
              <p className="text-gray-600">Formed by likeminded professionals dedicated to excellence and reliable service delivery.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Value Addition</h3>
              <p className="text-gray-600">We look at building respectful collaborations & partnerships that help strengthen all our relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Facility Management Tailored for You</h2>
            </div>
            <Link href="/services" className="mt-6 md:mt-0 text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 group">
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

      {/* Founder Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative">
            
            <div className="shrink-0 relative">
              <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden shadow-sm border-[6px] border-gray-50 z-10 mx-auto transition-transform hover:scale-105 duration-500">
                <Image 
                  src="/client1.jpeg" 
                  alt="Founder of SAMARTHWAVE" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Subtle decorative circles */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-50/80 rounded-full -z-0"></div>
              <div className="absolute top-0 -left-4 w-12 h-12 bg-orange-50/80 rounded-full -z-0"></div>
            </div>
            
            <div className="flex-grow text-center lg:text-left">
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">Leadership & Vision</span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">
                Meet Our <strong className="font-bold">Founder</strong>
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed font-light mb-8">
                <p>
                  "True hospitality is about nurturing environments where people can thrive. Our vision is simple yet profound: to bring uncompromising quality and genuine human care into the facility management industry."
                </p>
                <p className="font-medium text-gray-800 italic relative z-10">
                  "We don't just manage facilities; we elevate the everyday experience of your workforce."
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900">Founder & Director</h4>
                <p className="text-gray-400 font-medium tracking-widest text-[10px] mt-1 uppercase">SAMARTHWAVE Hospitality</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-medium tracking-wide text-sm block mb-3">Our Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Rahul Desai",
                text: "SAMARTHWAVE has completely transformed our office housekeeping. Their staff is highly professional and the cleaning standards are exceptional.",
                avatar: "https://ui-avatars.com/api/?name=Rahul+Desai&background=random",
                time: "2 months ago"
              },
              {
                name: "Priya Sharma",
                text: "The pantry management service they provide is seamless. Our employees are very happy with the hygienic and prompt service every day.",
                avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=random",
                time: "5 months ago"
              },
              {
                name: "Amit Patel",
                text: "Their technical and MEP services are top-notch. Quick response times and knowledgeable technicians ensure our facility runs without a hitch.",
                avatar: "https://ui-avatars.com/api/?name=Amit+Patel&background=0D8ABC&color=fff",
                time: "1 year ago"
              },
              {
                name: "Neha Singh",
                text: "We partnered with them for manpower supply and facility management. It's been a flawless experience. Truly a reliable partner.",
                avatar: "https://ui-avatars.com/api/?name=Neha+Singh&background=random",
                time: "1 year ago"
              }
            ].map((review, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                {/* Review Bubble */}
                <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative h-[150px] flex flex-col">
                  {/* Arrow Pointer */}
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white shadow-[-2px_2px_2px_rgba(0,0,0,0.01)] transform -rotate-45" style={{ zIndex: 1, clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}></div>
                  
                  {/* Top Row: Stars */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#fbbc05] fill-[#fbbc05]" />
                      ))}
                      <div className="ml-1 bg-blue-500 rounded-full w-3.5 h-3.5 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-800 text-[13px] font-medium mt-4 leading-relaxed line-clamp-3">
                    {review.text}
                  </p>
                </div>
                
                {/* User Info */}
                <div className="flex items-center gap-3 px-4 relative z-10">
                  <div className="relative">
                    <Image src={review.avatar} alt={review.name} width={40} height={40} className="rounded-full object-cover shadow-sm border border-gray-100" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                      <Star className="w-2 h-2 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">{review.name}</h4>
                    <p className="text-gray-500 text-[11px] mt-0.5">{review.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
