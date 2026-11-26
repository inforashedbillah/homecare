import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ButtonLink, PageHero, PageShell, SEO } from '../components/Site.jsx'
import { faqs } from '../data/faqs.js'

export default function FAQ() {
  return <PageShell>
    <SEO title="Frequently asked questions" description="Find careful answers to common questions about contacting Eternal Serenity Home Care Solutions."/>
    <PageHero eyebrow="FREQUENTLY ASKED QUESTIONS" title={<>Questions are a good place to <em>start.</em></>} text="Explore these general answers and contact us to confirm any company-specific details."/>
    <section className="section container faq-layout">
      <aside className="faq-aside"><Heart aria-hidden="true"/><h2>Every family’s questions are different.</h2><p>Reach out to ask about the company’s current services, process, and availability.</p><ButtonLink to="/contact">Contact Us</ButtonLink></aside>
      <div className="faq-list">{faqs.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>
    <section className="section faq-contact-note"><div className="container"><h2>Need to ask something else?</h2><p>We welcome your questions. Use the contact page to prepare an inquiry.</p><Link className="text-link" to="/contact">Visit Contact Us <span aria-hidden="true">↗</span></Link></div></section>
  </PageShell>
}
