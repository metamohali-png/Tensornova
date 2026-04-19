'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
  titleClassName?: string
  gradient?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  titleClassName,
  gradient = true,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full',
            'bg-indigo-500/10 border border-indigo-500/20',
            'text-indigo-300 text-sm font-medium tracking-wide uppercase',
            'mb-4',
            centered && 'mx-auto'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight',
          gradient ? 'text-white' : 'text-white',
          titleClassName
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            'mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl',
            centered && 'mx-auto'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
