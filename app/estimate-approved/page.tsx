'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  FileCheck2,
  Lock
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EstimateApprovedPage() {
  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Immersive background glowing orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[35rem] h-[35rem] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-cyan-300/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 text-center relative z-10 border border-slate-100/10 my-8"
        id="estimate-approved-card"
      >
        {/* Trusted Top Security Header */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-6 bg-emerald-50 px-3 py-1 rounded-full w-fit mx-auto border border-emerald-100">
          <Lock className="w-3.5 h-3.5 text-emerald-500" />
          Secure Approval Process Complete
        </div>

        {/* Brand Logo Spot */}
        <div className="flex justify-center mb-6">
          <div className="relative h-14 w-[110px] md:h-16 md:w-[130px]">
            <Image 
              src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
              alt="Star Cleaning SC Logo" 
              fill
              sizes="(max-width: 768px) 110px, 130px"
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Animated Celebration Success Icon */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mx-auto w-16 h-16 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20"
        >
          <FileCheck2 className="w-8 h-8 text-white" />
        </motion.div>

        {/* Main Headings */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight font-heading">
          Estimate Approved!
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
          Thank you for trusting <span className="font-bold text-slate-900">Star Cleaning SC</span>. Your electronic approval has been verified and registered in our dispatch system.
        </p>

        {/* Three Step Timeline (Builds absolute trust and defines next steps) */}
        <div className="text-left mb-8">
          <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-5 text-center">
            Here is what happens next:
          </h3>
          <div className="space-y-5">
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 border border-blue-100">
                1
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Secure Your Booking Deposit</h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Check your inbox for a secure payment link. A small deposit is required to confirm and lock your spot on our lowcountry schedule.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 border border-blue-100">
                2
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Coordinator Confirmation</h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Once the deposit is received, our dispatch coordinator will match you with certified cleaners and send your exact arrival window.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 border border-emerald-100">
                3
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  Veteran-Standard Clean <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Our fully insured team delivers precision service. Any missed details will be corrected free of charge within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action / Help Section */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Need immediate help?</p>
              <a href="tel:8432979935" className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors">
                (843) 297-9935
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-[10px] text-slate-500 font-semibold self-stretch sm:self-auto justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            Licensed, Bonded & Insured
          </div>
        </div>
      </motion.div>

      {/* Trust Seal Footer */}
      <div className="text-center relative z-10 text-[11px] text-slate-400 space-y-1">
        <p>© {new Date().getFullYear()} Star Cleaning SC. Veteran-owned & operated.</p>
        <p>Providing impeccable house cleaning across Charleston, Summerville, Ladson & Mount Pleasant.</p>
      </div>
    </div>
  );
}
