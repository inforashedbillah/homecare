import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { supabase } from '../lib/supabase.js'
import { ErrorMessage, FormField, LoadingState, SuccessMessage, ValidationMessage } from './UI.jsx'

export default function InquiryForm() {
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const consentErrorId = useId()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ defaultValues: { inquiryType: 'consultation' } })

  const onSubmit = async data => {
    setSubmitError('')
    if (!supabase) {
      setSubmitError('The inquiry service is not configured. Please contact us directly by phone or email.')
      return
    }
    const { error } = await supabase.from('inquiries').insert({
      full_name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone?.trim() || null,
      inquiry_type: data.inquiryType,
      message: data.message?.trim() || null,
      privacy_consent: Boolean(data.privacyConsent),
    })
    if (error) {
      setSubmitError('We could not save your inquiry right now. Please try again or contact us directly.')
      return
    }
    reset()
    setSent(true)
  }

  if (sent) return <SuccessMessage title="Thank you for reaching out.">Your inquiry has been received and saved. A member of our team will review your request and follow up using the contact details you provided.</SuccessMessage>

  return <form id="inquiry-form" className="contact-form inquiry-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="form-grid">
      <FormField label="Full name" name="name" register={register} errors={errors} autoComplete="name" required rules={{ required: 'Please enter your name.' }}/>
      <FormField label="Email address" name="email" type="email" register={register} errors={errors} autoComplete="email" required rules={{ required: 'Please enter your email address.', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address.' } }}/>
      <FormField label="Phone number (optional)" name="phone" type="tel" register={register} errors={errors} autoComplete="tel"/>
      <div className="field"><label htmlFor="inquiryType">What would you like to discuss?</label><select id="inquiryType" {...register('inquiryType')}><option value="consultation">Request a consultation</option><option value="services">Ask about services</option><option value="general">General question</option></select></div>
    </div>
    <FormField label="Message (optional)" name="message" register={register} errors={errors} as="textarea" rows={5}/>
    <div className="consent-group">
      <label className="consent" htmlFor="inquiryConsent"><input id="inquiryConsent" type="checkbox" aria-required="true" aria-invalid={!!errors.privacyConsent} aria-describedby={errors.privacyConsent ? consentErrorId : undefined} {...register('privacyConsent', { required: 'Please acknowledge the privacy notice before continuing.' })}/><span>I have read the <Link to="/privacy-policy">Privacy Policy</Link> and consent to Eternal Serenity Home Care Solutions storing my inquiry details to respond to my request.</span></label>
      {errors.privacyConsent && <ValidationMessage id={consentErrorId}>{errors.privacyConsent.message}</ValidationMessage>}
    </div>
    {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
    <button className="button primary" type="submit" disabled={isSubmitting}>{isSubmitting ? <LoadingState>Submitting inquiry…</LoadingState> : <>Submit inquiry <span aria-hidden="true">↗</span></>}</button>
    <p className="form-note">Your inquiry is securely saved so our team can respond to your request.</p>
  </form>
}
