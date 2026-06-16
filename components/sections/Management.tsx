"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Mr. Dipak chaudhari",
    role: "Director",
    experience:
      "18+ years in Advertising Field,leading the facility management venture",
    img: "/client1.jpeg",
  },
  // {
  //   name: "M/S Jigyasa Tiwari",
  //   role: "Director",
  //   img: "/client2.jpeg",
  // },
  {
    name: "Mr. ****",
    role: "Operation Manager",
    experience:
      "15+ years in marketing and sales for facility management industry",
    video: "/video.mp4", // 👈 video file path daal public folder me
  },
];

export default function Management() {
  return (
    <section id="management" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Management Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                {member.video ? (
                  <div className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px]">
                    <video
                      src={member.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <>
                    {member.img && (
                      <div className="w-22 h-22 rounded-full mb-4 overflow-hidden mx-auto relative group">
                        <Image
                          src={member.img}
                          alt={member.name}
                          fill
                          sizes="64px"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          unoptimized
                        />
                      </div>
                    )}
                    {!member.img && (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] mb-4 flex items-center justify-center text-white text-2xl font-bold mx-auto transition-transform duration-300 group-hover:scale-110">
                        {member.name.charAt(4)}
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3 text-center">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-center">
                      {member.experience}
                    </p>
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
