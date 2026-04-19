import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tensornova.in'),
  title: {
    default: 'TensorNova — Enterprise AI & Data Science Solutions',
    template: '%s · TensorNova',
  },
  description:
    'TensorNova delivers enterprise-grade AI, machine learning, generative AI, and data engineering solutions. Trusted by leading organizations across finance, healthcare, and retail.',
  keywords: [
    'AI consulting India',
    'Machine Learning services',
    'Generative AI',
    'MLOps',
    'Data Engineering',
    'LLM fine-tuning',
    'Enterprise AI',
    'Data Science consulting',
  ],
  authors: [{ name: 'TensorNova' }],
  creator: 'TensorNova',
  publisher: 'TensorNova Technologies Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.tensornova.in',
    siteName: 'TensorNova',
    title: 'TensorNova — Enterprise AI & Data Science Solutions',
    description:
      'Transform your enterprise with production-grade AI, ML, and data science solutions engineered for scale.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TensorNova — Enterprise AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TensorNova — Enterprise AI & Data Science',
    description: 'Production-grade AI, ML, and data science solutions built for enterprise scale.',
    images: ['/og-image.png'],
    creator: '@tensornova',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.tensornova.in',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TensorNova',
  legalName: 'TensorNova Technologies Pvt. Ltd.',
  url: 'https://www.tensornova.in',
  logo: 'https://www.tensornova.in/logo.png',
  description:
    'Enterprise AI, Machine Learning, Generative AI, and Data Engineering consulting company based in India.',
  foundingDate: '2021',
  founders: [{ '@type': 'Person', name: 'Arjun Nair' }],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Prestige Tech Park, Outer Ring Road',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560103',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-80-4567-8900',
    contactType: 'sales',
    email: 'hello@tensornova.in',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://twitter.com/tensornova',
    'https://linkedin.com/company/tensornova',
    'https://github.com/tensornova',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased font-sans bg-slate-950 text-slate-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
