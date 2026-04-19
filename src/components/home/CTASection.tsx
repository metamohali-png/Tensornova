'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const highlights = [
  'Free 45-minute strategy session',
  'No-cost AI readiness assessment',
  'Custom roadmap for your use case',
  'Zero obligation — just value',
]

export function CTASection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700" />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Glow orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cyan-400/30 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-violet-400/30 blur-[80px]" />

          <div className="relative p-10 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">Limited availability</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Ready to put AI to work for your enterprise?
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Book a complimentary strategy call with our AI leadership team. We&apos;ll map your highest-impact opportunities in 45 minutes.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-white/10 border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6">What you&apos;ll get:</h3>
              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                className="w-full justify-center bg-white text-indigo-700 hover:bg-white/90 hover:text-indigo-800 !bg-gradient-to-r !from-white !to-white"
                arrow
              >
                Book your strategy call
              </Button>
              <p className="text-center text-xs text-white/70 mt-4">
                Usually responds within 2 business hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
