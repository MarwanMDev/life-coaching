'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex flex-row items-center justify-center w-full p-5 bg-[#d1c59c] h-28 shadow">
      <div className="flex flex-row mx-auto max-w-7xl w-full items-start justify-between xl:items-center">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center cursor-pointer"
        >
          <p className="hidden text-2xl tracking-wider font-bold uppercase text-[#343840] md:inline-flex font-raleway">
            Life Coach School
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center space-x-2"
        >
          <p className="hidden text-sm uppercase text-[#343840] md:inline-flex cursor-pointer hover:font-bold transition duration-300 ease-in-out font-raleway">
            About
          </p>
          <p className="hidden text-sm uppercase text-[#343840] md:inline-flex cursor-pointer hover:font-bold transition duration-300 ease-in-out">
            Contact
          </p>
          <p className="hidden text-sm uppercase text-[#343840] md:inline-flex cursor-pointer hover:font-bold transition duration-300 ease-in-out">
            Blogs
          </p>
          <p className="hidden text-sm uppercase text-[#343840] md:inline-flex cursor-pointer hover:font-bold transition duration-300 ease-in-out">
            Our Resources
          </p>
          <p className="hidden text-sm uppercase text-[#343840] md:inline-flex cursor-pointer hover:font-bold transition duration-300 ease-in-out">
            Book Free Consultation
          </p>
          <p className="hidden text-sm uppercase text-[#343840] md:inline-flex cursor-pointer hover:font-bold transition duration-300 ease-in-out">
            Log In
          </p>
        </motion.div>
      </div>
    </header>
  );
}
