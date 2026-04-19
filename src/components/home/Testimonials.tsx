'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { testimonials } from '@/lib/utils'

export function Testimonials() {
  return (
    <section className="relative section-padding bg-gradient-to-b from-slate-950 to-slate-900/50 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What clients say"
          title="Trusted by technology and data leaders"
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl glass-card hover:border-indigo-500/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-500/20" />

              <p className="text-slate-300 text-base leading-relaxed mb-8 relative">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {t.author.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm truncate">{t.author}</div>
                  <div className="text-xs text-slate-500 truncate">{t.role} · {t.company}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
