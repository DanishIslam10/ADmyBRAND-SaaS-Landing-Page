'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const pricingPlans = [
  {
    title: 'Starter',
    price: '$0',
    description: 'Perfect for startups and creators testing the waters.',
    features: ['1 Brand Profile', 'Basic Analytics', 'Email Support'],
    highlighted: false,
  },
  {
    title: 'Pro',
    price: '$29/mo',
    description: 'For growing brands that need automation and insights.',
    features: ['5 Brand Profiles', 'Advanced Analytics', 'Automation Tools', 'Priority Support'],
    highlighted: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale campaigns and teams.',
    features: ['Unlimited Brands', 'Dedicated Manager', 'Custom Integrations', 'SLA Support'],
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
        >
          Transparent, Scalable Pricing
        </motion.h2>
        <p className="text-gray-300 mb-12 max-w-xl mx-auto">
          Choose the plan that fits your brand growth stage. Upgrade anytime as your needs evolve.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl border border-white/10 bg-[#191919] p-8 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all ${
                plan.highlighted
                  ? 'border-2 border-purple-500/50 bg-purple-500/5'
                  : ''
              }`}
            >
              <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
              <p className="text-4xl font-bold text-white mt-2">{plan.price}</p>
              <p className="text-gray-300 mt-2">{plan.description}</p>

              <ul className="mt-6 space-y-2 text-left text-sm text-white">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`mt-8 w-full py-2 px-4 rounded-xl font-semibold transition ${
                plan.highlighted
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {plan.title === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
