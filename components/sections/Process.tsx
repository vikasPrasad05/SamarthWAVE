"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Search, Users, GraduationCap, Shield } from "lucide-react";

const processes = [
  {
    icon: <Search />,
    title: "Sourcing",
    points: ["Site Survey", "NGO Tie-up", "Database", "Referrals"],
  },
  {
    icon: <GraduationCap />,
    title: "Training & Development",
    points: ["Job Knowledge", "Technical Skills", "Soft Skills"],
  },
  {
    icon: <Shield />,
    title: "Employment",
    points: ["100% Compliance", "Statutory Benefits"],
  },
  {
    icon: <Users />,
    title: "Empowerment",
    points: ["Financial Security", "Recognition & Status", "Family Benefits"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Process Orientation</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-white mb-4">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {process.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
