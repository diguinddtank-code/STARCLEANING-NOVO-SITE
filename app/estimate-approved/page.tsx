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

interface StarConfig {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  scale: number;
  colorClass: string;
}

interface ConfettiConfig {
  id: number;
  color: string;
  size: number;
  shape: 'square' | 'circle' | 'star';
  targetX: number;
  targetY: number;
  rotation: number;
  duration: number;
  delay: number;
}

export default function EstimateApprovedPage() {
  const [stars, setStars] = React.useState<StarConfig[]>([]);
  const [confetti, setConfetti] = React.useState<ConfettiConfig[]>([]);

  React.useEffect(() => {
    // Generate floating star configuration (Veteran blue/cyan colors)
    const starColors = [
      'text-blue-500/35',
      'text-cyan-400/35',
      'text-blue-600/30',
      'text-cyan-300/30',
      'text-indigo-500/25',
    ];

    const generatedStars = Array.from({ length: 14 }).map((_, i) => {
      const size = Math.random() * 24 + 20; // 20px to 44px (larger and more celebratory!)
      const colorClass = starColors[Math.floor(Math.random() * starColors.length)];
      return {
        id: i,
        x: Math.random() * 100, // percentage left
        size,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 5, // 5s to 13s traversal (slower and more pleasant for larger shapes)
        scale: Math.random() * 0.4 + 0.8, // starts slightly larger
        colorClass,
      };
    });

    setStars(generatedStars);

    // Generate high-fidelity dopamine confetti burst from the success icon center
    const confettiColors = [
      '#3b82f6', // blue-500
      '#06b6d4', // cyan-500
      '#2563eb', // blue-600
      '#22d3ee', // cyan-400
      '#6366f1', // indigo-500
      '#eab308', // gold/yellow-500
    ];

    const generatedConfetti = Array.from({ length: 65 }).map((_, i) => {
      // Explode in a random 360 degree circle
      const angle = Math.random() * Math.PI * 2;
      // Random explosive velocity
      const velocity = Math.random() * 220 + 90;
      const targetX = Math.cos(angle) * velocity;
      // Bias Y upwards for a realistic popping/fountain physics drop
      const targetY = Math.sin(angle) * velocity - 60; 
      const duration = Math.random() * 1.4 + 0.9; // 0.9s to 2.3s
      const delay = Math.random() * 0.15; // fast stagger
      const shapes: ('square' | 'circle' | 'star')[] = ['square', 'circle', 'star'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const size = Math.random() * 11 + 6; // 6px to 17px
      const rotation = Math.random() * 540 - 270;

      return {
        id: i,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size,
        shape,
        targetX,
        targetY,
        rotation,
        duration,
        delay,
      };
    });

    setConfetti(generatedConfetti);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Immersive background glowing orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[30rem] h-[30rem] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-cyan-300/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

      {/* Floating Star Cleaning Celebration Stars (Gliding bottom to top over the modal) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ y: '105vh', x: `${star.x}vw`, opacity: 0, rotate: 0 }}
            animate={{
              y: '-10vh',
              opacity: [0, 0.15, 0.65, 0.65, 0.15, 0],
              rotate: 360,
              scale: star.scale,
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={`absolute ${star.colorClass}`}
            style={{
              width: star.size,
              height: star.size,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform transition-all">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-5 md:p-8 text-center relative z-10 border border-slate-100 my-4"
        id="estimate-approved-card"
      >
        {/* Trusted Top Security Header */}
        <div className="flex items-center justify-center gap-1.5 text-[9px] font-bold text-emerald-600 uppercase tracking-widest mb-4 bg-emerald-50 px-2.5 py-0.5 rounded-full w-fit mx-auto border border-emerald-100/60">
          <Lock className="w-3 h-3 text-emerald-500" />
          Secure Approval Process Complete
        </div>

        {/* Brand Logo Spot */}
        <div className="flex justify-center mb-4">
          <div className="relative h-11 w-[90px] md:h-13 md:w-[110px]">
            <Image 
              src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
              alt="Star Cleaning SC Logo" 
              fill
              sizes="(max-width: 768px) 90px, 110px"
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Animated Celebration Success Icon with Explosive Dopaminergic Confetti */}
        <div className="relative mx-auto w-12 h-12 mb-4">
          {/* Confetti Exploding Particles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            {confetti.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
                animate={{
                  x: particle.targetX,
                  y: particle.targetY,
                  scale: [0, 1, 1, 0.4, 0],
                  opacity: [1, 1, 1, 0.8, 0],
                  rotate: particle.rotation,
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  ease: [0.1, 0.8, 0.25, 1], // snappy physics curve
                }}
                className="absolute pointer-events-none"
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.shape !== 'star' ? particle.color : undefined,
                  color: particle.shape === 'star' ? particle.color : undefined,
                  borderRadius: particle.shape === 'circle' ? '50%' : particle.shape === 'square' ? '2px' : '0%',
                }}
              >
                {particle.shape === 'star' && (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 220 }}
            className="w-full h-full bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 relative z-10"
          >
            <FileCheck2 className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Main Headings */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1.5 tracking-tight font-heading">
          Estimate Approved!
        </h1>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-sm mx-auto mb-6">
          Thank you for choosing <span className="font-bold text-slate-800">Star Cleaning SC</span>. Your digital authorization has been securely processed.
        </p>

        {/* Three Step Timeline (Highly Compact & Easy to read on mobile) */}
        <div className="text-left mb-6">
          <h3 className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-3.5 text-center">
            Next steps for your clean:
          </h3>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px] shrink-0 border border-blue-100">
                1
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm">Secure Booking Deposit</h4>
                <p className="text-slate-500 text-[11px] leading-snug mt-0.5">
                  Check your email for a secure payment link. A small deposit secures and locks your appointment date on our schedule.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px] shrink-0 border border-blue-100">
                2
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm">Arrival Schedule</h4>
                <p className="text-slate-500 text-[11px] leading-snug mt-0.5">
                  Upon deposit verification, our dispatch coordinator will select your precise cleaning team and finalize your exact arrival window.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[10px] shrink-0 border border-emerald-100">
                3
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm flex items-center gap-1">
                  Veteran-Grade Pristine Clean <Sparkles className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                </h4>
                <p className="text-slate-500 text-[11px] leading-snug mt-0.5">
                  Our fully licensed, background-checked and precision-trained cleaners will transform your space with premium quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action / Help Section */}
        <div className="pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Need help?</p>
              <a href="tel:8432979935" className="text-xs font-black text-slate-900 hover:text-blue-600 transition-colors">
                (843) 297-9935
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 text-[9px] text-slate-500 font-bold self-stretch sm:self-auto justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            Licensed, Bonded & Insured
          </div>
        </div>
      </motion.div>

      {/* Trust Seal Footer */}
      <div className="text-center relative z-10 text-[10px] text-slate-400 space-y-0.5 px-4 mt-2">
        <p>© {new Date().getFullYear()} Star Cleaning SC. Veteran-owned & operated.</p>
        <p className="hidden sm:block">Providing impeccable house cleaning across Charleston, Summerville, Ladson & Mount Pleasant.</p>
      </div>
    </div>
  );
}
