import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Heart, Leaf, ShieldCheck, UsersRound, MessageCircle, Compass, Sparkles } from 'lucide-react'
import { ButtonLink, CTABanner, Eyebrow, PageShell, SectionHeading, SEO, ServiceCard, Reveal } from '../components/Site.jsx'
import { faqs } from '../data/faqs.js'
import { services } from '../data/services.js'

const principles = [
  { icon: Heart, title: 'Personalized attention', text: 'A thoughtful conversation can begin with what matters most to your loved one and family.' },
  { icon: ShieldCheck, title: 'Respectful support', text: 'We believe dignity, privacy, and personal preferences belong at the center of every care conversation.' },
  { icon: UsersRound, title: 'Family communication', text: 'We welcome family questions and value open, considerate communication along the way.' },
  { icon: Sparkles, title: 'A welcoming approach', text: 'There is room to ask questions, take your time, and understand possible next steps.' },
]

const approach = [
  { number: '01', icon: MessageCircle, title: 'Start a Conversation', text: 'Share what brings you here and the questions on your mind.' },
  { number: '02', icon: Heart, title: 'Understand Your Needs', text: 'Talk about your loved one’s routines, preferences, and priorities.' },
  { number: '03', icon: Compass, title: 'Explore a Personalized Care Plan', text: 'Discuss possible next steps and any care planning the company can confirm.' },
]

export default function Home() {
  return <PageShell>
    <SEO title="Compassionate care, comfort at home" description="Eternal Serenity Home Care Solutions invites families to start a thoughtful conversation about home care and available support."/>

    <section className="hero home-hero">
      <div className="hero-copy">
        <Eyebrow>Compassionate Care. Comfort at Home.</Eyebrow>
        <h1>Helping Your Loved Ones Feel <em>Safe, Supported, and Valued</em> at Home.</h1>
        <p className="hero-lede">We believe care should begin with listening. Our approach is centered on understanding each person’s preferences, priorities, and the small details that make home feel like home.</p>
        <div className="hero-actions"><ButtonLink to="/contact">Request a Consultation</ButtonLink><ButtonLink to="/services" variant="outline">Explore Our Services</ButtonLink></div>
        <a className="hero-scroll" href="#care-introduction"><span>Discover our approach</span><ArrowDown size={14} aria-hidden="true"/></a>
      </div>
      <div className="hero-visual home-hero-visual">
        <img src="https://images.unsplash.com/photo-1765896387377-e293914d1e69?auto=format&fit=crop&w=1200&q=85" alt="A caregiver and an older woman sharing a warm conversation indoors" fetchPriority="high"/>
        <div className="image-caption"><span className="caption-icon" aria-hidden="true"><Heart size={17} aria-hidden="true"/></span><span>Care begins with<br/><strong>feeling understood.</strong></span></div>
        <div className="hero-photo-credit"><a href="https://unsplash.com/photos/two-women-laughing-together-indoors-GPrh_GLiWCI" target="_blank" rel="noopener noreferrer">Photo by Age Cymru on Unsplash</a></div>
      </div>
    </section>

    <Reveal><section className="section container intro-section home-intro" id="care-introduction">
      <div className="intro-image"><img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85" alt="Family sharing a relaxed moment together" loading="lazy"/><div className="image-number">A more personal<br/><strong>kind of care.</strong></div></div>
      <div className="intro-copy"><Eyebrow>CARE THAT FEELS LIKE FAMILY</Eyebrow><h2>Care That Feels <em>Like Family</em></h2><p>When someone you love needs support, the way that support is offered matters. Dignity, respect, compassion, and dependability should be part of the conversation from the very beginning.</p><p>We take time to understand what is important to your loved one and your family. Personalized support starts with listening and making room for each person’s choices.</p><ButtonLink to="/about" variant="outline">Get to know us</ButtonLink></div>
    </section></Reveal>

    <Reveal><section className="section services-preview home-services"><div className="container">
      <SectionHeading eyebrow="THOUGHTFUL SUPPORT, YOUR WAY" title={<>How We Can <em>Support You</em></>} text="Every family’s needs are different. These service details are placeholders until the company confirms what it offers."/>
      <div className="service-cards">{services.map((service,index)=><ServiceCard service={service} index={index} key={`${service.title}-${index}`}/>)}</div>
      <div className="center-link"><Link className="text-link" to="/services">View All Services <ArrowUpRight size={16} aria-hidden="true"/></Link></div>
    </div></section></Reveal>

    <Reveal><section className="section container home-why">
      <div className="home-why-heading"><Eyebrow>THE ETERNAL SERENITY APPROACH</Eyebrow><h2>A Caring Approach You Can Feel <em>Confident In</em></h2><p>Trust grows through considerate conversations, clear expectations, and respect for the person receiving support.</p></div>
      <div className="home-principles">{principles.map(({icon:Icon,title,text},index)=><article className="home-principle" key={title}><span className="principle-icon" aria-hidden="true"><Icon size={20} aria-hidden="true"/></span><span className="principle-index" aria-hidden="true">0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section></Reveal>

    <Reveal><section className="section home-approach"><div className="container">
      <SectionHeading eyebrow="A SIMPLE PLACE TO BEGIN" title={<>Our Approach, <em>Step by Step</em></>} text="We’ll help you understand the conversation and explore what may be possible. Details depend on the company’s confirmed services and availability."/>
      <div className="approach-steps">{approach.map(({number,icon:Icon,title,text},index)=><article className="approach-step" key={number}><div className="step-top"><span className="step-icon" aria-hidden="true"><Icon size={20} aria-hidden="true"/></span><span>{number}</span>{index<approach.length-1&&<i aria-hidden="true"/>}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section></Reveal>

    <Reveal><section className="family-cta"><div className="container family-cta-inner"><div><Eyebrow>HERE FOR YOUR FAMILY</Eyebrow><h2>Let’s Talk About the Care Your Loved One <em>Deserves</em></h2><p>Tell us what matters to your family. We’ll listen and help you explore the next step.</p></div><div className="family-cta-actions"><ButtonLink to="/contact">Request a Consultation</ButtonLink><ButtonLink to="/contact" variant="outline">Contact Us</ButtonLink></div></div></section></Reveal>

    <Reveal><section className="section container career-promo"><div className="career-art" aria-hidden="true"><span><Heart size={30}/></span><i/><i/><i/></div><div className="career-promo-copy"><Eyebrow>CAREERS AT ETERNAL SERENITY</Eyebrow><h2>Make a Meaningful <em>Difference</em></h2><p>Interested in work centered on kindness, respect, and human connection? We welcome you to explore employment opportunities and share your interest with us.</p><ButtonLink to="/careers" variant="outline">Explore Careers</ButtonLink></div></section></Reveal>

    <Reveal><section className="section faq-preview"><div className="container faq-preview-inner"><div className="faq-preview-heading"><Eyebrow>HERE TO HELP</Eyebrow><h2>A Few Things Families <em>Often Ask</em></h2><p>Have another question? We’re happy to help you find a place to start.</p><ButtonLink to="/faqs" variant="outline">View All FAQs</ButtonLink></div><div className="faq-preview-list">{faqs.slice(0,4).map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section></Reveal>

    <Reveal><CTABanner eyebrow="A WARM WELCOME, WHEN YOU’RE READY" title={<>Let’s Begin with a <em>Conversation</em></>} text="Reach out with your questions. We’ll take time to listen and help you explore the next step." buttonText="Request a Consultation"/></Reveal>
  </PageShell>
}
