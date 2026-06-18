const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
async function test() {
  const { data: services } = await supabase.from('services').select('id, bg_image');
  console.log("Services missing bg_image:", services.filter(s => !s.bg_image));
  
  const { data: gallery } = await supabase.from('gallery').select('id, image_url');
  console.log("Gallery missing image_url:", gallery.filter(g => !g.image_url));
}
test();
