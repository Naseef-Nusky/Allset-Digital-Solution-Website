import { useState } from 'react'
import { SendIcon } from './Icons'
import { submitContactForm } from '../utils/submitContactForm'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const initialErrors = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const formSuccessTitle = 'Thank you for your submission!'
const formSuccessMessage =
  'A member of our team will be in contact shortly to discuss your project and get you All Set!'
const formSubmitError =
  'Sorry, something went wrong. Please try again or call us directly.'

function validate(values) {
  const errors = { ...initialErrors }

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else if (!/^[\d\s+()-]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us what you need.'
  }

  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (hasError) =>
  `w-full rounded-xl border px-4 py-3 text-sm text-slate-800 outline-none transition focus:ring-2 ${
    hasError
      ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-100'
      : 'border-slate-200 focus:border-emerald-400 focus:ring-emerald-100'
  }`

export default function QuoteForm({ className = '', source = 'Website' }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }))
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      return
    }

    setSubmitError('')
    setIsSubmitting(true)

    try {
      await submitContactForm({
        ...values,
        source,
      })
      setSubmitted(true)
      setValues(initialValues)
      setErrors(initialErrors)
    } catch (error) {
      if (error.errors) {
        setErrors((current) => ({ ...current, ...error.errors }))
      } else {
        setSubmitError(error.message || formSubmitError)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div
        className={`rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-200/50 sm:p-8 ${className}`}
      >
        <p className="text-xl font-bold text-slate-900 sm:text-2xl">{formSuccessTitle}</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
          {formSuccessMessage}
        </p>
      </div>
    )
  }

  return (
    <form
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 ${className}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-5">
        <Field id="name" label="Your name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="James Thompson"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="hello@thompsonplumbing.co.uk"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field id="phone" label="Phone number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="07123 456789"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <Field id="message" label="Tell us what you need" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            placeholder="e.g. Local business needing a website with contact form and SEO."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`${inputClass(Boolean(errors.message))} resize-none`}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <SendIcon />
        {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
      </button>
      {submitError && (
        <p className="mt-4 text-center text-sm text-rose-600" role="alert">
          {submitError}
        </p>
      )}
      <p className="mt-4 text-center text-xs text-slate-500">
        We&apos;ll never share your details. Reply within 24 hours.
      </p>
    </form>
  )
}
