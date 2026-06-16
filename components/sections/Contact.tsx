"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "" 
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: "success", 
          message: "Message sent successfully! We'll get back to you soon." 
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ 
          type: "error", 
          message: data.error || "Failed to send message. Please try again." 
        });
      }
    } catch (error) {
      setStatus({ 
        type: "error", 
        message: "Network error. Please check your connection and try again." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-wrap break-words">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Contact Us
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={loading}
                  className="h-12 sm:h-14"
                />
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={loading}
                  className="h-12 sm:h-14"
                />
                <Input
                  type="tel"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={loading}
                  className="h-12 sm:h-14"
                />
                <Textarea
                  placeholder="Your Message *"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={loading}
                  className="resize-none"
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 sm:h-14 text-lg sm:text-xl"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span> Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center gap-2 mt-2 sm:mt-3 text-sm sm:text-base ${
                      status.type === "success" 
                        ? "bg-green-50 text-green-700 border border-green-200" 
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <p className="break-words max-w-full">{status.message}</p>
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 sm:p-8 h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="break-words max-w-full">
                    <p className="font-semibold mb-1">Head Office</p>
                    <p className="text-gray-600 text-sm sm:text-base break-words max-w-full">
                      SH/1, MADHAV PARK APPT <br />
                      JAY BHARAT NAGAR – CHHIRI<br />
                      PARDI, VALSAD, GUJARAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="break-words max-w-full">
                    <p className="font-semibold mb-1">Phone</p>
                    <a 
                      href="tel:+919227155591" 
                      className="text-gray-600 hover:text-primary text-sm sm:text-base break-all"
                    >
                      +91 92271 55591
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="break-words max-w-full">
                    <p className="font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:info@samarthwavehospitality.com" 
                      className="text-gray-600 hover:text-primary text-sm sm:text-base break-all"
                    >
                      info@samarthwavehospitality.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
