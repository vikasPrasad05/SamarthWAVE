"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Engagement() {
  return (
    <section id="engagement" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Engagement Model</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Soft Service Model</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Housekeeping & Pantry</li>
                <li>• Security & Fire Safety</li>
                <li>• Pest Control</li>
                <li>• Landscaping & Horticulture</li>
                <li>• Façade Cleaning</li>
                <li>• MEP Services</li>
                <li>• Society Management</li>
                <li>• Office Support Services</li>
                <li>• Chair & Carpet Shampooing</li>
                <li>• Project Cleaning</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Staffing Model</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Recruitment</li>
                <li>• Training</li>
                <li>• Payroll Management</li>
                <li>• Compliance Management</li>
                <li>• Supervision & Control</li>
                <li>• Administrative Support</li>
                <li>• Direct Employment Relationship</li>
                <li>• Employee Life Cycle Management</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
