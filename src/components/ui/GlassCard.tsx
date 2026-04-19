'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
  onClick?: () => void
}

export function GlassCard({ children, className, hover = true, delay = 0, onClick }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={cn(
        'glass-card rounded-2xl p-6',
        hover && 'cursor-pointer transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(79,70,229,0.15)]',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function GradientIcon({
  icon: Icon,
  color = 'indigo',
  size = 'md',
}: {
  icon: React.ComponentType<{ className?: string }>
  color?: 'indigo' | 'cyan' | 'violet'
  size?: 'sm' | 'md' | 'lg'
}) {
  const colors = {
    indigo: 'from-indigo-500/20 to-indigo-600/20 text-indigo-400 border-indigo-500/20',
    cyan: 'from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/20',
    violet: 'from-violet-500/20 to-violet-600/20 text-violet-400 border-violet-500/20',
  }

  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  }

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  }

  return (
    <div className={cn(
      'rounded-xl bg-gradient-to-br border flex items-center justify-center flex-shrink-0',
      colors[color],
      sizes[size]
    )}>
      <Icon className={iconSizes[size]} />
    </div>
  )
}
