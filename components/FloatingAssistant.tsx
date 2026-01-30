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
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3 font-sans">
      
      {/* Message Bubble - Improved responsiveness: max-width calc handles small screens better */}
      <div 
        className={`absolute bottom-full mb-3 right-0 bg-white rounded-2xl rounded-tr-none shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 p-4 w-[280px] max-w-[calc(100vw-32px)] origin-bottom-right transition-all duration-500 ease-out transform ${
          isBubbleVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header inside bubble */}
        <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-50">
            <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">Laís from Star Cleaning</span>
            </div>
            <button 
                onClick={handleClose}
                className="text-gray-300 hover:text-gray-500 transition-colors w-5 h-5 flex items-center justify-center"
            >
                <i className="fas fa-times text-xs"></i>
            </button>
        </div>

        {/* Content Area */}
        {stage === 'typing' ? (
          <div className="flex items-center h-8">
            <div className="bg-gray-100 rounded-full px-3 py-2 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '300ms' }}></div>
            </div>
          </div>
        ) : (
          <a href="#quote" className="block group">
            <p className="text-gray-800 text-sm mb-3 leading-relaxed">
               Hi! 👋 Don't miss out! Get <b>20% OFF</b> your first deep clean today!
            </p>
            <div className="bg-star-blue text-white text-center py-2.5 rounded-lg text-sm font-bold shadow-md group-hover:bg-star-dark transition-colors flex items-center justify-center gap-2">
                <span>Claim 20% OFF</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </div>
          </a>
        )}
      </div>

      {/* Avatar Button */}
      <div 
        className={`relative group cursor-pointer transition-all duration-500 transform translate-y-0 opacity-100`}
        onClick={handleAvatarClick}
      >
        <div className="relative">
            {/* Pulsing ring - Show when active message OR when unread notification exists */}
            {(stage === 'message' || hasUnread) && (
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
            )}
            
            {/* Image */}
            <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                alt="Laís - Star Cleaning Support" 
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
            />
            
            {/* Notification Badge (Red) - Priority over Online Dot */}
            {hasUnread ? (
                 <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white z-20 animate-bounce shadow-sm">
                    1
                 </div>
            ) : (
                /* Online Status Dot */
                <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full z-10"></div>
            )}
        </div>

        {/* Name Tag (Only appears on hover or when avatar-only) - Hidden on very small screens automatically due to overflow if needed, but positioning helps */}
        <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg transition-all duration-300 hidden sm:block ${stage === 'avatar-only' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'}`}>
            Laís is Online
            {/* Little arrow pointing right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-4px] w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>
      </div>

    </div>
  );
};

export default FloatingAssistant;