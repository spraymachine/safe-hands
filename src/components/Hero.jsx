import { heroHighlights } from '../data/content'
import { ModelViewer } from './ModelViewer'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Your Pet&apos;s Health is Our Priority</h1>
          <p>
            Providing compassionate, professional veterinary care for your beloved companions. From routine check-ups to
            emergency care, we&apos;re here for you and your pets.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contact">
              Schedule Appointment
            </a>
            <a className="btn-secondary" href="#emergency">
              Emergency Care
            </a>
          </div>
          <ul className="hero-highlights">
            {heroHighlights.map(({ icon, label }) => (
              <li key={label}>
                <span className="icon">{icon}</span>
                {label}
              </li>
            ))}
          </ul>
        </div>
        <ModelViewer />
      </div>
    </section>
  )
}

