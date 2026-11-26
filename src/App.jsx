import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'
import Home from './pages/Home.jsx'
import Legal from './pages/Legal.jsx'
import Services from './pages/Services.jsx'
import { ButtonLink, PageShell, SEO, Eyebrow } from './components/Site.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function NotFound() {
  return <PageShell><SEO title="Page not found" description="The page you’re looking for could not be found."/><section className="not-found"><span>404</span><Eyebrow>THIS PAGE WANDERED OFF</Eyebrow><h1>Let’s find our <em>way back.</em></h1><p>The page may have moved, or the link may be out of date.</p><ButtonLink to="/">Back to home</ButtonLink></section></PageShell>
}

export default function App() {
  return <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/faqs" element={<FAQ/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/privacy-policy" element={<Legal type="privacy"/>}/>
      <Route path="/terms" element={<Legal type="terms"/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </>
}
