"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

// Custom InputGroup component to match BookingForm style
const InputGroup = ({ label, name, type = 'text', icon, placeholder, value, onChange, required = false }: any) => (
  <div className="mb-4">
    <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1 uppercase tracking-wider">
      {label} {required && <span className="text-blue-500">*</span>}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <i className={`fas ${icon} text-gray-400`}></i>
      </div>
      <input
        required={required}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00b4db]/50 focus:border-[#00b4db] transition-all text-sm font-medium shadow-sm"
      />
    </div>
  </div>
);

// Custom RadioGroup component 
const RadioGroup = ({ label, name, options, value, onChange, required = false }: any) => (
  <div className="mb-5">
    <label className="block text-xs font-bold text-gray-700 mb-2 ml-1 uppercase tracking-wider">
      {label} {required && <span className="text-blue-500">*</span>}
    </label>
    <div className="flex flex-col gap-2">
      {options.map((option: any) => (
        <label 
          key={option.value} 
          className={`relative p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-center gap-3 touch-manipulation ${
            value === option.value
            ? 'border-[#00b4db] bg-blue-50/30' 
            : 'border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-gray-100/50'
          }`}
        >
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
              value === option.value ? 'border-[#00b4db] bg-[#00b4db] text-white' : 'border-gray-300 bg-white'
          }`}>
              {value === option.value && <i className="fas fa-check text-[10px]"></i>}
          </div>
          <span className={`text-sm font-bold ${value === option.value ? 'text-gray-900' : 'text-gray-600'}`}>
            {option.label}
          </span>
          <input 
            type="radio" 
            name={name} 
            value={option.value} 
            checked={value === option.value} 
            onChange={onChange} 
            className="hidden" 
            required={required}
          />
        </label>
      ))}
    </div>
  </div>
);

const translations = {
  en: {
    title: "Apply Now",
    subtitle: "Takes less than 2 minutes.",
    fullName: "Full Name",
    namePlaceholder: "John Doe",
    phone: "Phone Number",
    phonePlaceholder: "(843) 555-0123",
    city: "City you live in",
    cityPlaceholder: "e.g. Charleston, SC",
    experience: "Cleaning Experience?",
    exp1: "1+ year",
    exp2: "Less than 1 year",
    exp3: "No experience",
    transport: "Own transportation?",
    yes: "Yes",
    no: "No",
    availability: "Weekday availability?",
    avail1: "Full-time",
    avail2: "Part-time",
    avail3: "Not available",
    solo: "Comfortable cleaning solo?",
    solo2: "Prefer team",
    details: "Detail-oriented & follow checklists?",
    details2: "More or less",
    workAuth: "Authorized to work in the US?",
    startDate: "Available to start?",
    start1: "Immediately",
    start2: "Within 2 weeks",
    start3: "2+ weeks",
    whyUs: "Why do you want to work with Star Cleaning?",
    whyPlaceholder: "Tell us briefly...",
    submit: "Submit Application",
    thanks: "Thanks!",
    contactSoon: "We'll contact you soon."
  },
  pt: {
    title: "Candidate-se",
    subtitle: "Leva menos de 2 minutos.",
    fullName: "Nome Completo",
    namePlaceholder: "Maria Silva",
    phone: "Telefone",
    phonePlaceholder: "(843) 555-0123",
    city: "Cidade onde mora",
    cityPlaceholder: "ex: Charleston, SC",
    experience: "Experiência com limpeza?",
    exp1: "Mais de 1 ano",
    exp2: "Menos de 1 ano",
    exp3: "Nenhuma experiência",
    transport: "Possui veículo próprio?",
    yes: "Sim",
    no: "Não",
    availability: "Disponibilidade na semana?",
    avail1: "Tempo integral",
    avail2: "Meio período",
    avail3: "Não disponível",
    solo: "Confortável limpando sozinha(o)?",
    solo2: "Prefiro em equipe",
    details: "É detalhista e segue checklists?",
    details2: "Mais ou menos",
    workAuth: "Autorização para trabalhar nos EUA?",
    startDate: "Disponibilidade para começar?",
    start1: "Imediatamente",
    start2: "Em até 2 semanas",
    start3: "Mais de 2 semanas",
    whyUs: "Por que deseja trabalhar na Star Cleaning?",
    whyPlaceholder: "Conte-nos brevemente...",
    submit: "Enviar Candidatura",
    thanks: "Obrigado!",
    contactSoon: "Entraremos em contato em breve."
  },
  es: {
    title: "Aplica Ahora",
    subtitle: "Toma menos de 2 minutos.",
    fullName: "Nombre Completo",
    namePlaceholder: "María Pérez",
    phone: "Teléfono",
    phonePlaceholder: "(843) 555-0123",
    city: "Ciudad donde vives",
    cityPlaceholder: "ej: Charleston, SC",
    experience: "¿Experiencia en limpieza?",
    exp1: "Más de 1 año",
    exp2: "Menos de 1 año",
    exp3: "Sin experiencia",
    transport: "¿Tienes vehículo propio?",
    yes: "Sí",
    no: "No",
    availability: "¿Disponibilidad en la semana?",
    avail1: "Tiempo completo",
    avail2: "Medio tiempo",
    avail3: "No disponible",
    solo: "¿Te sientes cómoda(o) limpiando sola(o)?",
    solo2: "Prefiero en equipo",
    details: "¿Prestas atención a los detalles y checklists?",
    details2: "Más o menos",
    workAuth: "¿Autorización para trabajar en EE. UU.?",
    startDate: "¿Disponibilidad para empezar?",
    start1: "Inmediatamente",
    start2: "En 2 semanas",
    start3: "Más de 2 semanas",
    whyUs: "¿Por qué quieres trabajar con Star Cleaning?",
    whyPlaceholder: "Cuéntanos brevemente...",
    submit: "Enviar Solicitud",
    thanks: "¡Gracias!",
    contactSoon: "Te contactaremos pronto."
  }
};

export default function CareersForm({ 
  lang: externalLang, 
  setLang: externalSetLang 
}: { 
  lang?: 'en' | 'pt' | 'es', 
  setLang?: (l: 'en' | 'pt' | 'es') => void 
} = {}) {
  const [internalLang, setInternalLang] = useState<'en' | 'pt' | 'es'>('es');
  const lang = externalLang || internalLang;
  const setLang = externalSetLang || setInternalLang;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    experience: '',
    transport: '',
    availability: '',
    solo: '',
    details: '',
    workAuth: '',
    phone: '',
    startDate: '',
    whyUs: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = translations[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateScore = (data: typeof formData) => {
    let score = 0;
    
    // Experience (Max 25)
    if (data.experience === '1_plus_years') score += 25;
    else if (data.experience === 'less_than_1_year') score += 10;
    
    // Transport (Critical - Max 20)
    if (data.transport === 'yes') score += 20;
    
    // Availability (Max 20)
    if (data.availability === 'full_time') score += 20;
    else if (data.availability === 'part_time') score += 10;
    
    // Solo (Max 10)
    if (data.solo === 'yes') score += 10;
    else if (data.solo === 'prefer_team') score += 5;
    
    // Details (Max 10)
    if (data.details === 'yes') score += 10;
    else if (data.details === 'more_or_less') score += 5;
    
    // Work Auth (Critical - Max 15)
    if (data.workAuth === 'yes') score += 15;

    return Math.min(score, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const qualificationScore = calculateScore(formData);

      // Track Meta Pixel Lead event FIRST, ensure nothing blocks it
      try {
        if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Job Application',
            value: qualificationScore,
            currency: 'USD'
          });
        }
      } catch (err) {
        console.error("Meta Pixel tracking failed", err);
      }

      // Add to Supabase
      const { error: supabaseError } = await supabase
        .from('job_applications')
        .insert([{
          full_name: formData.fullName,
          phone: formData.phone,
          city: formData.city,
          experience: formData.experience,
          has_transport: formData.transport === 'yes',
          availability: formData.availability,
          comfortable_solo: formData.solo === 'yes',
          detail_oriented: formData.details,
          work_auth: formData.workAuth === 'yes',
          start_date: formData.startDate,
          why_us: formData.whyUs,
          language_used: lang,
          qualification_score: qualificationScore,
          status: 'new'
        }]);

      if (supabaseError) {
        console.error("Error saving to Supabase (Check RLS Policies):", supabaseError);
        // Continue even if Supabase fails so n8n can still try
      }

      // Send to n8n Webhook
      try {
        // NOTE: webhook-test in n8n only works when you are actively listening on the n8n interface.
        // Change to /webhook/ instead of /webhook-test/ for production!
        await fetch('https://n8n.infra-remakingautomacoes.cloud/webhook-test/sce', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            language: lang,
            qualificationScore,
            source: 'careers_page'
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook submission failed:", webhookErr);
      }

    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 text-center flex flex-col items-center justify-center min-h-[400px] animate-fade-in">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-5xl shadow-xl shadow-green-500/30">
              <i className="fas fa-check"></i>
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">{t.thanks}</h3>
        <p className="text-gray-500 font-medium text-lg mb-8 max-w-sm leading-relaxed">
          {lang === 'en' && "Your application has been successfully submitted! We're reviewing your profile and will contact you very soon via phone."}
          {lang === 'pt' && "Sua candidatura foi enviada com sucesso! Estamos revisando seu perfil e entraremos em contato muito em breve pelo telefone."}
          {lang === 'es' && "¡Su solicitud ha sido enviada con éxito! Estamos revisando su perfil y nos pondremos en contacto con usted muy pronto por teléfono."}
        </p>
        <div className="bg-gray-50 rounded-xl p-4 w-full flex items-center justify-center gap-3 text-sm font-bold text-gray-600 border border-gray-100">
           <i className="fas fa-envelope-open-text text-blue-500 text-lg"></i>
           <span>{t.contactSoon}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden relative border border-gray-100/50">
      
      {/* Header and Language Selector */}
      <div className="p-6 md:p-8 border-b border-gray-100 bg-white relative z-10 flex flex-col items-center">
        {/* Language Toggles */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-6 shadow-inner w-full max-w-[280px]">
          <button 
            onClick={() => setLang('es')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${lang === 'es' ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <span className="text-base leading-none">🇪🇸</span> ES
          </button>
          <button 
            onClick={() => setLang('pt')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${lang === 'pt' ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <span className="text-base leading-none">🇧🇷</span> PT-BR
          </button>
          <button 
            onClick={() => setLang('en')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${lang === 'en' ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <span className="text-base leading-none">🇺🇸</span> EN
          </button>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-gray-900">{t.title}</h3>
        <p className="text-gray-500 text-sm font-medium mt-2">{t.subtitle}</p>
      </div>
      
      <div className="p-6 md:p-8 bg-white">
        <form id="careers-form" onSubmit={handleSubmit} className="space-y-4">
          
          <InputGroup 
            label={t.fullName} 
            name="fullName" 
            icon="fa-user" 
            placeholder={t.namePlaceholder} 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />

          <InputGroup 
            label={t.phone} 
            name="phone" 
            type="tel"
            icon="fa-phone" 
            placeholder={t.phonePlaceholder} 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />

          <InputGroup 
            label={t.city} 
            name="city" 
            icon="fa-map-marker-alt" 
            placeholder={t.cityPlaceholder} 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />

          <RadioGroup 
            label={t.experience}
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            options={[
              { label: t.exp1, value: '1_plus_years' },
              { label: t.exp2, value: 'less_than_1_year' },
              { label: t.exp3, value: 'none' }
            ]}
          />

          <RadioGroup 
            label={t.transport}
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            required
            options={[
              { label: t.yes, value: 'yes' },
              { label: t.no, value: 'no' }
            ]}
          />

          <RadioGroup 
            label={t.availability}
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            options={[
              { label: t.avail1, value: 'full_time' },
              { label: t.avail2, value: 'part_time' },
              { label: t.avail3, value: 'no' }
            ]}
          />

          <RadioGroup 
            label={t.solo}
            name="solo"
            value={formData.solo}
            onChange={handleChange}
            required
            options={[
              { label: t.yes, value: 'yes' },
              { label: t.solo2, value: 'prefer_team' }
            ]}
          />

          <RadioGroup 
            label={t.details}
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            options={[
              { label: t.yes, value: 'yes' },
              { label: t.details2, value: 'more_or_less' },
              { label: t.no, value: 'no' }
            ]}
          />

          <RadioGroup 
            label={t.workAuth}
            name="workAuth"
            value={formData.workAuth}
            onChange={handleChange}
            required
            options={[
              { label: t.yes, value: 'yes' },
              { label: t.no, value: 'no' }
            ]}
          />

          <RadioGroup 
            label={t.startDate}
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            options={[
              { label: t.start1, value: 'immediately' },
              { label: t.start2, value: 'within_2_weeks' },
              { label: t.start3, value: 'more_than_2_weeks' }
            ]}
          />

          <div className="mb-2 pt-2">
            <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1 uppercase tracking-wider">
              {t.whyUs} <span className="text-blue-500">*</span>
            </label>
            <textarea 
              required 
              name="whyUs"
              value={formData.whyUs}
              onChange={handleChange}
              rows={3} 
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00b4db]/50 focus:border-[#00b4db] transition-all text-sm font-medium shadow-sm resize-none" 
              placeholder={t.whyPlaceholder} 
            />
          </div>

        </form>
      </div>

      <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-100">
          <button 
            type="submit" 
            form="careers-form"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl font-black text-white bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg shadow-blue-900/20 transform hover:-translate-y-0.5 transition-all text-base md:text-lg active:scale-95 flex items-center justify-center gap-2 touch-manipulation disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <><i className="fas fa-spinner fa-spin"></i> Submitting...</>
            ) : (
              <>{t.submit} <i className="fas fa-arrow-right text-sm"></i></>
            )}
          </button>
      </div>
    </div>
  );
}
