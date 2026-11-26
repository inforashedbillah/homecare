import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Heart, Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { navLinks, site } from '../data/site.js'
import { Button, Breadcrumbs, ContactInfo, Eyebrow, PageHero } from './UI.jsx'

export function SEO({ title, description }) {
  return <Helmet><title>{title} | {site.name}</title><meta name="description" content={description}/><meta property="og:title" content={`${title} | ${site.name}`}/><meta property="og:description" content={description}/><meta property="og:type" content="website"/></Helmet>
}

function Brand({ light = false, onClick }) {
  return <Link to="/" className={`brand${light ? ' brand-light' : ''}`} onClick={onClick} aria-label={`${site.name} home`}><span className="brand-mark" aria-hidden="true"><Heart size={19} strokeWidth={1.7}/></span><span className="brand-name">Eternal Serenity<small>HOME CARE SOLUTIONS</small></span></Link>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const closeOnOutsideClick = event => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('mousedown', closeOnOutsideClick)
    }
  }, [open])

  return <header className="header" ref={headerRef}><a className="skip-link" href="#main">Skip to content</a><div className="header-inner">
    <Brand onClick={() => setOpen(false)}/>
    <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(prev => !prev)}>{open ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>}</button>
    <nav id="primary-navigation" className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">{navLinks.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>{link.label}</NavLink>)}<Button to="/contact" className="nav-cta" onClick={() => setOpen(false)}>Request a Consultation</Button></nav>
  </div></header>
}

export function Footer() {
  const socials = [{ Icon: Facebook, href: site.social.facebook, name: 'Facebook' }, { Icon: Instagram, href: site.social.instagram, name: 'Instagram' }, { Icon: Linkedin, href: site.social.linkedin, name: 'LinkedIn' }].filter(item => item.href)
  return <footer className="footer"><div className="footer-main">
    <div className="footer-intro"><Brand light/><p>Thoughtful support begins with a conversation. We’re here to listen and help you explore your next step.</p></div>
    <div className="footer-links"><h2>Explore</h2>{navLinks.slice(1).map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}<Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms &amp; Conditions</Link></div>
    <div className="footer-contact"><h2>Get in touch</h2><ContactInfo compact phone={site.phone} phoneLink={site.phoneLink} email={site.email} emailLink={site.emailLink} address={site.address} serviceArea={site.serviceArea} hours={site.hours}/>{socials.length ? <div className="socials" aria-label="Social media">{socials.map(({Icon,href,name}) => <a href={href} key={name} aria-label={name}><Icon size={17}/></a>)}</div> : <p className="social-placeholder">[Add verified social media links]</p>}</div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Every person. Every story. Treated with care.</span></div></footer>
}

export function PageShell({ children, className = '' }) { return <><Header/><main id="main" className={className}>{children}</main><Footer/></> }
export const ButtonLink = Button
export { Button, Breadcrumbs, Eyebrow, PageHero }
export { SectionHeading, ValueCard, ServiceCard, Testimonial, CTABanner, ContactInfo, FormField, ValidationMessage, LoadingState, SuccessMessage, ErrorMessage, Reveal } from './UI.jsx'
