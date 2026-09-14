import { business } from '../data/content'

export default function Contact() {
  return (
    <section id="iletisim" className="section" aria-labelledby="iletisim-baslik">
      <div className="container contact-grid">
        <div>
          <h2 id="iletisim-baslik">Bize Ulaşın</h2>
          <p className="section-lead">
            Bilecik ve çevre illerdeki hafriyat, nakliyat veya kazı projeniz için hemen teklif alın.
          </p>
          <address>
            <p>
              <strong>Telefon:</strong>{' '}
              <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
            </p>
            <p>
              <strong>E-posta:</strong> <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <p>
              <strong>Adres:</strong> {business.address}
            </p>
            <p>
              <strong>Çalışma Saatleri:</strong> {business.hours}
            </p>
          </address>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${business.phoneHref}`}>
              Hemen Ara
            </a>
            <a
              className="btn btn-secondary"
              href={`https://wa.me/${business.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="map-embed">
          <iframe
            title="Güneş Hafriyat - Bilecik hizmet bölgesi haritası"
            src="https://www.google.com/maps?q=Bilecik,Turkiye&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
