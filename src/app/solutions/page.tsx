import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/home/CTASection'
import {
  TrendingUp, Heart, ShoppingCart, Factory, Play, Truck,
  Check, ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries & Solutions',
  description:
    'Industry-specific AI solutions for Financial Services, Healthcare, Retail, Manufacturing, Media, and Logistics. Proven expertise, proven outcomes.',
}

const industries = [
  {
    id: 'financial-services',
    name: 'Financial Services',
    icon: TrendingUp,
    color: 'from-emerald-500/30 to-cyan-500/20 border-emerald-500/30 text-emerald-300',
    description: 'End-to-end AI for banks, insurance, fintech, and capital markets.',
    solutions: [
      { title: 'Real-time Fraud Detection', impact: '85% fraud reduction' },
      { title: 'Credit Risk Modeling', impact: '30% lower default rates' },
      { title: 'AML & KYC Automation', impact: '70% faster onboarding' },
      { title: 'Algorithmic Trading', impact: '2x Sharpe ratio improvement' },
      { title: 'Customer 360 & Personalization', impact: '40% cross-sell lift' },
      { title: 'Regulatory Reporting Automation', impact: '90% time savings' },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: Heart,
    color: 'from-rose-500/30 to-pink-500/20 border-rose-500/30 text-rose-300',
    description: 'AI that improves patient outcomes and accelerates discovery.',
    solutions: [
      { title: 'Medical Imaging AI', impact: '94% diagnostic accuracy' },
      { title: 'Clinical NLP & Coding', impact: '10x faster chart review' },
      { title: 'Drug Discovery Analytics', impact: '50% candidate screening savings' },
      { title: 'Patient Readmission Prediction', impact: '22% fewer readmissions' },
      { title: 'Hospital Operations Optimization', impact: '15% OR utilization lift' },
      { title: 'Genomics Data Platforms', impact: 'Petabyte-scale analysis' },
    ],
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    color: 'from-indigo-500/30 to-violet-500/20 border-indigo-500/30 text-indigo-300',
    description: 'Intelligent commerce that knows every customer.',
    solutions: [
      { title: 'Personalization & Recommendations', impact: '32% CTR uplift' },
      { title: 'Demand Forecasting', impact: '25% stockout reduction' },
      { title: 'Dynamic Pricing', impact: '8-15% margin improvement' },
      { title: 'Visual Search & GenAI Catalogs', impact: '2x conversion on search' },
      { title: 'Customer Churn Prediction', impact: '20% retention improvement' },
      { title: 'AI-Powered Customer Support', impact: '60% self-serve resolution' },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    color: 'from-amber-500/30 to-orange-500/20 border-amber-500/30 text-amber-300',
    description: 'Industry 4.0 intelligence across the factory floor.',
    solutions: [
      { title: 'Predictive Maintenance', impact: '40% downtime reduction' },
      { title: 'Computer Vision Quality Control', impact: '99.5% defect detection' },
      { title: 'Supply Chain Optimization', impact: '18% cost savings' },
      { title: 'Energy Usage Optimization', impact: '12% energy cost reduction' },
      { title: 'Digital Twin Implementations', impact: 'Real-time simulation' },
      { title: 'Shop Floor AI Copilots', impact: '30% productivity gains' },
    ],
  },
  {
    id: 'media',
    name: 'Media & Entertainment',
    icon: Play,
    color: 'from-fuchsia-500/30 to-pink-500/20 border-fuchsia-500/30 text-fuchsia-300',
    description: 'AI that unlocks audience value across content.',
    solutions: [
      { title: 'Content Personalization', impact: '45% engagement lift' },
      { title: 'Automated Content Tagging', impact: '10x faster metadata' },
      { title: 'GenAI Content Creation Tools', impact: '5x production speed' },
      { title: 'Audience Analytics', impact: 'Deep viewer intelligence' },
      { title: 'Ad Targeting & Bidding', impact: '28% ROAS improvement' },
      { title: 'Subscription Churn Prediction', impact: '20% win-back rate' },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: Truck,
    color: 'from-cyan-500/30 to-blue-500/20 border-cyan-500/30 text-cyan-300',
    description: 'Intelligent logistics that moves goods smarter.',
    solutions: [
      { title: 'Route Optimization', impact: '20% fuel cost reduction' },
      { title: 'Demand Sensing & Forecasting', impact: '35% forecast accuracy gain' },
      { title: 'Warehouse Automation AI', impact: '2x throughput' },
      { title: 'Fleet Management & Telematics', impact: '25% maintenance savings' },
      { title: 'Last-mile Delivery Optimization', impact: '18% delivery time cut' },
      { title: 'Supply Chain Risk Analytics', impact: 'Real-time risk scoring' },
    ],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries & Solutions"
        title="Industry expertise,"
        highlight="engineered for impact"
        description="Purpose-built AI solutions for the industries we know deepest. Proven playbooks, proven results, tailored to your unique context."
      />

      {/* Industries grid */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className={`group flex items-start gap-4 p-5 rounded-2xl glass-card hover:border-indigo-500/30 transition-all duration-300`}
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br border flex items-center justify-center ${ind.color}`}>
                  <ind.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">{ind.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{ind.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry detail sections */}
      {industries.map((ind, idx) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`relative section-padding scroll-mt-20 ${idx % 2 === 1 ? 'bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br border items-center justify-center mb-6 ${ind.color}`}>
                  <ind.icon className="w-7 h-7" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
                  {ind.name}
                </h2>
                <p className="text-base text-slate-400 leading-relaxed mb-8">
                  {ind.description} We partner with leaders across the sector to deploy AI that moves top-line and bottom-line KPIs.
                </p>
                <Button href="/contact" arrow>Explore partnership</Button>
              </div>

              <div className="lg:col-span-7">
                <SectionHeader
                  eyebrow="Solutions we build"
                  title="Proven playbooks with measurable impact"
                  className="mb-8"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ind.solutions.map((sol) => (
                    <div
                      key={sol.title}
                      className="p-5 rounded-xl glass-card hover:border-indigo-500/30 transition-colors group"
                    >
                      <div className="flex items-start gap-2 mb-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <h4 className="text-sm font-semibold text-white leading-snug">{sol.title}</h4>
                      </div>
                      <div className="pl-7 text-xs text-indigo-300 font-medium">{sol.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  )
}
