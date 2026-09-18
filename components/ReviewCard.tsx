import React from 'react';

export interface ReviewCardProps {
  text: string;
  author: string;
  location?: string;
  date?: string;
  source?: 'google' | 'facebook' | 'nextdoor' | 'yelp';
  rating?: number;
  theme?: 'light' | 'dark';
  variant?: 'carousel' | 'grid';
}

const renderSourceIcon = (src: string, isDark: boolean) => {
  if (src === 'google') {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    );
  }

  let iconClass = '';
  let colorClass = '';
  switch (src) {
    case 'facebook':
      iconClass = 'fab fa-facebook-f';
      colorClass = isDark ? 'text-blue-400' : 'text-blue-700';
      break;
    case 'nextdoor':
      iconClass = 'fas fa-home';
      colorClass = isDark ? 'text-green-400' : 'text-green-600';
      break;
    case 'yelp':
      iconClass = 'fab fa-yelp';
      colorClass = isDark ? 'text-red-400' : 'text-red-600';
      break;
    default:
      iconClass = 'fas fa-star';
      colorClass = 'text-yellow-400';
  }
  return <i className={`${iconClass} ${colorClass} text-lg opacity-80`}></i>;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  author,
  location,
  date,
  source,
  rating = 5,
  theme = 'light',
  variant = 'grid',
}) => {
  const isDark = theme === 'dark';
  const sizeClasses = variant === 'carousel' ? 'w-[85vw] sm:w-[320px] md:w-[380px] flex-shrink-0' : 'w-full';

  return (
    <div
      className={`${sizeClasses} p-6 lg:p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col ${
        isDark
          ? 'bg-slate-950 border border-slate-850 hover:border-slate-800'
          : 'bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className={`absolute top-6 right-8 text-6xl font-serif opacity-50 z-0 ${isDark ? 'text-slate-800' : 'text-blue-50'}`}>"</div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-1 text-yellow-400 text-sm">
            {[...Array(rating)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
          {date && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isDark ? 'text-slate-500 bg-slate-900' : 'text-gray-400 bg-gray-50'}`}>
              {date}
            </span>
          )}
        </div>

        <p className={`mb-6 font-medium leading-relaxed text-sm lg:text-base flex-grow ${isDark ? 'text-slate-300 font-light italic' : 'text-gray-600'}`}>
          "{text}"
        </p>

        <div className={`flex items-center gap-3 mt-auto border-t pt-4 ${isDark ? 'border-slate-900' : 'border-gray-50'}`}>
          <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${
            isDark ? 'bg-slate-800 text-slate-300' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-500 shadow-inner'
          }`}>
            {author.charAt(0)}
          </div>
          <div>
            <p className={`font-bold leading-tight text-sm lg:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>{author}</p>
            {location && <p className={`text-xs font-medium ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>{location}</p>}
          </div>
          {source && <div className="ml-auto">{renderSourceIcon(source, isDark)}</div>}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
