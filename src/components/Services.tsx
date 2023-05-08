'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left font-raleway"
    >
      <h3 className="absolute top-36 text-xl uppercase tracking-[10px] text-[#343840] md:text-3xl md:tracking-[20px]">
        Services
      </h3>

      <div className="space-y-10 px-0 md:px-10 p-5 max-w-lg max-h-96 h-full text-center text-[#343840]">
        <h3 className="text-3xl font-semibold">
          Download a{' '}
          <span className="underline decoration-[#e0aaaa]/50">
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
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#343840] shadow-[0_4px_9px_-4px_#e0aaaa] transition duration-300 ease-in-out hover:text-[#e0aaaa] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(224,170,170,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Yes, I want this life changing tool!!
        </button>
      </div>
      <div className="space-y-10 px-0 md:px-10 bg-[#343840] p-5 max-h-96 h-full max-w-lg text-center">
        <h3 className="text-3xl font-semibold">
          Free Right{' '}
          <span className="underline decoration-[#e0aaaa]/50">
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
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e0aaaa] transition duration-300 ease-in-out hover:text-[#e0aaaa] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(224,170,170,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)]"
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
