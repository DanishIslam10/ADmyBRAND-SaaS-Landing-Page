'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqData = [
  {
    question: 'What is Ad My Brand?',
    answer:
      'Ad My Brand is a SaaS platform designed to help businesses easily create, manage, and optimize their brand campaigns and advertisements.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial with access to all core features so you can experience the platform risk-free.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Absolutely. There are no long-term contracts or commitments. You can cancel your subscription anytime from your dashboard.',
  },
  {
    question: 'Is support included in all plans?',
    answer:
      'Yes, all plans come with standard support. Premium support is available with Pro and Enterprise tiers.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border rounded-lg overflow-hidden">
                  <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-lg font-medium text-gray-900 bg-gray-100 hover:bg-gray-200">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-4 text-gray-700 bg-white">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
