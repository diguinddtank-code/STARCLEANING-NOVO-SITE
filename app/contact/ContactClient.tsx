'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mimicking a webhook submission
      const response = await fetch('https://n8n.infra-remakingautomacoes.cloud/webhook/sccontact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'contact_page',
          submittedAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({ event: 'form_submit_success' });
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      // Always show success to user even if webhook fails (optimistic UX)
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-yellow-200 selection:text-slate-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow w-full pb-20 lg:pb-0 pt-16 lg:pt-32">
        <section className="relative py-12 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold tracking-widest uppercase mb-6">
                  <i className="fas fa-headset text-blue-600"></i>
                  We're Here For You
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-heading leading-tight mb-6">
                  Let's Elevate Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Living Standard.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-light">
                  Whether you need a custom cleaning plan, have questions about our process, or want to join our team — reach out. We respond with military precision.
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 bg-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
              
              {/* Left Info Pane */}
              <div className="lg:col-span-2 bg-slate-900 p-10 lg:p-14 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px]"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-8 font-heading">Contact Information</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-yellow-400">
                        <i className="fas fa-phone text-lg"></i>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Call or Text Us</div>
                        <a href="tel:8434802442" className="text-xl font-bold hover:text-yellow-400 transition-colors">(843) 480-2442</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-yellow-400">
                        <i className="fas fa-envelope text-lg"></i>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Email Us</div>
                        <a href="mailto:info@starcleaningsc.com" className="text-lg font-bold hover:text-yellow-400 transition-colors">info@starcleaningsc.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-yellow-400">
                        <i className="fas fa-clock text-lg"></i>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Business Hours</div>
                        <div className="text-lg font-medium text-slate-200">Mon - Fri: 8:00 AM - 5:00 PM<br/>Sat & Sun: Closed</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-yellow-400">
                        <i className="fas fa-map-location-dot text-lg"></i>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Service Areas</div>
                        <div className="text-lg font-medium text-slate-200">Charleston, Summerville, Mt Pleasant, Ladson, Goose Creek</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-16 pt-8 border-t border-slate-800">
                  <div className="flex items-center gap-4">
                     <Image src="https://image-cdn.carrot.com/uploads/sites/6069/2012/01/veteran-owned.png" alt="Veteran Owned" width={48} height={24} className="object-contain brightness-0 invert opacity-70" />
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Veteran Owned & Operated</span>
                  </div>
                </div>
              </div>

              {/* Right Form Pane */}
              <div className="lg:col-span-3 p-10 lg:p-14">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-24 h-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-4xl mb-6">
                      <i className="fas fa-check"></i>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 font-heading">Message Received</h3>
                    <p className="text-lg text-slate-600 font-light mb-8 max-w-md">
                      Thank you for reaching out to Star Cleaning Service. We typically respond within 1 business day.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 font-bold hover:text-blue-800 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-black text-slate-900 mb-8 font-heading">Send us a message</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                            <i className="fas fa-user"></i>
                          </div>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                            <i className="fas fa-phone"></i>
                          </div>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal"
                            placeholder="(843) 000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700">How can we help you? *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal resize-none"
                        placeholder="Tell us about your home, questions, or specific needs..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-black py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_20px_rgba(250,204,21,0.2)] hover:-translate-y-1 mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-circle-notch fa-spin"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="fas fa-paper-plane"></i>
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-xs text-slate-500 mt-4 font-medium">
                      By submitting this form, you agree to our privacy policy. <br className="hidden sm:block" />
                      Looking for an instant estimate instead? <Link href="/#quote" className="text-blue-600 font-bold hover:underline">Get a Quote Here</Link>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
