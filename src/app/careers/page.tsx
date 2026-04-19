import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { openRoles } from '@/lib/utils'
import {
  Rocket, Heart, Brain, Globe, Users, Coffee, ArrowRight,
  MapPin, Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers — Build the future of enterprise AI',
  description:
    'Join TensorNova. Work with the best AI researchers and engineers in India on the most challenging enterprise AI problems. Remote-friendly, equity-backed, deeply impactful.',
}

const benefits = [
  { icon: Brain, title: 'Learning budget', desc: '₹1L/year for courses, books, and conferences' },
  { icon: Heart, title: 'Top-tier healthcare', desc: 'Comprehensive coverage for you and family' },
  { icon: Globe, title: 'Remote-first', desc: 'Work from anywhere in India. Quarterly meetups' },
  { icon: Users, title: 'Equity & ESOPs', desc: 'Every team member owns a slice of the outcome' },
  { icon: Coffee, title: 'Sabbatical policy', desc: '4 weeks off after 3 years; fully paid' },
  { icon: Rocket, title: 'Conference budget', desc: 'NeurIPS, ICML, KubeCon — we send you' },
]

const values = [
  { title: 'Engineering excellence', desc: 'We value craft. Clean code, tests, docs — shipped with pride.' },
  { title: 'Extreme ownership', desc: 'See it, own it, ship it. No hand-offs, no "not my problem".' },
  { title: 'Customer obsession', desc: 'Every line of code should earn the customer\'s trust.' },
  { title: 'Learn in public', desc: 'We share research, write blogs, open source tools — openly.' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build AI systems that"
        highlight="move the world forward"
        description="Join a team of engineers, researchers, and builders solving the hardest AI problems for the world's most ambitious enterprises."
      />

      {/* Intro */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                eyebrow="Why TensorNova"
                title="Work on AI that actually ships"
                description="We're not a research lab. We're not a consultancy. We're a place where the best engineers ship production AI for enterprises that depend on it. You'll work on hard problems, with senior peers, on systems that real businesses run on."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '40+', label: 'Team members' },
                { value: '85%', label: 'Engineers with 5+ YOE' },
                { value: '12+', label: 'NeurIPS/ICML pubs' },
                { value: '98%', label: 'Team retention' },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-2xl glass-card">
                  <div className="text-3xl md:text-4xl font-bold gradient-text-indigo tracking-tight">{s.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative section-padding bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How we work"
            title="The values we hold ourselves to"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="p-6 rounded-2xl glass-card">
                <div className="text-6xl font-bold text-white/5 mb-4 leading-none tracking-tight">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Benefits"
            title="Taking care of you, so you can do your best work"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl glass-card hover:border-indigo-500/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-4">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="relative section-padding bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Open roles"
            title="We're hiring across teams"
            description="Don't see the right fit? We'd still love to hear from you — send us your story."
            centered
            className="mb-12"
          />
          <div className="rounded-2xl glass-card overflow-hidden">
            {openRoles.map((role, i) => (
              <a
                key={role.title}
                href="#"
                className={`group flex items-center p-6 hover:bg-indigo-500/5 transition-colors ${
                  i !== openRoles.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3 h-3" />
                      {role.team}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {role.type}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-400 mb-4">Can&apos;t find a role that fits?</p>
            <Button variant="outline" href="mailto:careers@tensornova.in">Send us your resume</Button>
          </div>
        </div>
      </section>
    </>
  )
}
