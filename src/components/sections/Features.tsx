'use client'

import { motion } from 'framer-motion'
import { RocketIcon, BarChart3Icon, Layers3Icon, ClockIcon, UsersIcon, ZapIcon } from 'lucide-react'

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
  return (
    <section className="relative py-24 bg-slate-900 text-white px-6">
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
          className="text-gray-400 max-w-xl mx-auto"
        >
          Ad My Brand gives you powerful tools to launch, manage, and optimize your ad campaigns — all in one platform.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg hover:shadow-xl transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
