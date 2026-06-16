"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Upload, Trash2, Image as ImageIcon, Loader2, Lock } from "lucide-react";
import Image from "next/image";
import { verifyAdminPassword } from "../actions";

type GalleryImage = {
  id: string;
  image_url: string;
  title: string;
  category?: string;
  created_at: string;
};

const CATEGORIES = [
  "Housekeeping Services",
  "Pantry Management",
  "Technical Services",
  "Carpet Cleaning",
  "Manpower Supply",
  "Facility Management & MEP",
  "Other"
];

export default function AdminGalleryPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if already authenticated in this session
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem("adminAuth");
      if (auth === "true") setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchImages();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Server action se password verify kar rahe hain
    const isValid = await verifyAdminPassword(password);
    
    if (isValid) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      setLoginError("");
    } else {
      setLoginError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuth");
  };

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (error: any) {
      console.error("Error details:", JSON.stringify(error, null, 2));
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fileInputRef.current?.files || fileInputRef.current.files.length === 0) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      setUploading(true);
      const file = fileInputRef.current.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('gallery_images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('gallery_images')
        .getPublicUrl(filePath);

      const finalCategory = category === "Other" ? (customCategory.trim() || "General") : category;

      const { error: dbError } = await supabase
        .from('gallery')
        .insert([
          { image_url: publicUrl, title: title, category: finalCategory }
        ]);

      if (dbError) throw dbError;

      alert("Image uploaded successfully!");
      setTitle("");
      setCustomCategory("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      fetchImages();

    } catch (error: any) {
      alert(error.message || "Error uploading image! Check console for details.");
      console.error("Upload Error:", JSON.stringify(error, null, 2));
      console.error("Raw Error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const { error: dbError } = await supabase
        .from('gallery')
        .delete()
        .eq('id', id);

      if (dbError) throw dbError;

      const urlParts = imageUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];
      
      await supabase.storage
        .from('gallery_images')
        .remove([fileName]);

      setImages(images.filter(img => img.id !== id));
      alert("Image deleted.");
    } catch (error: any) {
      console.error("Delete Error:", JSON.stringify(error, null, 2));
      alert("Error deleting image! Check console for details.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-12 bg-gray-50 flex flex-col items-center">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-md w-full">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Admin Access</h2>
          <p className="text-center text-gray-500 mb-8">Enter the master password to access the gallery upload portal.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Admin Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-center tracking-widest"
                required
              />
              {loginError && <p className="text-red-500 text-sm mt-2 text-center">{loginError}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-gray-900 hover:bg-black text-white rounded-xl font-medium transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-6 text-center">Default test password is: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-36 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Gallery Admin</h1>
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-medium">
              Admin Mode
            </span>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-28">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Upload className="w-5 h-5 text-blue-600" /> Upload New Photo
              </h2>
              
              <form onSubmit={handleUpload} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image Title (Optional)</label>
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="e.g. Office Cleaning"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {category === "Other" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Custom Category Name</label>
                    <input 
                      type="text" 
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      required
                      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Enter custom category"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Image</label>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept="image/*"
                    required
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={uploading}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {uploading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Uploading...</>
                  ) : (
                    "Upload Photo"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Manage Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-blue-600" /> Manage Existing Photos
              </h2>
              
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
              ) : images.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <p className="text-gray-500">No photos found. Upload some to see them here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((img) => (
                    <div key={img.id} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-auto">
                      <div className="relative w-full h-48 shrink-0 border-b border-gray-100 bg-gray-50 p-2">
                        <Image 
                          src={img.image_url} 
                          alt={img.title || "Gallery Image"} 
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-grow">
                        <div className="mb-4">
                          <p className="text-gray-900 font-semibold line-clamp-2">{img.title || "Untitled"}</p>
                          <span className="inline-block mt-1.5 px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-medium border border-blue-100">
                            {img.category || "General"}
                          </span>
                        </div>
                        <button 
                          onClick={() => handleDelete(img.id, img.image_url)}
                          className="w-full mt-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-red-100"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete Photo
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
