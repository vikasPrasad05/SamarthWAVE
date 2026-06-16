"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/housekeeping_bg.png",
    title: "SAMARTHWAVE",
    subtitle: "Hospitality & Services",
    description: "Excellence in Integrated Facility Management. Delivering 16+ years of uncompromising quality and professional care."
  },
  {
    image: "/images/pantry_bg.png",
    title: "PREMIUM",
    subtitle: "Pantry Management",
    description: "Elevating daily operations with seamless, hygienic, and expertly managed food services for your workforce."
  },
  {
    image: "/images/manpower_bg.png",
    title: "RELIABLE",
    subtitle: "Manpower Solutions",
    description: "Highly trained professionals dedicated to keeping your facility running smoothly and safely round the clock."
  },
  {
    image: "/images/mep_bg.png",
    title: "ADVANCED",
    subtitle: "Technical & MEP",
    description: "Comprehensive maintenance solutions. We ensure your critical infrastructure operates flawlessly without disruption."
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[55vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Auto Slider Backgrounds */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Base image */}
          <Image 
            src={slide.image}
            alt="Facility Background"
            fill
            priority={index === 0}
            className="object-cover object-center" 
          />
          {/* Darker gradient on the left to ensure text is perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </div>
      ))}

      {/* Slider Indicators - Moved to bottom left */}
      <div className="absolute bottom-10 left-4 sm:left-6 lg:left-8 max-w-7xl mx-auto w-full flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-white w-12" : "bg-white/40 hover:bg-white/70 w-6"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wider drop-shadow-2xl leading-tight"
            >
              <strong className="font-bold">{slides[currentIndex].title}</strong>
              <span className="block mt-2 text-lg md:text-2xl text-gray-200 tracking-[0.2em] uppercase font-medium">
                {slides[currentIndex].subtitle}
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "4rem" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="h-1 bg-blue-500 mb-8 rounded-full opacity-90" 
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-100 mb-8 font-light max-w-2xl drop-shadow-md leading-relaxed tracking-wide"
            >
              {slides[currentIndex].description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start gap-5"
            >
              <Link href="/services" className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover:gap-3 shadow-xl w-full sm:w-auto justify-center text-sm md:text-base">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact-us" className="px-6 py-3 bg-black/20 hover:bg-black/40 text-white rounded-full font-medium transition-all duration-300 border border-white/30 backdrop-blur-md w-full sm:w-auto justify-center text-sm md:text-base">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
