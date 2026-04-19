'use client'

import { motion } from 'framer-motion'
import { Shield, Rocket, Users, Target, Zap, Award } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const reasons = [
  {
    icon: Shield,
    title: 'Enterprise-grade delivery',
    desc: 'SOC 2, ISO 27001 aligned processes. Production-ready code from day one — not POCs that die in staging.',
  },
  {
    icon: Rocket,
    title: 'Research-to-production velocity',
    desc: 'State-of-the-art models deployed in weeks, not quarters. Our MLOps platform accelerates every deployment.',
  },
  {
    icon: Users,
    title: 'Senior-only engineering',
    desc: 'Every engagement staffed with 5+ years experienced engineers. No juniors, no hand-offs, no learning on your dime.',
  },
  {
    icon: Target,
    title: 'Outcome-focused engagements',
    desc: 'We measure success by business KPIs — revenue lift, cost savings, and risk reduction — not model accuracy alone.',
  },
  {
    icon: Zap,
    title: 'Modern AI stack expertise',
    desc: 'Deep expertise in PyTorch, TensorFlow, Spark, Kubernetes, LangChain, and every major cloud ML platform.',
  },
  {
    icon: Award,
    title: 'Published research & IP',
    desc: 'Our team has published at NeurIPS, ICML, and KDD. We bring cutting-edge research to your business problems.',
  },
]

export function WhyUs() {
  return (
    <section className="relative section-padding bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="Why TensorNova"
              title="The difference between an AI pilot and AI at scale"
              description="We've seen 70% of enterprise AI projects fail to reach production. Our approach fixes the common failure modes — from data quality to operational reliability."
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group p-6 rounded-2xl glass-card hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
