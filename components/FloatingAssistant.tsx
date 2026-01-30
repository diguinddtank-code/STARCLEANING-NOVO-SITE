import React, { useState, useEffect } from 'react';

const FloatingAssistant: React.FC = () => {
  // Stages manage the lifecycle of the assistant
  const [stage, setStage] = useState<'hidden' | 'avatar-only' | 'typing' | 'message' | 'minimized'>('hidden');
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    // 1. Initial appearance of avatar
    const showAvatarTimer = setTimeout(() => setStage('avatar-only'), 1000);
    
    // 2. Start typing effect after delay
    const startTypingTimer = setTimeout(() => {
        setStage(prev => prev === 'avatar-only' ? 'typing' : prev);
    }, 3000); 

    // 3. Show the message bubble
    const showMessageTimer = setTimeout(() => {
        setStage(prev => prev === 'typing' ? 'message' : prev);
    }, 5500);

    return () => {
      clearTimeout(showAvatarTimer);
      clearTimeout(startTypingTimer);
      clearTimeout(showMessageTimer);
    };
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStage('minimized');
    setHasUnread(true);
  };

  const handleAvatarClick = () => {
    if (stage === 'minimized' || stage === 'avatar-only') {
      setStage('message');
      setHasUnread(false);
    } else {
        // Smooth scroll to quote instead of harsh jump
        const quoteSection = document.getElementById('quote');
        if (quoteSection) {
            quoteSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '#quote';
        }
    }
  };

  if (stage === 'hidden') return null;

  const isBubbleVisible = stage === 'typing' || stage === 'message';
  const isTyping = stage === 'typing';

  return (
    // Main Container
    // Mobile: bottom-24 (approx 96px) to clear the MobileAppNav + safe area
    // Desktop: bottom-6
    <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end pointer-events-none">
      
      <div className="relative flex items-end">
        
        {/* Message Bubble - Left Side */}
        <div 
            className={`absolute right-full mr-4 mb-1 origin-right transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) pointer-events-auto ${
            isBubbleVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-8 scale-75'
            }`}
        >
            <div className={`bg-white rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 relative overflow-hidden ${
                isTyping ? 'p-3 w-auto min-w-[60px]' : 'w-[260px] p-0'
            }`}>
                
                {/* Close Button (Absolute inside bubble) */}
                {!isTyping && (
                     <button 
                        onClick={handleClose}
                        className="absolute top-2 right-2 w-6 h-6 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-400 transition-colors z-20"
                    >
                        <i className="fas fa-times text-[10px]"></i>
                    </button>
                )}

                {/* Content */}
                {isTyping ? (
                    <div className="flex items-center gap-1.5 px-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '150ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '300ms' }}></div>
                    </div>
                ) : (
                    <a href="#quote" className="block group">
                         {/* Header */}
                         <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                             <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Laís from Star Cleaning</span>
                         </div>
                         
                         {/* Body */}
                         <div className="p-4">
                            <p className="text-gray-800 text-sm leading-relaxed mb-3">
                                Hi there! 👋 Claim your <span className="font-bold text-star-blue bg-blue-50 px-1 rounded">20% OFF</span> discount code for your first deep clean today!
                            </p>
                            
                            <div className="w-full bg-star-blue hover:bg-star-dark text-white text-center py-2.5 rounded-xl text-xs font-bold shadow-md shadow-blue-200 transition-all transform group-hover:scale-[1.02] flex items-center justify-center gap-2">
                                <span>Get My Code</span>
                                <i className="fas fa-arrow-right text-[10px]"></i>
                            </div>
                         </div>
                    </a>
                )}
            </div>

            {/* Bubble Tail - Correctly pointing to Avatar */}
            <svg 
                className={`absolute -right-[9px] bottom-3 w-[10px] h-[16px] text-white drop-shadow-[2px_0_0_rgba(243,244,246,1)] transform scale-y-[-1] ${isTyping ? 'hidden' : 'block'}`} 
                viewBox="0 0 10 16" 
                fill="currentColor"
            >
               <path d="M10 0V16L0 8L10 0Z" />
               {/* Border fix for the tail */}
               <path d="M0 8L10 0" stroke="#f3f4f6" strokeWidth="1" fill="none" />
               <path d="M0 8L10 16" stroke="#f3f4f6" strokeWidth="1" fill="none" />
            </svg>
        </div>

        {/* Avatar Button */}
        <div 
            className={`relative group cursor-pointer pointer-events-auto transition-transform duration-300 active:scale-95`}
            onClick={handleAvatarClick}
        >
            <div className="relative">
                {/* Pulsing ring */}
                {(stage === 'message' || hasUnread) && (
                    <div className="absolute inset-0 -m-1 bg-green-400 rounded-full animate-ping opacity-20"></div>
                )}
                
                {/* Image */}
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                    alt="Laís" 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-white shadow-xl hover:shadow-2xl transition-all"
                />
                
                {/* Notification Badge */}
                {hasUnread ? (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white z-20 animate-bounce shadow-sm">
                        1
                    </div>
                ) : (
                    /* Online Status Dot */
                    <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full z-10"></div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};

export default FloatingAssistant;