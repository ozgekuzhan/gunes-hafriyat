import { bilecikDistricts, neighboringCities } from '../data/content'

export default function ServiceArea() {
  return (
    <section id="hizmet-bolgesi" className="section section-alt" aria-labelledby="hizmet-bolgesi-baslik">
      <div className="container">
        <h2 id="hizmet-bolgesi-baslik">Hizmet Bölgemiz: Bilecik ve Çevre İller</h2>
        <p className="section-lead">
          Merkez üssümüz Bilecik olmak üzere, çevre illerde de hafriyat ve nakliyat ihtiyaçlarınıza hızlı
          çözüm sunuyoruz.
        </p>

        <div className="service-area-block">
          <h3>Bilecik İlçeleri</h3>
          <ul className="chip-list">
            {bilecikDistricts.map((district) => (
              <li key={district} className="chip">
                {district}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid city-grid">
          {neighboringCities.map((city) => (
            <article className="card city-card" key={city.slug}>
              <h3>{city.name} Hafriyat</h3>
              <p>{city.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
