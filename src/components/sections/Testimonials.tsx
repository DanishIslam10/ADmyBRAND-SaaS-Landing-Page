'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    position: "Marketing Lead, UpGrowth",
    image: "/testimonials_images/jane.png",
    quote:
      "Ad My Brand has completely transformed how we manage ad campaigns. Their platform is intuitive and powerful!",
  },
  {
    name: "Mike Andrews",
    position: "Founder, PixelPush",
    image: "/testimonials_images/mike.png",
    quote:
      "The analytics and automation features are game-changers. Highly recommended for startups and agencies alike!",
  },
  {
    name: "Sofia Lee",
    position: "Head of Digital, NovaBrands",
    image: "/testimonials_images/sofia.png",
    quote:
      "Ad My Brand helped us scale ads 3x faster with real-time insights. Love the UI/UX!",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex flex-col items-center gap-4 md:w-[80%] mx-auto">
              <Image width={100} height={40}
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500"
              />
              <p className="text-lg text-gray-200 italic">"{testimonials[current].quote}"</p>
              <div className="text-indigo-400 font-semibold mt-4">{testimonials[current].name}</div>
              <div className="text-sm text-gray-400">{testimonials[current].position}</div>
            </div>
          </motion.div>

          <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
            <button onClick={prev}>
              <ChevronLeft className="w-6 h-6 text-white hover:text-indigo-400 cursor-pointer" />
            </button>
          </div>

          <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
            <button onClick={next}>
              <ChevronRight className="w-6 h-6 text-white hover:text-indigo-400 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
