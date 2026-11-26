import { Clock3, Compass, Mail, MapPin, Phone } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, PageShell, SEO } from '../components/Site.jsx'
import InquiryForm from '../components/InquiryForm.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  const showMap = Boolean(site.addressConfirmed && site.mapEmbedUrl)
  return <PageShell>
    <SEO title="Contact us" description="Contact Eternal Serenity Home Care Solutions with questions or to request a consultation."/>
    <PageHero eyebrow="CONTACT US" title={<>We’re Here to <em>Listen</em></>} text="Tell us what you’re looking for or ask a question. We’ll help you explore the next step."/>
    <section className="section container contact-page-layout">
      <div className="contact-page-info"><Eyebrow>LET’S CONNECT</Eyebrow><h2>Start a thoughtful <em>conversation.</em></h2><p>We welcome your questions about available support, consultation requests, and how to get in touch.</p>
        <div className="contact-cards"><ContactCard icon={<Phone/>} title="Phone" value={site.phone} href={site.phoneLink ? `tel:${site.phoneLink}` : ''}/><ContactCard icon={<Mail/>} title="Email" value={site.email} href={site.emailLink ? `mailto:${site.emailLink}` : ''}/><ContactCard icon={<MapPin/>} title="Address" value={site.address}/><ContactCard icon={<Clock3/>} title="Business hours" value={site.hours}/></div>
        {showMap && <div className="map-panel"><iframe title="Map showing the verified business address" src={site.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>}
        <p className="placeholder-notice">Replace these contact placeholders with verified company details before launch.</p>
      </div>
      <div className="form-panel contact-form-panel"><Eyebrow>WE’RE HERE TO HELP</Eyebrow><h2>Send an inquiry</h2><p>Choose a consultation request or another question. The message field is optional.</p><InquiryForm/></div>
    </section>
    <section className="closing-cta"><div className="container closing-inner"><Eyebrow>TAKE THE NEXT STEP</Eyebrow><h2>We’ll meet you <em>where you are.</em></h2><p>Reach out when you’re ready to ask about current options and availability.</p><ButtonLink to="/contact#inquiry-form" variant="light">Request a Consultation</ButtonLink></div></section>
  </PageShell>
}

function ContactCard({ icon, title, value, href }) {
  const content = <><span className="contact-card-icon" aria-hidden="true">{icon}</span><span><small>{title}</small><strong>{value}</strong></span></>
  return href ? <a className="contact-card" href={href}>{content}</a> : <div className="contact-card">{content}</div>
}
