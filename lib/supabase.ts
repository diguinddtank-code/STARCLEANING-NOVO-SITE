import { createClient } from '@supabase/supabase-js';

// Use environment variables for Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://hnpgftguqpydnmobktpn.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhucGdmdGd1cXB5ZG5tb2JrdHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NzE5MTYsImV4cCI6MjA4ODI0NzkxNn0.zSrRdtv6XqjkUhk-41ryOaG-HumEzow8xJJF9KDCDVI";

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
