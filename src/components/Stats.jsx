import { stats } from '../data/content'

export function Stats() {
  return (
    <section className="stats" aria-label="Clinic Highlights">
      <div className="container stats-grid">
        {stats.map(({ icon, title, description }) => (
          <article key={title} className="card card--stat" data-slot="card">
            <span className="card__icon" aria-hidden="true">
              {icon}
            </span>
            <div className="card__header" data-slot="card-header">
              <h3 className="card__title" data-slot="card-title">
                {title}
              </h3>
              <p className="card__description" data-slot="card-description">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

