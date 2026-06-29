"use client";

import { Building2, Utensils, Zap, Users, ShieldCheck, Briefcase, Wrench, Settings, Star, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-8 h-8 text-white" />,
  Utensils: <Utensils className="w-8 h-8 text-white" />,
  Zap: <Zap className="w-8 h-8 text-white" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-white" />,
  Users: <Users className="w-8 h-8 text-white" />,
  Building2: <Building2 className="w-8 h-8 text-white" />,
  Wrench: <Wrench className="w-8 h-8 text-white" />,
  Settings: <Settings className="w-8 h-8 text-white" />,
  Star: <Star className="w-8 h-8 text-white" />,
  Sparkles: <Sparkles className="w-8 h-8 text-white" />
};

type ServiceItem = {
  id?: string;
  title: string;
  description: string;
  icon: string | React.ReactNode;
  bg_image?: string;
  bgImage?: string; // fallback
};

export default function Services() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.warn("Could not fetch services from DB.", error);
        setServices([]);
      } else if (data) {
        setServices(data);
      }
    } catch (error) {
      console.error(error);
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 py-16 px-4 text-center text-white mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive facility management and staffing solutions tailored to meet your organization's unique needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm block mb-2">What We Offer</span>
            <h2 className="text-3xl font-bold text-gray-900">Integrated Facility Solutions</h2>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-emerald-600" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const bgImage = service.bg_image || service.bgImage || "/images/placeholder.jpg";
                const iconElement = typeof service.icon === 'string' ? (iconMap[service.icon] || <Star className="w-8 h-8 text-white" />) : service.icon;

                return (
                  <div key={service.id || i} className="group relative rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-[400px]">
                    {/* Background Image */}
                    <Image 
                      src={bgImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40 group-hover:bg-gray-900/70 transition-colors duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 flex flex-col h-full text-white">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                        {iconElement}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{service.description}</p>
                      <Link href="/contact-us" className="text-emerald-400 font-medium hover:text-emerald-300 flex items-center gap-2 mt-auto">
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 shadow-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
            Every business is unique. Contact us today to discuss how we can tailor our services to match your specific operational requirements.
          </p>
          <Link href="/contact-us" className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </div>
  );
}
