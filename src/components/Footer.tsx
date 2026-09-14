import { business, neighboringCities } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="brand-footer">{business.name}</p>
          <p>Bilecik ve çevre illerde hafriyat, nakliyat ve kazı hizmetleri.</p>
          <p>{business.address}</p>
          <p>
            <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a> ·{' '}
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </div>
        <nav aria-label="Hizmet bölgesi bağlantıları">
          <p className="footer-heading">Hizmet Bölgesi</p>
          <ul className="footer-list">
            <li>Bilecik (merkez ve tüm ilçeler)</li>
            {neighboringCities.map((city) => (
              <li key={city.slug}>{city.name}</li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="footer-copy">
        © {year} {business.name}. Tüm hakları saklıdır.
      </p>
    </footer>
  )
}
