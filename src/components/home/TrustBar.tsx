'use client'

import { motion } from 'framer-motion'

const logos = [
  'Axis Bank', 'Flipkart', 'Apollo', 'Reliance', 'Infosys',
  'HDFC', 'Tata Digital', 'Zomato', 'Swiggy', 'ICICI',
]

export function TrustBar() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-10"
        >
          Trusted by industry leaders and fast-growing enterprises
        </motion.p>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-8 py-4 opacity-50 hover:opacity-100 transition-opacity"
              >
                <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-400 hover:text-white transition-colors whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  )
}
