"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, X, Check, MessageSquare, StarHalf } from "lucide-react";

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar: string;
  time: string;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "1",
    name: "Rahul Desai",
    text: "SAMARTHWAVE has completely transformed our office housekeeping. Their staff is highly professional and the cleaning standards are exceptional.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Rahul+Desai&background=c084fc&color=fff",
    time: "2 months ago"
  },
  {
    id: "2",
    name: "Priya Sharma",
    text: "The pantry management service they provide is seamless. Our employees are very happy with the hygienic and prompt service every day.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=fde047&color=000",
    time: "5 months ago"
  },
  {
    id: "3",
    name: "Amit Patel",
    text: "Their technical and MEP services are top-notch. Quick response times and knowledgeable technicians ensure our facility runs without a hitch.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Amit+Patel&background=0D8ABC&color=fff",
    time: "1 year ago"
  },
  {
    id: "4",
    name: "Neha Singh",
    text: "We partnered with them for manpower supply and facility management. It's been a flawless experience. Truly a reliable partner.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Neha+Singh&background=f97316&color=fff",
    time: "1 year ago"
  },
  {
    id: "5",
    name: "Vikram Malhotra",
    text: "Excellent corporate sanitation services. The team is disciplined, polite, and follows all safety and hygiene protocols strictly.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Vikram+Malhotra&background=3b82f6&color=fff",
    time: "3 weeks ago"
  },
  {
    id: "6",
    name: "Shalini Iyer",
    text: "Highly recommend their eco waterless carwash! It saves water and leaves a brilliant wax-like shine on our office fleet vehicles.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Shalini+Iyer&background=10b981&color=fff",
    time: "1 month ago"
  },
  {
    id: "7",
    name: "Rajesh Kumar",
    text: "Great customer service and quick resolution times. We've been using their MEP services for over six months now.",
    rating: 4,
    avatar: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=6366f1&color=fff",
    time: "4 months ago"
  },
  {
    id: "8",
    name: "Anjali Mehta",
    text: "Professional staff and very reliable scheduling. SAMARTHWAVE has become our go-to partner for all corporate facility needs.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Anjali+Mehta&background=ec4899&color=fff",
    time: "8 months ago"
  }
];

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [successMsg, setSuccessMsg] = useState(false);

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem("samarthwave_reviews");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge custom reviews at the beginning of the list
          setReviews([...parsed, ...DEFAULT_REVIEWS]);
        }
      } catch (e) {
        console.error("Failed to parse reviews", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const randomBg = Math.floor(Math.random() * 16777215).toString(16);
    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      text: text.trim(),
      rating,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name.trim())}&background=${randomBg}&color=fff`,
      time: "Just now"
    };

    const updatedCustom = [newReview];
    const stored = localStorage.getItem("samarthwave_reviews");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          updatedCustom.push(...parsed);
        }
      } catch (e) {}
    }

    localStorage.setItem("samarthwave_reviews", JSON.stringify(updatedCustom));
    setReviews([newReview, ...reviews]);

    // Show success state
    setSuccessMsg(true);
    setName("");
    setText("");
    setRating(5);

    setTimeout(() => {
      setSuccessMsg(false);
      setIsModalOpen(false);
    }, 2000);
  };

  const visibleReviews = showAll ? reviews : reviews.slice(0, 4);

  return (
    <section className="py-24 bg-[#fafafa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-orange-400 font-medium tracking-wide text-sm block mb-3">Our Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">What Our Clients Say</h2>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
          >
            <MessageSquare className="w-4 h-4" /> Leave a Review
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
          {visibleReviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-6 animate-fade-in">
              {/* Review Bubble */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 relative h-[160px] flex flex-col justify-between">
                {/* Arrow Pointer */}
                <div 
                  className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r border-b border-gray-50 shadow-[-2px_2px_2px_rgba(0,0,0,0.01)] transform -rotate-45" 
                  style={{ zIndex: 1, clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}
                ></div>
                
                {/* Top Row: Stars & Checkmark */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${
                          i < review.rating 
                            ? "text-[#fbbc05] fill-[#fbbc05]" 
                            : "text-gray-200"
                        }`} 
                      />
                    ))}
                    <div className="ml-2 bg-emerald-500 rounded-full w-3.5 h-3.5 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-gray-800 text-[13px] font-medium leading-relaxed line-clamp-4 mt-2 overflow-hidden flex-grow">
                  "{review.text}"
                </p>
              </div>
              
              {/* User Info */}
              <div className="flex items-center gap-3 px-4 relative z-10">
                <div className="relative shrink-0">
                  <Image 
                    src={review.avatar} 
                    alt={review.name} 
                    width={40} 
                    height={40} 
                    className="rounded-full object-cover shadow-sm border border-gray-100" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border border-white flex items-center justify-center">
                    <Star className="w-2 h-2 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm leading-tight">{review.name}</h4>
                  <p className="text-gray-500 text-[11px] mt-0.5">{review.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button for See All */}
        {reviews.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full transition-all border border-gray-200 shadow-sm hover:shadow-md text-sm"
            >
              {showAll ? "Show Less" : "See All Reviews"}
            </button>
          </div>
        )}
      </div>

      {/* Modal Backdrop & Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-scale-up border border-gray-100">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" /> Leave a Review
              </h3>
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setSuccessMsg(false);
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            {successMsg ? (
              <div className="p-8 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-500 text-sm">Your review has been successfully submitted.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Rating Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-2xl transition-transform hover:scale-110 focus:outline-none"
                      >
                        <Star 
                          className={`w-8 h-8 ${
                            star <= (hoverRating || rating) 
                              ? "text-[#fbbc05] fill-[#fbbc05]" 
                              : "text-gray-200"
                          }`} 
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-500 font-medium">({rating}/5 stars)</span>
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <label htmlFor="client-name" className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm text-gray-800"
                  />
                </div>

                {/* Text Input */}
                <div>
                  <label htmlFor="client-text" className="block text-sm font-semibold text-gray-700 mb-1">Review</label>
                  <textarea
                    id="client-text"
                    required
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Tell us about your experience..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm text-gray-800 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all shadow-md text-sm mt-2"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
