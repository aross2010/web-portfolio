import { socials } from '../lib/data'
import Link from 'next/link'

export default function Footer() {
  const renderedLinks = socials.map(({ name, href, icon: Icon, color }) => {
    return (
      <Link
        key={name}
        href={href}
        target="_blank"
        className="social-link transition-all"
        style={{ '--hover-color': color } as React.CSSProperties}
      >
        <Icon className="text-3xl" />
      </Link>
    )
  })

  return (
    <footer className="py-12 text-gray-400/50 flex flex-col items-center">
      <div className="flex gap-4 justify-center items-center mb-4">
        {renderedLinks}
      </div>
      {new Date().getFullYear()} © Alex Ross
    </footer>
  )
}
