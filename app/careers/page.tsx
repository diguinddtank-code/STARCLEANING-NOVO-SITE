import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersForm from '@/components/CareersForm';
import Image from 'next/image';

export const metadata = {
  title: 'Join Our Team | Star Cleaning SC',
  description: 'Work with Star Cleaning SC. 18 years serving the Lowcountry. Stable schedule, competitive pay.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-yellow-200 selection:text-star-blue">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
            alt="Cleaning Background"
            fill
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              
            {/* Left Content (Text) */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 font-heading tracking-tight leading-tight drop-shadow-lg">
                  Work With <br className="hidden sm:block" />
                  <span className="text-[#89CFF0]">Star Cleaning.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-8">
                  18 years serving the Lowcountry. Stable schedule, competitive pay.
              </p>
              
              <div className="hidden lg:block w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/10 mt-12 relative">
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
                              <p className="text-white font-bold whitespace-nowrap">Join Our Team</p>
                              <p className="text-blue-200 text-xs font-medium">Apply in 2 minutes</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

            {/* Right Content (Form) */}
            <div className="lg:col-span-7 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto mt-6 lg:mt-0 relative z-20">
              <CareersForm />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Credibility Bar */}
      <div className="w-full bg-[#004aad] text-white py-4 shadow-inner relative z-20">
          <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-4 md:gap-12 text-[10px] md:text-sm font-black uppercase tracking-widest text-center">
              <div className="flex items-center gap-1.5 md:gap-2">
                  <i className="fas fa-calendar-check text-yellow-400 text-base md:text-lg"></i>
                  <span>18 Years Experience</span>
              </div>
              <div className="hidden sm:block text-blue-300">|</div>
              <div className="flex items-center gap-1.5 md:gap-2">
                  <i className="fas fa-flag-usa text-yellow-400 text-base md:text-lg"></i>
                  <span>Veteran Owned</span>
              </div>
              <div className="hidden sm:block text-blue-300">|</div>
              <div className="flex items-center gap-1.5 md:gap-2 flex-grow sm:flex-grow-0 justify-center w-full sm:w-auto">
                  <i className="fas fa-trophy text-yellow-400 text-base md:text-lg"></i>
                  <span>Lowcountry's #1 Rated</span>
              </div>
          </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Why Work With Us?</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {/* Card 1 */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 font-black text-2xl mx-auto md:mx-0">
                          📅
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Consistent schedule</h3>
                      <p className="text-gray-500 font-medium text-sm">Enjoy a stable and reliable schedule. No overload, no burnout.</p>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left">
                      <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 font-black text-2xl mx-auto md:mx-0">
                          💰
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive pay</h3>
                      <p className="text-gray-500 font-medium text-sm">Great base pay + tips + clear performance raises over time.</p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left">
                      <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 font-black text-2xl mx-auto md:mx-0">
                          ✅
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Clear checklists</h3>
                      <p className="text-gray-500 font-medium text-sm">We provide detailed checklists and full team support to help you succeed.</p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left">
                      <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 font-black text-2xl mx-auto md:mx-0">
                          📈
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Real growth</h3>
                      <p className="text-gray-500 font-medium text-sm">We promote from within. Opportunities to advance easily in the company.</p>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
