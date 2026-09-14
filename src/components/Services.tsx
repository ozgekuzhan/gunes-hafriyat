import { services } from '../data/content'
import Icon from './Icon'

export default function Services() {
  return (
    <section id="hizmetler" className="section" aria-labelledby="hizmetler-baslik">
      <div className="container">
        <h2 id="hizmetler-baslik">Hafriyat ve Nakliyat Hizmetlerimiz</h2>
        <p className="section-lead">
          Bilecik ve çevre illerde kazıdan nakliyeye, yıkımdan iş makinesi kiralamaya kadar hafriyatın her
          aşamasında yanınızdayız.
        </p>
        <div className="grid services-grid">
          {services.map((service) => (
            <article className="card service-card" key={service.title}>
              <Icon name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
