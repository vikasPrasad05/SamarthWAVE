-- Run this in your Supabase SQL Editor
-- This SQL script creates the 'reviews' table and configures Row Level Security (RLS) policies.

-- 1. Create the reviews table
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    text TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    avatar TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- 3. Allow public read access to reviews so everyone can view them on their devices
CREATE POLICY "Allow public read access on reviews" 
ON reviews FOR SELECT 
TO public
USING (true);

-- 4. Allow public insert to reviews so users can submit reviews from their devices
CREATE POLICY "Allow public insert on reviews" 
ON reviews FOR INSERT 
TO public 
WITH CHECK (true);
