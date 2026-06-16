"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const currentClients = [
  { name: "MAHINDRA LOGISTICS LTD (BHILAD)", logo:"clientslogo/mahendra.png" },
  { name: "DAMATI PLASTICS (DAMAN)", logo: "clientslogo/daman.png" },
  { name: "KK PACKAGING (BHILAD)", logo: "clientslogo/kkpack.jpg" },
  { name: "Hindustan Unilever Limited(AMLI)", logo: "clientslogo/hindustan.png" },
  { name: "Hindustan Unilever Limited(DAPADA)", logo: "clientslogo/hindustan.png" },
  { name: "Kasyap Sweetners Private Limited (VAPI)", logo: "clientslogo/kasyap.jpeg" },
];

const upcomingClients = [
  { name: "SHREE SOAPS & CHEMICAL INDUSTRIES PACKING DIVISION DAPADA", logo: "clientslogo/Shree shop.jpg" },
  { name: "RUDRA MINE CHEM PVT LTD (DAPADA)", logo: "clientslogo/rudra chemical.jpeg" },
  { name: "Rossari Biotech Limited (NAROLI)", logo: "clientslogo/rass.jpeg" },
  { name: "ALPLA INDIA PVT. LTD (ATHAL-SILVASSA)", logo: "clientslogo/alpha.jpeg" },
  { name: "RUDRAKSH DETERGENT & CHEMICALS PVT.LTD (TALC DIV)NAROLI)", logo: "clientslogo/rudraksh.jpeg" },
  { name: "SAFEXPRESS PVT.LTD -VAPI", logo: "clientslogo/safexpress.jpg" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Clients</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* === Current Clients === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Current Clients</h3>
            <div className="grid grid-cols-1 gap-4">
              {currentClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 flex items-center justify-start gap-6 hover:shadow-lg transition-shadow rounded-xl">
                    {/* Logo on left (bigger size + responsive) */}
                    <div className="flex-shrink-0">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain "
                      />
                    </div>
                    {/* Text on right */}
                    <p className="font-semibold text-gray-700 text-left flex-1 text-base md:text-sm">
                      {client.name}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* === Upcoming Clients === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Current Clients</h3>
            <div className="grid grid-cols-1 gap-4">
              {upcomingClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 flex items-center justify-start gap-6 hover:shadow-lg transition-shadow rounded-xl">
                    <div className="flex-shrink-0">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                      />
                    </div>
                    <p className="font-semibold text-gray-700 text-left flex-1 text-base md:text-sm">
                      {client.name}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
