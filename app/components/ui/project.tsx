import { ProjectType } from '@/app/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import Button from './button'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  const { name, image, description, tech, link, code } = project
  return (
    <div className="rounded-lg bg-slate-700 flex flex-col min-h-full flex-grow">
      <Image
        src={image}
        alt={name}
        className="object-cover object-top lg:h-72 h-56 rounded-t-lg"
      />
      <div className="p-4 flex-col flex flex-grow">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-2 mb-6">
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
            <Button
              href={link}
              className="w-full !py-2"
            >
              Website <FaExternalLinkAlt />
            </Button>
          )}

          <Button
            href={code}
            className="w-full !py-2"
          >
            Code <FaGithub />
          </Button>
        </div>
      </div>
    </div>
  )
}
