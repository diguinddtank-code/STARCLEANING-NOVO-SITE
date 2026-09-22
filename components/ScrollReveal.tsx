"use client";

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  width?: 'full' | 'auto';
  id?: string;
  amount?: number | 'some' | 'all';
  distance?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  direction = 'up', 
  delay = 0,
  duration = 0.7,
  width = 'full',
  id,
  amount = 0.15,
  distance = 32
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'none':
        return {
          hidden: { opacity: 0, scale: 0.97 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ 
        duration, 
        delay: delay / 1000, 
        ease: [0.22, 1, 0.36, 1] // Luxury cubic bezier easing (smoother deceleration)
      }}
      variants={getVariants()}
      className={`${width === 'full' ? 'w-full' : 'w-auto'} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
