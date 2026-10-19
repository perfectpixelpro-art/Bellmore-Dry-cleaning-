import { useState } from 'react'
import { PHONE } from '../data/business'

// Posted to the PHP handler in public/, which runs on the cPanel host and
// mails the enquiry to Chris and Chirag. There is no PHP in the Vite dev
// server, so submissions only work against the deployed site.
const ENDPOINT = '/send-enquiry.php'

const SERVICES = [
  'Dry cleaning & shirt laundering',
  'Alterations & custom tailoring',
  'Wedding gown care',
  'Leather & suede',
  'Bedding & household items',
  'Something else',
]

const field =
  'w-full rounded-lg border border-transparent bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20'

export default function EnquiryForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    setError('')

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Request failed')
      }

      form.reset()
      setStatus('sent')
    } catch (caught) {
      setError(caught.message)
      setStatus('error')
    }
  }

  return (
    <div className="rounded-2xl bg-brand-soft p-5 sm:p-7">
      <h3 className="text-[20px] font-bold text-ink sm:text-[22px]">Submit your enquiry</h3>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" type="text" required autoComplete="name" placeholder="Full name" className={field} />
          <input name="phone" type="tel" required autoComplete="tel" placeholder="Phone number" className={field} />
        </div>

        <input name="email" type="email" required autoComplete="email" placeholder="Email address" className={field} />

        <div className="relative">
          <select name="service" required defaultValue="" className={`${field} appearance-none pr-11`}>
            <option value="" disabled>
              Service required
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        <input
          name="date"
          type="text"
          placeholder="Preferred drop-off date"
          onFocus={(e) => {
            e.target.type = 'date'
          }}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = 'text'
          }}
          className={field}
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Message or additional details"
          className={`${field} resize-none`}
        />

        {/* Spam trap: hidden from people, irresistible to bots. */}
        <input
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-px w-px opacity-0"
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-lg bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70"
        >
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>

        {status === 'sent' && (
          <p role="status" className="text-[14px] font-medium text-brand">
            Thanks — we've got your enquiry and will be in touch shortly.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="text-[14px] font-medium text-red-600">
            {error || `Something went wrong. Please call ${PHONE} instead.`}
          </p>
        )}
      </form>
    </div>
  )
}
