const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
async function test() {
  const { data: insertData, error: insertError } = await supabase.from('services').insert([{ title: 'Test Delete', description: 'desc', icon: 'Briefcase', bg_image: '/test.png' }]).select();
  console.log("Insert data:", insertData);
  if (insertData && insertData.length > 0) {
    const id = insertData[0].id;
    const { data: deleteData, error: deleteError } = await supabase.from('services').delete().eq('id', id).select();
    console.log("Delete data:", deleteData);
    console.log("Delete error:", deleteError);
  }
}
test();
