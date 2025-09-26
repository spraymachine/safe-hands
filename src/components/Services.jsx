import { services } from '../data/content'

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">
          Comprehensive veterinary care tailored to meet all your pet&apos;s health needs
        </p>
        <div className="services-grid">
          {services.map(({ title, description, items }) => (
            <article key={title} className="card card--service" data-slot="card">
              <div className="card__header" data-slot="card-header">
                <h3 className="card__title" data-slot="card-title">
                  {title}
                </h3>
                <p className="card__description" data-slot="card-description">
                  {description}
                </p>
              </div>
              <div className="card__content" data-slot="card-content">
                <ul className="card__list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

