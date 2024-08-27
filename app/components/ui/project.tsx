import { ProjectType } from '@/app/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  const { name, image, description, tech, link, code } = project
  return (
    <div className="rounded-lg bg-slate-600/50 flex flex-col min-h-full flex-grow shadow-xl shadow-slate-800">
      <Image
        src={image}
        alt={name}
        className="object-cover h-72 object-center rounded-t-lg"
      />
      <div className="p-4 flex-col flex flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
          <ul className="flex items-center gap-1">
            {tech.map((t, i) => {
              return (
                <li key={i}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    className="h-6 w-auto"
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <p className="text-gray-400 font-medium mb-2">{description}</p>
        <div
          className={`grid ${
            link ? 'grid-cols-2' : 'grid-cols-1'
          } gap-2 mt-auto`}
        >
          {link && (
            <Link
              href={link}
              target="_blank"
              className="border-sjsu-gold border text-sjsu-gold hover:bg-sjsu-gold hover:text-white transition-all flex justify-center rounded-md p-2 items-center gap-2"
            >
              Website <FaExternalLinkAlt />
            </Link>
          )}

          <Link
            href={code}
            target="_blank"
            className="border-sjsu-gold border text-sjsu-gold hover:bg-sjsu-gold hover:text-white transition-all justify-center rounded-md p-2 flex items-center gap-2"
          >
            Code <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  )
}
