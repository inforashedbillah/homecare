import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2, ChevronRight, LoaderCircle, MessageCircle, Heart, HandHeart, AlertCircle } from 'lucide-react'

export function Button({ to, href, children, variant = 'primary', className = '', ...props }) {
  const classes = `button ${variant} ${className}`.trim()
  const content = <>{children}{variant !== 'text' && <ArrowUpRight size={16} aria-hidden="true"/>}</>
  if (href) return <a className={classes} href={href} {...props}>{content}</a>
  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>
  return <button className={classes} {...props}>{content}</button>
}

export function PageHero({ eyebrow, title, text, showBreadcrumb = true }) {
  return <section className="page-hero"><div className="container">{showBreadcrumb && <Breadcrumbs/>}<div className="page-hero-copy"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{text}</p></div></div></section>
}

export function Eyebrow({ children }) { return <span className="eyebrow"><span aria-hidden="true"/>{children}</span> }

export function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return <div className={`section-heading section-heading-${align}`}>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export function ValueCard({ icon, title, text }) {
  return <article className="value-card"><span aria-hidden="true">{icon}</span><h3>{title}</h3><p>{text}</p></article>
}

const icons = { MessageCircle, Heart, HandHeart }
export function ServiceCard({ service, index = 0 }) {
  const Icon = icons[service.icon] || Heart
  return <article className="service-card"><span className="service-icon" aria-hidden="true"><Icon size={21} aria-hidden="true"/></span><span className="card-index" aria-hidden="true">{String(index + 1).padStart(2,'0')}</span><h3>{service.title}</h3><p>{service.summary || service.text}</p><Link to="/contact" className="card-arrow" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={18} aria-hidden="true"/></Link></article>
}

export function Testimonial({ name, quote, relationship }) {
  if (!name || !quote || !relationship) return <div className="testimonial-placeholder" role="note"><Heart size={19} aria-hidden="true"/><p>Client stories will be shared here only with permission and verified attribution.</p></div>
  return <figure className="testimonial"><blockquote>“{quote}”</blockquote><figcaption><strong>{name}</strong><span>{relationship}</span></figcaption></figure>
}

export function CTABanner({ eyebrow = 'WHENEVER YOU’RE READY', title = <>Let’s take the first step <em>together.</em></>, text = 'Share a little about what you’re looking for. A conversation can help bring the next step into focus.', buttonText = 'Request a consultation', to = '/contact' }) {
  return <section className="closing-cta"><div className="container closing-inner"><span className="closing-flower" aria-hidden="true"><Heart size={27} aria-hidden="true"/></span><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2><p>{text}</p><Button to={to} variant="light">{buttonText}</Button></div></section>
}

export function ContactInfo({ phone, phoneLink, email, emailLink, address, serviceArea, hours, compact = false }) {
  const rows = [
    ...(phone ? [{ label: 'PHONE', value: phone, href: phoneLink ? `tel:${phoneLink}` : '' }] : []),
    ...(email ? [{ label: 'EMAIL', value: email, href: emailLink ? `mailto:${emailLink}` : '' }] : []),
    ...(address ? [{ label: 'ADDRESS', value: address }] : []),
    ...(serviceArea ? [{ label: 'SERVICE AREA', value: serviceArea }] : []),
    ...(hours ? [{ label: 'OPERATING HOURS', value: hours }] : []),
  ]
  return <div className={`contact-info-list${compact ? ' compact' : ''}`}>{rows.map(row => <div className="contact-detail" key={row.label}><span aria-hidden="true"><MessageCircle size={17}/></span><div><small>{row.label}</small>{row.href ? <a href={row.href}>{row.value}</a> : <p>{row.value}</p>}</div></div>)}</div>
}

export function FormField({ label, name, register, errors, rules, type = 'text', autoComplete, as = 'input', rows = 4, required = false, ...props }) {
  const errorId = useId()
  const hasError = !!errors?.[name]
  const control = as === 'textarea'
    ? <textarea rows={rows} id={name} {...register(name, rules)} aria-required={required || undefined} aria-invalid={hasError} aria-describedby={hasError ? errorId : undefined} {...props}/>
    : <input id={name} type={type} autoComplete={autoComplete} {...register(name, rules)} aria-required={required || undefined} aria-invalid={hasError} aria-describedby={hasError ? errorId : undefined} {...props}/>
  return <div className="field"><label htmlFor={name}>{label}{required && <span className="required-mark" aria-hidden="true"> *</span>}</label>{control}{hasError && <ValidationMessage id={errorId}>{errors[name].message}</ValidationMessage>}</div>
}

export function ValidationMessage({ id, children }) { return <small className="error" id={id} role="alert">{children}</small> }
export function LoadingState({ children = 'Please wait…' }) { return <span className="loading-state" role="status"><LoaderCircle className="spinner" size={17} aria-hidden="true"/>{children}</span> }
export function SuccessMessage({ title, children }) {
  const ref = useRef(null)
  useEffect(() => { ref.current?.focus() }, [])
  return <div ref={ref} tabIndex={-1} className="form-feedback" role="status" aria-live="polite"><CheckCircle2 size={25} aria-hidden="true"/><div><strong>{title}</strong>{children && <p>{children}</p>}</div></div>
}
export function ErrorMessage({ children }) { return <div className="form-error" role="alert"><AlertCircle size={18} aria-hidden="true"/><span>{children}</span></div> }

export function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) { setVisible(true); return }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.02, rootMargin: '0px 0px -20px 0px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal${visible ? ' is-visible' : ''} ${className}`.trim()}>{children}</div>
}

const labels = { about: 'About Us', services: 'Our Services', careers: 'Careers', faqs: 'FAQs', contact: 'Contact Us', 'privacy-policy': 'Privacy Policy', terms: 'Terms & Conditions' }
export function Breadcrumbs() {
  const { pathname } = useLocation()
  const current = pathname.split('/').filter(Boolean).at(-1)
  if (!current || !labels[current]) return null
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-hidden="true"><ChevronRight size={13}/></li><li aria-current="page">{labels[current]}</li></ol></nav>
}

