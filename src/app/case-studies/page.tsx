import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/home/CTASection'
import { caseStudies } from '@/lib/utils'
import { ArrowUpRight, TrendingUp, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies — Enterprise AI in action',
  description:
    'Explore TensorNova case studies: real outcomes from production AI deployments across fraud detection, healthcare imaging, e-commerce personalization, and more.',
}

const extraStudies = [
  {
    id: 'supply-chain',
    title: 'AI-Driven Supply Chain for Top FMCG',
    category: 'Data Engineering',
    industry: 'FMCG',
    results: ['35% forecast accuracy gain', '$8M inventory savings', '48h faster planning cycles'],
    description: 'Built demand sensing platform ingesting 200+ signals across retail partners, weather, and macro trends.',
    tags: ['Airflow', 'Snowflake', 'Prophet', 'dbt'],
  },
  {
    id: 'agent-platform',
    title: 'Enterprise AI Agent Platform',
    category: 'Generative AI',
    industry: 'Technology',
    results: ['10k+ tasks automated daily', '65% operational cost savings', '94% task completion rate'],
    description: 'Multi-agent orchestration platform with tool-use, memory, and human-in-the-loop workflows.',
    tags: ['LangGraph', 'GPT-4', 'Claude', 'Redis'],
  },
  {
    id: 'risk-platform',
    title: 'Real-time Risk Scoring for NBFC',
    category: 'AI & Machine Learning',
    industry: 'Financial Services',
    results: ['27% NPA reduction', '4x underwriting speed', '99.9% uptime SLA'],
    description: 'Ensemble models scoring loan applications in under 100ms with explainable decisions.',
    tags: ['LightGBM', 'SHAP', 'Kubernetes', 'Kafka'],
  },
]

const allStudies = [...caseStudies, ...extraStudies]

const filters = ['All', 'AI & Machine Learning', 'Generative AI', 'Data Engineering', 'Advanced Analytics']

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Outcomes that moved"
        highlight="the needle"
        description="Real results from production engagements. Every project engineered for measurable, audited business impact."
      />

      {/* Impact stats */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, value: '$180M+', label: 'Total client value created' },
              { icon: Clock, value: '6 weeks', label: 'Average time-to-MVP' },
              { icon: DollarSign, value: '4.2x', label: 'Average ROI in year 1' },
              { icon: TrendingUp, value: '98%', label: 'Client retention rate' },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl glass-card text-center">
                <s.icon className="w-5 h-5 text-indigo-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold gradient-text-indigo tracking-tight">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300'
                    : 'bg-white/5 border border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases grid */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {allStudies.map((study, i) => (
              <article
                key={study.id}
                id={study.id}
                className="group scroll-mt-20 rounded-2xl glass-card overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Hero strip */}
                <div className="relative h-56 bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-slate-900 overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-bold text-white/10 group-hover:text-white/15 transition-colors tracking-tighter">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge color="indigo">{study.industry}</Badge>
                    <Badge color="violet">{study.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-semibold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    {study.results.map((r, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                        <div className="text-sm font-semibold text-indigo-300 leading-tight">{r}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/5">
                    {study.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-12 text-center">
            <Button variant="outline" href="/contact">Discuss your project</Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
