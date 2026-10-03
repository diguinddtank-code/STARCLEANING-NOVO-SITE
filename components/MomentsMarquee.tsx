import React from 'react';
import Image from 'next/image';

const moments = [
  {
    src: '/images/more-than-clean-mom.webp',
    alt: 'A mother and her young daughter laughing while they cook together in a bright, spotless kitchen',
    caption: 'Cooking together. Not cleaning up.',
  },
  {
    src: '/images/more-than-clean-homework.webp',
    alt: 'A mother smiling as her daughter does her homework at the kitchen table of a bright, tidy home',
    caption: 'Homework help. Not mopping floors.',
  },
  {
    src: '/images/more-than-clean-story-time.webp',
    alt: 'A mother and daughter reading a storybook under a cozy blanket on the sofa with their golden retriever',
    caption: 'Story time. Not scrubbing grout.',
  },
];

// Three identical sets side by side, shifted by exactly one set (-33.33%) for a seamless loop on any screen width.
const SETS = [0, 1, 2];

const MomentsMarquee: React.FC = () => {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] motion-reduce:overflow-x-auto">
      <div className="flex w-max animate-moments-scroll">
        {SETS.map((set) =>
          moments.map((moment) => (
            <figure
              key={`${set}-${moment.src}`}
              aria-hidden={set > 0}
              className="box-border w-[86vw] max-w-[27rem] shrink-0 lg:max-w-[31rem] pr-4 sm:w-[27rem] sm:pr-6 lg:w-[31rem]"
            >
              {/* Same 3:2 ratio as the photos, so nothing is cropped */}
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-[0_24px_50px_-18px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
                <Image
                  src={moment.src}
                  alt={set === 0 ? moment.alt : ''}
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 432px, 496px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3.5 flex items-center gap-2 text-[13px] font-bold text-blue-100 sm:gap-2.5 sm:text-base">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-star-blue sm:h-8 sm:w-8">
                  <i className="fas fa-heart text-[10px] sm:text-xs"></i>
                </span>
                <span className="whitespace-nowrap leading-tight">{moment.caption}</span>
              </figcaption>
            </figure>
          ))
        )}
      </div>
    </div>
  );
};

export default MomentsMarquee;
