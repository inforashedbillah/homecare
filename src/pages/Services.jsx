import { ArrowUpRight } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, PageShell, SEO, ServiceCard } from '../components/Site.jsx'
import { services } from '../data/services.js'

export default function Services() {
  const confirmed = services.filter(service => service.confirmed)
  return <PageShell>
    <SEO title="Our services" description="Learn how to ask Eternal Serenity Home Care Solutions about home care services and support options."/>
    <PageHero eyebrow="OUR SERVICES" title="Home Care Services Designed Around Your Needs" text="Personalized support starts with understanding the person, their routines, and what the family is looking for. Contact us to discuss possible options."/>
    <section className="section container services-page-intro"><div><Eyebrow>A PERSONAL CONVERSATION</Eyebrow><h2>Support shaped around <em>what matters.</em></h2></div><p>Home care needs are different for every person. We want to hear what support you are exploring and help clarify the questions to ask. A specific service is only listed as offered after the company confirms it.</p></section>
    <section className="section services-preview services-page-cards"><div className="container"><div className="service-cards service-cards-large">{services.map((service,index)=><ServiceCard service={service} index={index} key={service.id}/>)}</div><div className="services-edit-notice">Service names and descriptions are editable placeholders. Replace them in <code>src/data/services.js</code> only after the company confirms each offering.</div></div></section>
    <section className="section container confirmed-services"><div className="section-heading"><Eyebrow>SERVICE DETAILS</Eyebrow><h2>What each service <em>includes</em></h2><p>Details should explain confirmed offerings clearly, without adding clinical or other unverified claims.</p></div>{confirmed.length ? <div className="confirmed-service-list">{confirmed.map((service,index)=><article key={service.id} className="confirmed-service"><span>0{index+1}</span><div><h3>{service.title}</h3><p>{service.details}</p></div></article>)}</div> : <div className="placeholder-notice">No services have been confirmed for publication yet. Add confirmed services and detailed descriptions to <code>src/data/services.js</code>; this section will appear when at least one is marked confirmed.</div>}</section>
    <section className="closing-cta"><div className="container closing-inner"><span className="closing-flower" aria-hidden="true"><ArrowUpRight size={26} aria-hidden="true"/></span><Eyebrow>WHEN YOU’RE READY</Eyebrow><h2>Let’s talk about what <em>you need.</em></h2><p>Ask about current services, availability, and whether the company may be a fit for your family.</p><ButtonLink to="/contact" variant="light">Request a Consultation</ButtonLink></div></section>
  </PageShell>
}
