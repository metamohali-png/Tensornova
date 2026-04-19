'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, Database, Sparkles, Cloud, BarChart3, Lightbulb, ArrowRight,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { services } from '@/lib/utils'
import { cn } from '@/lib/utils'

const iconMap = {
  Brain, Database, Sparkles, Cloud, BarChart3, Lightbulb,
}

const colorClasses = {
  indigo: {
    bg: 'from-indigo-500/20 to-indigo-600/5',
    border: 'border-indigo-500/20 group-hover:border-indigo-400/40',
    icon: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
    glow: 'group-hover:shadow-[0_0_40px_rgba(79,70,229,0.25)]',
    text: 'group-hover:text-indigo-300',
  },
  cyan: {
    bg: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/20 group-hover:border-cyan-400/40',
    icon: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,212,255,0.25)]',
    text: 'group-hover:text-cyan-300',
  },
  violet: {
    bg: 'from-violet-500/20 to-violet-600/5',
    border: 'border-violet-500/20 group-hover:border-violet-400/40',
    icon: 'text-violet-400',
    iconBg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
    glow: 'group-hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]',
    text: 'group-hover:text-violet-300',
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Full-stack AI capabilities under one roof"
          description="From strategy to production, we cover every layer of the modern AI stack. Purpose-built for enterprises that demand reliability, scale, and measurable ROI."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            const colors = colorClasses[service.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className={cn(
                    'group relative block h-full p-7 rounded-2xl',
                    'glass-card border transition-all duration-300',
                    colors.border,
                    colors.glow,
                  )}
                >
                  {/* Gradient overlay on hover */}
                  <div className={cn(
                    'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br pointer-events-none',
                    colors.bg
                  )} />

                  <div className="relative">
                    <div className={cn(
                      'inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 mb-5',
                      colors.iconBg,
                      colors.icon
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className={cn(
                      'text-xl font-semibold text-white mb-3 transition-colors duration-300',
                      colors.text
                    )}>
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-6">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                          <span className={cn('w-1 h-1 rounded-full', colors.icon.replace('text-', 'bg-'))} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className={cn(
                      'inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors',
                      colors.text
                    )}>
                      Explore service
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
