"use client";

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, you do not need to be home. Most of our clients provide us with a key, garage code, or lockbox code. We are fully insured and background checked for your peace of mind."
    },
    {
      question: "Are your cleaning supplies pet-safe?",
      answer: "Yes! We love pets. We use eco-friendly products that are safe for dogs, cats, and children. If you have specific allergies or products you prefer us to use, just let us know."
    },
    {
      question: "What is included in a standard cleaning?",
      answer: "Our standard cleaning covers dusting, vacuuming, mopping, bathroom sanitation, kitchen cleaning (exterior of appliances), and making beds. See our Services section for a detailed checklist."
    },
    {
      question: "Are you insured and bonded?",
      answer: "Absolutely. Star Cleaning is fully licensed, insured, and bonded. If anything were to happen during a service, you are fully protected."
    },
    {
      question: "How do I pay for the service?",
      answer: "We accept all major credit cards, Venmo, and checks. Payment is processed after the cleaning is completed to your satisfaction."
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer: "We offer a 100% Satisfaction Guarantee. If you aren't happy with any area we cleaned, call us within 24 hours and we will come back and re-clean it for free."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-blue-50/70 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-star-blue"></span>
              <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Clear Answers</span>
              <span className="w-8 h-px bg-star-blue"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mt-4 mb-4 text-slate-900 tracking-tight leading-[1.15]">
              Frequently Asked <span className="text-star-blue">Questions.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our home cleaning visits, pet policies, and satisfaction guarantee.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 60}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100/80 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
      >
        <span className="font-bold text-gray-900 text-base sm:text-lg pr-6 group-hover:text-star-blue transition-colors">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-star-blue text-white rotate-180 shadow-sm' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-star-blue'}`}>
            <i className="fas fa-chevron-down text-xs"></i>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-dashed border-gray-100 mt-1">
            {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
