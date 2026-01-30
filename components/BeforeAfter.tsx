import React, { useRef, useState, useCallback, useEffect } from 'react';

const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    setSliderPosition(pos);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) updateSliderPosition(e.touches[0].clientX);
  }, [isDragging, updateSliderPosition]);

  // Global event listeners to handle dragging outside component
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
    } else {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    }
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp, handleTouchEnd]);


  return (
    <section className="py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block bg-white border border-blue-100 text-star-blue font-bold px-4 py-1.5 rounded-full mb-6 text-xs uppercase tracking-wider shadow-sm">
                <i className="fas fa-magic mr-2"></i>
                The Star Difference
            </div>
            
            <h2 className="text-4xl font-black text-gray-900 mb-6 font-heading leading-tight">
                Relax. We handle the dirty work.
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Imagine coming home to this. Our team is trained to spot details that others miss, using pet-safe products that leave your home smelling fresh, not like chemicals.
            </p>
            
            <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <i className="fas fa-leaf text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Eco-Friendly & Safe</h4>
                        <p className="text-sm text-gray-500">We use products that are tough on dirt but safe for your kids and pets.</p>
                    </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-star-blue shrink-0">
                        <i className="fas fa-user-check text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Consistent Cleaning Team</h4>
                        <p className="text-sm text-gray-500">We try to send the same friendly face every time so they know exactly how you like things done.</p>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Slider Side */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="relative mx-auto max-w-[600px] w-full aspect-[4/3] rounded-3xl shadow-2xl border-4 border-white overflow-hidden group">
                
                <div 
                ref={sliderRef}
                className="relative w-full h-full cursor-ew-resize"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                >
                {/* Before Image (Background) */}
                <div 
                    className="ba-image-container ba-before absolute top-0 left-0 w-full h-full z-[1]"
                    style={{ backgroundImage: "url('https://i.imgur.com/XhU71Rxh.jpg')" }}
                ></div>

                {/* After Image (Foreground, clipped) */}
                <div 
                    className="ba-image-container ba-after absolute top-0 left-0 h-full z-[2]"
                    style={{ 
                    width: `${sliderPosition}%`,
                    backgroundImage: "url('https://i.imgur.com/gpqI75Lh.jpg')" 
                    }}
                ></div>

                {/* Handle */}
                <div 
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full z-[3] flex items-center justify-center text-star-blue shadow-[0_0_20px_rgba(0,0,0,0.3)] pointer-events-none group-hover:scale-110 transition-transform"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <i className="fas fa-arrows-alt-h"></i>
                </div>
                
                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md z-[2] uppercase tracking-wider">Before</div>
                <div className="absolute top-4 right-4 bg-star-blue/80 text-white px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md z-[2] uppercase tracking-wider">After</div>
                </div>
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-4 italic">
                <i className="fas fa-info-circle mr-1"></i> Drag the slider to see the magic
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;