import React, { useState } from 'react';

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
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-star-blue font-bold uppercase tracking-widest text-xs bg-white border border-blue-100 px-3 py-1 rounded-full shadow-sm">Common Questions</span>
          <h2 className="text-4xl font-black mt-4 mb-4 text-gray-900 font-heading">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about our premium cleaning services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-gray-900 text-lg pr-8">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-star-blue text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
            <i className="fas fa-chevron-down"></i>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-dashed border-gray-100 mt-2">
            {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQ;