"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

type GalleryImage = {
  id: string;
  image_url: string;
  title: string;
  category?: string;
  created_at: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract unique categories, removing empties and ensuring "All" is first
  const categories = ["All", ...Array.from(new Set(images.map(img => img.category || "General")))];
  
  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => (img.category || "General") === selectedCategory);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching images:", error);
      } else {
        setImages(data || []);
      }
    } catch (error: any) {
      console.error("Error details:", JSON.stringify(error, null, 2));
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-36 pb-12 bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 py-16 px-4 text-center text-white mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Take a look at some of our finest facility management and housekeeping work.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No photos yet</h3>
            <p className="text-gray-500">Check back later for new updates to our gallery.</p>
          </div>
        ) : (
          <>
            {/* Category Filter Tabs */}
            {categories.length > 2 && (
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat 
                        ? "bg-emerald-600 text-white shadow-md" 
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((img) => (
                <div key={img.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square">
                  <Image 
                    src={img.image_url} 
                    alt={img.title || "Gallery image"} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-5 w-full">
                      <span className="inline-block px-2 py-1 bg-emerald-500/90 rounded text-[10px] font-bold tracking-wider uppercase text-white mb-2">
                        {img.category || "General"}
                      </span>
                      <p className="text-white font-medium truncate text-lg">{img.title || "SAMARTHWAVE"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No images found in this category.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
