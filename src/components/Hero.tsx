'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '../../public/hero-bg.jpg';
import HeroCard from './HeroCard';

const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <div className="relative">
        <Image
          className="h-full w-full"
          src={HeroImage}
          alt="Picture of the author"
          priority={true}
        />
        <div className="absolute text-5xl text-white top-1/2 left-1/4 -translate-x-1/2 -translate-y-3/4">
          <HeroCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
