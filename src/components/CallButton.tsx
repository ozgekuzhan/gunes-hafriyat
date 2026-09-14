import { business } from '../data/content'

export default function CallButton() {
  return (
    <a
      href={`tel:${business.phoneHref}`}
      className="mobile-call-button"
      aria-label={`${business.name} - hemen ara`}
    >
      Hemen Ara
    </a>
  )
}
