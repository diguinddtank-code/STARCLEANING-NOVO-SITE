import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Thank You | Star Cleaning SC',
  description: 'Thank you for contacting Star Cleaning SC.',
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative z-10 border border-gray-100 transform transition-all hover:scale-[1.01]">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative h-16 w-[120px] md:h-20 md:w-[152px]">
            <Image 
              src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
              alt="Star Cleaning SC Logo" 
              fill
              sizes="(max-width: 768px) 120px, 152px"
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Success Icon */}
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
          Got it, we'll be in touch!
        </h1>
        
        <div className="space-y-3 text-gray-600 mb-8 text-lg">
          <p>Thank you for your interest.</p>
          <p>Our team will reach out to you very shortly.</p>
        </div>

        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

        <p className="font-bold text-xl text-gray-800 mb-8">
          Star Cleaning SC
        </p>

        {/* Back to Home Button */}
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
        >
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
