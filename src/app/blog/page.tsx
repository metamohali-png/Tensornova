import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { blogPosts } from '@/lib/utils'
import { ArrowUpRight, BookOpen, Mail, FileText, Video } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Resources — AI insights from practitioners',
  description:
    'Engineering essays, research insights, and thought leadership from the TensorNova team. Practical guides on LLMs, MLOps, data platforms, and AI strategy.',
}

const categories = ['All', 'Generative AI', 'MLOps', 'Data Engineering', 'Strategy', 'LLMs']

const resources = [
  { icon: FileText, title: 'Whitepapers', count: '12 reports', href: '#' },
  { icon: BookOpen, title: 'Engineering Guides', count: '34 guides', href: '#' },
  { icon: Video, title: 'Tech Talks', count: '20+ videos', href: '#' },
  { icon: Mail, title: 'AI Briefing', count: 'Weekly newsletter', href: '#' },
]

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHero
        eyebrow="Blog & Resources"
        title="Engineering essays from"
        highlight="AI practitioners"
        description="Real insights from our team. What we learn shipping enterprise AI in production — the hard-won lessons, the mental models, the code."
      />

      {/* Featured post */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featured.id}`}
            className="group block rounded-3xl glass-card overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-white/10 tracking-tighter">01</div>
                </div>
                <div className="absolute top-5 left-5 flex gap-2">
                  <Badge color="violet">Featured</Badge>
                  <Badge color="indigo">{featured.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{featured.readTime}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-indigo-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-base text-slate-400 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-semibold text-sm">
                    {featured.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{featured.author.name}</div>
                    <div className="text-xs text-slate-500">TensorNova</div>
                  </div>
                  <ArrowUpRight className="ml-auto w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories filter */}
      <section className="relative pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300'
                    : 'bg-white/5 border border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent posts grid */}
      <section className="relative pt-0 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...rest, ...rest.slice(0, 3)].slice(0, 6).map((post, i) => (
              <Link
                key={`${post.id}-${i}`}
                href={`/blog/${post.id}`}
                className="group block rounded-2xl glass-card overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="relative aspect-video bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-slate-900 overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10 tracking-tighter">
                      {String(i + 2).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge color="indigo">{post.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 mt-5 pt-5 border-t border-white/5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-semibold text-xs">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-xs text-slate-500">{post.author.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="relative section-padding bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Resources"
            title="Dive deeper with our curated library"
            description="Whitepapers, technical guides, recorded tech talks, and a weekly briefing on the AI industry — all free."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((r) => (
              <a
                key={r.title}
                href={r.href}
                className="group p-6 rounded-2xl glass-card hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-4 group-hover:scale-110 transition-transform">
                  <r.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{r.title}</h3>
                <p className="text-xs text-slate-500">{r.count}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 glass-card text-center">
            <div className="absolute inset-0 gradient-mesh opacity-60" />
            <div className="relative">
              <Mail className="w-10 h-10 text-indigo-400 mx-auto mb-5" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">The AI Briefing</h2>
              <p className="text-base text-slate-400 max-w-md mx-auto mb-8">
                Weekly distilled insights on enterprise AI, delivered to your inbox. No fluff, just signal.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  aria-label="Email address"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-slate-500 mt-4">Join 8,000+ AI practitioners. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
