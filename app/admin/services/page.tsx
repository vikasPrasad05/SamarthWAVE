"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Upload, Trash2, Briefcase, Loader2, Lock, List } from "lucide-react";
import Image from "next/image";
import { verifyAdminPassword } from "../actions";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  bg_image: string;
  created_at: string;
};

const AVAILABLE_ICONS = [
  "Briefcase",
  "Utensils",
  "Zap",
  "ShieldCheck",
  "Users",
  "Building2",
  "Wrench",
  "Settings",
  "Star"
];

export default function AdminServicesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [iconName, setIconName] = useState(AVAILABLE_ICONS[0]);
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
      fetchServices();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
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

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setServices(data || []);
    } catch (error: any) {
      console.error("Error details:", JSON.stringify(error, null, 2));
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      alert("Please provide a title and description.");
      return;
    }

    if (!fileInputRef.current?.files || fileInputRef.current.files.length === 0) {
      alert("Please select a background image to upload.");
      return;
    }

    try {
      setUploading(true);
      const file = fileInputRef.current.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('service_images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('service_images')
        .getPublicUrl(filePath);

      const { error: dbError } = await supabase
        .from('services')
        .insert([
          { 
            title: title, 
            description: description,
            icon: iconName,
            bg_image: publicUrl 
          }
        ]);

      if (dbError) throw dbError;

      alert("Service added successfully!");
      setTitle("");
      setDescription("");
      setIconName(AVAILABLE_ICONS[0]);
      if (fileInputRef.current) fileInputRef.current.value = "";
      fetchServices();

    } catch (error: any) {
      alert(error.message || "Error adding service! Check console for details.");
      console.error("Upload Error:", JSON.stringify(error, null, 2));
      console.error("Raw Error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      const { error: dbError } = await supabase
        .from('services')
        .delete()
        .eq('id', id);

      if (dbError) throw dbError;

      const urlParts = imageUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];
      
      await supabase.storage
        .from('service_images')
        .remove([fileName]);

      setServices(services.filter(srv => srv.id !== id));
      alert("Service deleted.");
    } catch (error: any) {
      console.error("Delete Error:", JSON.stringify(error, null, 2));
      alert("Error deleting service! Check console for details.");
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
          <p className="text-center text-gray-500 mb-8">Enter the master password to access the services portal.</p>
          
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
          <h1 className="text-4xl font-bold text-gray-900">Services Admin</h1>
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
                <Upload className="w-5 h-5 text-blue-600" /> Add New Service
              </h2>
              
              <form onSubmit={handleUpload} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Title</label>
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="e.g. Housekeeping Services"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={3}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Service description..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                  <select
                    value={iconName}
                    onChange={(e) => setIconName(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  >
                    {AVAILABLE_ICONS.map(icon => (
                      <option key={icon} value={icon}>{icon}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background Image</label>
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
                    <><Loader2 className="w-5 h-5 animate-spin" /> Adding...</>
                  ) : (
                    "Add Service"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Manage Services */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <List className="w-5 h-5 text-blue-600" /> Manage Services
              </h2>
              
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
              ) : services.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <p className="text-gray-500">No services found. Add some to see them here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative w-full h-40 shrink-0 border-b border-gray-100 bg-gray-900">
                        <Image 
                          src={service.bg_image} 
                          alt={service.title} 
                          fill
                          className="object-cover opacity-60"
                        />
                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                          <h3 className="text-lg font-bold text-white z-10">{service.title}</h3>
                          <span className="text-xs text-gray-300 z-10">Icon: {service.icon}</span>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-grow bg-gray-50">
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{service.description}</p>
                        
                        <button 
                          onClick={() => handleDelete(service.id, service.bg_image)}
                          className="w-full mt-auto py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-red-100"
                        >
                          <Trash2 className="w-4 h-4" /> Delete Service
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
