"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles, Coffee, Wrench, Wind, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Sparkles />,
    title: "Cleaning Services",
    description: "Professional cleaning solutions",
    image: "/card/card1.jpg",
  },
  {
    icon: <Coffee />,
    title: "Pantry Services",
    description: "Complete pantry management",
    image: "/card/card2.jpg",
  },
  {
    icon: <Wrench />,
    title: "Technical Services",
    description: "Technical support & maintenance",
    image: "/card/card3.jpg",
  },
  {
    icon: <Wind />,
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning services",
    image: "/card/card4.jpg",
  },
  {
    icon: <Users />,
    title: "Manpower Supply",
    description: "Skilled workforce solutions",
    image: "/card/card5.jpg",
  },
   {
    icon: <Users />,
    title: "Pest Control",
    description: "the process of managing and preventing pests-",
    image: "/card/card6.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/service/${encodeURIComponent(service.title)}`}>
                <Card
                  className="relative p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden group cursor-pointer"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-white mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 drop-shadow-sm">{service.description}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
