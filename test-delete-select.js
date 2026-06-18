const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
async function test() {
  const { data, error } = await supabase.from('services').delete().eq('id', '123e4567-e89b-12d3-a456-426614174000').select();
  console.log("Delete data:", data);
  console.log("Delete error:", error);
}
test();
