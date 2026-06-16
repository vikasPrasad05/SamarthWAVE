"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Eye, Heart, Award } from "lucide-react";

export default function Ideology() {
  return (
    <section id="ideology" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Ideology</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the first choice in delivering excellence in integrated solutions & experiences
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Belief</h3>
              <p className="text-gray-600 text-lg">
                Our endeavor is to be an integral part of the cliental value chain by aligning our strategies for better service results
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Integrity</li>
                <li>• Entrepreneurial Spirit</li>
                <li>• Respect For People</li>
                <li>• Responsible & Accountable</li>
                <li>• Team Work</li>
                <li>• Transparent & Honest</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
