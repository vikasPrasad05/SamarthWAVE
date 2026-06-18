require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const DEFAULT_SERVICES = [
  {
    icon: "Briefcase",
    title: "Housekeeping Services",
    description: "Professional cleaning and upkeep services designed for corporate and commercial spaces to maintain a pristine environment.",
    bg_image: "/images/housekeeping_bg.png"
  },
  {
    icon: "Utensils",
    title: "Pantry Management",
    description: "Efficient and hygienic food and beverage service operations for your office, ensuring employee satisfaction and health.",
    bg_image: "/images/pantry_bg.png"
  },
  {
    icon: "Zap",
    title: "Technical Services",
    description: "Comprehensive maintenance and troubleshooting for your facility's technical and operational infrastructure.",
    bg_image: "/images/technical_bg.png"
  },
  {
    icon: "ShieldCheck",
    title: "Carpet Cleaning",
    description: "Deep cleaning and maintenance of carpets to prolong lifespan and improve indoor air quality.",
    bg_image: "/images/carpet_bg.png"
  },
  {
    icon: "Users",
    title: "Manpower Supply",
    description: "Providing skilled, semi-skilled, and unskilled workforce tailored to your organization's specific requirements.",
    bg_image: "/images/manpower_bg.png"
  },
  {
    icon: "Building2",
    title: "Facility Management & MEP",
    description: "Integrated facility management including Mechanical, Electrical, and Plumbing (MEP) services for seamless operations.",
    bg_image: "/images/mep_bg.png"
  }
];

async function run() {
  try {
    // Check if services already exist
    const { data: existing, error: fetchErr } = await supabase.from('services').select('title');
    
    if (fetchErr) {
      console.error("Error fetching:", fetchErr);
      return;
    }

    const existingTitles = existing.map(e => e.title);
    const toInsert = DEFAULT_SERVICES.filter(s => !existingTitles.includes(s.title));

    if (toInsert.length > 0) {
      const { data, error } = await supabase.from('services').insert(toInsert);
      if (error) {
        console.error("Error inserting:", error);
      } else {
        console.log("Successfully inserted", toInsert.length, "default services into the database.");
      }
    } else {
      console.log("Default services already exist in the database.");
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

run();
