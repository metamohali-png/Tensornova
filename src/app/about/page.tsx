import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/home/CTASection'
import { team } from '@/lib/utils'
import { Target, Eye, Heart, Linkedin, Twitter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — Engineers behind enterprise AI',
  description:
    'Meet TensorNova: a team of AI researchers, engineers, and strategists building production-grade intelligence for the world\'s most ambitious enterprises.',
}

const values = [
  {
    icon: Target,
    title: 'Outcomes over outputs',
    desc: 'We measure success by business impact — not lines of code, dashboards shipped, or models tuned. If it doesn\'t move a KPI, it doesn\'t ship.',
  },
  {
    icon: Eye,
    title: 'Engineering rigor first',
    desc: 'Every model we ship is backed by tests, monitoring, and runbooks. No magic boxes. No 3am pages. No shortcuts.',
  },
  {
    icon: Heart,
    title: 'Client obsession',
    desc: 'We invest in understanding your business as deeply as your data. We partner, not vendor. Your wins are our scoreboard.',
  },
]

const milestones = [
  { year: '2021', event: 'Founded in Bengaluru by ex-Google & IIT alumni' },
  { year: '2022', event: 'First enterprise engagement with Axis Bank' },
  { year: '2023', event: 'Crossed 50 team members; opened Hyderabad office' },
  { year: '2024', event: 'Launched TensorNova GenAI platform' },
  { year: '2025', event: 'Reached 200+ projects delivered milestone' },
  { year: '2026', event: 'Expanded to Middle East and Southeast Asia' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TensorNova"
        title="We exist to bridge"
        highlight="AI research and enterprise reality"
        description="Founded in 2021, TensorNova brings together the world's leading AI researchers, engineers, and strategists to build production-grade intelligence systems for enterprise scale."
      />

      {/* Mission */}
      <section className="relative section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                eyebrow="Our mission"
                title="Enterprise-grade AI, without the enterprise-grade complexity"
                description="We believe every enterprise should have access to state-of-the-art AI, not just Big Tech. Our mission is to democratize production-grade AI capabilities — with the rigor of research labs and the reliability of enterprise software."
              />
              <div className="mt-8">
                <Button href="/contact" arrow>Work with us</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '200+', label: 'Projects shipped' },
                { value: '$180M', label: 'Client value created' },
                { value: '40+', label: 'PhDs & senior engineers' },
                { value: '12', label: 'Countries served' },
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
      <section className="relative section-padding bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our values"
            title="The principles that shape every engagement"
            centered
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl glass-card hover:border-indigo-500/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-600/20 border border-indigo-500/30 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title="Meet the team behind TensorNova"
            description="Former leaders from Google, Amazon, Microsoft, McKinsey, and IIT alumni. Combined, our leadership has shipped AI products serving 500M+ users."
            centered
            className="mb-16"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-slate-900 border border-white/5 group-hover:border-indigo-500/30 transition-all duration-300">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={member.linkedin} className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-indigo-500 transition-colors" aria-label={`${member.name} on LinkedIn`}>
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.twitter} className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-indigo-500 transition-colors" aria-label={`${member.name} on Twitter`}>
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-white">{member.name}</h3>
                <div className="text-sm text-indigo-300 mt-0.5">{member.role}</div>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative section-padding bg-gradient-to-b from-slate-950 to-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our journey"
            title="From a small Bengaluru team to global AI partner"
            centered
            className="mb-16"
          />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/40 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex gap-6 items-start">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-600/20 border border-indigo-500/30 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-sm font-bold text-indigo-300">{m.year}</span>
                  </div>
                  <div className="flex-1 pt-5">
                    <p className="text-base text-slate-300 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
