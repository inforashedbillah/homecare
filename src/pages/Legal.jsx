import { PageHero, PageShell, SEO } from '../components/Site.jsx'
import { site } from '../data/site.js'

const privacySections = [
  ['Information we collect', '[Describe the personal information collected through this website, including contact, inquiry, and employment application information. Confirm whether resume files or other sensitive details are collected.]'],
  ['How we use information', '[Describe the specific purposes for which the company uses each category of information.]'],
  ['Forms and service providers', '[Identify each form processor, hosting provider, analytics tool, or other service provider that may handle visitor information. If forms are connected later, update this section before launch.]'],
  ['Retention and security', '[Describe the company’s actual retention periods and security practices. Do not publish unverified guarantees.]'],
  ['Sharing and disclosures', '[Explain when information may be shared and identify any applicable exceptions.]'],
  ['Your choices and requests', '[Add verified instructions for privacy inquiries, access or deletion requests, and any applicable rights.]'],
  ['Cookies and analytics', '[Describe the cookies, analytics, and tracking technologies used, or confirm that none are used.]'],
  ['Contact and updates', `Privacy contact: ${site.email}. Replace with a verified contact method. Add an effective date and describe how updates will be communicated.`],
]

const termsSections = [
  ['Website information', 'This website provides general information about the company. Confirm all descriptions before publication. This text does not describe a confirmed service agreement.'],
  ['Service information and availability', '[Describe only confirmed services, eligibility, availability, service locations, and any limitations. Confirm these details directly with the company.]'],
  ['Consultation and inquiries', '[Explain what happens after a visitor requests a consultation or sends an inquiry. Identify any terms that apply before publishing.]'],
  ['Website use', '[Add the company’s reviewed rules for acceptable use, content, and links to third-party websites.]'],
  ['Intellectual property', '[Identify ownership and permitted use of the company’s website content, logo, and other materials.]'],
  ['Disclaimers and liability', '[Have qualified counsel draft terms appropriate to the business and jurisdiction. Do not rely on this placeholder as a limitation of liability or legal protection.]'],
  ['Governing law and updates', '[Insert the applicable governing law, dispute process, effective date, and update procedure after legal review.]'],
  ['Contact', `Terms contact: ${site.email}. Replace with a verified company contact method.`],
]

export default function Legal({ type = 'privacy' }) {
  const privacy = type === 'privacy'
  const title = privacy ? 'Privacy Policy' : 'Terms and Conditions'
  const sections = privacy ? privacySections : termsSections
  return <PageShell>
    <SEO title={title} description={`${title} draft template for ${site.name}; review and completion required before publication.`}/>
    <PageHero eyebrow="DRAFT POLICY TEMPLATE" title={<>{title}<em>.</em></>} text="This editable template is incomplete and is not ready for publication."/>
    <section className="section container legal-copy">
      <div className="placeholder-notice legal-review-notice"><strong>CLIENT AND LEGAL REVIEW REQUIRED.</strong> This is a drafting template, not legal advice and not a statement of the company’s actual practices. Replace every bracketed item, confirm details with the company, and have qualified counsel review it for the relevant jurisdiction before publication.</div>
      <p className="legal-date">Effective date: [Add date after approval]</p>
      {sections.map(([heading,body])=><section className="legal-section" key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
      <p className="legal-date">Last reviewed: [Add date after client and legal review]</p>
    </section>
  </PageShell>
}
