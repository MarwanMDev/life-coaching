import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <article className="border border-[#e0aaaa] flex h-full max-h-[500px] w-full min-w-[260px] flex-shrink-0 cursor-pointer snap-center flex-col items-center justify-center space-y-5 overflow-hidden bg-transparent p-5 shadow-md transition-opacity duration-200 md:p-10">
      <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl text-gray-600 leading-relaxed text-center w-4/5 line-clamp-6">
          {'" '} Working with Sister Kanwal has prompted me to look at
          things so differently. It might seem like a simple task to
          step away from your thoughts and perceive them for what they
          are…just thoughts, that can be altered… but it requires
          effort to train your brain. Its imperative we invest the
          time in ourselves because the impact is worth it. Just like
          anything else it will only work if you believe in it and
          willing to do the work. Sister Kanwal is kind and flexible.
          Wonderful person to work with. Good luck to all on their
          self improvement journeys. {' "'}
        </h1>
        <div className="flex items-center gap-4">
          <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
            <Image
              src="https://rairaksa.github.io/assets/img/rai.jpg"
              alt="image"
              className="w-12 h-12"
              width={12}
              height={12}
            />
          </div>
          <div className="flex flex-col tracking-wider">
            <label className="text-gray-600 font-bold text-base">
              Mohamed Ahmed
            </label>
            <label className="text-gray-400 font-normal text-sm">
              Fullstack PHP Developer
            </label>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
