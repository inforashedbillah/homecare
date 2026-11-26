import { Heart, Leaf, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, PageShell, SEO, ValueCard } from '../components/Site.jsx'

const values = [
  { icon: Heart, title: 'Compassion', text: 'Approach each person and family with warmth, patience, and care.' },
  { icon: ShieldCheck, title: 'Respect', text: 'Honor each person’s preferences, privacy, and personal choices.' },
  { icon: Leaf, title: 'Dignity', text: 'Make room for independence and the familiar routines that matter.' },
  { icon: UsersRound, title: 'Personal attention', text: 'Listen to each family’s questions and understand what support means to them.' },
]

export default function About() {
  return <PageShell>
    <SEO title="About us" description="Learn about the values and person-centered approach of Eternal Serenity Home Care Solutions."/>
    <PageHero eyebrow="ABOUT US" title="About Eternal Serenity Home Care Solutions" text="Our mission is to approach home care with compassion, respect, and a commitment to understanding what matters to each person and family."/>

    <section className="section container about-layout">
      <div className="about-photo"><img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85" alt="Family members sharing time together outdoors" loading="lazy"/></div>
      <div className="about-copy"><Eyebrow>OUR MISSION</Eyebrow><h2>Care that honors <em>your story.</em></h2><p>Eternal Serenity Home Care Solutions aims to help families explore support at home through thoughtful, personal conversations. We believe each person deserves to be treated with kindness and respect.</p><p>Our mission and service approach can be refined with the company’s own words before publication.</p><div className="about-points"><p><Heart aria-hidden="true"/> Begin with compassion.</p><p><ShieldCheck aria-hidden="true"/> Respect dignity and choice.</p><p><Sparkles aria-hidden="true"/> Make space for personal priorities.</p></div></div>
    </section>

    <section className="section sage-panel"><div className="container"><div className="section-heading"><Eyebrow>WHAT GUIDES US</Eyebrow><h2>Our Mission &amp; <em>Values</em></h2><p>These principles shape how we listen, communicate, and discuss possible support.</p></div><div className="value-grid about-values-grid">{values.map(({icon:Icon,title,text})=><ValueCard key={title} icon={<Icon/>} title={title} text={text}/>)}</div></div></section>

    <section className="section container dignity-section"><div><Eyebrow>THE PERSON COMES FIRST</Eyebrow><h2>Dignity. Independence. <em>Respect.</em></h2></div><div><p>Home is personal. It holds familiar routines, preferences, and relationships. Conversations about support should respect the individual’s dignity and preserve their voice in decisions.</p><p>We aim to understand what personalized support means to each person before discussing services or next steps. Specific offerings and availability should always be confirmed with the company.</p></div></section>

    <section className="section about-family"><div className="container two-column"><div><Eyebrow>WORKING WITH FAMILIES</Eyebrow><h2>Listening is part of <em>the process.</em></h2><p>Families bring important perspectives and questions. We welcome open communication and encourage families to ask how they may participate in conversations, while keeping the individual’s wishes and privacy in view.</p><p>We do not publish a company history, founding story, owner biography, or staff credentials until those details are provided and verified.</p><ButtonLink to="/contact">Let’s Start a Conversation</ButtonLink></div><div className="family-values-card"><span><UsersRound/></span><h3>Thoughtful conversations, at your pace</h3><p>Share your questions, learn what can be confirmed, and decide what you would like to explore next.</p></div></div></section>
  </PageShell>
}
