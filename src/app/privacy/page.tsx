import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms',
  description: 'Privacy policy and terms of service for TensorNova Technologies Pvt. Ltd.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: April 19, 2026. This page explains how we collect, use, and protect your information."
      />

      <section className="relative pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-content space-y-10">
            <Section title="1. Information we collect">
              <p>We collect information you provide directly (name, email, company details through contact forms), usage data (pages visited, time spent, referring URLs via analytics), and technical data (IP address, browser type, device information).</p>
            </Section>

            <Section title="2. How we use your information">
              <p>We use your data to respond to inquiries, deliver our services, improve our website, send relevant communications (with consent), and comply with legal obligations. We never sell your personal data.</p>
            </Section>

            <Section title="3. Data storage and security">
              <p>Your data is stored on secure cloud infrastructure in India and the EU. We implement industry-standard encryption (TLS in transit, AES-256 at rest), access controls, and regular security audits. We are SOC 2 and ISO 27001 aligned.</p>
            </Section>

            <Section title="4. Sharing and disclosure">
              <p>We share data only with trusted sub-processors (cloud infrastructure, email providers, analytics) bound by data protection agreements. We may disclose data if required by law or to protect our legal rights.</p>
            </Section>

            <Section title="5. Your rights">
              <p>You have the right to access, correct, delete, or port your data. You can opt out of marketing communications anytime. To exercise these rights, email <a href="mailto:privacy@tensornova.in" className="text-indigo-300 hover:text-indigo-200">privacy@tensornova.in</a>.</p>
            </Section>

            <Section title="6. Cookies">
              <p>We use essential cookies for site functionality and, with your consent, analytics cookies to understand usage patterns. You can control cookie preferences in your browser.</p>
            </Section>

            <Section title="7. Children's privacy">
              <p>Our services are not directed to children under 16. We do not knowingly collect data from children.</p>
            </Section>

            <Section title="8. Contact">
              <p>Questions about this policy? Reach us at <a href="mailto:privacy@tensornova.in" className="text-indigo-300 hover:text-indigo-200">privacy@tensornova.in</a> or write to our Bengaluru office.</p>
            </Section>
          </article>

          <div id="terms" className="scroll-mt-24 mt-24 pt-16 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">Terms of Service</h2>
            <article className="prose-content space-y-10">
              <Section title="1. Acceptance of terms">
                <p>By accessing www.tensornova.in or engaging our services, you agree to be bound by these terms and our privacy policy.</p>
              </Section>

              <Section title="2. Use of the website">
                <p>You agree to use this website only for lawful purposes. Any content, trademarks, and materials are owned by TensorNova Technologies Pvt. Ltd. Unauthorized reproduction is prohibited.</p>
              </Section>

              <Section title="3. Service engagements">
                <p>Project-based engagements are governed by individual Statements of Work (SOWs). These Terms supplement, but do not replace, any signed agreement.</p>
              </Section>

              <Section title="4. Liability">
                <p>TensorNova is not liable for indirect, incidental, or consequential damages arising from website use. Service liability is limited as defined in individual SOWs.</p>
              </Section>

              <Section title="5. Jurisdiction">
                <p>These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.</p>
              </Section>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <div className="text-slate-400 leading-relaxed text-sm space-y-3">{children}</div>
    </section>
  )
}
