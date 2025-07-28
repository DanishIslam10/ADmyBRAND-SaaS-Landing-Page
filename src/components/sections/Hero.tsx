'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 bg-gradient-to-br from-blue-950 via-black to-slate-900">
      {/* Glass Background Blur */}
      <div className="absolute inset-0 z-0 backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg shadow-2xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 md:py-16 w-full max-w-7xl">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            Power Up Your Campaigns with
            <span className="block bg-clip-text text-transparent bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]">
              AD MY BRAND
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto md:mx-0 mt-4"
          >
            Create, launch, and optimize high-converting ad campaigns — all from one streamlined SaaS platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex sm:flex-row gap-4 mt-6 justify-center md:justify-start"
          >
            {/* Start Free Trial Button */}
            <a href="#_" className="w-fit relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] absolute transition-all duration-500 ease-out group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]" />
              <span className="relative px-6 py-3 bg-gray-900 bg-gradient-to-br hover:from-[#ff8a05] hover:via-[#ff5478] hover:to-[#ff00c6] rounded-md transition-all duration-500 ease-out group-hover:bg-opacity-0">
                <span className="relative text-white">Start Free Trial</span>
              </span>
            </a>

            {/* Book a Demo Button */}
            <a href="#_" className="w-fit relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100" />
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3" />
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5" />
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5" />
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5" />
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10" />
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5" />
              <span className="relative">Book A Demo</span>
            </a>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full md:w-1/2 max-w-md mx-auto"
        >
          <Image
            src="/analytics.svg"
            width={500}
            height={500}
            layout="responsive"
            alt="Illustration"
            className="mx-auto p-4"
          />
        </motion.div>
      </div>
    </section>
  );
}

