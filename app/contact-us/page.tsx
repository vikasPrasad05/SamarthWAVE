"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

import { Turnstile } from '@marsidev/react-turnstile';

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      alert("Please verify that you are human first.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! We will get back to you soon.");
      setTurnstileToken("");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 py-16 px-4 text-center text-white mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Ready to elevate your facility management? We are here to help. Reach out to us today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Whether you need housekeeping, manpower supply, or comprehensive facility management, our dedicated team is ready to assist you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919510401702" className="text-gray-600 hover:text-blue-600 text-lg">+91 95104 01702</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:info@samarthwavehospitality.com" className="text-gray-600 hover:text-blue-600 text-lg">
                    info@samarthwavehospitality.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Head Office</h4>
                  <p className="text-gray-600 text-lg">
                    C6/82 old c type Koparli Rd<br />
                    Near R k Desai College<br />
                    Vapi 396195
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600 text-lg">Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input required type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input required type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Interested Service</label>
                <select id="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                  <option>Facility Management</option>
                  <option>Housekeeping Services</option>
                  <option>Manpower Supply</option>
                  <option>Pantry Management</option>
                  <option>Technical Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              {/* Cloudflare Turnstile */}
              <div className="flex justify-center my-4">
                <Turnstile 
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'} 
                  onSuccess={(token) => setTurnstileToken(token)}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || !turnstileToken}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
        <div className="bg-white rounded-3xl p-2 md:p-4 shadow-xl shadow-gray-200/50 border border-gray-100 h-[450px]">
          <iframe 
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=C6%2F82%20old%20c%20type%20Koparli%20Rd%20Near%20R%20k%20Desai%20College%20vapi%20396195&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '1rem' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SAMARTHWAVE Head Office Location"
          />
        </div>
      </div>
    </div>
  );
}
