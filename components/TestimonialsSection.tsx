"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, X, Check, MessageSquare } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Review {
  id: string;
  name: string;
  email?: string;
  text: string;
  rating: number;
  avatar: string;
  time: string;
}

function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
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
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [successMsg, setSuccessMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Load reviews from Supabase on component mount
  useEffect(() => {
    async function fetchReviews() {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching reviews from Supabase:", error.message);
          return;
        }

        if (data && data.length > 0) {
          const dbReviews: Review[] = data.map((item: any) => {
            const createdDate = new Date(item.created_at);
            const timeAgo = getTimeAgo(createdDate);

            return {
              id: item.id,
              name: item.name,
              email: item.email,
              text: item.text,
              rating: item.rating,
              avatar: item.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=0D8ABC&color=fff`,
              time: timeAgo,
            };
          });

          // Merge custom database reviews at the beginning of the list
          setReviews([...dbReviews, ...DEFAULT_REVIEWS]);
        }
      } catch (e) {
        console.error("Failed to load reviews from Supabase:", e);
      }
    }
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !text.trim()) {
      setErrorMsg("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    const randomBg = Math.floor(Math.random() * 16777215).toString(16);
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name.trim())}&background=${randomBg}&color=fff`;

    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert([
          {
            name: name.trim(),
            email: email.trim(),
            text: text.trim(),
            rating: rating,
            avatar: avatarUrl
          }
        ])
        .select();

      if (error) {
        console.error("Error inserting review into Supabase:", error.message);
        setErrorMsg("Failed to submit review to database. Please make sure the reviews table exists.");
        setIsSubmitting(false);
        return;
      }

      if (data && data.length > 0) {
        const insertedItem = data[0];
        const newReview: Review = {
          id: insertedItem.id,
          name: insertedItem.name,
          email: insertedItem.email,
          text: insertedItem.text,
          rating: insertedItem.rating,
          avatar: insertedItem.avatar,
          time: "Just now"
        };
        setReviews([newReview, ...reviews]);
      }

      // Show success state
      setSuccessMsg(true);
      setName("");
      setEmail("");
      setText("");
      setRating(5);

      setTimeout(() => {
        setSuccessMsg(false);
        setIsModalOpen(false);
      }, 2000);
    } catch (e) {
      console.error("Failed to submit review:", e);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                  setErrorMsg("");
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
                        disabled={isSubmitting}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-2xl transition-transform hover:scale-110 focus:outline-none disabled:opacity-50"
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
                    disabled={isSubmitting}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm text-gray-800 disabled:opacity-60"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="client-email" className="block text-sm font-semibold text-gray-700 mb-1">Your Email</label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm text-gray-800 disabled:opacity-60"
                  />
                </div>

                {/* Text Input */}
                <div>
                  <label htmlFor="client-text" className="block text-sm font-semibold text-gray-700 mb-1">Review</label>
                  <textarea
                    id="client-text"
                    required
                    disabled={isSubmitting}
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Tell us about your experience..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm text-gray-800 resize-none disabled:opacity-60"
                  ></textarea>
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-xs font-semibold mt-1">{errorMsg}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all shadow-md text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
