const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
async function test() {
  const { data, error } = await supabase.storage.from('service_images').remove(['some_non_existent.png']);
  console.log("Storage data:", data);
  console.log("Storage error:", error);
}
test();
