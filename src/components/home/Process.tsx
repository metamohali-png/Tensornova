'use client'

import { motion } from 'framer-motion'
import { Compass, Code2, Gauge, TrendingUp } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const steps = [
  {
    num: '01',
    icon: Compass,
    title: 'Discover',
    desc: 'Deep-dive workshops with your teams to understand business context, data landscape, and success criteria. We define measurable outcomes before writing a single line of code.',
    deliverables: ['AI Opportunity Map', 'Data Audit Report', 'Solution Architecture'],
  },
  {
    num: '02',
    icon: Code2,
    title: 'Design & Build',
    desc: 'Agile sprints with weekly demos. Our engineers prototype, iterate, and harden models to production standards — with CI/CD, testing, and observability baked in.',
    deliverables: ['MVP in 4-6 weeks', 'Test Coverage > 85%', 'Production Runbooks'],
  },
  {
    num: '03',
    icon: Gauge,
    title: 'Deploy & Scale',
    desc: 'Zero-downtime deployments on your cloud. Kubernetes-native orchestration, auto-scaling inference, and real-time monitoring dashboards from day one.',
    deliverables: ['Cloud Deployment', 'Monitoring Setup', 'Load Testing Report'],
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Optimize & Evolve',
    desc: 'Continuous model improvement, retraining pipelines, and feature expansion. Quarterly business reviews ensure your AI investment compounds over time.',
    deliverables: ['Monthly SLAs', 'Retraining Pipeline', 'Expansion Roadmap'],
  },
]

export function Process() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title="A proven methodology for AI that works"
          description="Refined across 200+ engagements. Every step designed to de-risk delivery and maximize business impact."
          centered
          className="mb-20"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-2xl glass-card h-full hover:border-indigo-500/30 transition-colors group">
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <span className="text-5xl font-bold text-white/5 group-hover:text-indigo-500/10 transition-colors tracking-tight">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{step.desc}</p>

                <div className="pt-5 border-t border-white/5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Deliverables</div>
                  <ul className="space-y-2">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-indigo-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
