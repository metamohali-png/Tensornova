'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'
import { cn, navLinks } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const servicesMenu = [
  { href: '/services#ai-ml', label: 'AI & Machine Learning', desc: 'Custom ML models & pipelines' },
  { href: '/services#generative-ai', label: 'Generative AI', desc: 'LLMs, RAG & AI Agents' },
  { href: '/services#data-engineering', label: 'Data Engineering', desc: 'Modern data architecture' },
  { href: '/services#cloud-mlops', label: 'Cloud & MLOps', desc: 'Scalable ML infrastructure' },
  { href: '/services#analytics', label: 'Advanced Analytics', desc: 'BI & predictive analytics' },
  { href: '/services#consulting', label: 'AI Consulting', desc: 'Strategy & transformation' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Zap className="w-4.5 h-4.5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Tensor</span>
                <span className="gradient-text-indigo">Nova</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={cn(
                  'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname.startsWith('/services')
                    ? 'text-indigo-300'
                    : 'text-slate-400 hover:text-white'
                )}>
                  Services
                  <ChevronDown className={cn(
                    'w-3.5 h-3.5 transition-transform duration-200',
                    servicesOpen && 'rotate-180'
                  )} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 glass-card rounded-2xl p-2 shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
                    >
                      {servicesMenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0 group-hover:bg-indigo-300" />
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">{item.label}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other nav links */}
              {navLinks.filter(l => l.href !== '/services').map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-indigo-300'
                      : 'text-slate-400 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Button href="/contact" size="sm" arrow>
                Get Started
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <div className="relative pt-20 px-4 pb-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    pathname === link.href
                      ? 'text-indigo-300 bg-indigo-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5">
                <Button href="/contact" className="w-full justify-center" arrow>
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
