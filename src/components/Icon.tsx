import type { Service } from '../data/content'

const paths: Record<Service['icon'], string> = {
  excavate: 'M4 20h16M6 20l2-9 4-2 4 2 2 9M8 11l1-4h6l1 4',
  truck: 'M3 16V7h9v9H3zM12 10h4l3 3v3h-7v-6zM7 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z',
  level: 'M3 18h18M6 18V9l3-3 3 3v9M15 18v-6l3-3 2 2v7',
  demolish: 'M4 20h16M6 20V9l5-5 5 5v11M9 13l2-2 2 2M9 17h6',
  rent: 'M4 17h2l2-6h8l2 6h2M8 17a2 2 0 11-4 0M20 17a2 2 0 11-4 0M8 11V6h5l3 5',
  trench: 'M3 8h18M3 8v3l3 2v5h12v-5l3-2V8M9 13h6',
}

export default function Icon({ name }: { name: Service['icon'] }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
