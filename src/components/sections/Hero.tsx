'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-gradient-to-br from-blue-950 via-black to-slate-900">
      {/* Glass Background Blur */}
      <div className="absolute inset-0 z-0 backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg shadow-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight"
        >
          Power Up Your Campaigns with
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Ad My Brand
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto"
        >
          Create, launch, and optimize high-converting ad campaigns — all from one streamlined SaaS platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mt-6 flex-wrap"
        >
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
            Start Free Trial
          </button>
          <button className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 backdrop-blur-md transition">
            Book a Demo
          </button>
        </motion.div>
      </div>
    </section>
  )
}
