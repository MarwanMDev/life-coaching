'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex flex-row items-center justify-center w-full p-5 bg-[#d1c59c] h-28 shadow-lg border-b border-b-[#e0aaaa]">
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
          <p className="hidden text-2xl tracking-wider font-bold uppercase text-[#343840] md:inline-flex font-dancing">
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
          className="flex flex-row items-center space-x-4"
        >
          <a
            href="#hero"
            className="group text-[#343840] transition duration-300"
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#343840]"></span>
          </a>
          <a
            href="#services"
            className="group text-[#343840] transition duration-300"
          >
            Free Services
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#343840]"></span>
          </a>
          <a
            href="#stay-connected"
            className="group text-[#343840] transition duration-300"
          >
            Stay Connected
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#343840]"></span>
          </a>
          <a
            href="#"
            className="group text-[#343840] transition duration-300"
          >
            Book Free Consultation
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#343840]"></span>
          </a>
          <a
            href="#"
            className="group text-[#343840] transition duration-300"
          >
            Log In
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#343840]"></span>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
