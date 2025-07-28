'use client'

import { motion } from 'framer-motion'
import { RocketIcon, BarChart3Icon, Layers3Icon, ClockIcon, UsersIcon, ZapIcon } from 'lucide-react'
import { useEffect, useRef } from 'react';

const features = [
  {
    title: 'Launch Ads in Minutes',
    description: 'Create and deploy ad campaigns effortlessly using our drag-and-drop builder.',
    icon: <RocketIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    title: 'Advanced Analytics',
    description: 'Track performance with real-time data and actionable insights.',
    icon: <BarChart3Icon className="h-6 w-6 text-green-500" />,
  },
  {
    title: 'Multi-Platform Sync',
    description: 'Run campaigns across Google, Meta, and LinkedIn — all from one dashboard.',
    icon: <Layers3Icon className="h-6 w-6 text-purple-500" />,
  },
  {
    title: 'Automated Scheduling',
    description: 'Set it and forget it — schedule your campaigns to run automatically.',
    icon: <ClockIcon className="h-6 w-6 text-yellow-400" />,
  },
  {
    title: 'Team Collaboration',
    description: 'Invite team members and collaborate on campaigns in real-time.',
    icon: <UsersIcon className="h-6 w-6 text-pink-500" />,
  },
  {
    title: 'AI Optimization',
    description: 'Let our AI engine continuously improve your ad performance.',
    icon: <ZapIcon className="h-6 w-6 text-red-500" />,
  },
]

export default function Features() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Increase sensitivity
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section className="relative py-24 bg-[#f2f2f2] text-[#3e3e3e] px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Everything You Need to Grow Your Brand
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[gray] max-w-xl mx-auto"
        >
          Ad My Brand gives you powerful tools to launch, manage, and optimize your ad campaigns — all in one platform.
        </motion.p>
      </div>

      {/* Add perspective container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-[1200px]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardRefs.current[index] = el!)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-white/20 rounded-xl p-6 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform-style-3d will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.2s ease',
            }}
          >
            <div className="mb-4 text-3xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-[#767676]">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}