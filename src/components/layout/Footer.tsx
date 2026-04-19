import Link from 'next/link'
import { Zap, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  Services: [
    { href: '/services#ai-ml', label: 'AI & Machine Learning' },
    { href: '/services#generative-ai', label: 'Generative AI' },
    { href: '/services#data-engineering', label: 'Data Engineering' },
    { href: '/services#cloud-mlops', label: 'Cloud & MLOps' },
    { href: '/services#analytics', label: 'Advanced Analytics' },
    { href: '/services#consulting', label: 'AI Consulting' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  Resources: [
    { href: '/blog', label: 'Thought Leadership' },
    { href: '/solutions', label: 'Industry Solutions' },
    { href: '/case-studies', label: 'Portfolio' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/privacy#terms', label: 'Terms of Service' },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Tensor</span>
                <span className="gradient-text-indigo">Nova</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise AI & data science solutions that transform how organizations operate, compete, and grow in the intelligence era.
            </p>

            <div className="flex items-center gap-3 mb-6">
              {[
                { icon: Twitter, href: 'https://twitter.com/tensornova', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com/company/tensornova', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/tensornova', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-2">
              {[
                { icon: Mail, text: 'hello@tensornova.in' },
                { icon: Phone, text: '+91 80 4567 8900' },
                { icon: MapPin, text: 'Bengaluru, India' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-slate-500 text-sm">
                  <Icon className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 link-hover"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} TensorNova Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-600 text-sm">
            <span>Built in</span>
            <span className="text-red-400 mx-1">♥</span>
            <span>India · Powering global AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
