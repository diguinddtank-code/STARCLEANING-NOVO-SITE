"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersForm from '@/components/CareersForm';
import Image from 'next/image';
import Script from 'next/script';

const translations = {
  es: {
    workWith: "Trabaja Con",
    subtitle: "18 años sirviendo en Lowcountry. Horario estable, pago competitivo.",
    joinTeam: "Únete a nuestro equipo",
    applyTwoMins: "Aplica en 2 minutos",
    exp: "18 Años de Experiencia",
    veteran: "Negocio de Veteranos",
    rated: "#1 en Lowcountry",
    whyWork: "¿Por qué trabajar con nosotros?",
    schedTitle: "Horario consistente",
    schedDesc: "Disfruta de un horario estable. Sin sobrecarga, sin agotamiento.",
    payTitle: "Pago competitivo",
    payDesc: "Gran pago base + propinas + claros aumentos por desempeño.",
    checkTitle: "Listas de control claras",
    checkDesc: "Proporcionamos checklists detallados y soporte total del equipo.",
    growTitle: "Crecimiento real",
    growDesc: "Promovemos desde adentro. Oportunidades para avanzar fácilmente."
  },
  pt: {
    workWith: "Trabalhe Com a",
    subtitle: "18 anos servindo a região. Horário estável, ótimo pagamento.",
    joinTeam: "Junte-se a nós",
    applyTwoMins: "Aplique em 2 minutos",
    exp: "18 Anos de Experiência",
    veteran: "Empresa de Veteranos",
    rated: "A Melhor da Região",
    whyWork: "Por que trabalhar conosco?",
    schedTitle: "Horário 100% fixo",
    schedDesc: "Aproveite um cronograma estável. Sem surpresas ou esgotamentos.",
    payTitle: "Pagamento justo",
    payDesc: "Ótimo piso + gorjetas + planos claros de bônus por desempenho.",
    checkTitle: "Checklists claros",
    checkDesc: "Damos passo a passo detalhados e suporte da equipe para você crescer.",
    growTitle: "Crescimento real",
    growDesc: "Promovemos internamente. Várias chances de subir dentro da empresa."
  },
  en: {
    workWith: "Work With",
    subtitle: "18 years serving the Lowcountry. Stable schedule, competitive pay.",
    joinTeam: "Join Our Team",
    applyTwoMins: "Apply in 2 minutes",
    exp: "18 Years Experience",
    veteran: "Veteran Owned",
    rated: "Lowcountry's #1 Rated",
    whyWork: "Why Work With Us?",
    schedTitle: "Consistent schedule",
    schedDesc: "Enjoy a stable and reliable schedule. No overload, no burnout.",
    payTitle: "Competitive pay",
    payDesc: "Great base pay + tips + clear performance raises over time.",
    checkTitle: "Clear checklists",
    checkDesc: "We provide detailed checklists and full team support to help you succeed.",
    growTitle: "Real growth",
    growDesc: "We promote from within. Opportunities to advance easily in the company."
  }
};

export default function CareersClient() {
  const [lang, setLang] = useState<'es' | 'pt' | 'en'>('es');
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-yellow-200 selection:text-star-blue">
      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2259353031142127');
        fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=2259353031142127&ev=PageView&noscript=1" alt="" />
      </noscript>
      {/* End Meta Pixel Code */}

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-20 overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-start">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
            className="w-full h-full object-cover object-center opacity-40"
          >
            <source src="https://i.imgur.com/Q7QVFW7.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
              
            {/* Left Content (Text) */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 font-heading tracking-tight leading-tight drop-shadow-lg">
                  {t.workWith} <br className="hidden sm:block" />
                  <span className="text-[#89CFF0]">Star Cleaning.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-6 mt-2">
                  {t.subtitle}
              </p>
              
              <div className="hidden lg:block w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/10 mt-8 relative">
                  <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 pointer-events-none"></div>
                  <Image 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                    alt="Happy Cleaner Team" 
                    width={600} 
                    height={400} 
                    className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-6 z-20">
                      <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                              <i className="fas fa-check"></i>
                          </div>
                          <div>
                              <p className="text-white font-bold whitespace-nowrap">{t.joinTeam}</p>
                              <p className="text-blue-200 text-xs font-medium">{t.applyTwoMins}</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

            {/* Right Content (Form) */}
            <div className="lg:col-span-7 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto mt-4 lg:mt-0 relative z-20">
              <CareersForm lang={lang} setLang={setLang} />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Credibility Bar */}
      <div className="w-full bg-[#004aad] text-white py-4 shadow-inner relative z-20">
          <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-4 md:gap-12 text-[10px] md:text-sm font-black uppercase tracking-widest text-center">
              <div className="flex items-center gap-1.5 md:gap-2">
                  <i className="fas fa-calendar-check text-yellow-400 text-base md:text-lg"></i>
                  <span>{t.exp}</span>
              </div>
              <div className="hidden sm:block text-blue-300">|</div>
              <div className="flex items-center gap-1.5 md:gap-2">
                  <i className="fas fa-flag-usa text-yellow-400 text-base md:text-lg"></i>
                  <span>{t.veteran}</span>
              </div>
              <div className="hidden sm:block text-blue-300">|</div>
              <div className="flex items-center gap-1.5 md:gap-2 flex-grow sm:flex-grow-0 justify-center w-full sm:w-auto">
                  <i className="fas fa-trophy text-yellow-400 text-base md:text-lg"></i>
                  <span>{t.rated}</span>
              </div>
          </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">{t.whyWork}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {/* Card 1 */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 font-black text-2xl mx-auto md:mx-0">
                          📅
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t.schedTitle}</h3>
                      <p className="text-gray-500 font-medium text-sm">{t.schedDesc}</p>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left">
                      <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 font-black text-2xl mx-auto md:mx-0">
                          💰
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t.payTitle}</h3>
                      <p className="text-gray-500 font-medium text-sm">{t.payDesc}</p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left">
                      <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 font-black text-2xl mx-auto md:mx-0">
                          ✅
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t.checkTitle}</h3>
                      <p className="text-gray-500 font-medium text-sm">{t.checkDesc}</p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left">
                      <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 font-black text-2xl mx-auto md:mx-0">
                          📈
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t.growTitle}</h3>
                      <p className="text-gray-500 font-medium text-sm">{t.growDesc}</p>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
