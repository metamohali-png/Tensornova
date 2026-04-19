import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin, Clock, Calendar, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Book a strategy call',
  description:
    'Start a conversation with TensorNova. Book a free 45-minute AI strategy call with our leadership team. Typical response time: 2 business hours.',
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@tensornova.in',
    href: 'mailto:hello@tensornova.in',
    desc: 'Fastest response channel',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 80 4567 8900',
    href: 'tel:+918045678900',
    desc: 'Mon-Fri, 9am-7pm IST',
  },
  {
    icon: Calendar,
    title: 'Book a call',
    value: 'Schedule directly',
    href: '#',
    desc: '45-min strategy session',
  },
  {
    icon: MessageSquare,
    title: 'Live chat',
    value: 'Start chatting',
    href: '#',
    desc: 'Usually online in IST hours',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        title="Start a conversation"
        highlight="about your AI roadmap"
        description="Share a bit about your project and we'll respond within 2 business hours with next steps."
      />

      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Prefer a different channel?</h3>
                <div className="space-y-3">
                  {contactMethods.map((m) => (
                    <a
                      key={m.title}
                      href={m.href}
                      className="group flex items-start gap-4 p-5 rounded-2xl glass-card hover:border-indigo-500/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 flex-shrink-0">
                        <m.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-500 uppercase tracking-wider">{m.title}</div>
                        <div className="text-sm font-semibold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">{m.value}</div>
                        <div className="text-xs text-slate-500 mt-1">{m.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl glass-card">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-semibold text-white">Our offices</h4>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium text-slate-300">Bengaluru (HQ)</div>
                    <div className="text-slate-500 text-xs leading-relaxed mt-0.5">
                      Prestige Tech Park, Outer Ring Road<br />
                      Bengaluru 560103, Karnataka
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-300">Hyderabad</div>
                    <div className="text-slate-500 text-xs leading-relaxed mt-0.5">
                      HITEC City, Madhapur<br />
                      Hyderabad 500081, Telangana
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-semibold text-white">Response time</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We respond to all inquiries within <span className="text-indigo-300 font-semibold">2 business hours</span> during IST working hours. For urgent matters, book a direct call.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
