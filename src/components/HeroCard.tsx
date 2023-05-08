import React from 'react';
import { motion } from 'framer-motion';

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="block bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#343840] max-w-lg font-raleway"
    >
      <div className="border-b-2 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        <h2 className="text-4xl">LIFE COACH SCHOOL</h2>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Empowering Muslim Women
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          At Islamic Life Coach School we teach the life-changing
          formula to attain superior mental health using a unique
          composite of scientific methods and religious guidance.
        </p>
      </div>
      <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e0aaaa] transition duration-300 ease-in-out hover:text-[#e0aaaa] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.3),0_4px_18px_0_rgba(224,170,170,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(224,170,170,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(224,170,170,0.2),0_4px_18px_0_rgba(224,170,170,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
