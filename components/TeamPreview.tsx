'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const headlineClass = `font-serif font-medium leading-[1.1] text-slate-900`;

const TrustLine = () => (
  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
    <span>Local team</span>
    <span className="text-slate-300">|</span>
    <span>Background-checked</span>
    <span className="text-slate-300">|</span>
    <span>18+ years of experience</span>
  </div>
);

const Eyebrow = () => (
  <div className="flex items-center gap-3 mb-6">
    <span className="w-8 h-px bg-star-blue"></span>
    <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Our Team</span>
  </div>
);

const Copy = () => (
  <p className="text-slate-600 leading-relaxed max-w-md mb-5 lg:mb-8">
    Our team is the heart of Star Cleaning SC. We&apos;re a local group of trained, background-checked professionals who take pride in caring for your home like it&apos;s our own.
  </p>
);

const CTA = () => (
  <Link
    href="/our-team"
    className="inline-flex items-center gap-2 bg-star-blue hover:bg-star-dark text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-star-blue/20"
  >
    Meet Our Team <ArrowRight className="w-4 h-4" />
  </Link>
);

const EditorialDetail = () => (
  <motion.p
    initial={{ opacity: 0, y: -10, rotate: -2 }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    className="font-handwriting text-2xl text-star-blue/80 absolute top-10 right-12 text-right leading-snug z-20 pointer-events-none select-none"
  >
    A Cleaner
    <br />
    Brighter Tomorrow
    <span className="block w-16 h-px bg-star-blue/30 mt-1 ml-auto"></span>
  </motion.p>
);

const TeamPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth physics-based spring smoothing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Layer 1: Background moves gently upwards (slower parallax)
  const bgY = useTransform(smoothProgress, [0, 1], ['-6%', '6%']);
  const bgScale = useTransform(smoothProgress, [0, 1], [1.02, 1.08]);

  // Layer 2: Team cut-out pops upward with a realistic 3D forward step
  const teamY = useTransform(smoothProgress, [0, 0.45, 1], ['8%', '0%', '-4%']);
  const teamScale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1.02, 1.04]);

  return (
    <section ref={containerRef} className="bg-white relative overflow-hidden">
      {/* Desktop / tablet-landscape: 3D Layered Composition with Scroll Parallax */}
      <div className="hidden lg:block relative h-[680px] overflow-hidden">
        
        {/* Layer 0: Parallax House Interior Backdrop */}
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-[-8%] overflow-hidden bg-[#f6f4f1] pointer-events-none"
        >
          <Image
            src="/images/background-team.png"
            alt=""
            fill
            aria-hidden="true"
            priority
            className="object-cover object-[0%_35%] scale-[1.75]"
          />
          <div className="absolute inset-0 bg-white/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>

        <EditorialDetail />

        {/* Layer 1: Organic Curve (Separates Text & Photo) */}
        <motion.svg
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          viewBox="0 0 1000 660"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L420,0 C480,180 340,440 400,660 L0,660 Z"
            fill="white"
          />
        </motion.svg>

        {/* Layer 2: 3D Team Cut-out with Multi-Directional Entrance & Parallax */}
        <motion.div
          style={{ y: teamY, scale: teamScale }}
          initial={{ opacity: 0, y: 70, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 z-20 lg:left-[44%] lg:w-[60%] xl:left-[38%] xl:w-[68%] 2xl:left-[34%] 2xl:w-[70%] max-w-[1100px] pointer-events-none"
        >
          {/* Subtle natural contact shadow to ground the team in 3D space */}
          <div className="relative">
            <Image
              src="/images/fullteam.png"
              alt="Mariana and the Star Cleaning SC team standing together in matching uniforms"
              width={1774}
              height={887}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
            />
          </div>
        </motion.div>

        {/* Layer 3: Text & Copy Content with Staggered Entrance */}
        <div className="relative z-30 h-full flex items-center pl-16 xl:pl-24 pr-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
            className="max-w-[360px] xl:max-w-[420px]"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Eyebrow />
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
              className={`${headlineClass} text-4xl sm:text-5xl lg:text-[3.25rem] mb-6`}
            >
              Real People.
              <br />
              Real Care.
              <br />
              <span className="text-star-blue">A Cleaner Home.</span>
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Copy />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <CTA />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="mt-10"
            >
              <TrustLine />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet-portrait: Scroll Reveal & Parallax */}
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 sm:px-10 pt-10 pb-4"
        >
          <Eyebrow />
          <h2 className={`${headlineClass} text-3xl sm:text-4xl mb-4`}>
            Real People.
            <br />
            Real Care.
            <br />
            <span className="text-star-blue">A Cleaner Home.</span>
          </h2>
          <Copy />
          <CTA />
          <div className="mt-5">
            <TrustLine />
          </div>
        </motion.div>

        {/* Portrait team photo with smooth upward reveal and subtle scale */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[933/523] overflow-hidden mt-3"
        >
          <Image
            src="/images/teammobile.png"
            alt="Mariana and the Star Cleaning SC team standing together in matching uniforms"
            fill
            className="object-cover object-[center_64%]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
