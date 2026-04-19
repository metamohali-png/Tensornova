'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 gradient-hero">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Animated orbs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-indigo-500/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-violet-500/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-cyan-500/15 blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-sm font-medium text-slate-300">
              Introducing TensorNova GenAI Platform
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="text-white">Engineering</span>
            <br />
            <span className="gradient-text">intelligent enterprise</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Production-grade AI, machine learning, and data platforms built for global enterprises.
            We turn ambitious AI strategies into <span className="text-white">measurable business outcomes</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button href="/contact" size="lg" arrow>
              Book a Strategy Call
            </Button>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                <Play className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" />
              </div>
              <span className="text-white font-medium">See our work</span>
            </Link>
          </motion.div>

          {/* Trust metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-16 pt-10 border-t border-white/5 w-full grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '200+', label: 'Projects Delivered' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '$180M', label: 'Client Value Created' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-indigo tracking-tight">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  )
}
