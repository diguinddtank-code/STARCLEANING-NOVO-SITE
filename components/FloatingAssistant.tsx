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

  return (
    <div className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-50 flex flex-col items-end gap-2 font-sans">
      
      {/* Message Bubble - Compact Version */}
      <div 
        className={`absolute bottom-full mb-2 right-0 bg-white rounded-xl rounded-tr-none shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 p-3 w-[220px] origin-bottom-right transition-all duration-500 ease-out transform ${
          isBubbleVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header inside bubble - Minimalist */}
        <div className="flex justify-between items-start mb-1.5">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Laís • Support</span>
            <button 
                onClick={handleClose}
                className="text-gray-300 hover:text-gray-500 transition-colors w-4 h-4 flex items-center justify-center -mr-1 -mt-1"
            >
                <i className="fas fa-times text-[10px]"></i>
            </button>
        </div>

        {/* Content Area */}
        {stage === 'typing' ? (
          <div className="flex items-center h-6">
            <div className="bg-gray-100 rounded-full px-2.5 py-1.5 flex items-center gap-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0ms' }}></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '150ms' }}></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '300ms' }}></div>
            </div>
          </div>
        ) : (
          <a href="#quote" className="block group">
            <p className="text-gray-800 text-xs mb-2 leading-snug">
               Hi! 👋 Don't miss <b>20% OFF</b> your first deep clean!
            </p>
            <div className="bg-star-blue text-white text-center py-1.5 rounded-md text-xs font-bold shadow-sm group-hover:bg-star-dark transition-colors flex items-center justify-center gap-1.5">
                <span>Claim Offer</span>
                <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
            </div>
          </a>
        )}
      </div>

      {/* Avatar Button - Smaller */}
      <div 
        className={`relative group cursor-pointer transition-all duration-500 transform translate-y-0 opacity-100`}
        onClick={handleAvatarClick}
      >
        <div className="relative">
            {/* Pulsing ring */}
            {(stage === 'message' || hasUnread) && (
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
            )}
            
            {/* Image - Smaller dimensions */}
            <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                alt="Laís" 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-[3px] border-white shadow-lg hover:scale-105 transition-transform duration-300"
            />
            
            {/* Notification Badge */}
            {hasUnread ? (
                 <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white z-20 animate-bounce shadow-sm">
                    1
                 </div>
            ) : (
                /* Online Status Dot */
                <div className="absolute bottom-1 right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full z-10"></div>
            )}
        </div>

        {/* Name Tag (Only on hover desktop) */}
        <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap shadow-md transition-all duration-300 hidden sm:block ${stage === 'avatar-only' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'}`}>
            Laís
            <div className="absolute top-1/2 -translate-y-1/2 right-[-3px] w-1.5 h-1.5 bg-gray-900 transform rotate-45"></div>
        </div>
      </div>

    </div>
  );
};

export default FloatingAssistant;