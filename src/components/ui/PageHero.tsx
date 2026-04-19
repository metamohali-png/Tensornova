'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: string
  highlight?: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className,
}: PageHeroProps) {
  return (
    <section className={cn(
      'relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden gradient-hero',
      className
    )}>
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Orbs */}
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-indigo-500/20 blur-[100px]" />
      <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-violet-500/15 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'max-w-4xl',
          align === 'center' && 'mx-auto text-center'
        )}>
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-1.5 rounded-full',
                'bg-indigo-500/10 border border-indigo-500/20',
                'text-indigo-300 text-sm font-medium tracking-wide uppercase',
                'mb-6'
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              {eyebrow}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
          >
            {title}{' '}
            {highlight && <span className="gradient-text">{highlight}</span>}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              'mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
