import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { CTASection } from '@/components/home/CTASection'
import { services } from '@/lib/utils'
import {
  Brain, Database, Sparkles, Cloud, BarChart3, Lightbulb,
  Check, ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services — AI, Data Engineering & GenAI',
  description:
    'End-to-end AI services: machine learning, generative AI, data engineering, MLOps, advanced analytics, and AI strategy consulting for enterprises.',
}

const iconMap = { Brain, Database, Sparkles, Cloud, BarChart3, Lightbulb }

const colorMap = {
  indigo: 'from-indigo-500/30 to-indigo-600/10 text-indigo-300 border-indigo-500/30',
  cyan: 'from-cyan-500/30 to-cyan-600/10 text-cyan-300 border-cyan-500/30',
  violet: 'from-violet-500/30 to-violet-600/10 text-violet-300 border-violet-500/30',
}

const detailedServices = [
  {
    id: 'ai-ml',
    overview: 'From problem framing to production deployment, we build custom machine learning systems that drive real business outcomes. Our engagements span classical ML, deep learning, and modern foundation model applications.',
    capabilities: [
      'Supervised, unsupervised, and reinforcement learning',
      'Deep learning with PyTorch and TensorFlow',
      'Computer vision: object detection, segmentation, OCR',
      'Time-series forecasting and anomaly detection',
      'Recommendation systems and personalization',
      'Model interpretability and fairness auditing',
    ],
    outcomes: ['2-10x speed-to-production vs in-house', '40-80% cost reduction vs big consulting', 'ROI realized within 6 months'],
  },
  {
    id: 'generative-ai',
    overview: 'Production-grade LLM applications: intelligent agents, RAG systems, document processing, and custom fine-tuned models. We focus on reliability, cost efficiency, and measurable business value.',
    capabilities: [
      'LLM fine-tuning: LoRA, QLoRA, full fine-tuning, RLHF',
      'RAG architectures with hybrid search',
      'AI agents and multi-step workflows',
      'Prompt engineering and evaluation frameworks',
      'Custom model distillation and optimization',
      'Safety, guardrails, and content moderation',
    ],
    outcomes: ['90%+ answer accuracy on domain queries', '70% cost reduction via optimization', 'Sub-second response times'],
  },
  {
    id: 'data-engineering',
    overview: 'Modern data architectures that scale. Lakehouse implementations, real-time streaming, and end-to-end pipelines engineered for reliability and observability.',
    capabilities: [
      'Data lake and lakehouse architectures (Delta, Iceberg, Hudi)',
      'Streaming pipelines with Kafka, Flink, and Spark',
      'ETL/ELT with Airflow, dbt, and Dagster',
      'Snowflake, Databricks, BigQuery, Redshift',
      'Data quality, lineage, and governance',
      'Real-time CDC and event-driven architectures',
    ],
    outcomes: ['95%+ pipeline reliability', '10x query performance gains', 'Full data governance compliance'],
  },
  {
    id: 'cloud-mlops',
    overview: 'Kubernetes-native ML platforms with full lifecycle management. Automated training, deployment, monitoring, and retraining at scale across AWS, GCP, and Azure.',
    capabilities: [
      'Kubernetes-native ML platforms (Kubeflow, Ray)',
      'Model serving with Triton, TorchServe, Seldon',
      'CI/CD for ML (MLflow, DVC, Weights & Biases)',
      'Feature stores (Feast, Tecton)',
      'A/B testing and gradual rollouts',
      'Model monitoring, drift detection, and alerting',
    ],
    outcomes: ['99.95% model uptime SLA', '50% faster deployments', '30-60% cloud cost savings'],
  },
  {
    id: 'analytics',
    overview: 'Advanced analytics, predictive modeling, and business intelligence solutions that unlock actionable insights from your data. From executive dashboards to real-time decision engines.',
    capabilities: [
      'Interactive dashboards (Tableau, Looker, Power BI)',
      'Predictive and prescriptive analytics',
      'Customer segmentation and lifetime value modeling',
      'A/B testing and causal inference',
      'Marketing mix modeling and attribution',
      'Self-serve analytics platforms',
    ],
    outcomes: ['5-30% revenue lift from insights', 'Data democratization across teams', 'Decision cycle time cut 3x'],
  },
  {
    id: 'consulting',
    overview: 'Strategic AI advisory for leaders navigating digital transformation. We partner with CXOs to build AI roadmaps, assess readiness, and orchestrate enterprise-wide change.',
    capabilities: [
      'AI maturity and readiness assessments',
      'Opportunity identification and prioritization',
      'Build-vs-buy-vs-partner evaluation',
      'Technology and vendor selection',
      'AI governance and risk frameworks',
      'Change management and team enablement',
    ],
    outcomes: ['Clear 12-24 month AI roadmap', 'De-risked investment decisions', 'Executive alignment on strategy'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Full-stack AI capabilities,"
        highlight="engineered for enterprise"
        description="From strategy to production, we cover every layer of the modern AI stack. Choose the capabilities you need — or partner with us end-to-end."
      />

      {/* Services overview grid */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl glass-card hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className={cn(
                    'flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br border flex items-center justify-center',
                    colorMap[service.color as keyof typeof colorMap]
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{service.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed service sections */}
      {services.map((service, idx) => {
        const detail = detailedServices.find((d) => d.id === service.id)!
        const Icon = iconMap[service.icon as keyof typeof iconMap]
        const reverse = idx % 2 === 1
        return (
          <section
            key={service.id}
            id={service.id}
            className={cn(
              'relative section-padding scroll-mt-20 overflow-hidden',
              reverse && 'bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950'
            )}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={cn(
                'grid grid-cols-1 lg:grid-cols-12 gap-12 items-start',
                reverse && 'lg:[&>*:first-child]:order-2'
              )}>
                <div className="lg:col-span-5">
                  <div className={cn(
                    'inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br border items-center justify-center mb-6',
                    colorMap[service.color as keyof typeof colorMap]
                  )}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <Badge color={service.color as 'indigo' | 'cyan' | 'violet'}>Service</Badge>
                  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base text-slate-400 leading-relaxed">
                    {detail.overview}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Typical outcomes</h4>
                    {detail.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        {o}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="/contact" arrow>Discuss a project</Button>
                    <Button variant="outline" href="/case-studies">See case studies</Button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="p-8 rounded-2xl glass-card">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-6">Capabilities</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {detail.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <CTASection />
    </>
  )
}
