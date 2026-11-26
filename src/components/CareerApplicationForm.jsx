import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { supabase } from '../lib/supabase.js'
import { ErrorMessage, FormField, LoadingState, SuccessMessage, ValidationMessage } from './UI.jsx'

export const MAX_RESUME_SIZE_MB = 5
const maxBytes = MAX_RESUME_SIZE_MB * 1024 * 1024
const acceptedExtensions = /\.(pdf|doc|docx)$/i

export default function CareerApplicationForm() {
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const resumeHintId = useId()
  const resumeErrorId = useId()
  const consentErrorId = useId()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async data => {
    setSubmitError('')
    if (!supabase) {
      setSubmitError('The application service is not configured. Please contact us directly.')
      return
    }

    const file = data.resume?.[0] || null
    let resumePath = null

    if (file) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
      const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safeName}`
      const { error: uploadError } = await supabase.storage.from('resumes').upload(uniqueName, file)
      if (uploadError) {
        setSubmitError('We could not upload your resume file. Please check the file format and try again.')
        return
      }
      resumePath = uniqueName
    }

    const { error } = await supabase.from('career_applications').insert({
      full_name: data.fullName.trim(),
      email: data.email.trim(),
      phone: data.phone?.trim() || null,
      position: data.position.trim(),
      availability: data.availability || null,
      resume_file_name: file?.name || null,
      resume_path: resumePath,
      experience: data.experience?.trim() || null,
      message: data.message?.trim() || null,
      privacy_consent: Boolean(data.privacyConsent),
    })

    if (error) {
      setSubmitError('We could not submit your application right now. Please try again or contact us directly.')
      return
    }

    reset()
    setSent(true)
  }

  if (sent) return <SuccessMessage title="Thank you for your application.">Your application details have been received and saved. Our team will review your information and reach out if there is a fit.</SuccessMessage>

  return <form className="contact-form application-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="form-grid">
      <FormField label="Full name" name="fullName" register={register} errors={errors} autoComplete="name" required rules={{ required: 'Please enter your full name.' }}/>
      <FormField label="Email address" name="email" type="email" register={register} errors={errors} autoComplete="email" required rules={{ required: 'Please enter your email address.', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address.' } }}/>
      <FormField label="Phone number" name="phone" type="tel" register={register} errors={errors} autoComplete="tel"/>
      <FormField label="Position of interest" name="position" register={register} errors={errors} required rules={{ required: 'Please enter the position you are interested in.' }}/>
      <div className="field"><label htmlFor="availability">Availability (optional)</label><select id="availability" {...register('availability')}><option value="">Select an option</option><option>Weekdays</option><option>Evenings</option><option>Weekends</option><option>Flexible</option><option>Other</option></select></div>
      <div className="field file-field"><label htmlFor="resume">Resume (optional)</label><input id="resume" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" aria-invalid={!!errors.resume} aria-describedby={errors.resume ? `${resumeHintId} ${resumeErrorId}` : resumeHintId} {...register('resume', { validate: { fileType: files => !files?.length || acceptedExtensions.test(files[0].name) || 'Upload a PDF, DOC, or DOCX file.', fileSize: files => !files?.length || files[0].size <= maxBytes || `The file must be ${MAX_RESUME_SIZE_MB} MB or smaller.` } })}/><small id={resumeHintId}>Accepted formats: PDF, DOC, DOCX. Maximum size: {MAX_RESUME_SIZE_MB} MB.</small>{errors.resume && <ValidationMessage id={resumeErrorId}>{errors.resume.message}</ValidationMessage>}</div>
    </div>
    <FormField label="Relevant experience (optional)" name="experience" register={register} errors={errors} as="textarea" rows={3}/>
    <FormField label="Short introduction or message (optional)" name="message" register={register} errors={errors} as="textarea" rows={4}/>
    <div className="consent-group">
      <label className="consent" htmlFor="careerConsent"><input id="careerConsent" type="checkbox" aria-required="true" aria-invalid={!!errors.privacyConsent} aria-describedby={errors.privacyConsent ? consentErrorId : undefined} {...register('privacyConsent', { required: 'Please acknowledge the privacy notice before continuing.' })}/><span>I have read the <Link to="/privacy-policy">Privacy Policy</Link> and consent to Eternal Serenity Home Care Solutions storing my application details.</span></label>
      {errors.privacyConsent && <ValidationMessage id={consentErrorId}>{errors.privacyConsent.message}</ValidationMessage>}
    </div>
    {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
    <button className="button primary" type="submit" disabled={isSubmitting}>{isSubmitting ? <LoadingState>Submitting application…</LoadingState> : <>Submit application <span aria-hidden="true">↗</span></>}</button>
    <p className="form-note">Your application is securely saved for review by our team.</p>
  </form>
}
