import { business } from '../data/content'

const navLinks = [
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#hizmet-bolgesi', label: 'Hizmet Bölgesi' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#sss', label: 'SSS' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={`${business.name} anasayfa`}>
          <img src="/favicon.svg" alt="" width="36" height="36" />
          <span>{business.name}</span>
        </a>
        <nav aria-label="Ana menü" className="main-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-primary header-cta" href={`tel:${business.phoneHref}`}>
          {business.phoneDisplay}
        </a>
      </div>
    </header>
  )
}
