import { business } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-label="Giriş">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Bilecik ve Çevre İllerde Hafriyat Firması</p>
          <h1>Bilecik ve Çevre İllerde Hafriyat, Nakliyat ve Kazı Hizmetleri</h1>
          <p className="hero-lead">
            {business.name}; Bilecik merkez ve ilçelerinin yanı sıra Bursa, Eskişehir, Kütahya, Sakarya ve
            Kocaeli'de hafriyat kazı, moloz nakliyesi, dolgu-tesviye, yıkım ve iş makinesi kiralama
            hizmetlerini deneyimli ekibiyle sunar. Projeniz için ücretsiz keşif ve hızlı teklif alın.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${business.phoneHref}`}>
              Hemen Ara: {business.phoneDisplay}
            </a>
            <a
              className="btn btn-secondary"
              href={`https://wa.me/${business.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp'tan Teklif Al
            </a>
          </div>
          <ul className="hero-highlights">
            <li>Ücretsiz keşif ve aynı gün teklif</li>
            <li>Sigortalı araç filosu ile güvenli nakliye</li>
            <li>Bilecik ve 5 çevre ilde hizmet</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
