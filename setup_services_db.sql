-- Run this in your Supabase SQL Editor

-- 1. Create the services table
CREATE TABLE IF NOT EXISTS services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT NOT NULL,
    bg_image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enable Row Level Security (optional but recommended)
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- 3. Allow public read access to the table
CREATE POLICY "Allow public read access on services" 
ON services FOR SELECT 
TO public
USING (true);

-- 4. Allow public insert/delete to the table for admin actions (since we use anon key for admin actions currently in your setup)
CREATE POLICY "Allow public insert on services" 
ON services FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Allow public delete on services" 
ON services FOR DELETE 
TO public 
USING (true);

-- 5. Create storage bucket for service images (if not using gallery_images)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('service_images', 'service_images', true)
ON CONFLICT (id) DO NOTHING;

-- 6. Storage policies for service images
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'service_images');

CREATE POLICY "Allow uploads" 
ON storage.objects FOR INSERT 
TO public 
WITH CHECK (bucket_id = 'service_images');

CREATE POLICY "Allow deletes" 
ON storage.objects FOR DELETE 
TO public 
USING (bucket_id = 'service_images');
