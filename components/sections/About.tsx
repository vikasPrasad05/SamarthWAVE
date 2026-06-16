"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Target className="w-12 h-12 text-primary" />,
              title: "Experience",
              description: "16+ years of consolidated industry experience in facility management",
            },
            {
              icon: <Users className="w-12 h-12 text-primary" />,
              title: "Team of Experts",
              description: "Formed by likeminded professionals dedicated to excellence",
            },
            {
              icon: <TrendingUp className="w-12 h-12 text-primary" />,
              title: "Value Addition",
              description: "High-value addition to each interaction with our clients",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="p-6 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10">
            <p className="text-lg text-gray-700 leading-relaxed">
              We look at building respectful collaborations & partnerships that help strengthen all our relationships. 
              It's a forward-looking organization aimed at giving comfortable service delivery experience to our clients 
              & fair working culture to our team members.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
