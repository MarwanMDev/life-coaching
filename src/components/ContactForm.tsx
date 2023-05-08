'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';

type Inputs = {
  name: string;
  email: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    console.log(formData);
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:text-left font-raleway">
      <h3 className="absolute top-36 text-xl uppercase font-thin tracking-[10px] text-[#343840] md:text-3xl md:tracking-[20px]">
        Stay Connected
      </h3>

      <div className="mt-16 flex w-full max-w-3xl flex-col space-y-10">
        <div className="space-y-3 md:space-y-10">
          <p className="text-sm md:text-2xl text-[#343840]">
            Join our mailing list to receive offers, invites to free
            group coaching, inspiration, and worksheets.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-2 flex w-full flex-col space-y-2 md:mx-auto"
          >
            <div className="-mx-3 flex flex-wrap">
              <div className=" w-full px-3 md:mb-0 md:w-1/2">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  {...register('name', {
                    required: 'The name field is required',
                    maxLength: {
                      value: 50,
                      message:
                        'The name field must be less than 50 characters',
                    },
                    minLength: {
                      value: 3,
                      message:
                        'The name field must be more than 3 characters',
                    },
                  })}
                  className={`mb-3 block w-full appearance-none ${
                    errors.name && 'border border-red-500'
                  } contactInput py-3 px-4 leading-tight focus:bg-slate-400/10 focus:outline-none`}
                  id="name"
                  type="text"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-xs italic text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className=" w-full px-3 md:mb-0 md:w-1/2">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-last-name"
                >
                  Email Address
                </label>
                <input
                  {...register('email', {
                    required: 'The email field is required',
                    maxLength: {
                      value: 100,
                      message:
                        'The email field must be less than 100 characters',
                    },
                    minLength: {
                      value: 5,
                      message:
                        'The email field must be more than 3 characters',
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'The email field format is not valid',
                    },
                  })}
                  className={`mb-3 block w-full appearance-none ${
                    errors.email && 'border border-red-500'
                  } contactInput py-3 px-4 leading-tight focus:bg-slate-400/10 focus:outline-none`}
                  id="email"
                  type="email"
                  placeholder="email@email.com"
                />
                {errors.email && (
                  <p className="text-xs italic text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mx-auto flex w-1/2 flex-row items-center justify-center bg-[#e0aaaa]/70 py-2 px-4 text-sm font-semibold uppercase tracking-widest text-white transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-500 hover:bg-[#e0aaaa] disabled:hover:bg-gray-500 md:py-4 md:text-base"
            >
              {isSubmitting && (
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-5 w-5 animate-spin text-white"
                >
                  <path
                    d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
                    stroke="white"
                  />
                </svg>
              )}
              {!isSubmitting ? 'Join' : 'Processing...'}
            </button>
          </form>
        </div>
      </div>

      <div className="w-full bg-transparent text-black border-t border-t-[#e0aaaa] py-6">
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
              Privacy Policy
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#343840]"></span>
            </a>
            <a
              href="#services"
              className="group text-[#343840] transition duration-300"
            >
              Terms of Use
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#343840]"></span>
            </a>
            <a
              href="#stay-connected"
              className="group text-[#343840] transition duration-300"
            >
              Disclaimer
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#343840]"></span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
