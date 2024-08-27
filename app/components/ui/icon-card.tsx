import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { IconType } from 'react-icons'

type IconCardProps = {
  name: string
  image?: StaticImageData | null
  icon?: IconType | null
  href?: string
}

export default function IconCard({
  name,
  icon: Icon,
  image,
  href,
}: IconCardProps) {
  return href ? (
    <Link
      href={href}
      target="_blank"
      className="flex flex-col items-center gap-3 p-2 rounded-lg bg-slate-600/50 hover:bg-slate-500/50 transition-all"
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          className="h-10 w-auto"
        />
      ) : (
        Icon && <Icon className="h-10 w-auto text-[#E5A823]" />
      )}

      <p className="text-white/50 rounded-lg font-medium text-center text-sm">
        {name}
      </p>
    </Link>
  ) : (
    <div className="flex flex-col items-center gap-3 p-2 rounded-lg bg-slate-600/50 transition-all">
      {image ? (
        <Image
          src={image}
          alt={name}
          className="h-10 w-auto"
        />
      ) : (
        Icon && <Icon className="h-10 w-auto text-[#E5A823]" />
      )}

      <p className="text-white/50 rounded-lg font-medium text-center text-sm">
        {name}
      </p>
    </div>
  )
}
