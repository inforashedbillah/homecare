import { Heart, Leaf, ShieldCheck, UsersRound } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, PageShell, SEO, ValueCard } from '../components/Site.jsx'
import CareerApplicationForm from '../components/CareerApplicationForm.jsx'

const qualities = [
  { icon: Heart, title: 'Compassion', text: 'Meet people with kindness and patience.' },
  { icon: ShieldCheck, title: 'Responsibility', text: 'Treat trust, privacy, and personal boundaries with care.' },
  { icon: Leaf, title: 'Respect', text: 'Value each person’s individuality, preferences, and dignity.' },
  { icon: UsersRound, title: 'Dependability', text: 'Communicate thoughtfully and follow through on agreed next steps.' },
]

const steps = [
  ['01', 'Share your interest', 'Complete the form with a short introduction and the role you would like to discuss.'],
  ['02', 'Company follow-up', 'The company can explain current openings and any applicable application requirements.'],
  ['03', 'Discuss next steps', 'If there may be a fit, ask the company how its hiring process proceeds.'],
]

export default function Careers() {
  return <PageShell>
    <SEO title="Careers" description="Explore caregiver employment opportunities and express interest in working with Eternal Serenity Home Care Solutions."/>
    <PageHero eyebrow="CAREERS" title={<>Build a Career That Makes a <em>Difference</em></>} text="We welcome people who care about supporting individuals and families with kindness, responsibility, and respect."/>
    <section className="section container careers-intro"><div><Eyebrow>WORK WITH PURPOSE</Eyebrow><h2>Bring your care to <em>the work.</em></h2><p>Interested in work centered on human connection? Use the application form to introduce yourself and share the kind of role you hope to explore.</p><p>Current vacancies, pay, benefits, eligibility, and hiring requirements have not been supplied. Please contact the company to confirm those details.</p></div><div className="careers-note"><Heart aria-hidden="true"/><span>Thoughtful care starts by recognizing the person, listening, and treating each individual with dignity.</span></div></section>
    <section className="section sage-panel"><div className="container"><div className="section-heading"><Eyebrow>QUALITIES WE VALUE</Eyebrow><h2>Care, shown in <em>everyday actions.</em></h2><p>These are guiding qualities, not formal qualifications or hiring criteria.</p></div><div className="value-grid careers-qualities">{qualities.map(({icon:Icon,title,text})=><ValueCard key={title} icon={<Icon/>} title={title} text={text}/>)}</div></div></section>
    <section className="section container application-steps"><div className="section-heading"><Eyebrow>WHAT TO EXPECT</Eyebrow><h2>A clear place to <em>begin.</em></h2><p>This outline is general. Confirm the company’s actual process before applying.</p></div><div className="approach-steps">{steps.map(([number,title,text])=><article className="approach-step" key={number}><div className="step-top"><span className="step-icon">{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section sage-panel" id="application"><div className="container application-layout"><div className="application-form-intro"><Eyebrow>EXPRESS YOUR INTEREST</Eyebrow><h2>Tell us a little <em>about yourself.</em></h2><p>Required fields help prepare a complete message. Resume upload is optional. This form is not connected to an application service yet.</p><div className="placeholder-notice">Open roles and employment details must be confirmed directly with the company.</div></div><div className="form-panel"><h2>Caregiver application</h2><p>Prepare an expression of interest.</p><CareerApplicationForm/></div></div></section>
    <section className="closing-cta"><div className="container closing-inner"><Eyebrow>QUESTIONS ARE WELCOME</Eyebrow><h2>Want to learn more <em>first?</em></h2><p>Ask the company about current opportunities and its hiring process.</p><ButtonLink to="/contact" variant="light">Contact Us</ButtonLink></div></section>
  </PageShell>
}
