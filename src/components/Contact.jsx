import { contactCards } from '../data/content'

export function Contact() {
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
                <a className="btn-emergency" href="tel:+15551234568">
                  Call Emergency Line
                </a>
              </div>
            </article>
          </div>
          <form className="contact-form" noValidate>
            <h3>Send us a Message</h3>
            <div className="form-row">
              <label>
                <span>First Name</span>
                <input type="text" name="firstName" placeholder="John" />
              </label>
              <label>
                <span>Last Name</span>
                <input type="text" name="lastName" placeholder="Doe" />
              </label>
            </div>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="john@example.com" />
            </label>
            <label>
              <span>Pet&apos;s Name</span>
              <input type="text" name="petName" placeholder="Buddy" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="4" placeholder="Tell us about your pet&apos;s needs..."></textarea>
            </label>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

