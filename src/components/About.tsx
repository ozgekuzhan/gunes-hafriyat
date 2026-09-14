const reasons = [
  {
    title: 'Deneyimli Ekip ve Operatörler',
    text: 'Yıllara dayanan saha tecrübemizle kazıdan nakliyeye her aşamayı planlı ve güvenli şekilde yürütüyoruz.',
  },
  {
    title: 'Geniş Araç ve Makine Filosu',
    text: 'Ekskavatör, loder ve farklı tonajlarda kamyonlarla küçük-büyük ölçekli tüm projelere uygun ekipman sağlıyoruz.',
  },
  {
    title: 'Hızlı Keşif ve Şeffaf Fiyat',
    text: 'Talebinizin ardından yerinde keşif yapıp net, ek maliyet çıkarmayan fiyat teklifi sunuyoruz.',
  },
  {
    title: 'Sigortalı ve Mevzuata Uygun Çalışma',
    text: 'Taşımalarımızı sigortalı araçlarla, hafriyat döküm ve yıkım işlerini ilgili mevzuata uygun şekilde gerçekleştiriyoruz.',
  },
]

export default function About() {
  return (
    <section id="hakkimizda" className="section" aria-labelledby="hakkimizda-baslik">
      <div className="container">
        <h2 id="hakkimizda-baslik">Neden Güneş Hafriyat?</h2>
        <p className="section-lead">
          Bilecik'te kurulu firmamız, bölgedeki inşaat ve altyapı projelerine hafriyat, nakliyat ve kazı
          alanında uçtan uca hizmet sunar.
        </p>
        <div className="grid reasons-grid">
          {reasons.map((reason) => (
            <div className="reason" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
