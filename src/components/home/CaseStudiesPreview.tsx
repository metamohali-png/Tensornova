'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { caseStudies } from '@/lib/utils'

export function CaseStudiesPreview() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Case Studies"
            title="Outcomes that moved the needle"
            description="Real results from real engagements. Every project engineered for measurable business impact."
            className="max-w-2xl"
          />
          <Button variant="outline" href="/case-studies" arrow>
            View all case studies
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/case-studies#${study.id}`}
                className="group block h-full rounded-2xl glass-card overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Image placeholder with gradient */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-slate-900 overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10 group-hover:text-white/15 transition-colors tracking-tighter">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge color="indigo">{study.industry}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">{study.category}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-2">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-1 gap-2 pt-5 border-t border-white/5">
                    {study.results.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
