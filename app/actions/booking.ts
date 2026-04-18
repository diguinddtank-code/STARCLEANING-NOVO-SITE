'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export async function getBookedSlots() {
  const { data, error } = await supabaseAdmin
    .from('bookings')
    .select('slot_id');

  if (error) {
    if (error.code === '42P01' || error.message?.includes("Could not find the table")) {
      // relation "bookings" does not exist
      console.warn("Tabela bookings não existe ainda.");
      return [];
    }
    console.error("Booking Fetch Error:", error);
    throw new Error(error.message);
  }

  return data.map(item => item.slot_id);
}

export async function saveBooking(slotKey: string, fullName: string, email: string, phone: string) {
  const { error } = await supabaseAdmin
    .from('bookings')
    .insert([
      { 
        slot_id: slotKey,
        customer_name: fullName,
        customer_email: email,
        customer_phone: phone
      }
    ]);

  if (error) {
    if (error.code === '42P01' || error.message?.includes("Could not find the table")) {
      console.error("A tabela 'bookings' não existe no banco de dados.");
    }
    console.error("Booking Insert Error:", error);
    throw new Error(error.message);
  }
  
  return true;
}
