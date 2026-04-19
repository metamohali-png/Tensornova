'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  arrow?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'btn-gradient text-white font-semibold',
  secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-medium',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5 font-medium',
  outline: 'border border-indigo-500/50 text-indigo-300 hover:border-indigo-400 hover:text-white hover:bg-indigo-500/10 font-medium',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-lg rounded-xl gap-2',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  arrow,
  className,
  children,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none whitespace-nowrap',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
    </>
  )

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </motion.button>
  )
}
