'use server';

import { createClient } from '@supabase/supabase-js';

// Usamos a SERVICE_ROLE_KEY no backend para ignorar o RLS do Supabase com segurança
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export async function fetchLeads(pin: string) {
  // Transferimos a validação do PIN para o Backend/Server-Side
  // Escondendo as senhas reais do código do navegador (Frontend)
  const validPins = ['7827', 'star20', process.env.ADMIN_PIN];
  
  if (!validPins.includes(pin)) {
    throw new Error('PIN Inválido');
  }

  const { data, error } = await supabaseAdmin
    .from('job_applications')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) throw new Error(error.message);
  return data;
}

export async function clearAllLeads(pin: string) {
  const validPins = ['7827', 'star20', process.env.ADMIN_PIN];
  
  if (!validPins.includes(pin)) {
    throw new Error('PIN Inválido');
  }

  const { error } = await supabaseAdmin
    .from('job_applications')
    .delete()
    .gte('qualification_score', -1);
    
  if (error) throw new Error(error.message);
  return true;
}
