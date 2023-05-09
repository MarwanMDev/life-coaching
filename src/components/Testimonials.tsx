import React from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-36 text-xl uppercase font-thin tracking-[10px] text-[#343840] md:text-3xl md:tracking-[20px]">
        Testimonials
      </h3>

      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#343840]/80">
        {[1, 2, 3, 4].map((i) => (
          <Testimonial key={i} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
