import { useState } from 'react'
import { contactCards } from '../data/content'

export function Contact() {
  const [status, setStatus] = useState({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)

    const requiredFields = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      petName: "Pet's Name",
      message: 'Message',
    }

    const missingField = Object.entries(requiredFields).find(([field]) => {
      const value = formData.get(field)
      return typeof value !== 'string' || value.trim() === ''
    })

    if (missingField) {
      setStatus({
        type: 'error',
        message: `Please fill in the ${missingField[1]} field before sending your message.`,
      })
      return
    }

    formData.append('access_key', 'c5bbcd26-0582-474b-b64a-534f3feaf300')
    formData.append('subject', 'New Safe Hands contact request')

    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setStatus({ type: 'success', message: 'Thanks! Your message has been sent successfully.' })
        form.reset()
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'We could not send your message. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="section-subtitle">
          Ready to schedule an appointment or have questions? We&apos;re here to help.
        </p>
        <div className="contact-grid">
          <div className="contact-cards">
            {contactCards.map(({ title, body }) => (
              <article key={title} className="card card--info" data-slot="card">
                <div className="card__header" data-slot="card-header">
                  <h3 className="card__title" data-slot="card-title">
                    {title}
                  </h3>
                </div>
                <div className="card__content" data-slot="card-content">
                  {body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
            <article className="card card--info card--emergency" data-slot="card" id="emergency">
              <div className="card__header" data-slot="card-header">
                <h3 className="card__title" data-slot="card-title">
                  Emergency Care
                </h3>
                <p className="card__description" data-slot="card-description">
                  For after-hours emergencies, call our emergency line. We have veterinarians on-call 24/7 to handle urgent
                  situations.
                </p>
              </div>
              <div className="card__footer" data-slot="card-footer">
                <a className="btn-emergency" href="tel:+918074695965">
                  Call Emergency Line
                </a>
              </div>
            </article>
          </div>
          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>
            <div className="form-row">
              <label>
                <span>First Name</span>
                <input type="text" name="firstName" placeholder="John" required />
              </label>
              <label>
                <span>Last Name</span>
                <input type="text" name="lastName" placeholder="Doe" required />
              </label>
            </div>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="john@example.com" required />
            </label>
            <label>
              <span>Pet&apos;s Name</span>
              <input type="text" name="petName" placeholder="Buddy" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="4" placeholder="Tell us about your pet&apos;s needs..." required></textarea>
            </label>
            {status.message && (
              <p className={`form-message ${status.type === 'success' ? 'form-message--success' : 'form-message--error'}`}>
                {status.message}
              </p>
            )}
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

