import { footerLinks } from '../lib/data'
import Link from 'next/link'

export default function Footer() {
  const renderedLinks = footerLinks.map(({ name, href, icon: Icon }) => {
    return (
      <Link
        key={name}
        href={href}
        target="_blank"
      >
        <Icon className="text-3xl hover:text-sjsu-gold transition-colors" />
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
