'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Check, ArrowRight } from 'lucide-react'

const services = [
  'AI & Machine Learning',
  'Generative AI',
  'Data Engineering',
  'Cloud & MLOps',
  'Advanced Analytics',
  'AI Strategy & Consulting',
  'Not sure yet',
]

const budgets = ['< ₹10L', '₹10L - ₹50L', '₹50L - ₹2Cr', '₹2Cr+', 'To be discussed']

export function ContactForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-10 md:p-12 rounded-2xl glass-card text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-white" strokeWidth={3} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Thanks, {formData.name || 'friend'}!</h3>
        <p className="text-slate-400 leading-relaxed max-w-md mx-auto">
          Your message has been received. One of our AI leaders will respond within 2 business hours.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="p-8 md:p-10 rounded-2xl glass-card">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex-1 h-1 rounded-full overflow-hidden bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: step >= n ? '100%' : '0%' }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
            />
          </div>
        ))}
      </div>

      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
        Step {step} of 3
      </div>
      <h3 className="text-2xl font-bold text-white mb-8">
        {step === 1 && 'What can we help with?'}
        {step === 2 && 'Tell us about you'}
        {step === 3 && 'Share the details'}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Service of interest</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: s })}
                    className={`p-3 rounded-xl text-sm text-left font-medium transition-all ${
                      formData.service === s
                        ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300'
                        : 'bg-white/5 border border-white/5 text-slate-300 hover:border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Estimated budget</label>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      formData.budget === b
                        ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300'
                        : 'bg-white/5 border border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <Button
              type="button"
              onClick={() => setStep(2)}
              disabled={!formData.service}
              className="w-full justify-center mt-4"
              arrow
            >
              Continue
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput
                label="Full name"
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
                placeholder="Jane Doe"
                required
              />
              <FormInput
                label="Work email"
                type="email"
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
                placeholder="jane@company.com"
                required
              />
              <FormInput
                label="Company"
                value={formData.company}
                onChange={(v) => setFormData({ ...formData, company: v })}
                placeholder="Acme Corp"
                required
              />
              <FormInput
                label="Role"
                value={formData.role}
                onChange={(v) => setFormData({ ...formData, role: v })}
                placeholder="Head of Data Science"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button
                type="button"
                onClick={() => setStep(3)}
                disabled={!formData.name || !formData.email || !formData.company}
                className="flex-1 justify-center"
                arrow
              >
                Continue
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Tell us about your project</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What problem are you trying to solve? What's the current state? Any specific timelines?"
                rows={6}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all resize-none"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="secondary" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button
                type="submit"
                disabled={!formData.message}
                className="flex-1 justify-center"
              >
                Send message
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-slate-500 text-center pt-2">
              By submitting, you agree to our privacy policy. We&apos;ll respond within 2 business hours.
            </p>
          </motion.div>
        )}
      </form>
    </div>
  )
}

interface FormInputProps {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
}

function FormInput({ label, value, onChange, placeholder, type = 'text', required }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        {label}
        {required && <span className="text-indigo-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
      />
    </div>
  )
}
