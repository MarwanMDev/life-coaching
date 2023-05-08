'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left font-raleway"
    >
      <h3 className="absolute top-36 text-xl uppercase font-thin tracking-[10px] text-[#343840] md:text-3xl md:tracking-[20px]">
        Free Services
      </h3>

      <div className="flex flex-col items-center justify-between px-0 md:px-10 p-5 max-w-lg max-h-96 h-full text-center text-[#343840] border border-[#e0aaaa] shadow-lg">
        <h3 className="text-3xl font-semibold">
          Download a{' '}
          <span className="underline decoration-[#e0aaaa]/70">
            FREE
          </span>{' '}
          workbook.
        </h3>
        <p>
          This workbook explains the most important tool of my
          coaching practice. You can learn all about it, apply it and
          start seeing results now
        </p>
        <p>
          Sign up with your email, and you will directed to download
          the workbook RIGHT NOW. You can start coaching yourself
          today.
        </p>
        <button
          type="button"
          className="inline-block bg-[#e0aaaa]/70 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e0aaaa] transition duration-300 ease-in-out hover:bg-[#e0aaaa] hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(224,170,170,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Yes, I want this life changing tool!!
        </button>
      </div>
      <div className="flex flex-col items-center justify-between px-0 md:px-10 bg-[#343840] p-5 max-h-96 h-full max-w-lg text-center shadow-lg">
        <h3 className="text-3xl font-semibold">
          Free Right{' '}
          <span className="underline decoration-[#e0aaaa]/70">
            Fit
          </span>{' '}
          Call
        </h3>
        <p>
          Schedule a Free consultation with Dr Kanwal Akhtar to see if
          Islamic Life Coaching is what you need take your personal
          and professional life to the next level. In this call you
          will get to meet your coach and discover if this is the
          right fit you.{' '}
        </p>
        <button
          type="button"
          className="inline-block bg-[#e0aaaa]/70 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e0aaaa] transition duration-300 ease-in-out hover:bg-[#e0aaaa] hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(224,170,170,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Yes, I want to schedule a right fit call
        </button>
      </div>
    </motion.div>
  );
};

export default Services;
